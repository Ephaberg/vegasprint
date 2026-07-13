import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Instagram,
  Facebook,
} from 'lucide-react'
import { company, getEmailLink, getPhoneLink, getWhatsAppLink } from '../data/company'
import SectionHeading from './SectionHeading'

function Placeholder({ children }) {
  return (
    <span className="rounded bg-amber-50 px-1.5 py-0.5 text-amber-900 ring-1 ring-amber-200">
      {children}
    </span>
  )
}

function TikTokIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.8a4.84 4.84 0 0 1-1-.11z" />
    </svg>
  )
}

export default function ContactSection() {
  const phone = getPhoneLink()
  const email = getEmailLink()
  const wa = getWhatsAppLink()

  return (
    <section id="contact" className="section-padding bg-brand-grey" aria-labelledby="contact-heading">
      <div className="container-page">
        <SectionHeading
          label="Contact"
          title="Contact and Location"
          description="Editable placeholders are shown until management confirms official contact details and creates a Google Business Profile."
        />
        <h2 id="contact-heading" className="sr-only">
          Contact and Location
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card-surface space-y-6 p-6 sm:p-8">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-brand-black">Business address</h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-muted">
                  <Placeholder>{company.address.line1}</Placeholder>
                  <br />
                  <Placeholder>{company.address.line2}</Placeholder>
                  <br />
                  <Placeholder>{company.address.city}</Placeholder>, {company.address.region}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-brand-black">Telephone</h3>
                <p className="mt-1 text-sm text-brand-muted">
                  {phone ? (
                    <a href={phone} className="font-medium text-brand-blue hover:underline">
                      {company.contact.phone}
                    </a>
                  ) : (
                    <Placeholder>{company.contact.phone}</Placeholder>
                  )}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-brand-black">WhatsApp</h3>
                <p className="mt-1 text-sm text-brand-muted">
                  {wa ? (
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-brand-blue hover:underline"
                    >
                      {company.contact.whatsapp}
                    </a>
                  ) : (
                    <Placeholder>{company.contact.whatsapp}</Placeholder>
                  )}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-brand-black">Email</h3>
                <p className="mt-1 text-sm text-brand-muted">
                  {email ? (
                    <a href={email} className="font-medium text-brand-blue hover:underline">
                      {company.contact.email}
                    </a>
                  ) : (
                    <Placeholder>{company.contact.email}</Placeholder>
                  )}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-brand-black">Opening hours</h3>
                <ul className="mt-1 space-y-1 text-sm text-brand-muted">
                  {company.hours.map((row) => (
                    <li key={row.day} className="flex flex-wrap gap-x-2">
                      <span className="font-medium text-brand-ink">{row.day}:</span>
                      <Placeholder>{row.time}</Placeholder>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-brand-black">Social media</h3>
              <ul className="mt-3 flex flex-wrap gap-3">
                <li>
                  {company.social.instagram ? (
                    <a
                      href={company.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-brand-border bg-white px-3 py-2 text-sm font-medium text-brand-ink hover:border-brand-blue"
                    >
                      <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-brand-border px-3 py-2 text-sm text-brand-muted">
                      <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram placeholder
                    </span>
                  )}
                </li>
                <li>
                  {company.social.facebook ? (
                    <a
                      href={company.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-brand-border bg-white px-3 py-2 text-sm font-medium text-brand-ink hover:border-brand-blue"
                    >
                      <Facebook className="h-4 w-4" aria-hidden="true" /> Facebook
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-brand-border px-3 py-2 text-sm text-brand-muted">
                      <Facebook className="h-4 w-4" aria-hidden="true" /> Facebook placeholder
                    </span>
                  )}
                </li>
                <li>
                  {company.social.tiktok ? (
                    <a
                      href={company.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-brand-border bg-white px-3 py-2 text-sm font-medium text-brand-ink hover:border-brand-blue"
                    >
                      <TikTokIcon className="h-4 w-4" /> TikTok
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-brand-border px-3 py-2 text-sm text-brand-muted">
                      <TikTokIcon className="h-4 w-4" /> TikTok placeholder
                    </span>
                  )}
                </li>
              </ul>
            </div>
          </div>

          <div className="card-surface flex min-h-[320px] flex-col overflow-hidden">
            <div className="flex flex-1 flex-col items-center justify-center bg-brand-charcoal px-6 py-12 text-center">
              <MapPin className="h-10 w-10 text-brand-red" aria-hidden="true" />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/85">
                Google Maps location will appear here after the company confirms its official
                address and creates its Google Business Profile.
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-white/50">
                Map placeholder
              </p>
            </div>
            {company.address.mapsLink ? (
              <a
                href={company.address.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-t border-brand-border px-4 py-3 text-center text-sm font-semibold text-brand-blue hover:underline"
              >
                Open in Google Maps
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
