import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import { ExternalLink, Archive } from 'lucide-react'
import ProjectArchive from '../components/ProjectArchive'

// CSS Mockup rendering inspired by the earlier project page style
function ProjectMockup({ project, index, activeIdx }) {
  const isActive = activeIdx === index
  
  return (
    <motion.div
      className={`absolute rounded-2xl border transition-all duration-500 overflow-hidden shadow-2xl ${
        isActive 
          ? 'z-30 border-primary-red/40 shadow-primary-red/10 scale-105' 
          : 'z-10 border-white/5 opacity-40 hover:opacity-70 scale-95'
      }`}
      style={{
        width: '280px',
        height: '380px',
        // Position them overlapping in an offset stack
        top: `${idxToTop(index, activeIdx)}px`,
        left: `${idxToLeft(index, activeIdx)}px`,
        background: `linear-gradient(135deg, #0A0A0A 0%, #121212 50%, ${project.color}15 100%)`
      }}
      layout
    >
      {/* Browser Bar */}
      <div className="h-6 bg-white/5 border-b border-white/10 flex items-center px-3 gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
        <span className="text-[7px] text-white/40 font-mono ml-2">dudi-app.com/{project.id}</span>
      </div>

      <div className="p-4 flex flex-col justify-between h-[354px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <span className="text-[8px] font-bold text-white uppercase tracking-widest">{project.category}</span>
          <span className="text-[8px] font-black text-white/20">#0{index + 1}</span>
        </div>

        {/* Content */}
        <div className="my-auto space-y-3">
          <h4 className="text-lg font-black text-white leading-tight uppercase">
            {project.title}
          </h4>
          <p className="text-[10px] text-slate-400 leading-relaxed line-clamp-4">
            {project.description}
          </p>
        </div>

        {/* Mock Analytics Chart */}
        <div className="space-y-2">
          <div className="flex justify-between text-[7px] font-bold text-slate-500">
            <span>PERFORMANCE</span>
            <span style={{ color: project.color }}>99.8%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full rounded-full" 
              style={{ backgroundColor: project.color }}
              initial={{ width: 0 }}
              animate={{ width: isActive ? '99%' : '30%' }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function idxToTop(idx, activeIdx) {
  // Overlapping logic offsets
  const diff = idx - activeIdx
  if (diff === 0) return 20
  if (diff === 1) return 60
  if (diff === -1) return -20
  return 80 * diff
}

function idxToLeft(idx, activeIdx) {
  const diff = idx - activeIdx
  if (diff === 0) return 40
  if (diff === 1) return 160
  if (diff === -1) return -80
  return 100 * diff
}

export default function ProjectsPage() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [archiveOpen, setArchiveOpen] = useState(false)
  // Limit to first 4 projects for clean mockup slide layout
  const displayProjects = projects.slice(0, 4)

  return (
    <div className="relative min-h-screen h-screen overflow-hidden flex items-center justify-center premium-rose-page-bg section-padding">
      
      <div className="container-max w-full flex flex-col justify-center h-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Projects List */}
          <div className="lg:col-span-5 space-y-6">
            {/* Section Indicator */}
            <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
              PROJECTS / <span className="text-primary-red">04-07</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none uppercase tracking-tight mb-8">
              Dự án tiêu biểu
            </h1>

            <div className="space-y-4">
              {displayProjects.map((project, idx) => {
                const isActive = activeIdx === idx
                return (
                  <button
                    key={project.id}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={() => setActiveIdx(idx)}
                    className="w-full text-left flex items-start gap-4 py-2 group cursor-pointer border-b border-white/5 pb-3"
                  >
                    <span className={`text-[10px] font-mono mt-1 ${
                      isActive ? 'text-primary-red font-bold' : 'text-slate-600'
                    }`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className={`text-base font-black uppercase tracking-wider transition-colors ${
                        isActive ? 'text-primary-red' : 'text-slate-400 group-hover:text-slate-200'
                      }`}>
                        {project.title}
                      </h3>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Archive trigger button */}
            <motion.button
              onClick={() => setArchiveOpen(true)}
              className="projects-archive-btn"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Archive size={14} className="projects-archive-btn-icon" />
              <span>Xem toàn bộ 300+ dự án</span>
            </motion.button>
          </div>

          {/* Right Column: Stacked overlapping Collage Wall */}
          <div className="lg:col-span-7 relative h-[420px] flex items-center justify-center">
            <div className="relative w-full max-w-lg h-full">
              {displayProjects.map((project, idx) => (
                <ProjectMockup 
                  key={project.id} 
                  project={project} 
                  index={idx} 
                  activeIdx={activeIdx} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen Archive Overlay */}
      <ProjectArchive isOpen={archiveOpen} onClose={() => setArchiveOpen(false)} />
    </div>
  )
}
