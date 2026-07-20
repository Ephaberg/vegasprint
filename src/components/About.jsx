import { Award, Eye, HeartHandshake, Lightbulb, Target } from 'lucide-react'
import { brandValues, visionMission } from '../data/content'
import SectionHeading from './SectionHeading'
import Logo from './Logo'

const valueIcons = {
  quality: Award,
  creative: Lightbulb,
  service: HeartHandshake,
}

const visionIcons = {
  vision: Eye,
  mission: Target,
}

export default function About() {
  return (
    <section className="section-padding bg-white" aria-labelledby="about-heading">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              label="About the Company"
              title="Vegas Digital Prints"
              className="mb-6"
            />
            <h1 id="about-heading" className="sr-only">
              About Vegas Digital Prints
            </h1>
            <p className="text-base leading-relaxed text-brand-muted sm:text-lg">
              Vegas Digital Prints grew from the Vegas Batik Tie and Dye Training Center, a textile
              skills center established in the early 2000s and registered in 2021. The company began
              with batik, tie-dye and textile training, then expanded into modern digital production.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              Today, the business offers embroidery works, DTF printing, sublimation, digital cloth
              printing, batik and tie-dye training for individuals, schools, churches, organisations
              and corporate institutions.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-brand-border shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80"
                alt="Textile materials and apparel prepared for custom design work"
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
                <h2 className="text-base font-semibold text-brand-black">{value.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{value.text}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {visionMission.map((item) => {
            const Icon = visionIcons[item.id] || Eye
            return (
              <article key={item.id} className="card-surface p-6 sm:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-semibold text-brand-black">{item.title}</h2>
                </div>
                <p className="text-sm leading-relaxed text-brand-muted sm:text-base">{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
