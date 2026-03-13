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

  useEffect(() => {
    const revealSelector = '.fade-in, .fade-in-item'
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      document.querySelectorAll(revealSelector).forEach((element) => {
        element.classList.add('is-visible')
      })
      return
    }

    const observedElements = new WeakSet()
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    const observeNode = (node) => {
      if (!(node instanceof HTMLElement) || observedElements.has(node)) {
        return
      }

      observedElements.add(node)
      revealObserver.observe(node)
    }

    const scanForRevealNodes = (root = document) => {
      if (root instanceof HTMLElement && root.matches(revealSelector)) {
        observeNode(root)
      }

      if (typeof root.querySelectorAll === 'function') {
        root.querySelectorAll(revealSelector).forEach((node) => {
          observeNode(node)
        })
      }
    }

    scanForRevealNodes()

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            scanForRevealNodes(node)
          }
        })
      })
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      revealObserver.disconnect()
      mutationObserver.disconnect()
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
