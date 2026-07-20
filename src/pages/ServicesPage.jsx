import Header from '../components/Header'
import Services from '../components/Services'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import ScrollToTop from '../components/ScrollToTop'

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Services />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}
