import { useRef, useState, useEffect } from 'react'
import { stats } from '../../data/company'
import { Users, Clock, FolderKanban, SmilePlus } from 'lucide-react'

const icons = [Users, Clock, FolderKanban, SmilePlus]

function CountUp({ target, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.disconnect()
      }
    }, { threshold: 0.1 })

    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return <span ref={ref}>{count}</span>
}

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-20 bg-transparent relative overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          data-reveal-group
          className="blended-tech-card grid grid-cols-2 lg:grid-cols-4 p-8 lg:p-10 gap-8 divide-y divide-white/5 lg:divide-y-0 lg:divide-x divide-white/5"
        >
          {stats.map((stat, index) => {
            const Icon = icons[index]
            return (
              <div
                key={stat.label}
                data-reveal-item
                className="text-center px-4 py-2 group cursor-pointer hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="blended-tech-icon w-12 h-12 mx-auto mb-4">
                  <Icon className="w-5.5 h-5.5 text-primary-red group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight">
                  <CountUp target={stat.number} />
                  <span className="text-primary-red">{stat.suffix}</span>
                </div>
                <div className="text-slate-300 group-hover:text-white transition-colors duration-300 text-xs sm:text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
