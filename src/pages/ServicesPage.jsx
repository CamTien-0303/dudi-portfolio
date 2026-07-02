import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '../data/company'

export default function ServicesPage() {
  const [activeIdx, setActiveIdx] = useState(0)
  const activeService = services[activeIdx]

  return (
    <div className="relative min-h-screen h-screen overflow-hidden flex items-center justify-center premium-rose-page-bg section-padding pt-16">
      
      <div className="container-max w-full flex flex-col justify-center h-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Typography List */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Section Indicator */}
            <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
              SERVICES / <span className="text-primary-red">03-07</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none uppercase tracking-tight mb-6">
              Năng lực triển khai
            </h1>

            <div className="space-y-3 pr-4 border-l border-white/5 pl-2">
              {services.map((service, idx) => {
                const isActive = activeIdx === idx
                return (
                  <button
                    key={service.id}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={() => setActiveIdx(idx)}
                    className="w-full text-left flex items-center gap-4 py-2 transition-all group cursor-pointer"
                  >
                    <span className={`text-[10px] font-mono ${
                      isActive ? 'text-primary-red font-bold' : 'text-slate-600'
                    }`}>
                      0{idx + 1}
                    </span>
                    <span className={`text-base sm:text-lg lg:text-xl font-bold uppercase transition-all duration-300 ${
                      isActive 
                        ? 'text-primary-red translate-x-2' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}>
                      {service.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Detailed panel */}
          <div className="lg:col-span-6 relative h-[300px] sm:h-[400px] flex items-center justify-center">
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-red/5 to-transparent blur-3xl rounded-full" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md p-8 rounded-3xl bg-[#0F0F0F]/60 border border-white/5 backdrop-blur-md space-y-5 relative shadow-2xl shadow-black/40 hover:border-primary-red/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-red/10 border border-primary-red/20 flex items-center justify-center text-primary-red">
                  <activeService.icon className="w-5.5 h-5.5" />
                </div>

                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                  {activeService.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {activeService.description}
                </p>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </div>
  )
}
