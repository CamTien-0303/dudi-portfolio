import Reveal from '../components/common/Reveal'
import ProjectsSection from '../components/sections/ProjectsSection'

export default function ProjectsPage() {
  return (
    <div className="red-dark-home pt-28 pb-12 min-h-screen">
      <Reveal>
        <ProjectsSection />
      </Reveal>
    </div>
  )
}
