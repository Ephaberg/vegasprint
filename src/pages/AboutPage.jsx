import Header from '../components/Header'
import About from '../components/About'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import ScrollToTop from '../components/ScrollToTop'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <About />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}
