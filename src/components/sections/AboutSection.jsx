import { Eye, Target, Layers } from 'lucide-react'
import Reveal from '../common/Reveal'

const principles = [
  {
    icon: Eye,
    title: 'Phân tích & Tối ưu nhu cầu',
    description: 'Chúng tôi nghiên cứu sâu quy trình nghiệp vụ của doanh nghiệp để định hình giải pháp phần mềm tối ưu trước khi triển khai.',
  },
  {
    icon: Target,
    title: 'Triển khai đúng trọng tâm',
    description: 'Tập trung xây dựng các tính năng cốt lõi mang lại giá trị thực tế, tối ưu hóa chi phí đầu tư và thời gian đưa sản phẩm ra thị trường.',
  },
  {
    icon: Layers,
    title: 'Kiến trúc vững chắc & Dễ mở rộng',
    description: 'Hệ thống được phát triển trên các công nghệ hiện đại, đảm bảo tính bảo mật, khả năng chịu tải tốt và dễ dàng nâng cấp khi mở rộng quy mô.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-transparent relative overflow-hidden scroll-mt-28">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container-max section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <div data-reveal className="relative">
            <div className="relative bg-gradient-to-br from-primary-red via-deep-red to-burgundy rounded-[28px] p-8 lg:p-10 text-white overflow-hidden shadow-xl shadow-primary-red/20 hover:shadow-2xl hover:shadow-primary-red/30 hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-300">
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
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black mb-4 leading-tight">
                  Đối tác công nghệ của doanh nghiệp
                </h3>
                <p className="text-white/85 leading-relaxed mb-8 text-sm sm:text-base">
                  Với hơn 5 năm đồng hành cùng doanh nghiệp, DUDI Software tự hào cung cấp các dịch vụ tư vấn giải pháp, thiết kế, lập trình và vận hành sản phẩm số chất lượng cao, mang tính thực chiến mạnh mẽ.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: '5+', label: 'Năm kinh nghiệm' },
                    { value: '150+', label: 'Dự án bàn giao' },
                    { value: '99%', label: 'Khách hàng hài lòng' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center bg-white/10 hover:bg-white/20 rounded-2xl py-4 backdrop-blur-sm transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-white/5"
                    >
                      <div className="text-2xl font-black">{stat.value}</div>
                      <div className="text-white/80 text-[10px] sm:text-xs mt-1 font-semibold leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-red/10 rounded-3xl -z-10 blur-[2px]" />
          </div>

          {/* Right - Content */}
          <div data-reveal-group>
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-red/10 text-primary-red text-xs font-bold uppercase tracking-wider border border-primary-red/20 mb-4">
              Về DUDI Software
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black text-white leading-tight mb-5">
              Thiết kế, phát triển và vận hành sản phẩm số
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Chúng tôi là tập hợp những kỹ sư phần mềm và nhà thiết kế chuyên nghiệp tại TP.HCM. Không chỉ dừng lại ở việc tạo ra những giao diện đẹp, DUDI Software tập trung kiến tạo các hệ thống phần mềm, website doanh nghiệp và web app có hiệu suất vận hành cao, bảo mật vững chắc và đáp ứng chính xác bài toán kinh doanh.
            </p>

            <div className="space-y-4">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 hover:border-primary-red/20 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                >
                  <div className="blended-tech-icon w-12 h-12 shrink-0">
                    <item.icon className="w-5 h-5 text-primary-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 group-hover:text-primary-red transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
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
