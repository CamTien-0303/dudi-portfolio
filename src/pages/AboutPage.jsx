import Reveal from '../components/common/Reveal'
import AboutSection from '../components/sections/AboutSection'
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection'
import StatsSection from '../components/sections/StatsSection'

export default function AboutPage() {
  return (
    <div className="red-dark-home pt-28 pb-12 min-h-screen">
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <WhyChooseUsSection />
      </Reveal>
      <Reveal>
        <StatsSection />
      </Reveal>
    </div>
  )
}
