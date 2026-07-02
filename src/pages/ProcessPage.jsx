import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { processSteps } from '../data/company'

const shortLabels = [
  'Tiếp nhận',
  'Phân tích',
  'UI/UX',
  'Lập trình',
  'Demo',
  'Bàn giao',
  'Hỗ trợ'
]

const stepKeywords = [
  ['Briefing', 'Consulting', 'Scope'],
  ['Architecture', 'Tech Stack', 'Estimation'],
  ['Wireframe', 'Figma', 'Prototype'],
  ['Frontend', 'Backend', 'Quality Assurance'],
  ['Feedback', 'Refinement', 'Staging'],
  ['Deployment', 'Training', 'Handover'],
  ['Maintenance', 'SLA', 'Monitoring']
]

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [radius, setRadius] = useState(window.innerWidth < 640 ? 130 : 200)
  const current = processSteps[activeStep]

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 640 ? 130 : 200)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative min-h-screen h-screen overflow-hidden flex items-center justify-center premium-rose-page-bg section-padding pt-16">
      
      {/* Background visual curves */}
      <div className="absolute inset-0 bg-transparent flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-primary-red/5 animate-[spin_80s_linear_infinite]" />
      </div>

      <div className="container-max w-full flex flex-col justify-center h-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Flow Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Section Indicator */}
            <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
              PROCESS / <span className="text-primary-red">06-07</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none uppercase tracking-tight">
              Quy trình<br />Triển khai
            </h1>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 max-w-md p-6 rounded-3xl bg-[#0F0F0F]/60 border border-white/5 backdrop-blur-md shadow-2xl hover:border-primary-red/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-mono font-bold text-primary-red uppercase tracking-widest">
                    Bước {current.step} / 07
                  </div>
                  {/* Indicator Line from active step visual indicator */}
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-red shadow-[0_0_8px_var(--color-primary-red)]" />
                </div>

                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                  {current.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {current.description}
                </p>

                {/* Specific keywords tags */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-2">
                  {stepKeywords[activeStep].map((kw) => (
                    <span 
                      key={kw}
                      className="text-[9px] font-bold px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-400 select-none uppercase tracking-wider"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Circular Interactive Flow diagram */}
          <div className="lg:col-span-7 flex justify-center items-center relative h-[420px] sm:h-[540px]">
            
            {/* Directional Flow Arcs SVG: 01 → 02 → 03 → 04 → 05 → 06 → 07 */}
            {(() => {
              const svgSize = radius * 2 + 80
              const cx = radius + 40
              const cy = radius + 40
              const count = 7
              // Compute node positions (same formula as the nodes below)
              const nodeAngles = Array.from({ length: count }, (_, i) => (i / count) * 2 * Math.PI - Math.PI / 2)
              
              // For each consecutive pair, draw an arc from node[i] to node[i+1]
              const nodeRadius = 28 // half of node size
              const shortenAngle = Math.atan2(nodeRadius, radius)

              const arcs = []
              for (let i = 0; i < count - 1; i++) {
                const startAngle = nodeAngles[i] + shortenAngle
                const endAngle = nodeAngles[i + 1] - shortenAngle

                const x1 = cx + Math.cos(startAngle) * radius
                const y1 = cy + Math.sin(startAngle) * radius
                const x2 = cx + Math.cos(endAngle) * radius
                const y2 = cy + Math.sin(endAngle) * radius

                // SVG arc: A rx ry x-rotation large-arc-flag sweep-flag x y
                // sweep-flag=1 for clockwise
                const d = `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`
                
                const isOnActivePath = i === activeStep || i === activeStep - 1
                
                arcs.push(
                  <path
                    key={`arc-${i}`}
                    d={d}
                    fill="none"
                    stroke={isOnActivePath ? 'rgba(255, 117, 143, 0.6)' : 'rgba(255, 117, 143, 0.22)'}
                    strokeWidth={isOnActivePath ? '2.5' : '1.5'}
                    strokeDasharray="8 5"
                    markerEnd={`url(#arrow${isOnActivePath ? '-active' : ''})`}
                    style={{
                      filter: isOnActivePath ? 'drop-shadow(0 0 4px rgba(255, 117, 143,0.35))' : 'none',
                      transition: 'stroke 0.3s, filter 0.3s, stroke-width 0.3s'
                    }}
                  />
                )
              }

              return (
                <svg 
                  className="absolute pointer-events-none z-0" 
                  style={{ width: svgSize, height: svgSize }} 
                  viewBox={`0 0 ${svgSize} ${svgSize}`}
                >
                  <defs>
                    {/* Arrow marker for inactive segments */}
                    <marker
                      id="arrow"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="7"
                      markerHeight="7"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 8 5 L 0 9" fill="none" stroke="rgba(255, 117, 143, 0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </marker>
                    {/* Arrow marker for active segments */}
                    <marker
                      id="arrow-active"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="8"
                      markerHeight="8"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 8 5 L 0 9" fill="none" stroke="rgba(255, 117, 143, 0.85)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </marker>
                  </defs>

                  {/* Faint background orbit circle */}
                  <circle 
                    cx={cx} 
                    cy={cy} 
                    r={radius} 
                    fill="none" 
                    stroke="rgba(255, 255, 255, 0.04)" 
                    strokeWidth="1"
                  />

                  {arcs}
                </svg>
              )
            })()}

            {/* Central Hub Core — upgraded with concentric rings */}
            <div className="process-hub">
              {/* Outer glow ring */}
              <div className="process-hub-ring-outer" />
              {/* Mid concentric ring */}
              <div className="process-hub-ring-mid" />
              {/* Core content */}
              <div className="process-hub-inner">
                <span className="process-hub-title">DUDI</span>
                <span className="process-hub-label">FLOW</span>
                <span className="process-hub-sub">7 bước triển khai</span>
              </div>
            </div>

            {/* Orbiting Steps with Short Labels */}
            {processSteps.map((step, idx) => {
              const count = processSteps.length
              const angle = (idx / count) * 2 * Math.PI - Math.PI / 2 // Start from top
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              const isActive = activeStep === idx

              return (
                <div
                  key={step.step}
                  style={{ 
                    left: `calc(50% + ${x}px)`, 
                    top: `calc(50% + ${y}px)` 
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-1.5 z-20"
                >
                  <button
                    onMouseEnter={() => setActiveStep(idx)}
                    onClick={() => setActiveStep(idx)}
                    className={`process-node ${isActive ? 'process-node-active' : 'process-node-idle'}`}
                  >
                    {step.step}
                  </button>

                  <span className={`process-node-label ${isActive ? 'process-node-label-active' : ''}`}>
                    {shortLabels[idx]}
                  </span>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )
}
