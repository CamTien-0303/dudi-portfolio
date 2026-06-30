import { Link } from 'react-router-dom'
import { services } from '../../data/company'
import SectionHeading from '../common/SectionHeading'
import { ArrowRight } from 'lucide-react'

export default function ServicesSection({ preview = false }) {
  const displayServices = preview 
    ? services.filter(s => ['software-solutions', 'web-app', 'web-development', 'maintenance'].includes(s.id))
    : services

  return (
    <section id="services" className="py-20 lg:py-28 bg-transparent relative overflow-hidden scroll-mt-28">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container-max section-padding relative">
        <SectionHeading
          label="Năng lực"
          title={preview ? "Năng lực cốt lõi" : "Năng lực triển khai"}
          description={preview ? "" : "Chúng tôi làm chủ nhiều giải pháp công nghệ từ thiết kế, phát triển phần mềm, web app cho đến việc tối ưu và vận hành lâu dài."}
        />

        <div
          data-reveal-group
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
            </div>
          ))}
        </div>

        {/* View All Button */}
        {preview && (
          <div className="mt-12 text-center" data-reveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:border-primary-red/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              Xem năng lực triển khai
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
