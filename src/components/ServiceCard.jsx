import { Link } from 'react-router-dom'
import {
  Printer,
  Scissors,
  Shirt,
  Briefcase,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'

const iconMap = {
  'embroidery-works': Scissors,
  'dtf-printing': Printer,
  'sublimation-printing': Shirt,
  'digital-cloth-printing': Printer,
  'batik-tie-dye-training': GraduationCap,
  'institutional-branding': Briefcase,
}

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.id] || Printer

  return (
    <article className="card-surface group flex h-full flex-col p-6 transition hover:border-brand-blue/30 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition group-hover:bg-brand-red/10 group-hover:text-brand-red">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h2 className="text-lg font-semibold text-brand-black">{service.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-brand-muted">{service.short}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">{service.description}</p>
      <Link
        to="/request"
        onClick={() => {
          sessionStorage.setItem('vegas-preferred-service', service.title)
        }}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
      >
        Request This Service
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </article>
  )
}
