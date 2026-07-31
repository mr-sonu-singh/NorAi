# NorAI Technologies — Next.js Website

This project is a full conversion of the original static HTML/CSS website into **Next.js 16** using the App Router and TypeScript. All pages, styling, and content have been preserved — only the underlying architecture has changed, giving you routing, component reuse, and easy deployment out of the box.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- Plain CSS (no CSS framework) — kept close to the original design

## Project Structure

```
app/
  layout.tsx           Root layout — fonts, metadata, and shared <head> tags
  globals.css          All site-wide styles (ported from the original style.css)
  page.tsx             Home page                    → /
  about/page.tsx        About Us page               → /about
  services/page.tsx     Services page               → /services
  team/page.tsx          Team page                  → /team
  contact/page.tsx        Contact page               → /contact
                          (client component — handles the contact form)

components/
  Header.tsx    Navigation bar. Automatically highlights the active
                page link based on the current route.
  Footer.tsx    Shared site footer.
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm start
```

## Deployment

This project deploys cleanly to **Vercel** (the creators of Next.js) with zero configuration:

1. Push the project to a GitHub repository.
2. Import the repository in Vercel.
3. Deploy — no additional setup required.

It will also run on any Node.js hosting environment that supports Next.js (Netlify, Render, a VPS, etc.).

## Notes

- All styling lives in `app/globals.css`. Colors, spacing, and layout match the original design exactly — nothing was redesigned.
- Navigation uses Next.js's `<Link>` component, so moving between pages is instant, client-side navigation rather than a full page reload.
- Team member images are served through `next/image` for automatic optimization (lazy loading, responsive sizing, compression).
- Keep dependencies (`next`, `react`, `react-dom`) up to date — Next.js ships regular security patches, and older major versions eventually stop receiving fixes.