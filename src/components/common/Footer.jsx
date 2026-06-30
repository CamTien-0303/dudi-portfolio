import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ExternalLink, Globe } from 'lucide-react'
import { contactInfo, services } from '../../data/company'
import Reveal from './Reveal'
import { motion } from 'framer-motion'

const quickLinks = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Giới thiệu', href: '/about' },
  { label: 'Năng lực', href: '/services' },
  { label: 'Quy trình', href: '/process' },
  { label: 'Dự án', href: '/projects' },
  { label: 'Liên hệ', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-transparent text-slate-300 relative overflow-hidden">
      <div className="container-max section-padding pt-16 pb-12 relative z-10">
        
        {/* CTA Card */}
        <Reveal>
          <div className="relative mb-16 overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#ed1c24_0%,#dc1822_45%,#b91c1c_100%)] py-9 px-6 sm:px-12 text-center text-white shadow-xl shadow-primary-500/20 border border-white/10 group">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_0)] bg-[size:16px_16px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none -z-10" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight">
                Sẵn sàng xây dựng website chuyên nghiệp cho doanh nghiệp của bạn?
              </h3>
              <p className="text-white/85 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                DUDI Software đồng hành cùng bạn từ khâu tư vấn, thiết kế UI/UX đến vận hành kỹ thuật và tối ưu tăng doanh số bền vững.
              </p>
              <div className="flex flex-wrap justify-center gap-3.5 pt-2">
                <Link
                  to="/contact"
                  className="px-6 py-2.5 bg-white text-primary-red font-extrabold text-sm rounded-xl shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-red/10 active:translate-y-0 active:scale-95 transition-all duration-300 cursor-pointer inline-flex items-center justify-center"
                >
                  Nhận tư vấn ngay
                </Link>
                <Link
                  to="/services"
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-white font-extrabold text-sm rounded-xl border border-white/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 cursor-pointer inline-flex items-center justify-center"
                >
                  Xem dịch vụ
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Main Footer Links Container Card */}
        <Reveal delay={0.1}>
          <div className="blended-tech-card p-8 lg:p-12 shadow-[0_12px_40px_-8px_rgba(237,28,36,0.08)]">
            <motion.div
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08 }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-10"
            >
              {/* Company Info */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                className="lg:col-span-1"
              >
                <Link to="/" className="flex items-center mb-5 group">
                  <img src="/logo-dudi.png" alt="DUDI Software" className="h-8 lg:h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-200" />
                </Link>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Công ty công nghệ tại TP.HCM, chuyên thiết kế, phát triển và chăm sóc website cho doanh nghiệp dịch vụ vừa và nhỏ.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={contactInfo.fanpage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-primary-red hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-md hover:shadow-primary-red/10 flex items-center justify-center transition-all duration-300 group"
                  >
                    <ExternalLink className="w-4 h-4 transition-colors duration-300" />
                  </a>
                  <a
                    href={contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-primary-red hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-md hover:shadow-primary-red/10 flex items-center justify-center transition-all duration-300 group"
                  >
                    <Globe className="w-4 h-4 transition-colors duration-300" />
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-primary-red hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-md hover:shadow-primary-red/10 flex items-center justify-center transition-all duration-300 group"
                  >
                    <Mail className="w-4 h-4 transition-colors duration-300" />
                  </a>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
              >
                <h3 className="text-white font-semibold tracking-wide text-xs uppercase mb-6">
                  Liên kết nhanh
                </h3>
                <ul className="space-y-3.5">
                  {quickLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="text-slate-300 text-sm hover:text-primary-red transition-colors duration-300 inline-flex items-center gap-2 group cursor-pointer"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-red/20 group-hover:bg-primary-red transition-all duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
              >
                <h3 className="text-white font-semibold tracking-wide text-xs uppercase mb-6">
                  Năng lực
                </h3>
                <ul className="space-y-3.5">
                  {services.slice(0, 6).map((service) => (
                    <li key={service.id}>
                      <Link
                        to="/services"
                        className="text-slate-300 text-sm hover:text-primary-red transition-colors duration-300 inline-flex items-center gap-2 group cursor-pointer"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-red/20 group-hover:bg-primary-red transition-all duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{service.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
              >
                <h3 className="text-white font-semibold tracking-wide text-xs uppercase mb-6">
                  Liên hệ
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`tel:${contactInfo.hotline.replace(/[^+\d]/g, '')}`}
                      className="flex items-start gap-3 text-slate-300 text-sm hover:text-primary-red transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-red group-hover:border-transparent transition-all duration-300">
                        <Phone className="w-3.5 h-3.5 text-primary-red group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-medium mt-1">{contactInfo.hotline}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-start gap-3 text-slate-300 text-sm hover:text-primary-red transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-red group-hover:border-transparent transition-all duration-300">
                        <Mail className="w-3.5 h-3.5 text-primary-red group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-medium mt-1">{contactInfo.email}</span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-primary-red" />
                    </div>
                    <span className="font-medium mt-1">TP. Hồ Chí Minh, Việt Nam</span>
                  </li>
                  <li>
                    <a
                      href={contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-slate-300 text-sm hover:text-primary-red transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-red group-hover:border-transparent transition-all duration-300">
                        <ExternalLink className="w-3.5 h-3.5 text-primary-red group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-medium mt-1">dudisoftware.com</span>
                    </a>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} DUDI Software. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs">
                Thiết kế & phát triển bởi DUDI Software
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
