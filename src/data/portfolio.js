/**
 * Portfolio items use high-quality placeholder photography.
 * Replace image paths with real project photos under public/images/portfolio/
 * when the company provides actual work samples.
 *
 * Do NOT present these as completed Vegas projects — they are demo samples only.
 */

export const portfolioCategories = [
  'All',
  'Embroidery',
  'T-Shirts',
  'Corporate Wear',
  'Banners and Signage',
  'Promotional Items',
  'Digital Printing',
]

/**
 * Images: Unsplash (licence allows commercial use; free to replace).
 * Local filenames document intended replacement slots.
 */
export const portfolioItems = [
  {
    id: 'p1',
    category: 'Embroidery',
    title: 'Embroidered Cap Branding',
    description:
      'Sample presentation of stitched logo work on headwear. Replace with a photograph of a completed Vegas embroidery job.',
    image:
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=80',
    localSlot: 'portfolio/embroidery-cap.jpg',
    alt: 'Sample image of a baseball cap with embroidered logo detail',
  },
  {
    id: 'p2',
    category: 'Embroidery',
    title: 'Jacket Chest Embroidery',
    description:
      'Sample presentation of multi-thread embroidery on outerwear. Replace with company project photography.',
    image:
      'https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=900&q=80',
    localSlot: 'portfolio/embroidery-jacket.jpg',
    alt: 'Sample image of embroidery machine stitching fabric',
  },
  {
    id: 'p3',
    category: 'T-Shirts',
    title: 'Custom Event T-Shirts',
    description:
      'Sample presentation of printed tees for group orders. Replace with actual Vegas t-shirt projects.',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    localSlot: 'portfolio/tshirt-event.jpg',
    alt: 'Sample image of folded plain t-shirts ready for printing',
  },
  {
    id: 'p4',
    category: 'T-Shirts',
    title: 'Screen-Style Graphic Tee',
    description:
      'Sample presentation of graphic apparel printing. Replace with finished company artwork on garments.',
    image:
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80',
    localSlot: 'portfolio/tshirt-graphic.jpg',
    alt: 'Sample image of a person wearing a printed graphic t-shirt',
  },
  {
    id: 'p5',
    category: 'Corporate Wear',
    title: 'Branded Staff Polo',
    description:
      'Sample presentation of corporate polo branding. Replace with real uniform projects for clients.',
    image:
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80',
    localSlot: 'portfolio/corporate-polo.jpg',
    alt: 'Sample image of neatly folded polo shirts for branding',
  },
  {
    id: 'p6',
    category: 'Corporate Wear',
    title: 'Office Team Apparel',
    description:
      'Sample presentation of coordinated workwear. Replace with photographs of delivered corporate kits.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
    localSlot: 'portfolio/corporate-team.jpg',
    alt: 'Sample image of clothing displayed in a retail setting',
  },
  {
    id: 'p7',
    category: 'Banners and Signage',
    title: 'Event Banner Display',
    description:
      'Sample presentation of large-format event graphics. Replace with Vegas-produced banners and signs.',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
    localSlot: 'portfolio/banner-event.jpg',
    alt: 'Sample image of a conference venue with large visual displays',
  },
  {
    id: 'p8',
    category: 'Banners and Signage',
    title: 'Outdoor Promotional Signage',
    description:
      'Sample presentation of outdoor visibility materials. Replace with company large-format work.',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80',
    localSlot: 'portfolio/signage-outdoor.jpg',
    alt: 'Sample image of colourful graphic design print materials',
  },
  {
    id: 'p9',
    category: 'Promotional Items',
    title: 'Branded Merchandise Set',
    description:
      'Sample presentation of promotional product styling. Replace with actual merch produced for clients.',
    image:
      'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=900&q=80',
    localSlot: 'portfolio/promo-merch.jpg',
    alt: 'Sample image of gift and merchandise packaging arrangement',
  },
  {
    id: 'p10',
    category: 'Promotional Items',
    title: 'Custom Tote & Giveaways',
    description:
      'Sample presentation of reusable promotional goods. Replace with Vegas-branded client giveaways.',
    image:
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
    localSlot: 'portfolio/promo-tote.jpg',
    alt: 'Sample image of a fabric tote bag suitable for branding',
  },
  {
    id: 'p11',
    category: 'Digital Printing',
    title: 'Full-Colour Print Production',
    description:
      'Sample presentation of digital print workflows. Replace with process or finished-work photos from the shop floor.',
    image:
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&amp;fit=crop&amp;w=1200&amp;q=85',
    localSlot: 'portfolio/digital-print.jpg',
    alt: 'Sample image of colour swatches and design materials for print',
  },
  {
    id: 'p12',
    category: 'Digital Printing',
    title: 'Artwork Ready for Press',
    description:
      'Sample presentation of design-to-print preparation. Replace with real client artwork examples (with permission).',
    image:
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=900&q=80',
    localSlot: 'portfolio/digital-artwork.jpg',
    alt: 'Sample image of a designer reviewing colour print proofs',
  },
]
