/**
 * ============================================================
 * COMPANY CONFIGURATION — EDIT THIS FILE
 * ============================================================
 * Update these placeholders once management confirms official
 * contact details, address, hours and social profiles.
 * All UI components read from this single source of truth.
 * ============================================================
 */

export const company = {
  legalName: 'Vegas Digital Prints & Embroidery',
  shortName: 'Vegas Digital Prints',
  tagline: 'Taking Your Cloth Printing To Digital Level',
  description:
    'Creative printing, embroidery and branding solutions for individuals, schools, churches, organisations and businesses in Ghana.',

  /**
   * PLACEHOLDERS — replace with confirmed details before launch.
   * Leave as-is for the management demonstration.
   */
  contact: {
    phone: '[Phone number to be confirmed]',
    phoneHref: '', // e.g. 'tel:+233XXXXXXXXX'
    whatsapp: '[WhatsApp number to be confirmed]',
    /** Digits only, country code included, no + or spaces. Used for wa.me links. */
    whatsappNumber: '', // e.g. '233XXXXXXXXX'
    email: '[Email address to be confirmed]',
    emailHref: '', // e.g. 'mailto:info@example.com'
  },

  address: {
    line1: '[Street address to be confirmed]',
    line2: '[Suburb / area to be confirmed]',
    city: '[City to be confirmed]',
    region: 'Ghana',
    /** Optional Google Maps embed URL once GBP is live */
    mapsEmbedUrl: '',
    mapsLink: '',
  },

  hours: [
    { day: 'Monday – Friday', time: '[Opening hours to be confirmed]' },
    { day: 'Saturday', time: '[Opening hours to be confirmed]' },
    { day: 'Sunday', time: '[Opening hours to be confirmed]' },
  ],

  social: {
    instagram: '', // full profile URL
    facebook: '',
    tiktok: '',
  },

  /**
   * Brand logo — single source for the entire site.
   * File: public/images/vegas-logo.svg
   */
  logo: {
    primary: '/images/vegas-logo.svg',
    favicon: '/images/vegas-logo.svg',
    appleTouch: '/images/vegas-logo.svg',
  },

  seo: {
    title: 'Vegas Digital Prints & Embroidery | Printing & Branding in Ghana',
    description:
      'Professional digital printing, custom embroidery, apparel branding and promotional solutions. Request a free quotation from Vegas Digital Prints & Embroidery.',
    siteUrl: 'https://example.com', // update when domain is confirmed
    locale: 'en_GH',
    ogImage: '/images/vegas-logo.svg',
  },

  demo: {
    isDemo: true,
    bannerLabel: 'Concept Website – Prepared for Vegas Digital Prints & Embroidery',
    portfolioDisclaimer:
      'Sample Presentation – Replace with Actual Company Projects',
  },
}

/** Safe helpers for optional contact actions */
export function getWhatsAppLink(message = '') {
  const n = company.contact.whatsappNumber
  if (!n) return null
  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${n}${text}`
}

export function getPhoneLink() {
  return company.contact.phoneHref || null
}

export function getEmailLink() {
  return company.contact.emailHref || null
}
