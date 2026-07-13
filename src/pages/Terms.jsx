import { Link } from 'react-router-dom'
import { company } from '../data/company'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <>
      <Header />
      <main className="container-page section-padding max-w-3xl pt-28">
        <p className="section-label mb-3">Legal</p>
        <h1 className="text-3xl font-bold text-brand-black sm:text-4xl">Terms and Conditions</h1>
        <p className="mt-2 text-sm text-brand-muted">
          Placeholder terms for the concept website demonstration.
        </p>

        <div className="mt-8 space-y-5 text-sm leading-relaxed text-brand-muted sm:text-base">
          <p>
            This website is a non-live concept demonstration prepared for {company.legalName}. It
            is intended to show how a professional digital presence could look and function.
          </p>
          <p>
            Portfolio images are sample photography for presentation only and are not completed
            projects of the company unless later replaced with authorised client work.
          </p>
          <p>
            Contact details, addresses, opening hours and social links marked as placeholders are
            not confirmed business information. Do not treat them as official.
          </p>
          <p>
            Quotation requests submitted on this demonstration site are not binding orders and are
            not transmitted to the company&apos;s production systems.
          </p>
          <p>
            Full commercial terms for printing and embroidery services will be provided with
            official quotations once the live website and order process are in place.
          </p>
        </div>

        <Link to="/" className="btn-primary mt-10 inline-flex">
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  )
}
