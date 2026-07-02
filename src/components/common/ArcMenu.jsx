import { Link, useLocation } from 'react-router-dom'
import { navigation } from '../../data/company'
import { motion } from 'framer-motion'

export default function ArcMenu() {
  const location = useLocation()

  return (
    <div className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-40 select-none">
      {/* Curved SVG Track - Brighter decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none w-[200px] h-[400px]">
        <svg className="w-full h-full" viewBox="0 0 200 400" fill="none">
          <path
            d="M 190 20 A 240 240 0 0 0 190 380"
            stroke="rgba(255, 255, 255, 0.22)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* Menu items */}
      <div className="relative flex flex-col justify-between items-end h-[360px] pr-2">
        {navigation.map((item, idx) => {
          const isActive = location.pathname === item.href
          // Calculate offset along the arc curving to the left
          const angle = (idx / (navigation.length - 1)) * Math.PI
          const xOffset = Math.sin(angle) * 45
          
          return (
            <motion.div
              key={item.label}
              style={{ transform: `translateX(${-xOffset}px)` }}
              className="relative flex items-center gap-3 group cursor-pointer"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              {/* Label: Always visible for active, visible only on hover for inactive */}
              <Link
                to={item.href}
                className={`text-[9px] font-black tracking-[0.2em] bg-black/80 border border-white/5 px-2.5 py-1 rounded-md transition-all duration-300 absolute right-8 whitespace-nowrap ${
                  isActive
                    ? 'text-primary-red opacity-100 pointer-events-auto scale-100'
                    : 'text-slate-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'
                }`}
              >
                {item.label}
              </Link>

              {/* Dot indicator */}
              <Link
                to={item.href}
                className="relative w-8 h-8 flex items-center justify-center"
              >
                {isActive ? (
                  <>
                    <span className="absolute w-4.5 h-4.5 rounded-full bg-primary-red/20 animate-pulse border border-primary-red/35" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-red border border-white/20 shadow-[0_0_12px_rgba(255, 117, 143,0.8)]" />
                  </>
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400/50 group-hover:bg-primary-red/80 transition-all duration-300" />
                )}
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
