import { Link } from 'react-router-dom'
import HeroSection from '../components/sections/HeroSection'
import StatsSection from '../components/sections/StatsSection'
import ServicesSection from '../components/sections/ServicesSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import Reveal from '../components/common/Reveal'
import { ArrowRight, Phone } from 'lucide-react'

function HomeCTA() {
  return (
    <section className="py-20 lg:py-28 bg-transparent relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-primary-red/8 blur-3xl" />
      </div>

      <div className="container-max section-padding relative text-center">
        <Reveal>
          <div className="blended-tech-card max-w-3xl mx-auto p-10 lg:p-14">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-5 leading-tight">
              Sẵn sàng bắt đầu dự án cùng DUDI Software?
            </h2>
            <p className="text-slate-300 text-base lg:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Chia sẻ nhu cầu của bạn, đội ngũ DUDI sẽ tư vấn hướng triển khai phù hợp.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary-red to-deep-red text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:shadow-primary-red/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4" />
                Liên hệ tư vấn
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:border-primary-red/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Xem dự án
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <div className="red-dark-home pb-12">
      <HeroSection />
      <Reveal>
        <StatsSection />
      </Reveal>
      <Reveal>
        <ProjectsSection preview />
      </Reveal>
      <Reveal>
        <ServicesSection preview />
      </Reveal>
      <HomeCTA />
    </div>
  )
}
