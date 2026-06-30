import { Link } from 'react-router-dom'
import Reveal from '../components/common/Reveal'
import ProcessSection from '../components/sections/ProcessSection'
import { Phone } from 'lucide-react'

function ProcessCTA() {
  return (
    <section className="py-16 lg:py-20 bg-transparent">
      <div className="container-max section-padding text-center">
        <Reveal>
          <div className="blended-tech-card max-w-2xl mx-auto p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-black text-white mb-4">
              Bắt đầu dự án của bạn ngay hôm nay
            </h2>
            <p className="text-slate-300 mb-7 leading-relaxed">
              Chúng tôi sẵn sàng đồng hành cùng bạn qua từng giai đoạn phát triển sản phẩm.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary-red to-deep-red text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:shadow-primary-red/30 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Liên hệ ngay
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function ProcessPage() {
  return (
    <div className="red-dark-home pt-28 pb-12 min-h-screen">
      <Reveal>
        <ProcessSection />
      </Reveal>
      <ProcessCTA />
    </div>
  )
}
