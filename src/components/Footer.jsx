import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'
import { company } from '../data/company'
import { navLinks } from '../data/content'
import { services } from '../data/services'
import Logo from './Logo'

function TikTokIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.8a4.84 4.84 0 0 1-1-.11z" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-black text-white" role="contentinfo">
      {company.demo.isDemo ? (
        <div className="border-b border-white/10 bg-brand-blue/20 px-4 py-2 text-center text-xs font-medium tracking-wide text-white/90">
          {company.demo.bannerLabel}
        </div>
      ) : null}

      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center rounded-lg bg-black/95 px-3 py-2">
            <Logo height={48} />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/65">{company.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Pages</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-white/65 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Services</h3>
          <ul className="mt-4 space-y-2">
            {services.slice(0, 6).map((s) => (
              <li key={s.id}>
                <Link to="/services" className="text-sm text-white/65 transition hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            <li>{company.contact.phone}</li>
            <li>{company.contact.whatsapp}</li>
            <li>{company.contact.email}</li>
            <li className="pt-1">
              {company.address.line1}
              <br />
              {company.address.city}, {company.address.region}
            </li>
            <li>{company.hours[0]?.time}</li>
          </ul>
          <div className="mt-4 flex gap-2">
            {company.social.instagram ? (
              <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white/10 p-2 hover:bg-white/20" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            ) : null}
            {company.social.facebook ? (
              <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white/10 p-2 hover:bg-white/20" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
            ) : null}
            {company.social.tiktok ? (
              <a href={company.social.tiktok} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white/10 p-2 hover:bg-white/20" aria-label="TikTok">
                <TikTokIcon className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p>Designed by Priscy</p>
        </div>
      </div>
    </footer>
  )
}
