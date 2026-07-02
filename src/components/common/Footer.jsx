import { contactInfo } from '../../data/company'

export default function Footer() {
  return (
    <footer className="fixed bottom-4 left-6 z-40 select-none hidden sm:flex items-center gap-6 text-[9px] font-bold text-slate-500 uppercase tracking-widest opacity-60">
      <div>
        © 2024 DUDI Software
      </div>
      <div className="w-1 h-1 rounded-full bg-slate-800" />
      <div>
        Hotline: <a href={`tel:${contactInfo.hotline.replace(/[^+\d]/g, '')}`} className="text-slate-400 hover:text-primary-red transition-colors">{contactInfo.hotline}</a>
      </div>
      <div className="w-1 h-1 rounded-full bg-slate-800" />
      <div>
        Website: <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-red transition-colors">dudisoftware.com</a>
      </div>
    </footer>
  )
}
