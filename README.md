# Jayson Global Roofing — Website

Production website for Jayson Global Roofing and Exteriors — a second-generation, family-owned roofing contractor serving Edmonton, Calgary, and central Alberta since 1988.

## Tech stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with a custom warm-cream design system
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Email:** Resend (server action emails the quote form to `info@jaysonglobal.com`)
- **Hosting target:** Vercel (zero-config deploy)

## Local development

Requires Node 20 or newer.

```bash
npm install
cp .env.local.example .env.local   # and fill in real values when you have them
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Variable | Purpose | Required for production |
| --- | --- | --- |
| `RESEND_API_KEY` | API key from https://resend.com — sends the quote-form emails. | Yes |
| `CONTACT_EMAIL_TO` | The inbox that receives quote requests. Defaults to `info@jaysonglobal.com`. | Recommended |
| `CONTACT_EMAIL_FROM` | The "from" address. Its sending domain MUST be verified in Resend first. | Yes |

In local development the form will succeed without a Resend key — submissions are logged to the server console instead of being emailed.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project**, import the repo. No configuration changes required.
3. Add the three env vars above in **Settings → Environment Variables**.
4. Buy the domain (e.g. `jaysonglobal.com`) and add it under **Settings → Domains**.
5. In Resend, verify the same domain so outbound emails from `quotes@jaysonglobal.com` deliver successfully.
6. Deploy.

## Editing the website (without a developer)

### Editing text

Almost every word on the website lives in **`src/lib/content.ts`**. Open the file, find the line you want to change, edit the text inside the quotes, save, and commit. Examples:

- Want to change the homepage headline? Find `heroHeadline:` inside the `HOME` object.
- Want to update office hours? Find `hours:` inside the `SITE` object.
- Want to rewrite the About story? Find the `chapters` array inside the `ABOUT` object.

### Editing phone numbers, email, addresses

All in the `SITE` object at the top of `src/lib/content.ts`. Change once, updates everywhere — nav, footer, contact page, and the contact form's confirmation email.

### Editing service area cities

Open `src/lib/content.ts`, find the `SERVICE_AREAS.groups` array, add a city object like `{ name: "Camrose", note: "1 hour southeast." }`.

### Editing FAQs

`src/data/faqs.ts`. Each service detail page imports its own array. To add a question to the residential page, add another `{ question, answer }` to the `residentialFaqs` array.

### Adding a project

`src/data/projects.ts`. Add a new object to the `projects` array:

```ts
{
  slug: "leduc-new-roof",          // unique
  title: "Leduc Re-Roof",
  location: "Leduc, AB",
  category: "Residential",          // one of the filter categories
  scope: "Tear-off and re-roof on a 2,200 sq ft two-storey.",
  materials: "IKO Cambridge architectural shingles.",
  details: "Completed in two days. Crew of five.",
  image: GALLERY[0],                // pick one from src/lib/images.ts, or paste your own URL
  span: "tall",                     // 'tall' | 'wide' | 'normal'
}
```

### Adding a review

`src/data/reviews.ts`. Add a new object to the `reviews` array:

```ts
{
  quote: "They did a great job…",
  name: "First name + last initial",
  location: "Edmonton",
  source: "Google",                 // 'Google' | 'HomeStars' | 'BBB'
  rating: 5,
  service: "Residential re-roof",   // optional
}
```

### Swapping an image

All image URLs live in **`src/lib/images.ts`**. Find the constant for the image you want to change (e.g. `HERO_HOME`) and either:

- Pick a different Unsplash photo ID using the `u("photo-id-here")` helper.
- Or paste a fully-qualified URL (you'll need to add that domain to `next.config.js` under `images.remotePatterns`).

To use uploaded photos, place them in `/public/images/` and reference them with `/images/your-photo.jpg`.

## Project structure

```
src/
├── app/
│   ├── layout.tsx                 ← Fonts, nav, footer, metadata, JSON-LD
│   ├── page.tsx                   ← Home
│   ├── globals.css
│   ├── about/                     ← /about
│   ├── services/                  ← /services + 4 detail pages
│   ├── projects/                  ← /projects (filterable, with modal)
│   ├── reviews/                   ← /reviews (filterable)
│   ├── contact/                   ← /contact (with embedded maps)
│   ├── quote/                     ← /quote (full form)
│   ├── service-areas/             ← /service-areas
│   ├── api/contact/route.ts       ← Resend email handler
│   ├── not-found.tsx              ← 404
│   ├── sitemap.ts                 ← /sitemap.xml
│   └── robots.ts                  ← /robots.txt
├── components/                    ← Shared, reusable pieces
├── lib/
│   ├── content.ts                 ← ALL editable copy
│   ├── images.ts                  ← ALL image URLs
│   ├── schema.ts                  ← Form validation
│   └── motion.ts                  ← Framer Motion variants
└── data/
    ├── projects.ts
    ├── reviews.ts
    └── faqs.ts
```

## Brand & design notes

- **Colors:** custom warm-cream palette in `tailwind.config.ts` (`cream`, `clay`, `ink`, `bone`). The site never uses Tailwind's default `slate` or `gray`.
- **Typography:** Fraunces serif for headlines (with high `SOFT` and `opsz` axes for editorial feel), Inter for body.
- **Motion:** subtle fade-up reveals on scroll, staggered children on grids, and gentle hover lifts. Respects `prefers-reduced-motion` automatically.

## Scripts

```bash
npm run dev      # Local dev server
npm run build    # Production build
npm run start    # Run the production build locally
```
