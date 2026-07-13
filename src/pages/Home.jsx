import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import PortfolioGallery from '../components/PortfolioGallery'
import ProcessSteps from '../components/ProcessSteps'
import CustomersWeServe from '../components/CustomersWeServe'
import DigitalPresenceSection from '../components/DigitalPresenceSection'
import CTABanner from '../components/CTABanner'
import QuoteForm from '../components/QuoteForm'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <PortfolioGallery />
        <ProcessSteps />
        <CustomersWeServe />
        <DigitalPresenceSection />
        <CTABanner />
        <QuoteForm />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}
