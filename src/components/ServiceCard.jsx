import {
  Printer,
  Scissors,
  Shirt,
  Briefcase,
  PanelTop,
  Gift,
  HardHat,
  Palette,
  ArrowRight,
} from 'lucide-react'

const iconMap = {
  'digital-printing': Printer,
  'custom-embroidery': Scissors,
  'tshirt-printing': Shirt,
  'corporate-branding': Briefcase,
  'large-format': PanelTop,
  'promotional-products': Gift,
  'uniform-workwear': HardHat,
  'graphic-design': Palette,
}

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.id] || Printer

  return (
    <article className="card-surface group flex h-full flex-col p-6 transition hover:border-brand-blue/30 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition group-hover:bg-brand-red/10 group-hover:text-brand-red">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-brand-black">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">{service.short}</p>
      <a
        href={`#quote`}
        onClick={() => {
          // pre-select via hash query is optional; form can be filled manually
          sessionStorage.setItem('vegas-preferred-service', service.title)
        }}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
      >
        Request This Service
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
      </a>
    </article>
  )
}
