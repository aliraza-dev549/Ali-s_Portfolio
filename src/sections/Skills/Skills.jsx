import { useMemo, useState } from 'react'
import './Skills.css'

const skillsData = {
  programming: [
    { name: 'JavaScript', percent: 95, type: 'Language' },
    { name: 'TypeScript', percent: 90, type: 'Language' },
    { name: 'C#', percent: 88, type: 'Language' },
    { name: 'Python', percent: 80, type: 'Language' },
    { name: 'Java', percent: 75, type: 'Language' },
    { name: 'C++', percent: 70, type: 'Language' },
  ],
  frontend: [
    { name: 'React', percent: 95, type: 'Framework' },
    { name: 'Next.js', percent: 92, type: 'Framework' },
    { name: 'Blazor WebAssembly', percent: 88, type: 'Framework' },
    { name: 'React Native', percent: 90, type: 'Framework' },
    { name: 'Tailwind CSS', percent: 93, type: 'Framework' },
    { name: 'Redux Toolkit', percent: 87, type: 'State Management' },
  ],
  backend: [
    { name: 'Node.js', percent: 90, type: 'Runtime' },
    { name: '.NET Core', percent: 88, type: 'Framework' },
    { name: 'Express.js', percent: 90, type: 'Framework' },
    { name: 'MongoDB', percent: 85, type: 'Database' },
    { name: 'PostgreSQL', percent: 82, type: 'Database' },
    { name: 'SQL Server', percent: 85, type: 'Database' },
  ],
  tools: [
    { name: 'Git & GitHub', percent: 92, type: 'Version Control' },
    { name: 'Docker', percent: 78, type: 'Containerization' },
    { name: 'Visual Studio', percent: 88, type: 'IDE' },
    { name: 'VS Code', percent: 95, type: 'Editor' },
    { name: 'Postman', percent: 90, type: 'API Tool' },
    { name: 'Firebase', percent: 85, type: 'BaaS' },
  ],
}

const tabItems = [
  {
    id: 'programming',
    label: 'Programming',
    icon: '<>',
    summary: 'Core language fundamentals powering scalable product development.',
    badge: 'Languages',
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '▭',
    summary: 'Modern UI engineering focused on performance and user experience.',
    badge: 'UI Engineering',
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '▤',
    summary: 'Robust server architecture, APIs, and database-driven systems.',
    badge: 'Server Systems',
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: '⎇',
    summary: 'Delivery tooling for collaboration, quality assurance, and deployment.',
    badge: 'Workflow & Delivery',
  },
]

function Skills() {
  const [activeTab, setActiveTab] = useState('programming')

  const activeSkills = useMemo(() => skillsData[activeTab], [activeTab])
  const activeTabMeta = useMemo(
    () => tabItems.find((item) => item.id === activeTab),
    [activeTab],
  )
  const averageScore = useMemo(() => {
    const total = activeSkills.reduce((sum, skill) => sum + skill.percent, 0)
    return Math.round(total / activeSkills.length)
  }, [activeSkills])

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
    <section id="skills" className="skills fade-in">
      <div className="section__wrap">
        <h2 className="skills__title">My Skills</h2>
        <p className="section__desc">
          Technical expertise and proficiency across different domains of software development
        </p>

        <div className="skills__tabs" role="tablist" aria-label="Skill categories">
          {tabItems.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`skills__tab ${activeTab === tab.id ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className={`skills__slider skills__slider--${activeTab}`} key={activeTab}>
          <div className="skills__overview">
            <div>
              <p className="skills__miniLabel">{activeTabMeta.label} Track</p>
              <h3>{activeTabMeta.summary}</h3>
            </div>

            <div className="skills__metrics">
              <article>
                <strong>{activeSkills.length}</strong>
                <span>Key Skills</span>
              </article>
              <article>
                <strong>{averageScore}%</strong>
                <span>Avg. Proficiency</span>
              </article>
            </div>
          </div>

          <p className="skills__categoryBadge">{activeTabMeta.badge}</p>

          <div className="skills__grid">
            {activeSkills.map((skill, index) => (
              <article className="skills__card" key={skill.name}>
                <div className="skills__top">
                  <span className="skills__index">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__percent">{skill.percent}%</span>
                </div>

                <div className="skills__progress" aria-hidden="true">
                  <span style={{ width: `${skill.percent}%` }}></span>
                </div>

                <p className="skills__text">{skill.type}</p>
              </article>
            ))}
          </div>

          <div className="skills__contact">
            <h3>Need these skills for your project?</h3>
            <a href="#contact" onClick={scrollToContact}>
              Let&apos;s Collaborate ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
