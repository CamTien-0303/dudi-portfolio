export default function SectionHeading({ label, title, description, center = true, light = false }) {
  return (
    <div
      data-reveal-group
      className={`mb-12 lg:mb-16 ${center ? 'text-center max-w-3xl mx-auto' : ''}`}
    >
      {label && (
        <div className="mb-4" data-reveal-item>
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
            light
              ? 'bg-white/10 text-white/80'
              : 'bg-primary-50 text-primary-500 border border-primary-100'
          }`}>
            {label}
          </span>
        </div>
      )}
      <h2
        data-reveal-item
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-dark-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          data-reveal-item
          className={`text-base sm:text-lg leading-relaxed ${
            light ? 'text-white/70' : 'text-dark-500'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
