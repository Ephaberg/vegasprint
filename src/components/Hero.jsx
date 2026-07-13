import { motion } from 'framer-motion'
import { MessageCircle, FileText } from 'lucide-react'
import { getWhatsAppLink } from '../data/company'
import { useReducedMotion } from '../hooks/useReducedMotion'
import Logo from './Logo'

export default function Hero() {
  const reduce = useReducedMotion()
  const wa = getWhatsAppLink(
    'Hello Vegas Digital Prints, I would like to discuss a printing or embroidery project.',
  )

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-black pt-24 sm:pt-28"
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
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

      {/* Accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-red"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-10 pb-16 pt-8 lg:grid-cols-12 lg:gap-12 lg:pb-24 lg:pt-12">
        <motion.div
          className="lg:col-span-7"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.5, ease: 'easeOut' }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" aria-hidden="true" />
            Printing · Embroidery · Branding
          </p>

          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-[1.12] text-white sm:text-5xl lg:text-[3.25rem]"
          >
            Bringing Your Ideas to Life Through Print and Embroidery
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Professional digital printing, custom embroidery, apparel branding and promotional
            solutions designed to make your brand stand out.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#quote" className="btn-primary px-6 py-3.5">
              <FileText className="h-4 w-4" aria-hidden="true" />
              Request a Free Quote
            </a>
            {wa ? (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-6 py-3.5"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            ) : (
              <a href="#contact" className="btn-outline px-6 py-3.5">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            )}
          </div>

          <p className="mt-6 text-sm font-medium tracking-wide text-white/70">
            Quality finishing · Reliable service · Custom solutions
          </p>
        </motion.div>

        <motion.div
          className="relative lg:col-span-5"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : 0.12, ease: 'easeOut' }}
        >
          <div className="relative mx-auto max-w-md">
            <div
              className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-red/40 via-transparent to-brand-blue/40 blur-xl"
              aria-hidden="true"
            />
            <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-brand-charcoal shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&amp;fit=crop&amp;w=1200&amp;q=85"
                alt="Colourful design materials and print samples representing commercial printing work"
                className="aspect-[4/3] w-full object-cover"
                width={900}
                height={675}
              />
              <figcaption className="flex items-center border-t border-white/10 bg-white px-4 py-3">
                <Logo height={40} decorative />
              </figcaption>
            </figure>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
