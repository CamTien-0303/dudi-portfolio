import Reveal from '../components/common/Reveal'
import ServicesSection from '../components/sections/ServicesSection'
import TechnologySection from '../components/sections/TechnologySection'

export default function ServicesPage() {
  return (
    <div className="red-dark-home pt-28 pb-12 min-h-screen">
      <Reveal>
        <ServicesSection />
      </Reveal>
      <Reveal>
        <TechnologySection />
      </Reveal>
    </div>
  )
}
