# GetPaid — Landing Page

## What this project is
A marketing/landing page for a SaaS invoicing product called **GetPaid**. Built with Next.js 16 + Tailwind v4 + TypeScript. The goal is to look like a premium, real-product landing page — not a template.

## Stack
- **Framework:** Next.js 16.2 (App Router, Turbopack)
- **Styling:** Tailwind v4 (`@import "tailwindcss"` in globals.css) + inline styles for layout-critical sections
- **Language:** TypeScript
- **Images:** Unsplash (free, no API key needed) — configured in `next.config.ts`
- **Fonts:** System font stack (`-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif`)
- **Deployment:** GitHub → Vercel

## How to run
```bash
# Must use WSL (Node.js is only installed there, not on Windows)
wsl
cd "/mnt/d/ClaudeCode/projects/Get Paid"
npm run dev
# → http://localhost:3000
```

## How to push to GitHub
```bash
wsl bash -c "cd '/mnt/d/ClaudeCode/projects/Get Paid' && git add . && git commit -m 'your message' && git push https://TOKEN@github.com/IDK10104/getpaid-.git main"
```
GitHub repo: https://github.com/IDK10104/getpaid-

## Critical rules — learned the hard way

### 1. NEVER put event handlers in Server Components
Only `Navbar.tsx` and `FAQ.tsx` have `'use client'`. Every other component is a Server Component.
- `onClick`, `onMouseEnter`, `onMouseLeave` etc. → only allowed inside files that start with `'use client'`
- For hover effects in Server Components → use CSS classes in a `<style>` tag, NOT inline `onMouse*` handlers

### 2. Use inline styles for layout — NOT Tailwind classes
Tailwind v4 class resolution has been unreliable for layout-critical properties in this project. Always use inline `style={{}}` for:
- `maxWidth`, `margin`, `padding`, `display`, `grid`, `flex`, `position`
- Use Tailwind classes only for simple utilities like `className="footer-link"` paired with a `<style>` tag

### 3. Centering pattern — use this every time
```tsx
// Every section follows this exact pattern:
<section style={{ padding: '80px 24px', background: '...' }}>
  <div style={{ maxWidth: 1120, margin: '0 auto' }}>
    {/* content */}
  </div>
</section>
```
**Never** put `flex flex-col` on `<body>` — it breaks `margin: auto` centering.

### 4. layout.tsx must stay minimal
```tsx
// app/layout.tsx — keep it exactly like this, no Geist fonts, no className on body
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### 5. Dev server caching
When changes don't appear → kill server, delete `.next`, restart:
```bash
wsl bash -c "pkill -f 'next dev'; rm -rf '/mnt/d/ClaudeCode/projects/Get Paid/.next'"
wsl bash -c "cd '/mnt/d/ClaudeCode/projects/Get Paid' && npm run dev 2>&1 &"
```
Then do **Ctrl+Shift+R** in the browser (hard refresh).

### 6. npm install must run in WSL
Node.js is not installed on Windows — always run `npm install` via WSL.
```bash
wsl bash -c "cd '/mnt/d/ClaudeCode/projects/Get Paid' && npm install"
```

---

## Design system

### Colors (CSS variables in globals.css)
```css
--bg: #f7fafc           /* page background — light blue-gray */
--dark: #1a1a1a         /* headlines, buttons */
--text-primary: rgba(0,0,0,0.9)
--text-secondary: #555
--muted: #8d8d8d
--brand-blue: #0098f2
--brand-pink: #f200ca
--brand-purple: #6c56fc
--green: #5d9c06
--blue-tint: rgba(0,152,242,0.12)   /* icon backgrounds */
--pink-tint: rgba(242,0,202,0.12)
--purple-tint: rgba(108,86,252,0.12)
--green-tint: rgba(93,156,6,0.12)
```

### Typography scale
- Hero headline: `clamp(40px, 6vw, 68px)`, weight 800, letter-spacing `-2px`
- Section headline: `clamp(26px, 3.5vw, 40px)`, weight 800, letter-spacing `-1px`
- Body text: `15–16px`, line-height `1.7`
- Labels (uppercase): `11px`, weight 700, letter-spacing `0.12em`
- Card text: `13–14px`

### Section label pattern
Every section starts with a small colored uppercase label:
```tsx
<p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-blue)', marginBottom: 14 }}>
  Section name
</p>
```

### Spacing
- Section vertical padding: `80px 24px`
- Container max-width: `1120px`
- Card border-radius: `16–20px`
- Button border-radius: `10–14px`
- Gap between 2-column grid: `64px`

---

## Page structure
```
Navbar (sticky, blur backdrop)
├── Hero (headline + CTA + app dashboard preview)
├── Testimonial (stars + quote + 4 stats)
├── Features (6-card grid)
├── Comparison (table vs accounting apps)
├── SameDay (2-col: text + payment timeline card)
├── ProductShowcase
│   ├── Dark section (wood desk photo bg + 2 invoice cards at angle)
│   └── Phone section (outdoor photo bg + mobile mockup)
├── Recurring (2-col: text + laptop mockup with dashboard)
├── Security (3 badges + partner logos)
├── CTA (grass photo bg + brand logo cards)
├── FAQ (accordion)
└── Footer
```

## Component conventions

### Photo background sections
```tsx
<section style={{ position: 'relative', overflow: 'hidden', minHeight: 600 }}>
  <div style={{
    position: 'absolute', inset: 0,
    backgroundImage: 'url(https://images.unsplash.com/photo-XXXXX?auto=format&fit=crop&w=1600&q=80)',
    backgroundSize: 'cover', backgroundPosition: 'center',
    filter: 'brightness(0.35)',
  }} />
  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(...)' }} />
  <div style={{ position: 'relative', maxWidth: 1120, margin: '0 auto', padding: '80px 24px' }}>
    {/* content on top of photo */}
  </div>
</section>
```

### Feature icon pattern
```tsx
<div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--blue-tint)', color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <svg>...</svg>
</div>
```

### Responsive grids — use className + `<style>` tag
```tsx
<div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
  ...
</div>
<style>{`@media(max-width:860px){ .two-col-grid { grid-template-columns: 1fr !important; } }`}</style>
```

---

## When building a new website like this

1. **Scaffold**: `wsl bash -c "cd '/mnt/d/ClaudeCode/projects' && npx create-next-app@latest projectname --typescript --tailwind --eslint --app --no-src-dir --import-alias '@/*' --yes"`
   - Use a lowercase no-spaces folder name for scaffolding, then move files if needed
2. **Replace `layout.tsx`** immediately with the minimal version (no Geist font, no className on body)
3. **Replace `globals.css`** with the design token CSS variables
4. **Use inline styles** for all layout, inline CSS `<style>` tags for hover/responsive
5. **Photo sections**: use Unsplash URLs, configure `next.config.ts` with `images.remotePatterns`
6. **Client components**: only add `'use client'` to components that need `useState`/`useEffect` or event handlers
7. **Git**: init → commit → create GitHub repo → push with token in URL
