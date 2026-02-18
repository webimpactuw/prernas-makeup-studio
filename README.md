## Prerna's Makeup Studio

With over 12 years of experience, Prerna specializes in makeup and styling for dancers, performers, and anyone celebrating life's special moments. She offers professional makeup application for weddings, photoshoots, and stage performances, along with complete outfit and event styling services. For those looking to develop their own skills, she also provides personalized one-on-one makeup instruction.

Built on a foundation of word-of-mouth referrals and deep roots in dance and cultural events, Prerna's business has flourished over the past decade. She takes time to understand each client's unique style and vision, creating looks that feel authentic, expressive, and vibrant while honoring both cultural tradition and individual personality.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **React:** 19
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Fonts:** Geist (body) + Great Vibes (script headings) via `next/font`
- **CMS (future):** [Sanity](https://sanity.io) — pre-configured, see [Sanity Integration](#sanity-integration)

## Project Structure

```
app/
  layout.js              Root layout — Navbar, Footer, fonts, skip-link
  page.js                Home page (Hero, Services, Book, Contact, Features, Testimonials)
  about/page.js          About page (Meet Prerna, Stats, Philosophy)
  globals.css            Tailwind config, brand color tokens, smooth scroll
components/
  Navbar.js              Client component — sticky navbar, mobile hamburger menu
  Footer.js              Server component — 4-column footer, social icons
  SanityImage.js         Unified image component — placeholder now, Sanity CDN later
lib/
  sanity.js              Sanity CMS config stub (ready to connect)
  content.js             Centralized content layer (static data shaped for Sanity schemas)
public/
  images/
    orchid.png           Decorative purple orchid flower
    lily.png             Decorative purple lily flower
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero section, services grid with category tabs, Book Your Look CTA, contact form, 1-on-1 lessons & events feature cards, testimonials |
| `/about` | About — Page header, Meet Prerna bio with portrait placeholder, stats (12+ years, 500+ brides, 25 awards, 100% satisfaction), Our Philosophy, Book a Consultation CTA |

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-purple` | `#A855F7` | Buttons, accents, active states |
| `brand-purple-dark` | `#7E22CE` | Navbar gradient, card backgrounds |
| `brand-purple-light` | `#F3E8FF` | Section backgrounds, contact card |
| `brand-gold` | `#B8860B` | Script headings, stats, CTA buttons |
| `brand-card` | `#F5D0FE` | Service card backgrounds |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Sanity Integration

The codebase is pre-wired for Sanity CMS so the client can manage their own images and content. When ready to connect:

1. Install dependencies:
   ```bash
   npm install next-sanity @sanity/image-url
   ```

2. Create a Sanity project at [sanity.io/manage](https://sanity.io/manage)

3. Add environment variables to `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. Uncomment the client exports in `lib/sanity.js`

5. In `lib/content.js`, swap the static `return {...}` blocks with the GROQ queries already written as comments in each function

6. Uncomment the `urlForImage` resolution in `components/SanityImage.js`

7. Uncomment `images.remotePatterns` in `next.config.mjs` to allow `cdn.sanity.io`

No changes to pages or components needed — they already consume the right data shapes.

## Accessibility

- Skip-to-content link for keyboard navigation
- All sections have `aria-labelledby` linked to heading IDs
- Form inputs have hidden `<label>` elements (`sr-only`)
- Service tabs use `role="tablist"` / `role="tab"` / `aria-selected`
- Decorative images use `alt=""` and `aria-hidden="true"`
- Social icons use `aria-label` for screen readers
- Focus-visible outlines on all interactive elements

## Client Requirements

Per client meeting notes:
- **No phone number** anywhere on the website — contact is email-only
- Purple and gold brand aesthetic
- Tesla-style smooth scroll experience
- Portfolio/gallery display (planned)
- Easy way to add photos over time (Sanity CMS)
- Accessibility for blind users

## Documentation

- **Client Notes Followup** — https://docs.google.com/document/d/1TYeBjkm82M8-MbAT971J47X9kcspPjXVeO9RROpXnm0/edit?tab=t.0
- **Client Notes** — https://docs.google.com/document/d/1OsBKSZjczyhEb1Ls_CjjkesELUoNfMlpoRkQFwe--ko/edit?tab=t.0
- **Figma Mock UI Designs**

## Deploy on Vercel

The easiest way to deploy is with the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
