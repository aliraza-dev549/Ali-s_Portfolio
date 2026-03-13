import { useMemo, useState } from 'react'
import './Experience.css'

const tabs = [
  {
    id: 'work',
    label: 'Experience',
    summary: 'Hands-on delivery across frontend, backend, architecture, and deployment.',
    heading: 'Experience',
    icon: '⚒',
    intro:
      'I am a dedicated software developer with expertise in creating dynamic, user-friendly web applications, turning ideas into seamless digital experiences.',
  },
  {
    id: 'education',
    label: 'Education',
    summary: 'Strong academic foundation in software engineering and computer science principles.',
    heading: 'Education',
    icon: '🎓',
    intro:
      'I am a Software Developer with a strong Computer Science background. I blend technical skills with a passion for continuous learning and practical problem solving.',
  },
  {
    id: 'certifications',
    label: 'Certifications',
    summary: 'Industry certifications focused on full stack development and cloud workflows.',
    heading: 'Certifications',
    icon: '🏅',
    intro:
      'My certifications validate hands-on expertise in frontend, backend, and cloud delivery practices aligned with production-grade standards.',
  },
]

const experienceData = {
  work: [
    {
      period: '2026 - present',
      title: 'Full Stack Developer',
      organization: 'Inwork Global',
    },
    {
      period: 'Summer 2025',
      title: 'Mern Stack Developer Intern ',
      organization: 'Air University Islamabad - Multan Campus',
    },
    {
      period: ' 2025',
      title: 'Frontend Developer',
      organization: 'Inwork Global',
    },
  ],
  education: [
    {
      period: '2018 - 2020',
      title: 'Class 10th',
      organization: 'Ibn-e-Qasim high School , Multan',
    },
    {
      period: '2020 - 2022',
      title: 'Class 12th (FSC)',
      organization: 'KIPS College Boys Campus , Multan',
    },
    {
      period: '2023 - 2027',
      title: 'Bachelor of Science in Computer Science',
      organization: 'Air University Islamabad , Multan Campus',
    },
  ],
  certifications: [
    {
      period: '2025',
      title: 'Meta Front-End Developer Professional Certificate',
      organization: 'Meta / Coursera',
      points: [
        'Validated expertise in React, reusable components, responsive layouts, and UI accessibility.',
        'Completed graded projects covering modern frontend workflows and production-level coding standards.',
      ],
      tags: ['React', 'Accessibility', 'Frontend'],
    },
    {
      period: 'Summer - 2025',
      title: 'Mern Stack developer Intern Certification',
      organization: 'Air University Islamabad - Multan Campus',
      points: [
        'Experienced in building full-stack MERN applications using MongoDB, Express.js, React, and Node.js with scalable architecture practices.',
'Developed dynamic web applications with secure authentication, RESTful APIs, and efficient state management across frontend and backend systems.',
      ],
      tags: ['Node.js', 'Express', 'MongoDB'],
    },
    {
      period: '2024',
      title: 'AWS Cloud Practitioner',
      organization: 'Amazon Web Services',
      points: [
        'Demonstrated knowledge of cloud architecture, deployment principles, and operational best practices.',
        'Applied cloud hosting patterns for frontend delivery, backend APIs, and database services.',
      ],
      tags: ['AWS', 'Cloud', 'Deployment'],
    },
  ],
}

function Experience() {
  const [activeTab, setActiveTab] = useState('work')

  const activeItems = useMemo(() => experienceData[activeTab], [activeTab])
  const activeTabMeta = useMemo(() => tabs.find((tab) => tab.id === activeTab), [activeTab])
  const isCompactCategory = activeTab === 'education' || activeTab === 'certifications'

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
    <section id="experience" className="experience">
      <div className="section__wrap">
        <h2 className="experience__title">
          {activeTabMeta.heading} <span className="experience__titleIcon" aria-hidden="true">{activeTabMeta.icon}</span>
        </h2>
        <p className="experience__subtitle">
          {activeTabMeta.intro}
        </p>

        <div className="experience__tabs" role="tablist" aria-label="Experience categories">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`experience__tab ${activeTab === tab.id ? 'experience__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="experience__panel" key={activeTab}>
          <div className="experience__overview">
            <p className="experience__label">{activeTabMeta.label}</p>
            <h3>{activeTabMeta.summary}</h3>
            <span>{activeItems.length} Entries</span>
          </div>

          <div className="experience__grid">
            {activeItems.map((item) => (
              <article className="experience__card" key={`${item.organization}-${item.period}-${item.title}`}>
                <div className="experience__meta">
                  <span className="experience__periodPill">{item.period}</span>
                </div>

                <h3>{item.title}</h3>
                <p className="experience__org">● {item.organization}</p>

                {item.points && !isCompactCategory ? (
                  <>
                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <div className="experience__tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </>
                ) : null}
              </article>
            ))}
          </div>

          <div className="experience__cta">
            <h3>Interested in my full background?</h3>
            <div className="experience__actions">
              <a href="/Ali%20Raza-CV.pdf" download="Ali Raza-CV.pdf">
                Download CV
              </a>
              <a href="#contact" onClick={scrollToContact}>Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
