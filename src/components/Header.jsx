import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { company } from '../data/company'
import { navLinks } from '../data/content'
import { useScrollPosition } from '../hooks/useScrollPosition'
import MobileMenu from './MobileMenu'
import Logo from './Logo'

export default function Header() {
  const scrolled = useScrollPosition(20)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavigate = (href) => {
    setMenuOpen(false)
    const go = () => {
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        history.replaceState(null, '', href)
      }
    }

    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash: href.replace(/^#/, '') })
      return
    }
    requestAnimationFrame(go)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-brand-border/80 bg-white/95 py-2 shadow-sm backdrop-blur-md'
            : 'bg-white/90 py-3 backdrop-blur-sm sm:py-4'
        }`}
      >
        <div className="container-page flex items-center justify-between gap-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavigate('#home')
            }}
            className="flex min-w-0 items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            <Logo
              height={scrolled ? 36 : 44}
              className="shrink-0 transition-all"
            />
            <span className="min-w-0 sm:hidden">
              <span className="block truncate text-sm font-bold leading-tight text-brand-black">
                Vegas Digital Prints
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigate(link.href)
                }}
                className="rounded-lg px-3 py-2 text-sm font-medium text-brand-ink transition hover:bg-brand-grey hover:text-brand-black focus-visible:outline-2 focus-visible:outline-brand-blue"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#quote"
              onClick={(e) => {
                e.preventDefault()
                handleNavigate('#quote')
              }}
              className="btn-primary hidden px-4 py-2.5 text-sm sm:inline-flex"
            >
              Request a Quote
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2.5 text-brand-ink hover:bg-brand-grey focus-visible:outline-2 focus-visible:outline-brand-blue lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open navigation menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onNavigate={handleNavigate} />
    </>
  )
}
