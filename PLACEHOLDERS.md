# Placeholders Management Must Confirm

This concept website deliberately avoids inventing business details. Update the items below before a public launch.

## Contact details

| Field | Where to edit | Status |
| --- | --- | --- |
| Telephone number | `src/data/company.js` → `contact.phone` + `phoneHref` | Confirmed |
| WhatsApp number | `src/data/company.js` → `contact.whatsapp` + `whatsappNumber` | Confirmed: using 024 040 9144 |
| Email address | `src/data/company.js` → `contact.email` + `emailHref` | Confirmed |

## Location

| Field | Where to edit | Status |
| --- | --- | --- |
| Street address | `company.address.line1` / `line2` | Confirmed: Dabrah |
| City / suburb | `company.address.city` | Confirmed: Ho, Ghana |
| Google Maps embed URL | `company.address.mapsEmbedUrl` | Empty until GBP exists |
| Google Maps link | `company.address.mapsLink` | Empty until confirmed |

## Opening hours

Confirmed in `company.hours` as 8:00 AM - 5:00 PM.

## Social media

| Network | Config key |
| --- | --- |
| Instagram | `company.social.instagram` |
| Facebook | `company.social.facebook` |
| TikTok | `company.social.tiktok` |

## Brand assets

| Asset | Current file | Action |
| --- | --- | --- |
| Primary logo (vector recreation) | `public/images/vegas-logo.svg` | Replace with official transparent SVG/PNG |
| Photo crop of physical sticker | `public/images/vegas-logo-photo.png` | Reference only; not ideal for print |
| Favicons | `public/images/favicon-*.png` | Regenerate from official logo |
| Service gallery images | `public/images/services/` + `serviceGallery` in `src/data/services.js` | Add real Batik, DTF, Sublimation, Embroidery and related photos |

## SEO / domain

| Item | Location |
| --- | --- |
| Production domain | `company.seo.siteUrl`, `index.html` OG tags, `public/sitemap.xml`, `public/robots.txt` |
| LocalBusiness JSON-LD address/phone | `index.html` structured data block |
| `geo.placename` | `index.html` |

## Content that may be expanded later

- Additional company milestones or founder details beyond the supplied early-2000s founding and 2021 registration history
- Team photos
- Real customer project case studies
- Verified awards or partnerships (none claimed on this demo)

## Google Business Profile

After the official address is confirmed:

1. Create a Google Business Profile
2. Verify ownership
3. Add services, photos, hours and phone
4. Embed the map on the Contact section
5. Update structured data and sitemap with the real domain
