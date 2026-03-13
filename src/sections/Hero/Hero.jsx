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
    <section id="home" className="hero">
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
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  d="M12 2C6.477 2 2 6.595 2 12.262c0 4.534 2.865 8.38 6.839 9.737.5.095.683-.22.683-.49 0-.24-.009-.874-.014-1.716-2.782.617-3.369-1.371-3.369-1.371-.455-1.178-1.11-1.492-1.11-1.492-.907-.632.069-.62.069-.62 1.003.072 1.53 1.055 1.53 1.055.892 1.558 2.341 1.108 2.91.847.09-.663.35-1.108.637-1.363-2.222-.26-4.558-1.136-4.558-5.058 0-1.118.39-2.032 1.03-2.748-.104-.261-.447-1.314.098-2.738 0 0 .84-.276 2.75 1.05A9.36 9.36 0 0 1 12 6.87a9.36 9.36 0 0 1 2.504.348c1.91-1.326 2.748-1.05 2.748-1.05.547 1.424.204 2.477.1 2.738.64.716 1.03 1.63 1.03 2.748 0 3.932-2.34 4.795-4.57 5.05.36.318.68.942.68 1.898 0 1.37-.012 2.475-.012 2.813 0 .273.18.59.688.49A10.28 10.28 0 0 0 22 12.262C22 6.595 17.523 2 12 2Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ali-raza-3ba186358"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56C7.14 3.8 6.28 3 5.25 3c-1.03 0-1.88.8-1.88 1.94 0 1.1.83 1.94 1.84 1.94h.02c1.05 0 1.92-.83 1.92-1.94ZM20.44 13.42c0-3.38-1.8-4.95-4.2-4.95-1.94 0-2.8 1.09-3.29 1.85V8.5H9.57c.04 1.2 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.04 1.88 2.58V20h3.38v-6.58Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="mailto:aliraza.dev549@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  d="M4 6.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Zm8 5.78L5.3 8.5h13.4L12 12.28Z"
                  fill="currentColor"
                />
              </svg>
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
