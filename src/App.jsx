import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage/HomePage'

function App() {
  const [isLightMode, setIsLightMode] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const mode = isLightMode ? 'light' : 'dark'
    document.body.setAttribute('data-theme', mode)
  }, [isLightMode])

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 180)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <HomePage
        isLightMode={isLightMode}
        onToggleTheme={() => setIsLightMode((value) => !value)}
      />

      <button
        type="button"
        className={`scrollTop ${showScrollTop ? 'scrollTop--show' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 18.8a1 1 0 0 1-1-1V8.41L8.22 11.2a1 1 0 0 1-1.42-1.42l4.5-4.5a1 1 0 0 1 1.4 0l4.5 4.5a1 1 0 0 1-1.41 1.42L13 8.41v9.39a1 1 0 0 1-1 1Z" />
        </svg>
      </button>
    </>
  )
}

export default App
