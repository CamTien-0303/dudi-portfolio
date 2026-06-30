import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import StatsSection from '../components/sections/StatsSection'
import ServicesSection from '../components/sections/ServicesSection'
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection'
import TechnologySection from '../components/sections/TechnologySection'
import ProcessSection from '../components/sections/ProcessSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import PricingSection from '../components/sections/PricingSection'
import ContactSection from '../components/sections/ContactSection'
import Reveal from '../components/common/Reveal'

export default function HomePage() {
  return (
    <div className="red-dark-home">
      <HeroSection />
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <StatsSection />
      </Reveal>
      <Reveal>
        <ServicesSection preview />
      </Reveal>
      <Reveal>
        <WhyChooseUsSection />
      </Reveal>
      <Reveal>
        <TechnologySection />
      </Reveal>
      <Reveal>
        <ProcessSection />
      </Reveal>
      <Reveal>
        <ProjectsSection preview />
      </Reveal>
      <Reveal>
        <PricingSection preview />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
    </div>
  )
}
