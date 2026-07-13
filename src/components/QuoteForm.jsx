import { useEffect, useState } from 'react'
import { CheckCircle2, Upload, X } from 'lucide-react'
import {
  budgetRanges,
  contactMethods,
  quoteServiceOptions,
} from '../data/content'
import SectionHeading from './SectionHeading'

const initial = {
  fullName: '',
  organisation: '',
  phone: '',
  email: '',
  service: '',
  productDescription: '',
  quantity: '',
  colours: '',
  completionDate: '',
  budget: '',
  instructions: '',
  contactMethod: '',
  consent: false,
}

function validate(values) {
  const errors = {}
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.'
  if (!values.phone.trim()) errors.phone = 'Please enter a phone number.'
  else if (values.phone.trim().length < 8)
    errors.phone = 'Please enter a valid phone number.'
  if (!values.email.trim()) errors.email = 'Please enter an email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.'
  if (!values.service) errors.service = 'Please select a service.'
  if (!values.productDescription.trim())
    errors.productDescription = 'Please describe the product or project.'
  if (!values.quantity.trim()) errors.quantity = 'Please enter a quantity.'
  if (!values.contactMethod) errors.contactMethod = 'Please choose a preferred contact method.'
  if (!values.consent) errors.consent = 'Consent is required to submit this demonstration form.'
  return errors
}

