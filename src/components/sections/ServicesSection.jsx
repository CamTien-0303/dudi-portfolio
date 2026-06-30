import { services } from '../../data/company'
import SectionHeading from '../common/SectionHeading'
import { ArrowRight } from 'lucide-react'

export default function ServicesSection({ preview = false }) {
  const displayServices = preview ? services.slice(0, 6) : services

  return (
    <section id="services" className="py-20 lg:py-28 bg-transparent relative overflow-hidden scroll-mt-28">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container-max section-padding relative">
        <SectionHeading
          label="Dịch vụ"
          title="Giải pháp toàn diện cho doanh nghiệp"
          description="Từ thiết kế website đến phát triển phần mềm, chúng tôi cung cấp dịch vụ trọn gói giúp doanh nghiệp bạn phát triển bền vững trên nền tảng số."
        />

        <div
          data-reveal-group
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayServices.map((service) => (
            <div
              key={service.id}
              data-reveal-item
              className="blended-tech-card blended-tech-card-hover group p-8 flex flex-col h-full justify-between cursor-pointer"
            >
              {/* Subtle tech details */}
              <div className="absolute top-4 right-4 text-[8px] font-mono text-primary-red/25 select-none pointer-events-none group-hover:text-primary-red/50 transition-colors">
                [+]
              </div>
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-primary-red/10 group-hover:bg-primary-red/40 transition-colors" />

              <div>
                <div className="blended-tech-icon w-14 h-14 mb-6">
                  <service.icon className="w-6 h-6 text-primary-red group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-primary-red text-sm font-bold group-hover:text-white group-hover:translate-x-1 transition-all duration-300 mt-auto">
                Tìm hiểu thêm
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
