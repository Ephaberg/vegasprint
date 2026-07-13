import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return
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
  }, [item, onClose])

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — portfolio preview`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-brand-black/80"
        aria-label="Close image preview"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-brand-border px-4 py-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-red">{item.category}</p>
            <h3 className="text-lg font-semibold text-brand-black">{item.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-brand-ink hover:bg-brand-grey focus-visible:outline-2 focus-visible:outline-brand-blue"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <img
          src={item.image}
          alt={item.alt}
          className="max-h-[60vh] w-full object-cover"
        />
        <div className="space-y-2 px-4 py-4">
          <p className="text-sm leading-relaxed text-brand-muted">{item.description}</p>
          <p className="text-xs font-medium text-brand-blue">
            Demo sample only — replace with actual company project photography.
          </p>
        </div>
      </div>
    </div>
  )
}
