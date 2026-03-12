import { useEffect, useState } from 'react'
import profileImage from '../../assets/home.png'
import './Hero.css'

const rotatingRoles = [
  'Full Stack Developer',
  'React Native Developer',
  'MERN Stack Engineer',
  'Next.js Frontend Specialist',
  'Node.js Backend Developer',
]

function Hero() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0)
  const [typedRole, setTypedRole] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const scrollToAbout = (event) => {
    event.preventDefault()
    const section = document.getElementById('about')
    if (!section) {
      return
    }

    const sectionTop = section.getBoundingClientRect().top + window.scrollY - 94
    window.scrollTo({ top: sectionTop, behavior: 'smooth' })
    window.history.replaceState(null, '', '#about')
  }

  useEffect(() => {
    const currentRole = rotatingRoles[activeRoleIndex]
    const isFullyTyped = typedRole === currentRole
    const isFullyDeleted = typedRole.length === 0

    let delay = isDeleting ? 55 : 95

    if (isFullyTyped && !isDeleting) {
      delay = 1150
    }

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting) {
        if (!isFullyTyped) {
          setTypedRole(currentRole.slice(0, typedRole.length + 1))
        } else {
          setIsDeleting(true)
        }
        return
      }

      if (!isFullyDeleted) {
        setTypedRole(currentRole.slice(0, typedRole.length - 1))
        return
      }

      setIsDeleting(false)
      setActiveRoleIndex((prevIndex) => (prevIndex + 1) % rotatingRoles.length)
    }, delay)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [activeRoleIndex, typedRole, isDeleting])

  return (
    <section id="home" className="hero fade-in">
      <div className="section__wrap hero__grid">
        <div className="hero__content">
          <p className="hero__status">● Available for Freelance & Full-time</p>
          <h1 className="hero__title">
            Hi , <span>I&apos;m Ali</span>
            <br />
            Raza
          </h1>

          <p className="hero__role" aria-live="polite">
            {typedRole}
          </p>

          <p className="hero__description">
            Full Stack MERN Developer crafting fast, responsive web platforms with React &amp; Next.js,
            and engineering robust backend systems using Node.js, Express, and MongoDB.
          </p>

          <div className="hero__actions">
            <a className="hero__button hero__button--primary" href="#projects">
              Projects
            </a>
            <a
              className="hero__button hero__button--secondary"
              href="/Ali%20Raza-CV.pdf"
              download="Ali Raza-CV.pdf"
            >
              Download CV
            </a>
          </div>

          <div className="hero__socials" aria-label="Social links">
            <span className="hero__connect">CONNECT</span>
            <a href="https://github.com/aliraza-dev549" target="_blank" rel="noreferrer" aria-label="GitHub">
              G
            </a>
            <a
              href="https://www.linkedin.com/in/ali-raza-3ba186358"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a href="mailto:aliraza.dev549@gmail.com" aria-label="Email">
              M
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photoRing">
            <span className="hero__orbit" aria-hidden="true"></span>
            <img src={profileImage} alt="Ali Raza portrait" className="hero__photo" />
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down to next section" onClick={scrollToAbout}>
        <span className="hero__scrollText">SCROLL</span>
        <span className="hero__scrollMouse">
          <span className="hero__scrollDot"></span>
        </span>
      </a>

      <div className="hero__ticker">
        <div className="hero__tickerTrack">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Express</span>
          <span>REST APIs</span>
          <span>Git</span>
          <span>Docker</span>
          <span>AWS</span>
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Express</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
