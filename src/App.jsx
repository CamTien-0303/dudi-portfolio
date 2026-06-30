import { Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import HomePage from './pages/HomePage'
import useRevealOnScroll from './hooks/useRevealOnScroll'

function App() {
  useRevealOnScroll()

  return (
    <div className="min-h-screen flex flex-col global-page-bg">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Future routes:
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
