# Vegas Digital Prints & Embroidery — Concept Website

A polished, fully responsive **frontend demonstration** for **Vegas Digital Prints & Embroidery**, a Ghanaian printing, embroidery and branding business.

Built to present to management why a professional digital presence matters — and how the company can look online once contact details, location and real project photography are confirmed.

> **Concept Website – Prepared for Vegas Digital Prints & Embroidery**  
> Frontend only. No backend, database, authentication or payments.

---

## Tech stack

- React 19 + Vite
- Tailwind CSS v4
- JavaScript
- React Router
- Lucide React icons
- Framer Motion (subtle motion; respects `prefers-reduced-motion`)

---

## Quick start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

Open the local URL shown in the terminal (typically `http://localhost:5173`).

No `.env` file is required for the demo. See [`.env.example`](./.env.example) for optional future API variables.

---

## Project structure

```
vegasprint/
├── public/
│   ├── images/
│   │   ├── vegas-logo.svg          # Primary logo (vector recreation)
│   │   ├── vegas-logo-photo.png    # Cropped photo of physical sticker
│   │   ├── favicon-*.png
│   │   └── portfolio/              # Slot for real project photos
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/                 # Reusable UI sections
│   ├── data/
│   │   ├── company.js              # ★ Edit contact, address, socials here
│   │   ├── services.js
│   │   ├── portfolio.js
│   │   └── content.js
│   ├── hooks/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── PLACEHOLDERS.md                 # Checklist for management confirmation
├── .env.example
└── README.md
```

---

## Updating company details

**Single source of truth:** [`src/data/company.js`](./src/data/company.js)

```js
contact: {
  phone: '+233 …',
  phoneHref: 'tel:+233…',
  whatsapp: '+233 …',
  whatsappNumber: '233…', // digits only for wa.me
  email: 'info@…',
  emailHref: 'mailto:info@…',
},
address: { line1, line2, city, region, mapsEmbedUrl, mapsLink },
hours: [ … ],
social: { instagram, facebook, tiktok },
```

After editing, the header, footer, contact block, WhatsApp button and CTAs update automatically.

A full confirmation checklist lives in [`PLACEHOLDERS.md`](./PLACEHOLDERS.md).

---

## Replacing the logo

1. Export an official **transparent PNG** (min. 512×512) or **SVG** of the circular mark.
2. Replace:
   - `public/images/vegas-logo.svg` (or point `company.logo.primary` to a new PNG path)
   - Favicons under `public/images/favicon-*.png`
3. Update `index.html` favicon links if filenames change.

### About the current logo assets

The source photo of the sticker was taken on equipment that also showed an internal IP address and machine labels. That full photograph is **not** used on the site.

- **`vegas-logo.svg`** — clean vector recreation of the circular brand mark (primary UI logo).
- **`vegas-logo-photo.png`** — tight circular crop of the physical sticker for brand-reference only. Photo angle and surface wear mean it is less ideal than a proper transparent export from design files.

**Action for management:** supply the official logo files from the original design (Illustrator / Corel / etc.).

---

## Replacing portfolio images

1. Add real project photos to `public/images/portfolio/` using clear names, e.g. `embroidery-cap-client.jpg`.
2. Edit [`src/data/portfolio.js`](./src/data/portfolio.js):
   - Set `image` to `/images/portfolio/your-file.jpg`
   - Update `title`, `description` and `alt`
   - Remove the demo disclaimer copy when everything is real work
3. In `company.demo`, set `portfolioDisclaimer` empty or turn off demo labels when ready for production.

Current gallery images are **Unsplash placeholders**. The UI labels the section as sample presentation only.

---

## Features

- Sticky compact header + accessible mobile menu
- Hero, services, about, why choose us, portfolio, process, audiences
- Digital presence / Google Business Profile concept section
- Quotation form with validation, file preview, demo success state
- Contact placeholders + map placeholder
- Floating WhatsApp + scroll-to-top controls
- Privacy & Terms placeholder routes
- SEO meta, Open Graph, LocalBusiness JSON-LD (no false address/phone)
- Reduced-motion support, keyboard focus styles, semantic HTML

---

## Form behaviour (demo)

Submitting the quotation form:

- Validates required fields
- Does **not** send data to a server
- Does **not** store uploads or personal data
- Shows a professional confirmation explaining this is a demonstration

Wire `VITE_QUOTE_API_URL` (see `.env.example`) when a backend is ready.

---

## Accessibility & quality notes

- Skip link, landmarks, labelled form controls
- Visible `:focus-visible` rings
- Lightbox and mobile menu close with `Escape`
- Lazy-loaded portfolio images
- Colour palette derived from brand red / royal blue / black / white / grey

---

## Presenting to management

Recommended walkthrough:

1. **Laptop + phone** — show responsive layout
2. **Services & process** — how customers understand the offer
3. **Portfolio** — explain real photos will replace samples
4. **Quote form** — how leads can be captured
5. **Digital presence section** — website + Google Business Profile opportunity
6. **PLACEHOLDERS.md** — list of details they need to supply

---

## Licence / assets

- Site code: prepared for Vegas Digital Prints & Embroidery presentation use
- Unsplash images: free licence; replace with owned photography for production
- Logo mark: brand property of Vegas Digital Prints; vector file is a recreation for demo UI only
