import Header from '../components/Header'
import QuoteForm from '../components/QuoteForm'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import ScrollToTop from '../components/ScrollToTop'

export default function RequestPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <QuoteForm />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}
