import { whyChooseUs } from '../../data/company'
import { CheckCircle2 } from 'lucide-react'

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-transparent relative overflow-hidden scroll-mt-28">
      {/* Decorative glow elements */}
      <div className="absolute top-12 left-12 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl -translate-x-1/4 pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none -z-10" />

      <div className="container-max section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Heading */}
          <div data-reveal-group className="lg:sticky lg:top-28 space-y-6">
            <div>
              <div
                data-reveal-item
                className="inline-block px-4 py-1.5 rounded-full bg-primary-red/10 text-primary-red text-xs font-semibold uppercase tracking-wider border border-primary-red/20 mb-4 animate-pulse"
              >
                Tại sao chọn chúng tôi
              </div>
              <h2
                data-reveal-item
                className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-5"
              >
                Lý do doanh nghiệp<br />
                <span className="gradient-text">tin tưởng DUDI</span>
              </h2>
              <p
                data-reveal-item
                className="text-slate-300 text-base sm:text-lg leading-relaxed"
              >
                Chúng tôi không chỉ code – chúng tôi đồng hành. Từ khâu tư vấn, thiết kế đến bàn giao và vận hành, mọi thứ đều rõ ràng, chuyên nghiệp.
              </p>
            </div>

            {/* Featured Support Card */}
            <div
              data-reveal-item
              className="blended-tech-card flex items-center gap-4 p-5 animate-floating max-w-md"
            >
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary-red/5 to-transparent rounded-tr-2xl pointer-events-none" />

              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-red to-deep-red flex items-center justify-center shrink-0 shadow-lg shadow-primary-red/20 text-white z-10">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="z-10">
                <div className="font-extrabold text-white text-sm">Cam kết chất lượng</div>
                <div className="text-slate-300 text-xs sm:text-sm font-medium">Bảo hành và hỗ trợ sau bàn giao lâu dài</div>
              </div>
            </div>
          </div>

          {/* Right - Cards */}
          <div
            data-reveal-group
            className="space-y-5"
          >
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                data-reveal-item
                className="blended-tech-card blended-tech-card-hover group flex items-start gap-5 p-6"
              >
                {/* Subtle tech details */}
                <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-primary-red/10 group-hover:bg-primary-red/40 transition-colors" />

                {/* Icon wrapper */}
                <div className="blended-tech-icon w-14 h-14 shrink-0">
                  <item.icon className="w-6 h-6 text-primary-red group-hover:text-white transition-colors duration-300" />
                </div>

                <div className="z-10">
                  <h4 className="font-bold text-white mb-2 transition-colors duration-300 text-base sm:text-lg leading-tight tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 transition-colors duration-300 text-sm leading-relaxed max-w-[90%]">{item.description}</p>
                </div>

                {/* Step number */}
                <span className="absolute top-6 right-6 text-[44px] font-black tracking-tighter text-primary-red/10 select-none leading-none group-hover:text-primary-red/25 transition-colors duration-300 font-sans z-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
