# Motasem Kadry — Creative Developer Portfolio

A dark-themed, multi-page portfolio website built with HTML5, Tailwind CSS, and vanilla JavaScript. Fully self-contained with no build tools required — just open and run.

---

## Quick Start

1. Download or clone this repository
2. Open `index.html` in any modern web browser
3. That's it. No `npm install`, no build step, no configuration

> **Note:** An internet connection is required on first load for the Tailwind CSS CDN and Google Fonts.

---

## File Structure

```
portfolio/
├── index.html          Home page — hero section, animated code block, stats
├── about.html          About Me — bio paragraphs, quick facts card
├── skills.html         Core Skills + Future Skills Roadmap (#roadmap anchor)
├── projects.html       Featured Work — project cards (placeholder)
├── experience.html     Work History — vertical timeline layout
└── contact.html        Contact Form — EmailJS integration + validation

Portfolio_Documentation.docx  Full technical documentation
```

Every HTML file is **100% self-contained**. All CSS is inline, all JavaScript is inline, and there are zero external file dependencies. Copy any single `.html` file anywhere and it works independently.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic markup, forms, accessibility attributes |
| Tailwind CSS (CDN) | Utility-first framework for layout, spacing, responsiveness |
| Custom CSS | Variables, animations, transitions, form states, toast system |
| Vanilla JavaScript | Scroll reveal, cursor effects, mobile menu, form validation |
| EmailJS v4 (CDN) | Client-side email sending for the contact form |
| Google Fonts | Space Grotesk (display) + Space Mono (monospace) |

---

## Features

- **Scroll Reveal Animations** — Elements animate in as they enter the viewport using IntersectionObserver
- **Cursor Follower** — A blurred cyan gradient that follows the mouse on desktop (hidden on touch devices)
- **Parallax Orbs** — Two colored gradient orbs that translate on scroll at different speeds
- **Mobile Navigation** — Full-screen overlay menu with slide-in animation (below 768px)
- **Form Validation** — Real-time field validation on blur, visual error/success states, character counters
- **Toast Notifications** — Slide-in success/error toasts instead of browser alerts
- **Hero Entrance Animation** — Staggered keyframe animations on page load
- **Responsive Design** — Fully responsive across all screen sizes
- **Reduced Motion** — Respects `prefers-reduced-motion` OS setting
- **Accessibility** — Semantic HTML, ARIA labels, focus-visible outlines, form labels

---


```javascript
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';    // e.g. 'xYz123AbCd'
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';    // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';   // e.g. 'template_xyz789'
```

Save and test by submitting the form. A green toast should appear on success.

---

## Customization

### Color Scheme
All colors are defined as CSS variables at the top of the `<style>` block in every file:

```css
--bg: #0a0a0b;          /* Page background */
--fg: #fafafa;          /* Primary text */
--muted: #71717a;       /* Secondary text */
--accent: #22d3ee;       /* Buttons, links, highlights */
--danger: #f43f5e;       /* Roadmap, form errors */
--card: #18181b;        /* Card backgrounds */
--border: #27272a;      /* Borders and dividers */
```

Change any value to update the entire site's color scheme.

### Typography
Fonts are loaded via Google Fonts CDN. Update the link in `<head>` and the `font-family` references in CSS/Tailwind config to swap fonts.

### Adding Real Projects
Replace the placeholder cards in `projects.html` with actual content. Each card should include a screenshot, title, description, technology tags (`.skill-tag` class), and demo/source links.

### Contact Information
Update the email, GitHub, and LinkedIn links in the left column of `contact.html`. Each link uses an inline SVG icon — copy the pattern to add more.

### Navigation
The navigation bar is duplicated in all six files. When adding or removing pages, update the `<nav>` and `#mobileMenu` HTML in every file.

---

## Deployment

The portfolio is fully static — deploy it anywhere:

### GitHub Pages (Free)
Push files to a GitHub repo → Settings → Pages → Select branch → Live at `https://username.github.io/repo/`

### Netlify (Free)
Drag and drop the folder onto [app.netlify.com/drop](https://app.netlify.com/drop)

### Vercel (Free)
Run `npx vercel` in the project directory

### Traditional Hosting
Upload all files to `public_html/` via FTP

---

## Performance

- **IntersectionObserver** for scroll reveal — elements unobserved after animation
- **Debounced scroll** via `requestAnimationFrame` — limits updates to ~60fps
- **GPU layers** — `will-change` and `contain` on animated elements
- **Lazy EmailJS init** — SDK loads only when form is submitted
- **Visibility API** — cursor animation pauses when tab is hidden
- **Passive listeners** — all scroll handlers use `{ passive: true }`
- **Reduced motion** — all animations disabled via `prefers-reduced-motion`

---

## Browser Support

Chrome 49+, Firefox 31+, Safari 10.1+, Edge 15+, Opera 36+

---

## Troubleshooting

| Problem | Solution |
|---|---|
| No styling / blank page | Check internet connection for Tailwind CDN |
| Contact form not sending | Verify EmailJS credentials and check browser console |
| Animations not working | Check if reduced motion is enabled in OS settings |
| Navigation links broken | Ensure all 6 files are in the same directory with exact names |
| Mobile menu not appearing | Test on a screen narrower than 768px |
| Fonts look wrong | Google Fonts CDN may be blocked; fallback is sans-serif/monospace |

---

## License

Designed & Built by Motasem Kadry. © 2024 All rights reserved.
