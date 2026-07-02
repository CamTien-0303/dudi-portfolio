import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Users, FolderKanban, SmilePlus } from 'lucide-react'

const floatingCards = [
  { icon: FolderKanban, value: '150+', label: 'Dự án', delay: 0.6 },
  { icon: Users, value: '30+', label: 'Nhân sự', delay: 0.8 },
  { icon: SmilePlus, value: '50+', label: 'Khách hàng hài lòng', delay: 1.0 },
]

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-transparent" />

      <div className="container-max section-padding py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-4 mb-6"
            >
              <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
                HOME / <span className="text-primary-red">01-07</span>
              </div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-red/10 border border-primary-red/25 text-primary-red text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 bg-primary-red rounded-full animate-pulse" />
                DUDI Software
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[3.5rem] font-black text-white leading-[1.1] mb-6 text-balance"
            >
              Giải pháp phần mềm &{' '}
              <span className="relative inline-block">
                <span className="gradient-text">hệ thống số</span>
                <svg className="absolute -bottom-2.5 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8"
                    stroke="#FF758F"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                </svg>
              </span>
              <br />
              cho doanh nghiệp
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl text-balance"
            >
              DUDI Software thiết kế, phát triển và vận hành các giải pháp phần mềm, website cao cấp và ứng dụng di động tùy chỉnh giúp số hóa quy trình và tăng trưởng bền vững.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary-red to-deep-red text-white font-bold rounded-2xl hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:shadow-primary-red/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
              >
                Xem dự án
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:border-primary-red/30 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
              >
                Liên hệ tư vấn
              </Link>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="order-1 lg:order-2 relative px-4">
            <div className="relative select-none">
              {/* Red glow behind the collage */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-red/20 via-deep-red/10 to-burgundy/30 rounded-full blur-3xl -z-10 scale-105" />

              {/* Main mockup - Browser window */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative tech-panel-dark rounded-[24px] shadow-2xl shadow-dark-900/35 overflow-hidden z-10"
                >
                  {/* Browser top bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-black/30 rounded-lg px-4 py-1 text-[11px] text-dark-300 border border-white/5 max-w-xs mx-auto text-center font-medium">
                        dudisoftware.com
                      </div>
                    </div>
                  </div>
                  {/* Content mockup */}
                  <div className="p-6 space-y-4 bg-transparent">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 bg-gradient-to-r from-primary-red to-deep-red rounded flex items-center justify-center text-[10px] font-black text-white">D</div>
                        <span className="text-[11px] font-extrabold text-white tracking-tight">DUDI</span>
                      </div>
                      <div className="flex gap-3 text-[9px] font-bold text-dark-300">
                        <span>Dịch vụ</span>
                        <span>Dự án</span>
                        <span>Liên hệ</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-burgundy via-deep-red to-primary-red rounded-2xl p-5 text-white relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/15 via-transparent to-transparent" />
                      <div className="relative z-10 space-y-2">
                        <span className="text-[8px] font-bold uppercase tracking-widest bg-white/15 px-2 py-0.5 rounded-full">DUDI SOFTWARE</span>
                        <h4 className="text-sm font-black tracking-tight leading-tight max-w-[200px]">Xây Dựng Website Đột Phá Doanh Thu</h4>
                        <p className="text-[9px] text-white/80 max-w-[180px]">Chúng tôi tối ưu từng dòng code vì sự phát triển bền vững của doanh nghiệp bạn.</p>
                        <div className="w-24 h-6 bg-white rounded-lg flex items-center justify-center text-[8px] font-extrabold text-primary-red shadow-sm mt-2">
                          Tư vấn miễn phí
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { val: '150+', tag: 'Dự án' },
                        { val: '30+', tag: 'Nhân sự' },
                        { val: '99%', tag: 'Hài lòng' },
                      ].map((stat) => (
                        <div key={stat.tag} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                          <div className="text-xs font-black text-primary-red leading-none mb-1">{stat.val}</div>
                          <div className="text-[8px] font-bold text-dark-300 leading-none">{stat.tag}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Panel 2: Code / Terminal Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: 0.6 }
                }}
                viewport={{ once: false, amount: 0.15 }}
                className="absolute -bottom-8 -right-4 w-52 h-36 z-30 tech-panel-dark p-3.5 rounded-2xl shadow-2xl border border-white/10"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: 0.5
                }}
                whileHover={{ scale: 1.04 }}
              >
                <div className="flex items-center gap-1.5 border-b border-white/10 pb-1.5 select-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                  <span className="text-[8px] font-mono text-dark-400 ml-1">terminal.js</span>
                </div>
                <div className="font-mono text-[9px] text-dark-300 mt-2 space-y-0.5 leading-normal">
                  <div className="text-green-400">~/dudi-studio $ npm run dev</div>
                  <div className="text-white/60">&gt; ready in 250ms</div>
                  <div className="text-primary-red/90"><span className="text-white/80">const</span> build = &#123;</div>
                  <div className="pl-2">design: <span className="text-yellow-400">'cyber'</span>,</div>
                  <div className="pl-2">speed: <span className="text-green-400">100</span></div>
                  <div className="text-primary-red/90">&#125;; <span className="w-1.5 h-2.5 bg-primary-red inline-block align-middle terminal-cursor ml-0.5" /></div>
                </div>
              </motion.div>

              {/* Panel 3: Analytics Line Chart Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: 0.4 }
                }}
                viewport={{ once: false, amount: 0.15 }}
                className="absolute -top-8 -left-8 w-40 z-30 tech-panel-glass p-3 rounded-xl shadow-2xl border border-white/10"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: 0.2
                }}
                whileHover={{ scale: 1.04 }}
              >
                <div className="flex justify-between items-center select-none mb-1">
                  <span className="text-[8px] font-bold text-dark-300">Lưu lượng Web</span>
                  <span className="text-[8px] font-extrabold text-green-400">+185%</span>
                </div>
                <svg className="w-full h-10 mt-1" viewBox="0 0 100 40" fill="none">
                  <path d="M0 35 Q 20 15, 40 25 T 80 5 T 100 12" stroke="var(--color-primary-red)" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="80" cy="5" r="3" fill="var(--color-primary-red)" />
                </svg>
              </motion.div>

              {/* Panel 4: Mobile App Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.8 }
                }}
                viewport={{ once: false, amount: 0.15 }}
                className="absolute bottom-1/4 -right-12 w-28 h-44 z-20 tech-panel-dark rounded-[22px] border-2 border-white/20 p-2 overflow-hidden flex flex-col justify-between shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: 0.8
                }}
                whileHover={{ scale: 1.04 }}
              >
                <div className="flex justify-between items-center px-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-4 h-1 bg-white/20 rounded-full" />
                  <div className="w-2 h-1 bg-white/20 rounded-full" />
                </div>
                <div className="flex-1 bg-gradient-to-b from-burgundy to-dark-tech rounded-[14px] p-2 flex flex-col justify-between text-white mt-1">
                  <div className="flex justify-between items-center">
                    <div className="w-4 h-4 bg-white/15 rounded flex items-center justify-center text-[7px] font-black">D</div>
                    <span className="text-[6px] font-bold text-white/60">DUDI App</span>
                  </div>
                  <div className="space-y-1 my-2">
                    <div className="w-8 h-1.5 bg-white/25 rounded" />
                    <div className="w-12 h-1 bg-white/15 rounded" />
                    <div className="w-10 h-1 bg-white/15 rounded" />
                  </div>
                  <div className="bg-primary-red text-[7px] font-bold text-center py-1 rounded-lg">Launch</div>
                </div>
              </motion.div>

              {/* Tech Chips */}
              <div className="absolute top-1/2 -left-12 z-30 bg-gradient-to-r from-primary-red/20 to-burgundy/30 border border-primary-red/40 text-white text-[8px] font-bold py-1 px-2.5 rounded-full backdrop-blur-md shadow-lg shadow-black/10 select-none">
                #React
              </div>
              <div className="absolute bottom-12 right-1/3 z-30 bg-gradient-to-r from-primary-red/20 to-burgundy/30 border border-primary-red/40 text-white text-[8px] font-bold py-1 px-2.5 rounded-full backdrop-blur-md shadow-lg shadow-black/10 select-none">
                #Web App
              </div>
              <div className="absolute top-1/3 right-4 z-30 bg-gradient-to-r from-primary-red/20 to-burgundy/30 border border-primary-red/40 text-white text-[8px] font-bold py-1 px-2.5 rounded-full backdrop-blur-md shadow-lg shadow-black/10 select-none">
                #UI/UX
              </div>

              {/* Floating cards */}
              {floatingCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: card.delay }}
                  className={`absolute z-25 ${
                    index === 0
                      ? '-left-6 sm:-left-10 top-1/4'
                      : index === 1
                      ? '-right-6 sm:-right-8 top-8'
                      : '-left-2 sm:-left-4 bottom-8'
                  }`}
                >
                  <motion.div
                    animate={{ y: index === 0 ? [0, -8, 0] : index === 1 ? [0, -12, 0] : [0, -6, 0] }}
                    transition={{
                      duration: index === 0 ? 4 : index === 1 ? 5 : 3.5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      delay: index * 0.2,
                    }}
                    whileHover={{ scale: 1.06 }}
                    className="tech-panel-glass rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 cursor-default hover:shadow-2xl hover:shadow-primary-red/20 transition-all border border-white/10"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <card.icon className="w-5 h-5 text-primary-red" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white leading-tight">{card.value}</div>
                      <div className="text-xs text-dark-300 font-medium">{card.label}</div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
