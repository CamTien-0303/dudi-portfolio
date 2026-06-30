import React from 'react'
import { processSteps } from '../../data/company'
import SectionHeading from '../common/SectionHeading'

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-transparent relative overflow-hidden scroll-mt-28">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary-50/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-20" />

      <div className="container-max section-padding relative">
        <SectionHeading
          label="Quy trình"
          title="Quy trình làm việc chuyên nghiệp"
          description="7 bước triển khai dự án minh bạch, giúp bạn yên tâm từ khi bắt đầu đến khi bàn giao."
        />

        {/* Desktop - Horizontal zigzag timeline */}
        <div className="hidden xl:block overflow-x-auto pb-6 -mx-4 px-4 scrollbar-thin">
          <div className="relative min-w-[1200px]">
            {/* Grid with 3 rows: Top cards, Dots, Bottom cards */}
            <div data-reveal-group className="grid grid-cols-7 grid-rows-[auto_56px_auto] gap-x-4 relative">

              {/* Connection line container inside Row 2 */}
              <div className="col-span-7 row-start-2 relative flex items-center z-0 pointer-events-none">
                <div className="w-full h-[2px] bg-gradient-to-r from-red-100/10 via-primary-red to-red-100/10" />
              </div>

              {processSteps.map((step, index) => {
                const isTop = index % 2 === 0
                const colIndex = index + 1

                return (
                  <React.Fragment key={step.step}>
                    {/* Row 1: Top Card Cell */}
                    {isTop ? (
                      <div
                        data-reveal-item
                        style={{ gridColumnStart: colIndex, gridRowStart: 1 }}
                        className="flex flex-col justify-end items-center pb-8 relative group"
                      >
                        {/* Card */}
                        <div className="blended-tech-card blended-tech-card-hover p-5 text-center w-full z-20">
                          <h4 className="font-bold text-white text-xs sm:text-sm mb-2 transition-colors leading-tight duration-300">
                            {step.title}
                          </h4>
                          <p className="text-slate-300 transition-colors duration-300 text-[11px] sm:text-xs leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                        {/* Connector line */}
                        <div className="absolute bottom-0 left-1/2 w-[2px] h-8 bg-gradient-to-b from-primary-red/70 to-primary-red/10 -translate-x-1/2 z-10" />
                      </div>
                    ) : (
                      // Empty spacer cell
                      <div style={{ gridColumnStart: colIndex, gridRowStart: 1 }} />
                    )}

                    {/* Row 2: Step Dot Cell */}
                    <div
                      data-reveal-item
                      style={{ gridColumnStart: colIndex, gridRowStart: 2 }}
                      className="flex justify-center items-center z-20 group"
                    >
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-red to-deep-red flex items-center justify-center text-white text-sm font-black shadow-lg shadow-primary-red/25 ring-4 ring-[#141414] group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>
                    </div>

                    {/* Row 3: Bottom Card Cell */}
                    {!isTop ? (
                      <div
                        data-reveal-item
                        style={{ gridColumnStart: colIndex, gridRowStart: 3 }}
                        className="flex flex-col justify-start items-center pt-8 relative group"
                      >
                        {/* Connector line */}
                        <div className="absolute top-0 left-1/2 w-[2px] h-8 bg-gradient-to-t from-primary-red/70 to-primary-red/10 -translate-x-1/2 z-10" />
                        {/* Card */}
                        <div className="blended-tech-card blended-tech-card-hover p-5 text-center w-full z-20">
                          <h4 className="font-bold text-white text-xs sm:text-sm mb-2 transition-colors leading-tight duration-300">
                            {step.title}
                          </h4>
                          <p className="text-slate-300 transition-colors duration-300 text-[11px] sm:text-xs leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      // Empty spacer cell
                      <div style={{ gridColumnStart: colIndex, gridRowStart: 3 }} />
                    )}
                  </React.Fragment>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile - Vertical timeline */}
        <div className="xl:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-7 bottom-7 w-[2px] bg-gradient-to-b from-primary-red via-primary-red/50 to-primary-red/10" />

          <div
            data-reveal-group
            className="space-y-6"
          >
            {processSteps.map((step) => (
              <div
                key={step.step}
                data-reveal-item
                className="flex items-start gap-5 relative group"
              >
                {/* Step number circle */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-red to-deep-red flex items-center justify-center text-white text-sm font-black shadow-lg shadow-primary-red/20 ring-4 ring-primary-red/10 shrink-0 z-10 group-hover:scale-105 transition-transform duration-300">
                  {step.step}
                </div>

                {/* Card */}
                <div className="blended-tech-card blended-tech-card-hover p-5 flex-1">
                  <h4 className="font-bold text-white mb-1.5 transition-colors duration-300 text-sm sm:text-base">
                    {step.title}
                  </h4>
                  <p className="text-slate-300 transition-colors duration-300 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
