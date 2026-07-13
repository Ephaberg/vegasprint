export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <div className={`mb-10 flex max-w-3xl flex-col sm:mb-12 ${alignClass} ${className}`}>
      {label ? (
        <p className={`section-label mb-3 ${light ? 'text-brand-red-light' : ''}`}>{label}</p>
      ) : null}
      <h2
        className={`text-3xl leading-tight sm:text-4xl ${
          light ? 'text-white' : 'text-brand-black'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/85' : 'text-brand-muted'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
