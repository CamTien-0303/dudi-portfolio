import { Eye, Target, Layers } from 'lucide-react'

const principles = [
  {
    icon: Eye,
    title: 'Rõ ràng nhu cầu',
    description: 'Lắng nghe, phân tích và hiểu rõ mục tiêu kinh doanh trước khi bắt tay vào dự án.',
  },
  {
    icon: Target,
    title: 'Triển khai đúng trọng tâm',
    description: 'Tập trung vào giá trị cốt lõi, không làm dư, không làm thiếu – đúng nhu cầu thực tế.',
  },
  {
    icon: Layers,
    title: 'Dễ vận hành và mở rộng',
    description: 'Website được thiết kế để chủ doanh nghiệp tự quản lý, dễ nâng cấp khi cần.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-transparent relative overflow-hidden scroll-mt-28">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />

      <div className="container-max section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <div
            data-reveal
            className="relative"
          >
            <div
              className="relative bg-gradient-to-br from-primary-red via-deep-red to-burgundy rounded-[28px] p-8 lg:p-10 text-white overflow-hidden shadow-xl shadow-primary-red/20 hover:shadow-2xl hover:shadow-primary-red/30 hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-300"
            >
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="relative">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                  <span className="text-2xl font-bold"></span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                  Đối tác công nghệ đáng tin cậy
                </h3>
                <p className="text-white/85 leading-relaxed mb-8 text-sm sm:text-base">
                  Với đội ngũ 30+ chuyên gia và 5+ năm kinh nghiệm, chúng tôi tự hào đã đồng hành cùng hơn 50 doanh nghiệp trên hành trình chuyển đổi số.
                </p>
                <div
                  data-reveal-group
                  className="grid grid-cols-3 gap-4"
                >
                  {[
                    { value: '5+', label: 'Năm' },
                    { value: '150+', label: 'Dự án' },
                    { value: '99%', label: 'Hài lòng' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      data-reveal-item
                      className="text-center bg-white/10 hover:bg-white/20 rounded-2xl py-4 backdrop-blur-sm transition-all duration-300 cursor-default hover:-translate-y-1"
                    >
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-white/70 text-xs mt-0.5 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-200/30 rounded-3xl -z-10 blur-[2px]" />
          </div>

          {/* Right - Content */}
          <div data-reveal-group>
            <div
              data-reveal-item
              className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-500 text-xs font-semibold uppercase tracking-wider border border-primary-100 mb-4"
            >
              Về chúng tôi
            </div>
            <h2
              data-reveal-item
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-dark-900 leading-tight mb-5"
            >
              Giải pháp website<br />cho doanh nghiệp dịch vụ
            </h2>
            <p
              data-reveal-item
              className="text-dark-500 text-base sm:text-lg leading-relaxed mb-8"
            >
              DUDI Software là công ty công nghệ tại TP.HCM, chuyên thiết kế, phát triển và chăm sóc website cho doanh nghiệp dịch vụ vừa và nhỏ. Chúng tôi tin rằng mọi doanh nghiệp đều xứng đáng có một website chất lượng.
            </p>

            <div
              className="space-y-4"
            >
              {principles.map((item) => (
                <div
                  key={item.title}
                  data-reveal-item
                  className="flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-red-100/50 hover:bg-white/40 transition-all duration-300 group cursor-default"
                >
                  <div className="soft-tech-icon w-12 h-12 shrink-0">
                    <item.icon className="w-5 h-5 text-primary-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-900 mb-1 group-hover:text-primary-red transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-dark-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
