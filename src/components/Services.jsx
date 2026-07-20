import { services } from '../data/services'
import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'
import ServiceGallery from './ServiceGallery'

export default function Services() {
  return (
    <section className="section-padding bg-brand-grey" aria-labelledby="services-heading">
      <div className="container-page">
        <SectionHeading
          label="What We Do"
          title="Printing, Embroidery and Textile Services"
          description="Choose the work you need, then send a client request with your design, quantity, colours and deadline."
        />
        <h1 id="services-heading" className="sr-only">
          Printing, Embroidery and Textile Services
        </h1>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <ServiceGallery />
      </div>
    </section>
  )
}
