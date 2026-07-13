import {
  Building2,
  GraduationCap,
  Church,
  PartyPopper,
  Trophy,
  Sparkles,
  User,
  HandHeart,
} from 'lucide-react'
import { customerSegments } from '../data/content'
import SectionHeading from './SectionHeading'

const icons = {
  businesses: Building2,
  schools: GraduationCap,
  churches: Church,
  events: PartyPopper,
  sports: Trophy,
  fashion: Sparkles,
  individuals: User,
  nonprofit: HandHeart,
}

export default function CustomersWeServe() {
  return (
    <section className="section-padding bg-white" aria-labelledby="customers-heading">
      <div className="container-page">
        <SectionHeading
          label="Who We Serve"
          title="Customers We Serve"
          description="Whether you need one gift item or coordinated branding for a whole organisation, we tailor production to your audience."
        />
        <h2 id="customers-heading" className="sr-only">
          Customers We Serve
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {customerSegments.map((segment) => {
            const Icon = icons[segment.id] || Building2
            return (
              <div
                key={segment.id}
                className="flex gap-3 rounded-xl border border-brand-border bg-brand-grey/50 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand-blue shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-brand-black">{segment.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-brand-muted sm:text-sm">
                    {segment.text}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
