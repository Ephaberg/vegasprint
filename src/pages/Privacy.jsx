import { Link } from 'react-router-dom'
import { company } from '../data/company'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="container-page section-padding max-w-3xl pt-28">
        <p className="section-label mb-3">Legal</p>
        <h1 className="text-3xl font-bold text-brand-black sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-brand-muted">
          Placeholder policy for the concept website demonstration.
        </p>

        <div className="prose-brand mt-8 space-y-5 text-sm leading-relaxed text-brand-muted sm:text-base">
          <p>
            This demonstration site for {company.legalName} does not operate a live backend, does
            not create user accounts and does not permanently store quotation form submissions or
            uploaded files.
          </p>
          <p>
            Any information you type into the quotation form remains in your browser for the
            duration of the demonstration session and is discarded when the success message is
            shown or the page is reloaded.
          </p>
          <p>
            When a production website is launched, this page will be replaced with a full privacy
            policy describing how the company collects, uses and protects personal data in line
            with applicable Ghanaian and international requirements.
          </p>
          <p>
            For questions about this demonstration, contact the project team preparing the site for
            management review. Official company contact details will appear once confirmed.
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
