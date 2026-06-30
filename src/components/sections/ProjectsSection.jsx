import { useState } from 'react'
import { projects } from '../../data/projects'
import SectionHeading from '../common/SectionHeading'
import { ExternalLink } from 'lucide-react'

function ProjectThumbnail({ project }) {
  const [imageError, setImageError] = useState(false)

  if (imageError || !project.image) {
    return (
      <div 
        className="relative w-full h-full flex overflow-hidden select-none font-sans text-white"
        style={{ background: `linear-gradient(135deg, #0A0A0A 0%, #121212 50%, ${project.color}15 100%)` }}
      >
        {/* Browser Top bar decoration */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-white/5 border-b border-white/10 flex items-center px-3.5 gap-1.5 z-15">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
          <span className="text-[8px] text-white/50 font-mono ml-2">{project.title.toLowerCase().replace(/\s+/g, '')}.com</span>
        </div>

        {/* Sidebar */}
        <div className="pt-6 w-8 border-r border-white/5 bg-black/40 flex flex-col items-center py-2 gap-2 shrink-0">
          <div className="w-4 h-4 rounded bg-white/10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: project.color }} />
          </div>
          <div className="w-4 h-1.5 bg-white/5 rounded-full" />
          <div className="w-4 h-1.5 bg-white/5 rounded-full" />
          <div className="w-4 h-1.5 bg-white/5 rounded-full" />
        </div>

        {/* Main Content Area */}
        <div className="pt-6 flex-1 flex flex-col p-3.5 justify-between">
          {/* Mockup Internal Header */}
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-1">
              <div 
                className="w-3.5 h-3.5 rounded flex items-center justify-center text-[7px] font-black text-white"
                style={{ backgroundColor: project.color }}
              >
                D
              </div>
              <span className="text-[8px] font-extrabold text-white">{project.title.split(' ')[0]}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="px-1.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-[6px] font-extrabold text-green-400">
                LIVE
              </div>
            </div>
          </div>

          {/* Project Info Block */}
          <div className="my-1.5">
            <div className="text-xs font-black leading-tight text-white uppercase tracking-tight line-clamp-1">
              {project.title}
            </div>
            <div className="text-[7px] font-bold uppercase tracking-wider mt-0.5" style={{ color: project.color }}>
              {project.category}
            </div>
          </div>

          {/* Metrics & Analytics visualization */}
          <div className="grid grid-cols-2 gap-2 my-1.5">
            <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 flex flex-col justify-between">
              <span className="text-[6px] font-medium text-dark-300">Lượt truy cập</span>
              <span className="text-[9px] font-bold text-white mt-0.5">14.2k</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 flex flex-col justify-between">
              <span className="text-[6px] font-medium text-dark-300">Tỉ lệ Bounce</span>
              <span className="text-[9px] font-bold mt-0.5" style={{ color: project.color }}>28%</span>
            </div>
          </div>

          {/* Chart SVG */}
          <div className="h-9 w-full bg-white/5 border border-white/5 rounded-lg p-1 mt-auto flex items-end">
            <svg className="w-full h-full" viewBox="0 0 100 30" fill="none">
              <path 
                d="M0 25 Q 15 10, 30 20 T 60 5 T 90 15 T 100 8" 
                stroke={project.color} 
                strokeWidth="2" 
                strokeLinecap="round" 
              />
              <path 
                d="M0 25 Q 15 10, 30 20 T 60 5 T 90 15 T 100 8 L 100 30 L 0 30 Z" 
                fill={project.color}
                fillOpacity="0.05"
              />
            </svg>
          </div>
        </div>
      </div>
    )
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      onError={() => setImageError(true)}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  )
}

export default function ProjectsSection({ preview = false }) {
  const [selectedFilter, setSelectedFilter] = useState('Tất cả')

  const baseProjects = preview ? projects.slice(0, 6) : projects

  const filteredProjects = baseProjects.filter((project) => {
    if (selectedFilter === 'Tất cả') return true
    if (selectedFilter === 'Website') return project.category.toLowerCase().includes('website')
    if (selectedFilter === 'Web App & Nền tảng') return project.category.toLowerCase().includes('nền tảng') || project.category.toLowerCase().includes('quản trị')
    if (selectedFilter === 'Ứng dụng di động') return project.category.toLowerCase().includes('ứng dụng') || project.category.toLowerCase().includes('mobile')
    return true
  })

  return (
    <section id="projects" className="py-20 lg:py-28 bg-transparent relative overflow-hidden scroll-mt-28">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-50/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-10" />

      <div className="container-max section-padding relative">
        <SectionHeading
          label="Dự án"
          title="Dự án tiêu biểu"
          description="Một số dự án nổi bật mà chúng tôi đã thực hiện cho khách hàng trong nhiều lĩnh vực khác nhau."
        />

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {['Tất cả', 'Website', 'Web App & Nền tảng', 'Ứng dụng di động'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-primary-red to-deep-red text-white shadow-lg shadow-primary-red/25 border border-transparent'
                  : 'bg-white/5 backdrop-blur text-slate-300 border border-white/10 hover:border-primary-red/30 hover:text-white hover:bg-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div
          data-reveal-group
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              data-reveal-item
              className="group relative blended-tech-card blended-tech-card-hover rounded-[28px] overflow-hidden cursor-pointer"
            >
              {/* Image / Fallback mockup */}
              <div className="relative h-48 overflow-hidden bg-white/5">
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.04]">
                  <ProjectThumbnail project={project} />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0D0D0D]/75 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                  <button className="px-5 py-2.5 bg-gradient-to-r from-primary-red to-deep-red text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-primary-red/20 transition-all duration-200 scale-90 group-hover:scale-100">
                    <ExternalLink className="w-4 h-4" />
                    Xem chi tiết
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: project.color }}
                  />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-white/5 text-slate-300 text-[11px] font-semibold rounded-lg border border-white/5 group-hover:bg-primary-red/15 group-hover:text-white transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
