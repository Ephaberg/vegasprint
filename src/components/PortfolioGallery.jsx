import { useMemo, useState } from 'react'
import { company } from '../data/company'
import { portfolioCategories, portfolioItems } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Lightbox from './Lightbox'

export default function PortfolioGallery() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  const items = useMemo(() => {
    if (filter === 'All') return portfolioItems
    return portfolioItems.filter((i) => i.category === filter)
  }, [filter])

  return (
    <section id="work" className="section-padding bg-white" aria-labelledby="work-heading">
      <div className="container-page">
        <SectionHeading
          label="Our Work"
          title="A Glimpse of What Print and Embroidery Can Look Like"
          description="These images are high-quality placeholders for presentation. They are not completed Vegas projects and should be replaced with real client work when available."
        />
        <h2 id="work-heading" className="sr-only">
          Portfolio
        </h2>

        <div
          className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm font-medium text-amber-900"
          role="note"
        >
          {company.demo.portfolioDisclaimer}
        </div>

        <div
          className="mb-8 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter portfolio by category"
        >
          {portfolioCategories.map((cat) => {
            const selected = filter === cat
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${
                  selected
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'bg-brand-grey text-brand-ink hover:bg-brand-grey-mid'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item)}
              className="group card-surface overflow-hidden text-left transition hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-grey">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                  width={900}
                  height={675}
                />
                <span className="absolute left-3 top-3 rounded-full bg-brand-black/75 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  {item.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-brand-black">{item.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-brand-muted">{item.description}</p>
                <p className="mt-2 text-xs font-medium text-brand-blue">View sample details</p>
              </div>
            </button>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="mt-8 text-center text-brand-muted">No samples in this category yet.</p>
        ) : null}
      </div>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </section>
  )
}
