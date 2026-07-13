import { Award, Lightbulb, HeartHandshake } from 'lucide-react'
import { brandValues } from '../data/content'
import SectionHeading from './SectionHeading'
import Logo from './Logo'

const valueIcons = {
  quality: Award,
  creative: Lightbulb,
  service: HeartHandshake,
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-white" aria-labelledby="about-heading">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              label="About Us"
              title="About Vegas Digital Prints"
              className="mb-6"
            />
            <h2 id="about-heading" className="sr-only">
              About Vegas Digital Prints
            </h2>
            <p className="text-base leading-relaxed text-brand-muted sm:text-lg">
              Vegas Digital Prints &amp; Embroidery provides creative printing, embroidery and
              branding solutions for individuals, schools, churches, organisations and businesses.
              We combine attention to detail with dependable production methods to transform ideas
              into professional finished products.
            </p>
            <p className="mt-4 text-sm text-brand-muted">
              <span className="font-medium text-brand-charcoal">Note for management: </span>
              Company history, founding year and milestones can be added here once confirmed. No
              unverified claims are shown on this demonstration site.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-brand-border shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80"
                alt="Professional workshop environment representing quality production standards"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                width={1000}
                height={750}
              />
            </div>
            <div className="absolute -bottom-5 -left-3 flex max-w-xs items-center rounded-xl border border-brand-border bg-white p-3 shadow-md sm:-left-6">
              <Logo height={44} decorative />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {brandValues.map((value) => {
            const Icon = valueIcons[value.id] || Award
            return (
              <div key={value.id} className="card-surface p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-brand-black">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{value.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
