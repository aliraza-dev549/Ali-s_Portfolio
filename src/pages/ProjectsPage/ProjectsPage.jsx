import { useMemo, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import projectOne from '../../assets/project1.PNG'
import projectTwo from '../../assets/project-2.svg'
import projectThree from '../../assets/project-3.svg'
import homeImage from '../../assets/home.png'
import './ProjectsPage.css'

const projectItems = [
  {
    title: 'PlotZo | Real-Estate Booking Web',
    description:
      'PlotZo is a production-ready property booking web app with secure authentication, searchable listings, interactive maps, and detailed property info.',
    image: projectOne,
    tags: ['React', 'Node.js', 'MongoDB'],
    extra: '+8',
    category: 'Web Application',
    link: '#',
  },
  {
    title: 'RMC | Realty Management Software',
    description:
      'A comprehensive property management platform for multi-property businesses with automated billing.',
    image: projectTwo,
    tags: ['React', 'TypeScript', 'Redux Toolkit'],
    extra: '+9',
    category: 'Software Application',
    link: '#',
  },
  {
    title: 'HappyCraft Event LLP - Premium Event Management',
    description:
      'HappyCraft Event LLP is a full-service event management company delivering weddings and corporate events.',
    image: projectThree,
    tags: ['Next.js', 'TypeScript', 'WebForms'],
    extra: '+5',
    category: 'Website',
    link: '#',
  },
  {
    title: 'KET Design & Interior',
    description:
      'A modern interior design showcase platform with clean gallery navigation and inquiry integration.',
    image: homeImage,
    tags: ['React', 'CSS'],
    extra: '+4',
    category: 'Business Website',
    link: '#',
  },
  {
    title: 'StaffWorks Employee Management Portal',
    description:
      'An HR and employee management dashboard with attendance, payroll workflows, and reporting modules.',
    image: projectTwo,
    tags: ['React', 'Node.js', 'MongoDB'],
    extra: '+7',
    category: 'Dashboard',
    link: '#',
  },
  {
    title: 'Personal Developer Portfolio',
    description:
      'A modern portfolio website to present services, projects, process, FAQs, and contact CTA flow.',
    image: projectThree,
    tags: ['React', 'Vite', 'JavaScript'],
    extra: '+3',
    category: 'Portfolio',
    link: '#',
  },
]

function ProjectsPage({ currentPath, onNavigate, isLightMode, onToggleTheme }) {
  const [query, setQuery] = useState('')

  const filteredProjects = useMemo(() => {
    const value = query.trim().toLowerCase()
    if (!value) {
      return projectItems
    }

    return projectItems.filter((project) => {
      const combined = `${project.title} ${project.description} ${project.tags.join(' ')} ${project.category}`.toLowerCase()
      return combined.includes(value)
    })
  }, [query])

  return (
    <>
      <Header currentPath={currentPath} onNavigate={onNavigate} isLightMode={isLightMode} onToggleTheme={onToggleTheme} />

      <main className="projects-page fade-in">
        <section className="projects-page__hero">
          <div className="section__wrap">
            <h1 className="projects-page__title">My Projects</h1>
            <p className="projects-page__subtitle">
              Explore my portfolio of web applications, showcasing modern technologies and innovative
              solutions
            </p>

            <div className="projects-page__toolbar">
              <div className="projects-page__total">✶ Total Projects: {projectItems.length}</div>

              <div className="projects-page__searchWrap">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  aria-label="Search projects"
                />
                <p>Try searching by tech stack or feature.</p>
              </div>
            </div>

            <div className="projects-page__grid">
              {filteredProjects.map((project) => (
                <article className="projects-page__card" key={project.title}>
                  <img src={project.image} alt={project.title} className="projects-page__image" />

                  <div className="projects-page__content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="projects-page__tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                      <span>{project.extra}</span>
                    </div>

                    <div className="projects-page__footerRow">
                      <small>{project.category}</small>
                      <a href={project.link}>Learn More</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ProjectsPage
