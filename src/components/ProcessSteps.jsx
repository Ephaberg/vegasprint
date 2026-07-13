import { MessageSquare, Palette, FileCheck2, PackageCheck } from 'lucide-react'
import { processSteps } from '../data/content'
import SectionHeading from './SectionHeading'

const icons = [MessageSquare, Palette, FileCheck2, PackageCheck]

export default function ProcessSteps() {
  return (
    <section
      id="how-it-works"
      className="section-padding bg-brand-grey"
      aria-labelledby="process-heading"
    >
      <div className="container-page">
        <SectionHeading
          label="How It Works"
          title="A Clear Path From Idea to Finished Product"
          description="Four straightforward steps so you always know what comes next."
        />
        <h2 id="process-heading" className="sr-only">
          How It Works
        </h2>

        <ol className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {/* Desktop connector line */}
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-0.5 bg-brand-border xl:block"
            aria-hidden="true"
          />

          {processSteps.map((step, index) => {
            const Icon = icons[index] || MessageSquare
            return (
              <li key={step.step} className="relative card-surface p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white shadow-sm ring-4 ring-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                    Step {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-brand-black">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{step.text}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
