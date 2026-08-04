# Website Modernisation — Task Log

## 1. "What I Can Do" Capabilities Section (Homepage)
Replace the percentage-based "My Programming Skills" section with a statement-driven
**"What I Can Do"** capabilities grid.

### Steps
- [x] 1. Analyse existing codebase (index.html, style/main.css, scripts/main.js)
- [x] 2. Confirm plan with user
- [x] 3. Rewrite `index.html` skills section → `#skills` becomes a capabilities grid
  - [x] New heading + intro copy framing end-to-end delivery
  - [x] 8 capability cards with inline SVG icons:
        1. Database-Integrated Systems
        2. API Development & Integration
        3. Mobile App Development
        4. Desktop App Development
        5. Cybersecurity
        6. Website Development
        7. Setup & Deployment
        8. Maintenance & Support
- [x] 4. Update `style/main.css` — replace skill-bar styles with capability-card styles
  - [x] Grid layout, glassmorphism cards, hover lift, gradient icon accents
  - [x] Responsive behaviour
- [x] 5. Update `scripts/main.js` — remove skill-bar fill animation (bars no longer exist)
- [x] 6. Verify the homepage renders correctly in the browser
  - [x] Confirmed no legacy skill-bar class references remain (grep clean)
  - [x] `node --check` passes for `scripts/main.js`

---

## 2. About Page Remake (`about/`)
Rebuild the outdated About page with the modern homepage design language + extra animations.

### Steps
- [x] 1. Analyse existing About page + modern case-study design language
- [x] 2. Rewrite `about/index.html`
  - [x] Modern header/nav + mobile menu (matches homepage)
  - [x] Hero with portrait, rotating "LET'S CREATE • LET'S BUILD • LET'S SHIP" seal, floating tech chips
  - [x] Typewriter role rotator (Software/Web/Mobile Developer, AI Enthusiast, Cybersecurity Advocate)
  - [x] Role marquee (outlined scrolling words)
  - [x] "My Story" — 6 glassmorphism story cards with gradient accents
  - [x] Animated stats counters (years, projects, technologies, passion)
  - [x] "What Sets Me Apart" contractor card
  - [x] Quote blockquote
  - [x] CTA band + footer
- [x] 3. Create `about/style.css`
  - [x] Reuses homepage design tokens (dark aurora theme, Space Grotesk + Inter)
  - [x] Photo float, chip float, seal spin, marquee, gradient-move animations
  - [x] Scroll-reveal + `prefers-reduced-motion` support
  - [x] Responsive behaviour
- [x] 4. Create `about/script.js`
  - [x] Mobile menu toggle + Escape close
  - [x] Header scrolled state
  - [x] IntersectionObserver scroll reveals
  - [x] Typewriter effect
  - [x] Marquee duplication
  - [x] Animated stat counters
- [x] 5. Verify — `node --check` passes for `about/script.js`

