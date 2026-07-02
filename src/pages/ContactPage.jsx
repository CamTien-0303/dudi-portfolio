import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { contactInfo, services } from '../data/company'
import { Send, Phone, Mail, Globe, Clock, CheckCircle, Zap, FileText, Handshake, ArrowRight } from 'lucide-react'

const commitments = [
  { icon: Zap, text: 'Phản hồi nhanh trong giờ làm việc' },
  { icon: FileText, text: 'Tư vấn rõ phạm vi & chi phí' },
  { icon: Handshake, text: 'Đồng hành sau khi bàn giao' },
]

const contactItems = [
  { icon: Phone, label: 'Hotline', value: contactInfo.hotline, href: `tel:${contactInfo.hotline.replace(/[^+\d]/g, '')}` },
  { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Globe, label: 'Website', value: 'dudisoftware.com', href: contactInfo.website },
  { icon: Clock, label: 'Giờ làm việc', value: contactInfo.workingHours, href: null },
]

export default function ContactPage() {
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
    <div className="relative min-h-screen h-screen overflow-hidden flex items-center justify-center premium-rose-page-bg section-padding">
      
      {/* Background subtle orbit line */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[650px] h-[650px] rounded-full border border-primary-red/[0.04]" />
      </div>

      {/* Radial glow behind form area */}
      <div className="contact-glow-right" />

      <div className="container-max w-full flex flex-col justify-center h-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: CTA + Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Section Indicator */}
            <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
              CONTACT / <span className="text-primary-red">07-07</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-white leading-[1.05] uppercase tracking-tight">
                Bắt đầu<br />Dự án cùng DUDI
              </h1>
              <p className="contact-subtitle">
                Chia sẻ nhu cầu của bạn, DUDI Software sẽ tư vấn giải pháp phù hợp về website, web app và hệ thống số.
              </p>
            </div>

            {/* Commitments */}
            <div className="contact-commitments">
              {commitments.map((item, i) => (
                <motion.div
                  key={i}
                  className="contact-commit-item"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <item.icon size={13} className="contact-commit-icon" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Rail */}
            <div className="contact-rail">
              {contactItems.map((item, i) => {
                const content = (
                  <div className="contact-rail-item group" key={i}>
                    <div className="contact-rail-icon-box">
                      <item.icon size={15} />
                    </div>
                    <div className="contact-rail-text">
                      <span className="contact-rail-label">{item.label}</span>
                      <span className="contact-rail-value">{item.value}</span>
                    </div>
                  </div>
                )
                if (item.href) {
                  return <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">{content}</a>
                }
                return content
              })}
            </div>
          </div>

          {/* Right Column: Project Brief Form */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="contact-form-card">
              
              {/* Tech corner decorations */}
              <div className="contact-corner contact-corner-tl" />
              <div className="contact-corner contact-corner-br" />
              <span className="contact-form-tag">PROJECT REQUEST</span>
              <span className="contact-form-page">07 / 07</span>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Gửi thành công!</h3>
                    <p className="text-slate-400 text-sm max-w-xs">
                      Thông tin của bạn đã được tiếp nhận. Đội ngũ DUDI Software sẽ liên hệ lại trong thời gian sớm nhất.
                    </p>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Form header */}
                    <div className="contact-form-header">
                      <h3 className="contact-form-title">Gửi brief dự án</h3>
                      <p className="contact-form-hint">Thông tin càng rõ, tư vấn càng chính xác.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3.5">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Họ và tên *"
                          className={`contact-input ${errors.name ? 'contact-input-error' : ''}`}
                        />
                        {errors.name && <span className="contact-field-error">{errors.name}</span>}
                      </div>

                      <div>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Số điện thoại *"
                          className={`contact-input ${errors.phone ? 'contact-input-error' : ''}`}
                        />
                        {errors.phone && <span className="contact-field-error">{errors.phone}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3.5">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email (không bắt buộc)"
                        className={`contact-input ${errors.email ? 'contact-input-error' : ''}`}
                      />

                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="contact-input contact-select"
                      >
                        <option value="" className="bg-neutral-900">Chọn dịch vụ tư vấn</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title} className="bg-neutral-900">
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Chia sẻ yêu cầu dự án của bạn... *"
                        className={`contact-input contact-textarea ${errors.message ? 'contact-input-error' : ''}`}
                      />
                      {errors.message && <span className="contact-field-error">{errors.message}</span>}
                    </div>

                    <button type="submit" className="contact-submit-btn">
                      <span>Gửi yêu cầu tư vấn</span>
                      <ArrowRight size={16} className="contact-submit-arrow" />
                    </button>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
