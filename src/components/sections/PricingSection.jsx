import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { pricingCategories } from '../../data/pricing'
import SectionHeading from '../common/SectionHeading'
import { Check, Star, ArrowRight } from 'lucide-react'

export default function PricingSection({ preview = false }) {
  const [activeCategory, setActiveCategory] = useState(pricingCategories[0].id)
  const activePricing = pricingCategories.find((c) => c.id === activeCategory)

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-transparent relative overflow-hidden scroll-mt-28">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary-50/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="container-max section-padding relative">
        <SectionHeading
          label="Bảng giá"
          title="Bảng giá dịch vụ"
          description="Chọn gói dịch vụ phù hợp với quy mô và ngân sách doanh nghiệp của bạn."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {pricingCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${activeCategory === category.id
                  ? 'bg-primary-red text-white shadow-lg shadow-primary-red/25 border border-transparent'
                  : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-primary-red/10 hover:text-primary-red hover:border-transparent'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            data-reveal-group
            className="pricing-grid grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {activePricing?.plans.map((plan) => {
              const isPopular = plan.popular

              return (
                <div
                  key={plan.name}
                  data-reveal-item
                  className={`pricing-card blended-tech-card relative p-8 flex flex-col justify-between h-full ${isPopular
                      ? 'border-2 border-primary-red shadow-xl shadow-primary-red/14 scale-[1.01] z-10'
                      : 'z-0'
                    }`}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="popular-badge inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary-red text-white text-xs font-bold rounded-full shadow-lg shadow-primary-red/30 transition-all duration-300">
                        <Star className="w-3 h-3 fill-current" />
                        Phổ biến
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="text-center mb-6">
                      <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${isPopular ? 'text-primary-red' : 'text-white'
                        }`}>
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className={`text-3xl lg:text-4xl font-extrabold tracking-tight transition-colors duration-300 ${isPopular ? 'text-primary-red' : 'text-white'
                          }`}>
                          {plan.price}
                        </span>
                        {plan.unit && (
                          <span className="text-slate-400 text-sm ml-1 font-semibold">{plan.unit}</span>
                        )}
                      </div>
                      {plan.period && (
                        <span className="text-slate-400 text-sm font-medium">{plan.period}</span>
                      )}
                    </div>

                    <div className="border-t border-white/10 pt-6 mb-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm">
                            <Check className={`pricing-check w-4 h-4 mt-0.5 shrink-0 transition-colors duration-300 ${isPopular ? 'text-primary-red' : 'text-primary-red/80'
                              }`} />
                            <span className="text-slate-300 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const element = document.getElementById('contact')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`pricing-btn w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 active:translate-y-0 cursor-pointer ${isPopular
                        ? 'bg-primary-red text-white hover:bg-deep-red shadow-lg shadow-primary-red/20'
                        : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/20'
                      }`}
                  >
                    {plan.price === 'Liên hệ' ? 'Liên hệ báo giá' : 'Chọn gói này'}
                    <ArrowRight className="arrow-icon w-4 h-4 transition-transform duration-300" />
                  </button>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        <p
          data-reveal
          className="text-center text-slate-400 text-sm mt-10"
        >
          * Giá trên là giá tham khảo. Liên hệ để nhận báo giá chi tiết theo yêu cầu cụ thể.
        </p>
      </div>
    </section>
  )
}
