import { useEffect, useState } from 'react'
import './Header.css'

const HEADER_OFFSET = 94

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Header({ isLightMode, onToggleTheme }) {
  const [activeLink, setActiveLink] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId, smooth = true) => {
    const section = document.getElementById(sectionId)
    if (!section) {
      return false
    }

    const sectionTop = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top: sectionTop, behavior: smooth ? 'smooth' : 'auto' })
    window.history.replaceState(null, '', `#${sectionId}`)
    return true
  }

  useEffect(() => {
    const updateActiveLink = () => {
      const sectionOffsets = navLinks
        .map((link) => {
          const section = document.getElementById(link.id)
          if (!section) {
            return null
          }

          return {
            id: link.id,
            top: section.offsetTop - HEADER_OFFSET - 16,
          }
        })
        .filter(Boolean)

      if (sectionOffsets.length === 0) {
        return
      }

      const scrollPosition = window.scrollY
      const currentSection = sectionOffsets
        .slice()
        .reverse()
        .find((item) => scrollPosition >= item.top)

      setActiveLink(currentSection ? currentSection.id : 'home')
    }

    updateActiveLink()
    window.addEventListener('scroll', updateActiveLink, { passive: true })
    window.addEventListener('resize', updateActiveLink)

    const hash = window.location.hash.replace('#', '')
    if (hash && navLinks.some((link) => link.id === hash)) {
      window.setTimeout(() => {
        scrollToSection(hash, false)
        setActiveLink(hash)
      }, 0)
    }

    return () => {
      window.removeEventListener('scroll', updateActiveLink)
      window.removeEventListener('resize', updateActiveLink)
    }
  }, [])

  const handleNavClick = (event, sectionId) => {
    event.preventDefault()

    const section = document.getElementById(sectionId)
    if (section) {
      scrollToSection(sectionId, true)
      setActiveLink(sectionId)
      setMenuOpen(false)
      return
    }

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.history.replaceState(null, '', '#home')
      setActiveLink('home')
      return
    }
  }

  return (
    <header className="header">
      <div className="header__container">
        <a className="header__logo" href="#home" onClick={(event) => handleNavClick(event, 'home')} aria-label="Go to home">
          <span className="header__logoIcon">&lt;/&gt;</span>
          <span className="header__logoText">Portfolio</span>
        </a>

        <button
          className={`header__toggle ${menuOpen ? 'header__toggle--open' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <div className="header__navShell">
            <ul className="header__links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    className={`header__link ${activeLink === link.id ? 'header__link--active' : ''}`}
                    href={`#${link.id}`}
                    onClick={(event) => handleNavClick(event, link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={`header__theme ${isLightMode ? 'header__theme--light' : ''}`}
              aria-label="Toggle dark and light mode"
              onClick={onToggleTheme}
            >
              <span className="header__themeIcon header__themeIcon--sun">☀</span>
              <span className="header__themeIcon header__themeIcon--moon">☾</span>
              <span className="header__themeThumb"></span>
            </button>
          </div>

          <a
            href="#contact"
            className="header__hire"
            onClick={(event) => {
              event.preventDefault()
              scrollToSection('contact', true)
              setMenuOpen(false)
            }}
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
