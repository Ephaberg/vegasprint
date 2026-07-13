import { FileText, Phone, MessageCircle } from 'lucide-react'
import { getPhoneLink, getWhatsAppLink } from '../data/company'

export default function CTABanner() {
  const phone = getPhoneLink()
  const wa = getWhatsAppLink('Hello, I would like to start a project with Vegas Digital Prints.')

  return (
    <section className="relative overflow-hidden bg-brand-red py-14 sm:py-16" aria-labelledby="cta-heading">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #1e5fd4 0%, transparent 45%), radial-gradient(circle at 80% 50%, #0a0a0c 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />
      <div className="container-page relative text-center">
        <h2 id="cta-heading" className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Bring Your Next Project to Life?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-white/90">
          Tell us about your idea — printing, embroidery or full branding — and we will help you
          shape a clear next step.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#quote" className="btn-ghost min-w-[11rem]">
            <FileText className="h-4 w-4" aria-hidden="true" />
            Request a Quote
          </a>
          {phone ? (
            <a href={phone} className="btn-outline min-w-[11rem]">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Us
            </a>
          ) : (
            <a href="#contact" className="btn-outline min-w-[11rem]">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Us
            </a>
          )}
          {wa ? (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-outline min-w-[11rem]">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Us
            </a>
          ) : (
            <a href="#contact" className="btn-outline min-w-[11rem]">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Us
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
