import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import useRevealOnScroll from './hooks/useRevealOnScroll'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProcessPage from './pages/ProcessPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
}

const pageTransition = { duration: 0.25, ease: 'easeOut' }

function AnimatedRoutes() {
  const location = useLocation()
  useRevealOnScroll()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className="flex-1"
      >
        <Routes location={location}>
          <Route path="/"         element={<HomePage />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process"  element={<ProcessPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact"  element={<ContactPage />} />
          {/* Fallback route */}
          <Route path="*"         element={<HomePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <div className="min-h-screen flex flex-col global-page-bg">
      <ScrollToTop />
      <Header />
      <main className="flex-1 flex flex-col">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
