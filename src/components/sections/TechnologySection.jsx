import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { 
  SiMongodb, 
  SiGit, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiPython, 
  SiReact, 
  SiLaravel, 
  SiVuedotjs, 
  SiAngular, 
  SiDocker 
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const technologies = [
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#111827' },
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Laravel', Icon: SiLaravel, color: '#FF2D20' },
  { name: 'Vue', Icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'Angular', Icon: SiAngular, color: '#DD0031' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
]

export default function TechnologySection() {
  // Duplicate for seamless marquee loop
  const doubledTech = [...technologies, ...technologies]

  return (
    <section className="py-20 lg:py-28 bg-transparent relative overflow-hidden scroll-mt-28">
      <div className="container-max section-padding">
        <Reveal>
          <SectionHeading
            label="Công nghệ"
            title="Công nghệ chúng tôi sử dụng"
            description="Chúng tôi áp dụng những công nghệ hiện đại, mạnh mẽ nhất để xây dựng sản phẩm bền vững và hiệu suất cao."
          />
        </Reveal>
      </div>

      {/* Marquee */}
      <Reveal y={30} delay={0.15}>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="animate-marquee flex items-center gap-6 w-max">
              {doubledTech.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex items-center gap-3.5 px-6 py-3.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-md hover:border-primary-red/20 hover:-translate-y-[2px] hover:scale-[1.015] hover:bg-white/10 hover:shadow-[0_10px_20px_-10px_rgba(237,28,36,0.15)] transition-all duration-300 cursor-pointer group shrink-0"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:rotate-6"
                    style={{ color: tech.color }}
                  >
                    <tech.Icon className="w-8 h-8 transition-transform duration-300" aria-hidden="true" />
                  </div>
                  <span className="text-white font-bold text-sm whitespace-nowrap transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Static grid for mobile (visible below marquee) */}
      <div className="container-max section-padding mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 md:hidden"
        >
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2.5 px-4 py-2.5 bg-white/5 backdrop-blur border border-white/10 rounded-xl shadow-sm hover:border-primary-red/35 hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 transition-all duration-300"
            >
              <div
                className="w-7 h-7 flex items-center justify-center shrink-0"
                style={{ color: tech.color }}
              >
                <tech.Icon className="w-5.5 h-5.5" aria-hidden="true" />
              </div>
              <span className="text-slate-200 font-semibold text-xs">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
