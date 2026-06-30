import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { navigation } from '../../data/company'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.replace('/#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <button
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="Back to top"
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer border-none bg-transparent p-0 focus:outline-none"
          >
            <img
              src="/logo-dudi.png"
              alt="DUDI Software"
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-md object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-base sm:text-lg font-black text-white transition-colors duration-300 group-hover:text-primary-red whitespace-nowrap select-none">
              DUDI Software
            </span>
          </button>
 
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 text-slate-300 hover:text-white hover:bg-white/5 group/nav"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-2 left-4 right-4 h-[2px] bg-primary-red rounded-full origin-left scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 ease-out" />
              </a>
            ))}
          </nav>
 
          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="group inline-flex items-center gap-2 px-5.5 py-2.5 bg-primary-red text-white text-sm font-bold rounded-xl hover:bg-deep-red transition-all duration-300 hover:shadow-xl hover:shadow-primary-red/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              Nhận tư vấn
            </a>
          </div>
 
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
 
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#141414] border-t border-white/5 overflow-hidden"
          >
            <div className="section-padding py-4 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-3 text-slate-300 font-medium rounded-xl hover:bg-white/5 hover:text-primary-red transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, '/#contact')}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary-red text-white font-semibold rounded-xl hover:bg-deep-red transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Nhận tư vấn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
