import { Globe, MapPin, Search, Star } from 'lucide-react'
import { company } from '../data/company'
import SectionHeading from './SectionHeading'
import Logo from './Logo'

export default function DigitalPresenceSection() {
  return (
    <section className="section-padding bg-brand-grey" aria-labelledby="digital-heading">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              label="Digital Presence"
              title="Taking Great Printing Services Into the Digital Era"
              className="mb-6"
            />
            <h2 id="digital-heading" className="sr-only">
              Digital Presence
            </h2>
            <p className="text-base leading-relaxed text-brand-muted sm:text-lg">
              Customers increasingly search online before contacting a business. A professional
              website and Google Business Profile can make it easier for customers to discover
              Vegas Digital Prints &amp; Embroidery, view available services, locate the business
              and request quotations.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Appear when customers search for printing and embroidery nearby',
                'Show services, photos and opening hours in one place',
                'Make quotation requests simple from phone or laptop',
                'Build trust before the first phone call or WhatsApp message',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-brand-ink">
                  <Globe className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Concept business listing mock — intentionally not imitating Google UI */}
          <div>
            <p className="mb-3 text-center text-xs font-bold uppercase tracking-wider text-brand-red">
              Concept Preview — Not a Live Listing
            </p>
            <div className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-lg">
              <div className="border-b border-brand-border bg-brand-charcoal px-4 py-3">
                <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm text-white/80">
                  <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="truncate">printing embroidery near me · Ghana</span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex gap-4">
                  <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-xl border border-brand-border bg-white p-1.5">
                    <Logo height={48} decorative className="max-w-full" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-brand-black">{company.legalName}</p>
                    <p className="text-sm text-brand-muted">Printing · Embroidery · Branding</p>
                    <div className="mt-1 flex items-center gap-1 text-amber-500" aria-hidden="true">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star key={n} className="h-3.5 w-3.5 fill-current" />
                      ))}
                      <span className="ml-1 text-xs text-brand-muted">Reviews after launch</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2 rounded-xl bg-brand-grey p-4 text-sm text-brand-muted">
                  <p className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                    <span>
                      {company.address.line1}
                      <br />
                      {company.address.city}, {company.address.region}
                    </span>
                  </p>
                  <p className="text-xs text-brand-blue">
                    Official address and Google Business Profile details will appear here once
                    confirmed by management.
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue">
                    Get directions
                  </span>
                  <span className="rounded-full bg-brand-red/10 px-3 py-1 text-xs font-medium text-brand-red">
                    Call
                  </span>
                  <span className="rounded-full bg-brand-grey-mid px-3 py-1 text-xs font-medium text-brand-ink">
                    Request quote
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
