import { 
  SiMongodb, 
  SiGit, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiPython, 
  SiReact, 
  SiLaravel, 
  SiVuedotjs, 
  SiAngular, 
  SiDocker 
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const innerTech = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
]

const outerTech = [
  { name: 'Vue.js', Icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'Angular', Icon: SiAngular, color: '#DD0031' },
  { name: 'Laravel', Icon: SiLaravel, color: '#FF2D20' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
]

export default function TechnologyPage() {
  return (
    <div className="relative min-h-screen h-screen overflow-hidden flex items-center justify-center premium-rose-page-bg section-padding pt-16">
      
      {/* Self-contained CSS for high-performance orbit animations */}
      <style>{`
        @keyframes spin-cw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spin-ccw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes counter-spin-cw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes counter-spin-ccw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .orbit-inner-ring {
          --orbit-radius: 110px;
          animation: spin-cw 25s linear infinite;
        }
        .orbit-outer-ring {
          --orbit-radius: 190px;
          animation: spin-ccw 35s linear infinite;
        }

        .tech-node-inner {
          animation: counter-spin-cw 25s linear infinite;
        }
        .tech-node-outer {
          animation: counter-spin-ccw 35s linear infinite;
        }

        @media (max-width: 640px) {
          .orbit-inner-ring {
            --orbit-radius: 75px;
          }
          .orbit-outer-ring {
            --orbit-radius: 130px;
          }
        }
      `}</style>

      {/* Decorative background visual */}
      <div className="absolute inset-0 bg-transparent flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-primary-red/5 animate-[spin_60s_linear_infinite]" />
      </div>

      <div className="container-max w-full flex flex-col justify-center h-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            {/* Section Indicator */}
            <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
              TECHNOLOGY / <span className="text-primary-red">05-07</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none uppercase tracking-tight">
              Công nghệ<br />Sử dụng
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              DUDI Software làm chủ hệ sinh thái công nghệ mạnh mẽ và hiện đại nhất, sẵn sàng đáp ứng mọi nhu cầu số hóa sản phẩm từ ứng dụng Web đến hạ tầng Cloud ổn định.
            </p>
          </div>

          {/* Right Layout: Orbit Ecosystem */}
          <div className="lg:col-span-7 flex justify-center items-center relative h-[380px] sm:h-[480px] overflow-hidden sm:overflow-visible">
            
            {/* Center Core Hub — multi-layered premium design */}
            <div className="tech-core-hub">
              {/* Subtle connector lines radiating from core */}
              <svg className="tech-core-connectors" viewBox="0 0 400 400" fill="none">
                {[...Array(11)].map((_, i) => {
                  const angle = (i / 11) * Math.PI * 2 - Math.PI / 2
                  const x1 = 200 + Math.cos(angle) * 52
                  const y1 = 200 + Math.sin(angle) * 52
                  const x2 = 200 + Math.cos(angle) * 185
                  const y2 = 200 + Math.sin(angle) * 185
                  return (
                    <line
                      key={i}
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="rgba(255, 117, 143,0.06)"
                      strokeWidth="1"
                      strokeDasharray="3 8"
                    />
                  )
                })}
              </svg>

              {/* Layer 1: Outer glow ring */}
              <div className="tech-core-ring-outer" />

              {/* Layer 2: Mid gradient ring */}
              <div className="tech-core-ring-mid" />

              {/* Layer 3: Inner content panel */}
              <div className="tech-core-inner">
                {/* Micro CPU/chip icon */}
                <svg className="tech-core-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="5" width="14" height="14" rx="2" />
                  <rect x="9" y="9" width="6" height="6" rx="1" />
                  <line x1="3" y1="10" x2="5" y2="10" />
                  <line x1="3" y1="14" x2="5" y2="14" />
                  <line x1="19" y1="10" x2="21" y2="10" />
                  <line x1="19" y1="14" x2="21" y2="14" />
                  <line x1="10" y1="3" x2="10" y2="5" />
                  <line x1="14" y1="3" x2="14" y2="5" />
                  <line x1="10" y1="19" x2="10" y2="21" />
                  <line x1="14" y1="19" x2="14" y2="21" />
                </svg>
                <span className="tech-core-title">DUDI</span>
                <span className="tech-core-label">STACK</span>
                <span className="tech-core-sub">Web • App • Cloud</span>
              </div>
            </div>

            {/* Inner Orbit Track & Container */}
            <div className="orbit-inner-ring absolute top-1/2 left-1/2 w-0 h-0 z-10">
              {/* Visual Dashed Ring */}
              <div 
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/5 pointer-events-none"
                style={{ width: 'calc(var(--orbit-radius) * 2)', height: 'calc(var(--orbit-radius) * 2)' }}
              />
              {innerTech.map((tech, idx) => {
                const angle = (idx / innerTech.length) * 2 * Math.PI
                return (
                  <div
                    key={tech.name}
                    className="tech-node-inner absolute"
                    style={{
                      left: `calc(var(--orbit-radius) * ${Math.cos(angle)})`,
                      top: `calc(var(--orbit-radius) * ${Math.sin(angle)})`
                    }}
                  >
                    <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#0A0A0A]/85 border border-white/10 backdrop-blur-md flex items-center gap-2 group cursor-pointer hover:border-primary-red/30 hover:shadow-[0_0_15px_rgba(255, 117, 143,0.15)] transition-all duration-300">
                      <tech.Icon 
                        className="w-4 h-4 sm:w-5.5 sm:h-5.5 transition-colors duration-300" 
                        style={{ color: tech.color }} 
                      />
                      <span className="text-[8px] sm:text-[9px] font-bold text-slate-300 group-hover:text-white uppercase tracking-wider transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Outer Orbit Track & Container */}
            <div className="orbit-outer-ring absolute top-1/2 left-1/2 w-0 h-0 z-10">
              {/* Visual Dashed Ring */}
              <div 
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/5 pointer-events-none"
                style={{ width: 'calc(var(--orbit-radius) * 2)', height: 'calc(var(--orbit-radius) * 2)' }}
              />
              {outerTech.map((tech, idx) => {
                const angle = (idx / outerTech.length) * 2 * Math.PI
                return (
                  <div
                    key={tech.name}
                    className="tech-node-outer absolute"
                    style={{
                      left: `calc(var(--orbit-radius) * ${Math.cos(angle)})`,
                      top: `calc(var(--orbit-radius) * ${Math.sin(angle)})`
                    }}
                  >
                    <div className="p-2 sm:p-3 rounded-xl bg-[#0A0A0A]/80 border border-white/5 backdrop-blur-md flex items-center gap-1.5 group cursor-pointer hover:border-primary-red/25 hover:shadow-[0_0_12px_rgba(255, 117, 143,0.1)] transition-all duration-300">
                      <tech.Icon 
                        className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 transition-colors duration-300" 
                        style={{ color: tech.color }} 
                      />
                      <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 group-hover:text-white uppercase tracking-wider transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
