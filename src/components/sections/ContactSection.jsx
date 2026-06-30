import { useState } from 'react'
import { motion } from 'framer-motion'
import { contactInfo, services } from '../../data/company'
import { Send, Phone, Mail, Globe, Clock, ExternalLink, CheckCircle } from 'lucide-react'

const contactDetails = [
  { icon: Phone, label: 'Hotline', value: contactInfo.hotline, href: `tel:${contactInfo.hotline.replace(/[^+\d]/g, '')}` },
  { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Globe, label: 'Website', value: 'dudisoftware.com', href: contactInfo.website },
  { icon: ExternalLink, label: 'Fanpage', value: 'DUDI Software', href: contactInfo.fanpage },
  { icon: Clock, label: 'Giờ làm việc', value: contactInfo.workingHours, href: null },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập họ tên'
    if (!formData.phone.trim()) newErrors.phone = 'Vui lòng nhập số điện thoại'
    else if (!/^[0-9+\-() ]{9,15}$/.test(formData.phone.trim())) newErrors.phone = 'Số điện thoại không hợp lệ'
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email không hợp lệ'
    if (!formData.message.trim()) newErrors.message = 'Vui lòng nhập nội dung'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', service: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-24 bg-transparent relative overflow-hidden scroll-mt-28">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 opacity-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 opacity-10" />

      <div className="container-max section-padding relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-red/10 border border-primary-red/20 text-primary-red text-xs font-semibold uppercase tracking-wider mb-4">
            Liên hệ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-4">
            Sẵn sàng xây dựng website<br />cho doanh nghiệp của bạn?
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Hãy để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí trong 24h.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="blended-tech-card p-7 lg:p-9 shadow-xl shadow-red-500/5">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Gửi thành công!</h3>
                  <p className="text-slate-300">Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất.</p>
                </motion.div>
              ) : (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-slate-300 text-sm font-medium mb-2">
                        Họ tên <span className="text-primary-red">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nguyễn Văn A"
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-all ${
                          errors.name ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-slate-300 text-sm font-medium mb-2">
                        Số điện thoại <span className="text-primary-red">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0909 163 821"
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-all ${
                          errors.phone ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-email" className="block text-slate-300 text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-all ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="block text-slate-300 text-sm font-medium mb-2">
                        Dịch vụ quan tâm
                      </label>
                      <div className="relative">
                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-all cursor-pointer"
                        >
                          <option value="" className="bg-[#141414] text-white">Chọn dịch vụ</option>
                          {services.map((s) => (
                            <option key={s.id} value={s.title} className="bg-[#141414] text-white">
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-slate-300 text-sm font-medium mb-2">
                      Nội dung <span className="text-primary-red">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Mô tả ngắn về dự án hoặc nhu cầu của bạn..."
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-all resize-none ${
                        errors.message ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-red text-white font-bold rounded-xl hover:bg-deep-red transition-all duration-300 hover:shadow-xl hover:shadow-primary-red/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Gửi yêu cầu
                  </button>
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            {contactDetails.map((item) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
                className="group"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-5 blended-tech-card blended-tech-card-hover block"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary-red/10 flex items-center justify-center shrink-0 group-hover:bg-primary-red/20 transition-all duration-300 group-hover:scale-105">
                      <item.icon className="w-5 h-5 text-primary-red" />
                    </div>
                    <div>
                      <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 text-xs font-semibold uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="text-slate-200 group-hover:text-white transition-colors duration-300 text-sm font-bold">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-5 blended-tech-card blended-tech-card-hover cursor-pointer group">
                    <div className="w-11 h-11 rounded-xl bg-primary-red/10 flex items-center justify-center shrink-0 group-hover:bg-primary-red/20 transition-all duration-300 group-hover:scale-105">
                      <item.icon className="w-5 h-5 text-primary-red" />
                    </div>
                    <div>
                      <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 text-xs font-semibold uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="text-slate-200 group-hover:text-white transition-colors duration-300 text-sm font-bold">{item.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
