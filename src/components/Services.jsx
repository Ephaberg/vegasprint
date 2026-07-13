import { services } from '../data/services'
import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <section id="services" className="section-padding bg-brand-grey" aria-labelledby="services-heading">
      <div className="container-page">
        <SectionHeading
          label="What We Offer"
          title="Services Built for Brands That Want to Be Seen"
          description="From a single embroidered polo to full event branding, we produce print and embroidery work that looks professional and feels intentional."
        />
        <h2 id="services-heading" className="sr-only">
          Our Services
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
