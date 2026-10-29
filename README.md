# Elxir — Architecture & Interiors website

Next.js 16 (App Router, Cache Components) site using the Ecrait template's layout as a
design reference: black framed grid with fixed top bar and social side rail, full-bleed
hero slider with bottom control strip, project / testimonial / team / partner carousels,
full-screen portfolio mosaic with filter bar, project pages with lightbox, project search,
newsletter signup and animated page transitions. All code is original; no template
assets are used.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things live

| What | Where |
| --- | --- |
| All copy, projects, services, team, contact details | `src/lib/site.ts` |
| Colours, fonts, spacing, animations | `src/app/globals.css` (`:root` tokens) |
| Pages | `src/app/` — `/`, `/projects`, `/projects/[slug]`, `/about`, `/services`, `/contact` |
| Components | `src/components/` |
| Contact form handler | `src/app/contact/actions.ts` (validation done; wire up email delivery at the TODO) |
| Newsletter handler | `src/app/actions.ts` (wire up your mailing list at the TODO) |

## Before launch

- Replace the Unsplash placeholder photos in `public/images/` with your own.
- Replace placeholder team portraits in `public/images/team/` and partner names in `site.ts`.
- Connect the contact form to an email service or CRM.
- Update the map embed on `/contact` to your real address.
