import { useEffect } from 'react'
import { X } from 'lucide-react'
import { navLinks } from '../data/content'
import Logo from './Logo'

export default function MobileMenu({ open, onClose, onNavigate }) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <button
        type="button"
        className="absolute inset-0 bg-brand-black/50"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-brand-border px-4 py-4">
          <div className="flex min-w-0 items-center gap-2">
            <Logo height={36} decorative className="shrink-0" />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-brand-ink hover:bg-brand-grey focus-visible:outline-2 focus-visible:outline-brand-blue"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                onNavigate(link.href)
              }}
              className="rounded-lg px-3 py-3 text-base font-medium text-brand-ink hover:bg-brand-grey focus-visible:outline-2 focus-visible:outline-brand-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="border-t border-brand-border p-4">
          <a
            href="#quote"
            onClick={(e) => {
              e.preventDefault()
              onNavigate('#quote')
            }}
            className="btn-primary w-full"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  )
}