export default function QuoteForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [touched, setTouched] = useState({})

  useEffect(() => {
    const preferred = sessionStorage.getItem('vegas-preferred-service')
    if (preferred && quoteServiceOptions.includes(preferred)) {
      setValues((v) => ({ ...v, service: preferred }))
      sessionStorage.removeItem('vegas-preferred-service')
    }
  }, [])

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview)
    }
  }, [preview])

  const setField = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }))
    if (touched[name]) {
      setErrors((e) => {
        const next = validate({ ...values, [name]: value })
        return { ...e, [name]: next[name] }
      })
    }
  }

  const onBlur = (name) => {
    setTouched((t) => ({ ...t, [name]: true }))
    const next = validate(values)
    setErrors((e) => ({ ...e, [name]: next[name] }))
  }

  const onFile = (e) => {
    const f = e.target.files?.[0]
    if (!f) return
    if (f.size > 5 * 1024 * 1024) {
      setErrors((err) => ({ ...err, file: 'File must be under 5 MB for this demonstration.' }))
      return
    }
    if (preview) URL.revokeObjectURL(preview)
    setFile(f)
    setErrors((err) => ({ ...err, file: undefined }))
    if (f.type.startsWith('image/')) {
      setPreview(URL.createObjectURL(f))
    } else {
      setPreview(null)
    }
  }

  const clearFile = () => {
    if (preview) URL.revokeObjectURL(preview)
    setFile(null)
    setPreview(null)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    setTouched(
      Object.keys(initial).reduce((acc, k) => {
        acc[k] = true
        return acc
      }, {}),
    )
    if (Object.keys(next).length > 0) return

    // Demo only — no network, no storage of personal data
    setSubmitted(true)
    setValues(initial)
    clearFile()
    setTouched({})
  }

  return (
    <section id="quote" className="section-padding bg-white" aria-labelledby="quote-heading">
      <div className="container-page max-w-3xl">
        <SectionHeading
          label="Quotations"
          title="Request a Quotation"
          description="Share a few details about your project. This is a frontend demonstration — submissions are not sent to a live system."
        />
        <h2 id="quote-heading" className="sr-only">
          Request a Quotation
        </h2>

        {submitted ? (
          <div
            className="card-surface border-brand-blue/30 p-8 text-center"
            role="status"
            aria-live="polite"
          >
            <CheckCircle2 className="mx-auto h-12 w-12 text-brand-blue" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold text-brand-black">Thank you</h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-brand-muted sm:text-base">
              Thank you. This demonstration shows how a quotation request could be submitted. The
              production website will connect this form to the company&apos;s official communication
              system.
            </p>
            <button type="button" className="btn-primary mt-6" onClick={() => setSubmitted(false)}>
              Submit another demo request
            </button>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            noValidate
            className="card-surface space-y-5 p-5 sm:p-8"
            aria-describedby="quote-demo-note"
          >
            <p id="quote-demo-note" className="rounded-lg bg-brand-grey px-3 py-2 text-xs text-brand-muted">
              Demo mode: nothing is stored or emailed. Uploaded files stay only in your browser
              session and are discarded after this form resets.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="label-field">
                  Full name <span className="text-brand-red">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  className="input-field"
                  value={values.fullName}
                  onChange={(e) => setField('fullName', e.target.value)}
                  onBlur={() => onBlur('fullName')}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
                {errors.fullName ? (
                  <p id="fullName-error" className="error-text" role="alert">
                    {errors.fullName}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="organisation" className="label-field">
                  Company or organisation
                </label>
                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  autoComplete="organization"
                  className="input-field"
                  value={values.organisation}
                  onChange={(e) => setField('organisation', e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="phone" className="label-field">
                  Phone number <span className="text-brand-red">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="input-field"
                  value={values.phone}
                  onChange={(e) => setField('phone', e.target.value)}
                  onBlur={() => onBlur('phone')}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone ? (
                  <p id="phone-error" className="error-text" role="alert">
                    {errors.phone}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="email" className="label-field">
                  Email address <span className="text-brand-red">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="input-field"
                  value={values.email}
                  onChange={(e) => setField('email', e.target.value)}
                  onBlur={() => onBlur('email')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email ? (
                  <p id="email-error" className="error-text" role="alert">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor="service" className="label-field">
                Service required <span className="text-brand-red">*</span>
              </label>
              <select
                id="service"
                name="service"
                className="input-field"
                value={values.service}
                onChange={(e) => setField('service', e.target.value)}
                onBlur={() => onBlur('service')}
                aria-invalid={Boolean(errors.service)}
              >
                <option value="">Select a service…</option>
                {quoteServiceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.service ? (
                <p className="error-text" role="alert">
                  {errors.service}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="productDescription" className="label-field">
                Product description <span className="text-brand-red">*</span>
              </label>
              <textarea
                id="productDescription"
                name="productDescription"
                rows={4}
                className="input-field resize-y"
                placeholder="e.g. 50 polo shirts with embroidered chest logo for a corporate event"
                value={values.productDescription}
                onChange={(e) => setField('productDescription', e.target.value)}
                onBlur={() => onBlur('productDescription')}
                aria-invalid={Boolean(errors.productDescription)}
              />
              {errors.productDescription ? (
                <p className="error-text" role="alert">
                  {errors.productDescription}
                </p>
              ) : null}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="quantity" className="label-field">
                  Quantity <span className="text-brand-red">*</span>
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="text"
                  inputMode="numeric"
                  className="input-field"
                  placeholder="e.g. 50"
                  value={values.quantity}
                  onChange={(e) => setField('quantity', e.target.value)}
                  onBlur={() => onBlur('quantity')}
                  aria-invalid={Boolean(errors.quantity)}
                />
                {errors.quantity ? (
                  <p className="error-text" role="alert">
                    {errors.quantity}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="colours" className="label-field">
                  Preferred colours
                </label>
                <input
                  id="colours"
                  name="colours"
                  type="text"
                  className="input-field"
                  placeholder="e.g. Navy blue and white"
                  value={values.colours}
                  onChange={(e) => setField('colours', e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="completionDate" className="label-field">
                  Required completion date
                </label>
                <input
                  id="completionDate"
                  name="completionDate"
                  type="date"
                  className="input-field"
                  value={values.completionDate}
                  onChange={(e) => setField('completionDate', e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="budget" className="label-field">
                  Budget range <span className="font-normal text-brand-muted">(optional)</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="input-field"
                  value={values.budget}
                  onChange={(e) => setField('budget', e.target.value)}
                >
                  <option value="">Select a range…</option>
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <span className="label-field" id="file-label">
                Logo or artwork upload
              </span>
              <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-start">
                <label
                  htmlFor="artwork"
                  className="flex cursor-pointer flex-1 flex-col items-center justify-center rounded-lg border-2 border-dashed border-brand-border bg-brand-grey/40 px-4 py-6 text-center transition hover:border-brand-blue/50 hover:bg-brand-grey"
                >
                  <Upload className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                  <span className="mt-2 text-sm font-medium text-brand-ink">
                    Choose a file (PNG, JPG, PDF, AI — max 5 MB)
                  </span>
                  <span className="mt-1 text-xs text-brand-muted">Demo only — not uploaded to a server</span>
                  <input
                    id="artwork"
                    name="artwork"
                    type="file"
                    className="sr-only"
                    accept=".png,.jpg,.jpeg,.pdf,.ai,.eps,.svg,image/*"
                    aria-labelledby="file-label"
                    onChange={onFile}
                  />
                </label>
                {file ? (
                  <div className="relative w-full rounded-lg border border-brand-border bg-white p-3 sm:w-40">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Selected artwork preview"
                        className="mb-2 aspect-square w-full rounded object-cover"
                      />
                    ) : null}
                    <p className="truncate text-xs font-medium text-brand-ink" title={file.name}>
                      {file.name}
                    </p>
                    <button
                      type="button"
                      onClick={clearFile}
                      className="absolute right-1 top-1 rounded-full bg-brand-black/70 p-1 text-white hover:bg-brand-black"
                      aria-label="Remove selected file"
                    >
                      <X className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                ) : null}
              </div>
              {errors.file ? (
                <p className="error-text" role="alert">
                  {errors.file}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="instructions" className="label-field">
                Additional instructions
              </label>
              <textarea
                id="instructions"
                name="instructions"
                rows={3}
                className="input-field resize-y"
                value={values.instructions}
                onChange={(e) => setField('instructions', e.target.value)}
              />
            </div>

            <fieldset>
              <legend className="label-field">
                Preferred contact method <span className="text-brand-red">*</span>
              </legend>
              <div className="mt-1 flex flex-wrap gap-4">
                {contactMethods.map((method) => (
                  <label key={method} className="inline-flex items-center gap-2 text-sm text-brand-ink">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      checked={values.contactMethod === method}
                      onChange={(e) => setField('contactMethod', e.target.value)}
                      className="h-4 w-4 border-brand-border text-brand-blue focus:ring-brand-blue"
                    />
                    {method}
                  </label>
                ))}
              </div>
              {errors.contactMethod ? (
                <p className="error-text" role="alert">
                  {errors.contactMethod}
                </p>
              ) : null}
            </fieldset>

            <div>
              <label className="flex items-start gap-2.5 text-sm text-brand-ink">
                <input
                  type="checkbox"
                  name="consent"
                  checked={values.consent}
                  onChange={(e) => setField('consent', e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-brand-border text-brand-blue focus:ring-brand-blue"
                  aria-invalid={Boolean(errors.consent)}
                />
                <span>
                  I understand this is a demonstration form and agree that any details entered are
                  for presentation purposes only. <span className="text-brand-red">*</span>
                </span>
              </label>
              {errors.consent ? (
                <p className="error-text" role="alert">
                  {errors.consent}
                </p>
              ) : null}
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto sm:min-w-[12rem]">
              Submit quotation request
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
