import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './ServicesPage.css'

const serviceCards = [
  {
    number: '01',
    title: 'Web Application Architecture',
    description:
      'Building scalable and maintainable web application architectures with focus on performance, security, and modularity using best practices.',
    icon: '🌐',
    iconClass: 'services-page__icon--blue',
  },
  {
    number: '02',
    title: 'Frontend Development',
    description:
      'Creating responsive, high-performance web applications using modern frameworks like React and Vue.js for seamless user experiences.',
    icon: '</>',
    iconClass: 'services-page__icon--purple',
  },
  {
    number: '03',
    title: 'Backend Development',
    description:
      'Building robust backends with Node.js, API design, database management, and secure server operations for scalable applications.',
    icon: '▣',
    iconClass: 'services-page__icon--green',
  },
  {
    number: '04',
    title: 'UI/UX Design',
    description:
      'Designing intuitive, user-centered interfaces that focus on aesthetics, functionality, and creating exceptional user experiences.',
    icon: '◉',
    iconClass: 'services-page__icon--orange',
  },
  {
    number: '05',
    title: 'Custom Component Development',
    description:
      "Developing reusable, scalable UI components aligned with your brand's design system for consistent user experiences.",
    icon: '◈',
    iconClass: 'services-page__icon--violet',
  },
  {
    number: '06',
    title: 'Server & Deployment Management',
    description:
      'I manage infrastructure, deployments, domain configuration, and SSL setup. I have hands-on experience with AWS and automated CI/CD pipelines.',
    icon: '◌',
    iconClass: 'services-page__icon--teal',
  },
]

function ServicesPage({ currentPath, onNavigate, isLightMode, onToggleTheme }) {
  return (
    <>
      <Header currentPath={currentPath} onNavigate={onNavigate} isLightMode={isLightMode} onToggleTheme={onToggleTheme} />

      <main className="services-page fade-in" id="services-page">
        <section className="services-page__hero">
          <div className="section__wrap">
            <h1 className="services-page__title">Solutions I Provide</h1>
            <p className="services-page__subtitle">
              Comprehensive solutions tailored to meet your unique business needs
            </p>

            <div className="services-page__grid">
              {serviceCards.map((service, index) => (
                <article
                  className="services-page__card fade-in-item hover-zoom"
                  key={service.number}
                  style={{ '--reveal-delay': `${index * 85}ms` }}
                >
                  <div className="services-page__cardTop">
                    <span className="services-page__number">{service.number}</span>
                    <span className={`services-page__icon ${service.iconClass}`}>{service.icon}</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <a href="/#contact" onClick={(event) => {
                    event.preventDefault()
                    onNavigate('/#contact')
                    setTimeout(() => {
                      const section = document.getElementById('contact')
                      if (section) {
                        const sectionTop = section.getBoundingClientRect().top + window.scrollY - 94
                        window.scrollTo({ top: sectionTop, behavior: 'smooth' })
                      }
                    }, 30)
                  }}>
                    Get in Touch <span>↗</span>
                  </a>
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

export default ServicesPage
