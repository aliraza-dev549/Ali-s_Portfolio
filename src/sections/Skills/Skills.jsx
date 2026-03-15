import { useMemo, useState } from 'react'
import './Skills.css'

const skillsData = {
  programming: [
    { name: 'JavaScript', percent: 95, type: 'Language', icon: 'JS' },
    { name: 'TypeScript', percent: 90, type: 'Language', icon: 'TS' },
    { name: 'C#', percent: 88, type: 'Language', icon: 'C#' },
    { name: 'Python', percent: 80, type: 'Language', icon: '🐍' },
    { name: 'Java', percent: 75, type: 'Language', icon: '☕' },
    { name: 'C++', percent: 70, type: 'Language', icon: 'C+' },
  ],
  frontend: [
    { name: 'React', percent: 95, type: 'Framework', icon: '⚛' },
    { name: 'Next.js', percent: 92, type: 'Framework', icon: 'N' },
    { name: 'Blazor WebAssembly', percent: 88, type: 'Framework', icon: 'Bz' },
    { name: 'React Native', percent: 90, type: 'Framework', icon: 'RN' },
    { name: 'Tailwind CSS', percent: 93, type: 'Framework', icon: 'TW' },
    { name: 'Redux Toolkit', percent: 87, type: 'State Management', icon: 'Rx' },
  ],
  backend: [
    { name: 'Node.js', percent: 90, type: 'Runtime', icon: '⬢' },
    { name: '.NET Core', percent: 88, type: 'Framework', icon: '.N' },
    { name: 'Express.js', percent: 90, type: 'Framework', icon: 'EX' },
    { name: 'MongoDB', percent: 85, type: 'Database', icon: '🍃' },
    { name: 'PostgreSQL', percent: 82, type: 'Database', icon: '🐘' },
    { name: 'SQL Server', percent: 85, type: 'Database', icon: 'SQL' },
  ],
  tools: [
    { name: 'Git & GitHub', percent: 92, type: 'Version Control', icon: '⎇' },
    { name: 'Docker', percent: 78, type: 'Containerization', icon: '🐳' },
    { name: 'Visual Studio', percent: 88, type: 'IDE', icon: '🧩' },
    { name: 'VS Code', percent: 95, type: 'Editor', icon: '▣' },
    { name: 'Postman', percent: 90, type: 'API Tool', icon: '✈' },
    { name: 'Firebase', percent: 85, type: 'BaaS', icon: '🔥' },
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
    <section id="skills" className="skills">
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
            </div>
          </div>

          <p className="skills__categoryBadge">{activeTabMeta.badge}</p>

          <div className="skills__grid">
            {activeSkills.map((skill) => (
              <article className="skills__card skills__card--tools" key={skill.name}>
                <div className="skills__top">
                  <span className="skills__toolIcon" aria-hidden="true">{skill.icon}</span>
                  <h3 className="skills__name">{skill.name}</h3>
                </div>

                <p className="skills__text skills__text--tools">{skill.type}</p>
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
