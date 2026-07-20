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
  legalName: 'Vegas Digital Prints',
  shortName: 'Vegas Digital Prints',
  formerName: 'Vegas Batik Tie and Dye Training Center',
  tagline: 'Taking Your Cloth Printing to the Digital Level',
  description:
    'Embroidery works, DTF printing, sublimation, digital cloth printing and textile training for individuals, schools, churches, organisations and corporate institutions in Ghana.',

  /**
   * Contact details confirmed by management. Update here if the primary
   * phone, WhatsApp, email or location changes.
   */
  contact: {
    phone: '024 040 9144 / 024 423 0731',
    phoneHref: 'tel:+233240409144',
    whatsapp: '024 040 9144',
    /** Digits only, country code included, no + or spaces. Used for wa.me links. */
    whatsappNumber: '233240409144',
    email: 'patricatagbor@gmail.com',
    emailHref: 'mailto:patricatagbor@gmail.com',
  },

  address: {
    line1: 'Dabrah',
    line2: '',
    city: 'Ho',
    region: 'Ghana',
    /** Optional Google Maps embed URL once GBP is live */
    mapsEmbedUrl: '',
    mapsLink: '',
  },

  hours: [
    { day: 'Monday - Friday', time: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 5:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 5:00 PM' },
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
    title: 'Vegas Digital Prints | Embroidery, DTF & Sublimation in Ho',
    description:
      'Embroidery works, DTF printing, sublimation, digital cloth printing and textile training in Ho, Dabrah, Ghana.',
    siteUrl: 'https://example.com', // update when domain is confirmed
    locale: 'en_GH',
    ogImage: '/images/vegas-logo.svg',
  },

  demo: {
    isDemo: true,
    bannerLabel: 'Prepared for Vegas Digital Prints',
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
