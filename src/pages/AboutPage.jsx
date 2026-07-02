import { motion } from 'framer-motion'

const focusPoints = [
  'Thiết kế sản phẩm số dễ sử dụng',
  'Phát triển hệ thống ổn định, bảo mật',
  'Đồng hành vận hành và tối ưu dài hạn',
]

const metrics = [
  { value: '5+', label: 'Năm kinh nghiệm', angle: -55, distance: 170 },
  { value: '150+', label: 'Dự án', angle: 55, distance: 170 },
  { value: '99%', label: 'Hài lòng', angle: 180, distance: 155 },
]

export default function AboutPage() {
  return (
    <div className="relative min-h-screen h-screen overflow-hidden flex items-center justify-center about-page-bg section-padding pt-16">
      
      {/* Decorative background visual */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary-red/5 to-transparent pointer-events-none" />

      <div className="container-max w-full flex flex-col justify-center h-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Columns - Presentation Text */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Section Indicator */}
            <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
              ABOUT / <span className="text-[#ED1C24]">02-07</span>
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none uppercase tracking-tight">
                Về chúng tôi
              </h1>

              {/* Enhanced Quote */}
              <div className="about-quote-block">
                <p className="about-quote-text">
                  "Tối ưu hóa từng dòng code vì sự phát triển bền vững."
                </p>
              </div>
            </div>

            <div className="space-y-4 max-w-2xl">
              <p className="about-body-text">
                DUDI Software là công ty công nghệ tại TP.HCM, được thành lập với sứ mệnh số hóa và nâng cao năng lực cạnh tranh cho các doanh nghiệp dịch vụ vừa và nhỏ thông qua các giải pháp phần mềm tối ưu.
              </p>
              <p className="about-body-text">
                Chúng tôi tập trung vào thiết kế, phát triển và bảo trì lâu dài hệ thống website, web app chuẩn công nghệ cao, mang lại trải nghiệm mượt mà, bảo mật tuyệt đối và thúc đẩy hiệu quả vận hành doanh nghiệp.
              </p>
            </div>

            {/* Focus Pillars */}
            <div className="about-focus-section">
              <span className="about-focus-label">DUDI tập trung vào</span>
              <div className="about-focus-list">
                {focusPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    className="about-focus-item"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                  >
                    <span className="about-focus-dot" />
                    <span>{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Premium Visual */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative flex items-center justify-center about-visual-container">

              {/* Watermark text */}
              <div className="about-watermark" aria-hidden="true">DUDI</div>
              <div className="about-watermark about-watermark-sub" aria-hidden="true">SOFTWARE</div>

              {/* Radial glow behind card */}
              <div className="about-card-glow" />

              {/* Orbit rings */}
              <div className="about-orbit about-orbit-1" />
              <div className="about-orbit about-orbit-2" />
              <div className="about-orbit about-orbit-3" />

              {/* Mini metrics floating around */}
              {metrics.map((m, i) => {
                const rad = (m.angle * Math.PI) / 180
                const x = Math.cos(rad) * m.distance
                const y = Math.sin(rad) * m.distance
                return (
                  <motion.div
                    key={i}
                    className="about-metric"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                    whileHover={{ y: -3, borderColor: 'rgba(237, 28, 36, 0.5)' }}
                  >
                    <span className="about-metric-value">{m.value}</span>
                    <span className="about-metric-label">{m.label}</span>
                  </motion.div>
                )
              })}

              {/* Central 2024 Card */}
              <motion.div 
                className="about-card-2024"
                animate={{ rotate: [0, 1.5, -1.5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <div className="about-card-inner-glow" />
                <span className="about-card-year">2024</span>
                <span className="about-card-caption">
                  Năm thành lập<br />xây dựng nền tảng<br />công nghệ bền vững
                </span>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
