import profileImage from '../../assets/About (3).png'
import './About.css'

const details = [
  { icon: '👤', label: 'Name', value: 'Ali Raza' },
  { icon: '📍', label: 'Location', value: 'Multan, Pakistan' },
  { icon: '🎓', label: 'Education', value: 'BS Computer Science' },
  { icon: '✉', label: 'Email', value: 'aliraza.dev549@gmail.com' },
  { icon: '☎', label: 'Phone', value: '+92-3096894742' },
  { icon: '✔', label: 'Status', value: 'Available for Work' },
]

const interests = [
  'MERN Stack Development',
  '.NET & Blazor',
  'React Native',
  'Real-time Applications',
  'Next.js & TypeScript',
  'Enterprise Solutions',
]

function About() {
  const scrollToContact = (event) => {
    event.preventDefault()
    const section = document.getElementById('contact')
    if (!section) {
      return
    }

    const sectionTop = section.getBoundingClientRect().top + window.scrollY - 94
    window.scrollTo({ top: sectionTop, behavior: 'smooth' })
    window.history.replaceState(null, '', '#contact')
  }

  return (
    <section id="about" className="about">
      <div className="section__wrap about__wrap">
        <header className="about__header">
          <h2 className="about__title">About Me</h2>
          <p className="about__subtitle">
            Aspiring MERN Stack Developer, specializing in frontend development with React &amp;
            Next.js, and steadily expanding full-stack skills across Node.js, Express, and MongoDB.
          </p>
        </header>

        <div className="about__topGrid">
          <div className="about__photoWrap">
            <img src={profileImage} alt="Ali Raza portrait" className="about__photo" />
          </div>

          <div className="about__detailsGrid">
            {details.map((item) => (
              <article className="about__detailCard" key={item.label}>
                <span className="about__detailIcon" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <p className="about__detailLabel">{item.label}</p>
                  <p className="about__detailValue">{item.value}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="about__bottomGrid">
          <div className="about__intro">
            <h3>Hello There!</h3>
            <p>
              I&apos;m Ali Raza, a passionate Software Developer focused on building modern, responsive,
              and high-performance web applications. With hands-on experience in frontend development
              and growing expertise in full-stack technologies including React, Next.js, Node.js, and
              the MERN stack, I enjoy transforming ideas into clean, user-friendly digital experiences.
              I have worked on both commercial and personal projects, including a Real Estate Management
              System, where I applied practical problem-solving and scalable development practices.
              Continuously learning and improving through real-world projects and self-development, I aim
              to write efficient, maintainable code and deliver reliable solutions. I&apos;m eager to
              collaborate with experienced teams, contribute to impactful products, and grow as a
              well-rounded developer in freelance, remote, or corporate environments.
            </p>
          </div>

          <div className="about__focus">
            <h3>Interests &amp; Focus</h3>
            <div className="about__chips">
              {interests.map((item) => (
                <span className="about__chip" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="about__actions">
              <a href="/Ali%20Raza-CV.pdf" download="Ali Raza-CV.pdf" className="about__button about__button--primary">
                ⬇ Download My CV
              </a>
              <a href="#contact" onClick={scrollToContact} className="about__button about__button--secondary">
                💬 Hire Me Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
