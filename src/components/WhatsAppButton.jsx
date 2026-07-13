import { MessageCircle } from 'lucide-react'
import { company, getWhatsAppLink } from '../data/company'

export default function WhatsAppButton() {
  const href =
    getWhatsAppLink(
      'Hello Vegas Digital Prints, I found your website and would like more information.',
    ) || '#contact'

  const isLive = Boolean(company.contact.whatsappNumber)

  return (
    <a
      href={href}
      target={isLive ? '_blank' : undefined}
      rel={isLive ? 'noopener noreferrer' : undefined}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      aria-label={
        isLive
          ? 'Chat on WhatsApp'
          : 'WhatsApp number pending — go to contact section'
      }
      title={isLive ? 'Chat on WhatsApp' : 'Add WhatsApp number in company config'}
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" strokeWidth={2} />
    </a>
  )
}
