import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './AboutPage.css'

const educationData = [
  {
    year: '2020',
    title: 'Class 10th ',
    place: 'Ibn-e-Qasim High School',
  },
  {
    year: '2022',
    title: 'Class 12th (FSC)',
    place: 'Kips College Multan',
  },
  {
    year: '2023 - 2027',
    title: 'Bachelor In Computer Science',
    place: 'Air University Islamabad, Multan Campus',
  },
]

const experienceData = [
  {
    year: '2026 - present',
    title: 'Full Stack Developer',
    place: 'Inwork Global',
  },
  {
    year: '2025',
    title: 'Frontend Developer',
    place: 'Inwork Global',
  },
  {
    year: 'Summer 2025',
    title: 'Mern Stack Developer Intern',
    place: 'Air University Islamabad',
  },
]

const skillsData = [
  { icon: '☕', label: 'Java' },
  { icon: '☁', label: 'AWS' },
  { icon: 'C', label: 'C' },
  { icon: '🐍', label: 'Python' },
  { icon: 'B', label: 'Bootstrap' },
  { icon: 'H5', label: 'HTML5' },
  { icon: 'CSS', label: 'CSS3' },
  { icon: 'JS', label: 'JavaScript' },
  { icon: 'TS', label: 'TypeScript' },
  { icon: '⚛', label: 'React' },
  { icon: 'N', label: 'Next.js' },
  { icon: 'A', label: 'Angular' },
  { icon: '🏝', label: 'Island UI' },
  { icon: '≈', label: 'Tailwind' },
  { icon: '⤴', label: 'MySQL' },
  { icon: '🐘', label: 'PostgreSQL' },
  { icon: '◈', label: 'Prisma' },
  { icon: 'GH', label: 'GitHub' },
  { icon: '🛍', label: 'Shopify' },
  { icon: '⑂', label: 'Git' },
  { icon: '🍃', label: 'MongoDB' },
  { icon: '☁', label: 'Cloud' },
  { icon: 'Z', label: 'Zod' },
  { icon: '🐳', label: 'Docker' },
  { icon: '▣', label: 'VS Code' },
  { icon: '⬢', label: 'Node.js' },
  { icon: '🔥', label: 'Firebase' },
  { icon: '▲', label: 'Vercel' },
  { icon: 'EX', label: 'Express' },
  { icon: '◫', label: 'Shadcn' },
]

const profileData = [
  {
    label: 'Name',
    value: 'Ali Raza',
  },
  {
    label: 'Role',
    value: 'Full Stack MERN Developer',
  },
  {
    label: 'Email',
    value: 'aliraza.dev549@gmail.com',
  },
  {
    label: 'Phone',
    value: '+92-3096894742',
  },
  {
    label: 'Experience',
    value: '2 years',
  },
  {
    label: 'Age',
    value: '22',
  },
  {
    label: 'Nationality',
    value: 'Pakistani',
  },
  {
    label: 'Languages',
    value: 'English, Urdu',
  },
  {
    label: 'Freelance',
    value: 'Available',
  },
]

const aboutTabs = [
  { key: 'education', label: 'Education' },
  { key: 'experience', label: 'Experience' },
  { key: 'skills', label: 'Skills' },
  { key: 'profile', label: 'Profile' },
]

const getAboutTabFromPath = (path) => {
  const segments = path.split('/').filter(Boolean)
  const tabFromPath = segments[1]

  if (aboutTabs.some((tab) => tab.key === tabFromPath)) {
    return tabFromPath
  }

  return 'education'
}

function AboutPage({ currentPath, onNavigate, isLightMode, onToggleTheme }) {
  const activeTab = getAboutTabFromPath(currentPath)

  const handleTabClick = (tabKey) => {
    onNavigate(`/about/${tabKey}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Header currentPath={currentPath} onNavigate={onNavigate} isLightMode={isLightMode} onToggleTheme={onToggleTheme} />

      <main className="about-page">
        <section className="about-page__hero">
          <div className="section__wrap">
            <h1 className="about-page__title">Personal Overview</h1>
            <p className="about-page__subtitle">
              Discover my journey, skills, and passion for creating innovative digital solutions
            </p>

            <div className="about-page__tabs" role="tablist" aria-label="About tabs">
              {aboutTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  className={`about-page__tab ${activeTab === tab.key ? 'about-page__tab--active' : ''}`}
                  onClick={() => handleTabClick(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === 'education' && (
              <section className="about-page__section">
                <h2 className="about-page__heading">
                  Education <span className="about-page__headingIcon">🎓</span>
                </h2>
                <p className="about-page__text">
                  I am a Full Stack Developer currently
                  pursuing BS in Computer Science. I blend technical skills with a passion for
                  learning and strategic insights. Below are my education details:
                </p>

                <div className="about-page__cards">
                  {educationData.map((item) => (
                    <article className="about-page__card" key={`${item.year}-${item.title}`}>
                      <span className="about-page__year">{item.year}</span>
                      <h3>{item.title}</h3>
                      <p className="about-page__company">{item.place}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {activeTab === 'experience' && (
              <section className="about-page__section">
                <h2 className="about-page__heading">
                  Experience <span className="about-page__headingIcon">🧑‍💻</span>
                </h2>
                <p className="about-page__text">
                  I am a dedicated Full stack developer with expertise in creating dynamic,
                  user-friendly web applications, turning ideas into seamless digital experiences.
                </p>

                <div className="about-page__cards">
                  {experienceData.map((item) => (
                    <article className="about-page__card" key={`${item.year}-${item.title}`}>
                      <span className="about-page__year">{item.year}</span>
                      <h3>{item.title}</h3>
                      <p className="about-page__company">{item.place}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {activeTab === 'skills' && (
              <section className="about-page__section">
                <h2 className="about-page__heading">
                  Skills <span className="about-page__headingIcon">⚡</span>
                </h2>
                <p className="about-page__text">
                  I have a diverse skill set in web development, specializing in both frontend and backend technologies.
                  Proficient in Java, Python, and JavaScript, as well as frameworks like React and Next.js, I build dynamic,
                  responsive applications. My skills also include databases and UI frameworks, allowing me to create seamless
                  user experiences and strong backend solutions.
                </p>

                <div className="about-page__skillGrid">
                  {skillsData.map((item) => (
                    <article className="about-page__skillCard" key={item.label} aria-label={item.label}>
                      <span className="about-page__skillIcon">{item.icon}</span>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {activeTab === 'profile' && (
              <section className="about-page__section">
                <h2 className="about-page__heading">
                  Profile <span className="about-page__headingIcon">👤</span>
                </h2>
                <p className="about-page__text">
                  Get to know more about me, my background, and what drives my passion for technology and innovation.
                </p>

                <div className="about-page__profileGrid">
                  {profileData.map((item) => (
                    <p className="about-page__profileItem" key={item.label}>
                      <span>{item.label}:</span> {item.value}
                    </p>
                  ))}
                </div>
              </section>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default AboutPage
