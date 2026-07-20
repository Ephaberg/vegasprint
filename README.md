# Vegas Digital Prints — Concept Website

A polished, fully responsive **frontend demonstration** for **Vegas Digital Prints**, a Ghanaian textile training, cloth printing, embroidery and branding organization.

Built to present to management why a professional digital presence matters — and how the company can look online once contact details, location and real project photography are confirmed.

> **Concept Website – Prepared for Vegas Digital Prints**  
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
│   │   └── services/               # Slot for service gallery photos
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

## Replacing service gallery images

1. Add real service photos to `public/images/services/` using clear names, e.g. `batik-tie-dye.jpg` or `dtf-printing.jpg`.
2. Edit `serviceGallery` in [`src/data/services.js`](./src/data/services.js):
   - Set `image` to `/images/services/your-file.jpg`
   - Update `title`, `category` and `alt` if needed
   - Keep any image slot blank until a real photo is ready
3. Rebuild the site after adding images.

Blank gallery image fields render as labelled service placeholders until real photos are added.

---

## Features

- Sticky compact header + accessible mobile menu
- Four main pages: Home, About, Services and Client Request
- Front page highlights for embroidery works, DTF printing and sublimation
- Client request form with validation, file preview and demo success state
- Confirmed phone, WhatsApp, email, location and opening hours
- Floating WhatsApp + scroll-to-top controls

- SEO meta, Open Graph, LocalBusiness JSON-LD (no false address/phone)
- Reduced-motion support, keyboard focus styles, semantic HTML

---

## Form behaviour (demo)

Submitting the client request form:

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
- Lazy-loaded service gallery images
- Colour palette derived from brand red / royal blue / black / white / grey

---

## Presenting to management

Recommended walkthrough:

1. **Laptop + phone** — show responsive layout
2. **Services & process** — how customers understand the offer
3. **Service gallery** - show where real Batik, DTF, Sublimation and Embroidery photos will appear
4. **Client Request** - how leads can be captured
5. **PLACEHOLDERS.md** - remaining details and image slots
6. **PLACEHOLDERS.md** — list of details they need to supply

---

## Licence / assets

- Site code: prepared for Vegas Digital Prints presentation use
- Unsplash images: free licence; replace with owned photography for production
- Logo mark: brand property of Vegas Digital Prints; vector file is a recreation for demo UI only
