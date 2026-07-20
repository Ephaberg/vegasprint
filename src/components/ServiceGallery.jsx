import { Image as ImageIcon } from 'lucide-react'
import { serviceGallery } from '../data/services'
import SectionHeading from './SectionHeading'

export default function ServiceGallery() {
  return (
    <section className="mt-16" aria-labelledby="service-gallery-heading">
      <SectionHeading
        label="Gallery"
        title="Service Gallery"
        description="A simple visual gallery for embroidery, DTF, sublimation, batik and other textile work."
      />
      <h2 id="service-gallery-heading" className="sr-only">
        Service Gallery
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {serviceGallery.map((item) => (
          <article key={item.id} className="card-surface overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-grey-mid">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center border-b border-dashed border-brand-border bg-white px-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <ImageIcon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-base font-semibold text-brand-black">{item.title}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-brand-red">
                    {item.category}
                  </p>
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-brand-black">{item.title}</h3>
              <p className="mt-1 text-sm text-brand-muted">{item.category}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
