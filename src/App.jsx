import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import ArcMenu from './components/common/ArcMenu'
import ScrollToTop from './components/common/ScrollToTop'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import TechnologyPage from './pages/TechnologyPage'
import ProcessPage from './pages/ProcessPage'
import ContactPage from './pages/ContactPage'

const routeOrder = [
  '/',
  '/about',
  '/services',
  '/projects',
  '/technology',
  '/process',
  '/contact'
]

const pageVariants = {
  initial: { opacity: 0, y: 40, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit:    { opacity: 0, y: -30, scale: 1.02 },
}

const pageTransition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] }

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className="w-full min-h-screen h-screen overflow-hidden"
      >
        <Routes location={location}>
          <Route path="/"           element={<HomePage />} />
          <Route path="/about"      element={<AboutPage />} />
          <Route path="/services"   element={<ServicesPage />} />
          <Route path="/projects"   element={<ProjectsPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/process"    element={<ProcessPage />} />
          <Route path="/contact"    element={<ContactPage />} />
          <Route path="*"           element={<HomePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const lastScrollTime = useRef(0)
  const COOLDOWN_MS = 800

  useEffect(() => {
    // Add overflow hidden class to body on desktop immersive mode
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  useEffect(() => {
    const handleSlideNavigation = (direction) => {
      const now = Date.now()
      if (now - lastScrollTime.current < COOLDOWN_MS) return
      
      const currentIdx = routeOrder.indexOf(location.pathname)
      if (currentIdx === -1) return

      let nextIdx = currentIdx + direction
      if (nextIdx >= 0 && nextIdx < routeOrder.length) {
        lastScrollTime.current = now
        navigate(routeOrder[nextIdx])
      }
    }

    const handleWheel = (e) => {
      // Disable wheel hijack on smaller width devices
      if (window.innerWidth < 1024) return

      // Ignore wheel events if scrolling inside scrollable nodes (e.g. elements that have inner overflow scrolling)
      // Check if user is hovering an input or text area
      const activeEl = document.activeElement
      const isFormNode = activeEl && ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'FORM'].includes(activeEl.tagName)
      if (isFormNode) return

      const target = e.target
      if (target && target.closest('.allow-scroll')) {
        return
      }

      if (e.deltaY > 5) {
        handleSlideNavigation(1) // Down -> Next
      } else if (e.deltaY < -5) {
        handleSlideNavigation(-1) // Up -> Prev
      }
    }

    const handleKeyDown = (e) => {
      // Prevent keyboard trigger in form inputs
      const activeEl = document.activeElement
      const isFormNode = activeEl && ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'FORM'].includes(activeEl.tagName)
      if (isFormNode) return

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        handleSlideNavigation(1)
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        handleSlideNavigation(-1)
      } else if (e.key === ' ') {
        e.preventDefault()
        handleSlideNavigation(e.shiftKey ? -1 : 1)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [location.pathname, navigate])

  return (
    <div className="min-h-screen flex flex-col global-page-bg text-white overflow-hidden relative">
      <ScrollToTop />
      <Header />
      <ArcMenu />
      <main className="flex-1 flex flex-col w-full h-full">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
