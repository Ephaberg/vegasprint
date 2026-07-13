import { CheckCircle2 } from 'lucide-react'
import { whyChooseUs } from '../data/content'
import SectionHeading from './SectionHeading'

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-brand-charcoal text-white" aria-labelledby="why-heading">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              light
              label="Why Choose Us"
              title="Print and embroidery that communicate quality"
              className="mb-6"
            />
            <h2 id="why-heading" className="sr-only">
              Why Choose Us
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              Your brand deserves to be seen. We help transform your ideas into printed and
              embroidered products that communicate quality.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80"
                alt="Neatly arranged apparel ready for custom branding"
                className="aspect-[16/10] w-full object-cover opacity-90"
                loading="lazy"
                width={1000}
                height={625}
              />
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {whyChooseUs.map((item) => (
              <li
                key={item.id}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-red-light"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/70">{item.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
