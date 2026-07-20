import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, MessageCircle, Printer, Scissors, Shirt } from 'lucide-react'
import { frontPageServices } from '../data/content'
import { getWhatsAppLink } from '../data/company'
import { useReducedMotion } from '../hooks/useReducedMotion'
import Logo from './Logo'

const icons = {
  'embroidery-works': Scissors,
  'dtf-printing': Printer,
  'sublimation-printing': Shirt,
}

export default function Hero() {
  const reduce = useReducedMotion()
  const wa = getWhatsAppLink(
    'Hello Vegas Digital Prints, I would like to discuss embroidery, DTF or sublimation work.',
  )

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-black pt-24 sm:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=1800&q=80"
          alt=""
          className="h-full w-full object-cover opacity-35"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40" />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-red"
        aria-hidden="true"
      />

      <div className="container-page relative pb-16 pt-8 lg:pb-24 lg:pt-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            className="lg:col-span-7"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.5, ease: 'easeOut' }}
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" aria-hidden="true" />
              Embroidery · DTF · Sublimation
            </p>

            <h1
              id="hero-heading"
              className="text-4xl font-bold leading-[1.12] text-white sm:text-5xl lg:text-[3.25rem]"
            >
              Custom Textile Printing and Embroidery in Ho
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Vegas Digital Prints produces embroidery works, DTF prints, sublimation designs,
              digital cloth printing and textile training for individuals, schools, churches and
              organisations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/request" className="btn-primary px-6 py-3.5">
                <FileText className="h-4 w-4" aria-hidden="true" />
                Make a Client Request
              </Link>
              {wa ? (
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-outline px-6 py-3.5">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              ) : (
                <Link to="/request" className="btn-outline px-6 py-3.5">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Contact Us
                </Link>
              )}
            </div>

            <p className="mt-6 text-sm font-medium tracking-wide text-white/70">
              Open 8:00 AM - 5:00 PM · Dabrah, Ho, Ghana
            </p>
          </motion.div>

          <motion.div
            className="relative lg:col-span-5"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : 0.12, ease: 'easeOut' }}
          >
            <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-brand-charcoal shadow-2xl">
              <img
                src="https://www.echidnasewing.com.au/assets/images/Machines/Embroidery-Machines/Halo1501Pro/HeroImage.jpg"
                alt="Colourful textile materials and apparel prepared for custom printing work"
                className="aspect-[4/3] w-full object-cover"
                width={900}
                height={675}
              />
              <figcaption className="flex items-center border-t border-white/10 bg-white px-4 py-3">
                <Logo height={40} decorative />
              </figcaption>
            </figure>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {frontPageServices.map((service) => {
            const Icon = icons[service.id] || Printer
            return (
              <article key={service.id} className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-xl">
                <img
                  src={service.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-semibold text-brand-black">{service.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{service.text}</p>
                  <Link to="/services" className="mt-4 inline-flex text-sm font-semibold text-brand-blue hover:text-brand-red">
                    View service details
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
