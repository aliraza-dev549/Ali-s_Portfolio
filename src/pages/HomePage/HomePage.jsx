import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from '../../sections/Hero/Hero'
import About from '../../sections/About/About'
import Experience from '../../sections/Experience/Experience'
import Skills from '../../sections/Skills/Skills'
import Projects from '../../sections/Projects/Projects'
import Contact from '../../sections/Contact/Contact'

function HomePage({ isLightMode, onToggleTheme }) {
  return (
    <>
      <Header isLightMode={isLightMode} onToggleTheme={onToggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage
