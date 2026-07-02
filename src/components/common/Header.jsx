import { Link, useLocation } from 'react-router-dom'
import { navigation } from '../../data/company'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 select-none bg-transparent">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo-dudi.png"
              alt="DUDI Software"
              className="h-9 w-9 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-sm font-black text-white uppercase tracking-wider group-hover:text-primary-red transition-colors duration-300">
              DUDI Software
            </span>
          </Link>

          {/* Desktop Header Actions (No top nav links) */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary-red text-white text-[10px] font-black tracking-widest uppercase rounded-xl hover:bg-deep-red transition-all duration-300 hover:shadow-lg hover:shadow-primary-red/10 active:scale-95"
            >
              <Phone className="w-3 h-3 group-hover:rotate-12 transition-transform duration-300" />
              Nhận tư vấn
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#0D0D0D]/95 backdrop-blur-lg z-40 lg:hidden flex flex-col justify-center items-center p-8">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full text-white hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>

          <nav className="flex flex-col items-center gap-6 mb-6">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-lg font-black tracking-[0.2em] transition-all uppercase ${
                    isActive ? 'text-primary-red scale-110' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 w-56 px-5 py-3.5 bg-primary-red text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-deep-red transition-all"
          >
            <Phone className="w-4 h-4" />
            Nhận tư vấn
          </Link>
        </div>
      )}
    </header>
  )
}
