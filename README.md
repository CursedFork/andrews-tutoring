# Andrews Tutoring — Personal Tutoring Business Website

[![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react&logoColor=white&labelColor=20232a)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?logo=vite&logoColor=white&labelColor=1a1a2e)](https://vitejs.dev)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://andrews-tutoring.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A fully responsive, single-page React application built for a personal tutoring business. Designed to be fast, accessible, and easy to maintain — with a clear path to expand into a full scheduling and payments platform.

**Live site → [andrews-tutoring.vercel.app](https://andrews-tutoring.vercel.app)**

---

## Features

- **Single-page layout** with smooth scroll navigation and a sticky responsive navbar
- **Animated hero section** with floating subject cards
- **Expandable subject cards** — accordion-style curriculum breakdowns for 8 subject areas, implemented with a CSS `grid-template-rows` transition (no JS animation libraries)
- **Transparent pricing section** with individual rate cards and a group rates table
- **Contact form** with full client-side validation and [Web3Forms](https://web3forms.com) integration — no backend required
- **Calendly booking embed** with lazy-loaded script injection and a graceful fallback UI
- **Mobile-first responsive design** across all breakpoints using CSS Grid and Flexbox
- **CSS Modules** for scoped, collision-free styling with a shared design token system
- **Accessibility-first** — semantic HTML, ARIA labels, focus management, and visible focus indicators throughout

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | React 18 | Functional components + hooks throughout |
| Build tool | Vite 5 | Fast HMR, ES module native, minimal config |
| Styling | CSS Modules + CSS custom properties | Scoped styles, no runtime overhead, easy theming |
| Form handling | Web3Forms | Zero-backend contact form, no vendor lock-in |
| Booking | Calendly inline widget | Lazy-loaded, graceful fallback if unconfigured |
| Deployment | Vercel | CI/CD on every push to `main`, free tier |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky nav with hamburger menu (mobile)
│   ├── Hero.jsx            # Full-viewport hero with animated subject cards
│   ├── About.jsx           # Bio section with credential highlights
│   ├── Subjects.jsx        # Accordion subject cards with curriculum details
│   ├── Pricing.jsx         # Rate cards + group pricing table
│   ├── Guitar.jsx          # Guitar lessons feature section
│   ├── Booking.jsx         # Calendly embed with lazy script loading
│   ├── Contact.jsx         # Validated contact form (Web3Forms)
│   └── Footer.jsx
├── utils/
│   └── validation.js       # Pure validation functions (XSS-safe, no deps)
├── App.jsx
├── main.jsx
└── index.css               # Design tokens, reset, global utilities
```

---

## Local Development

**Prerequisites:** Node.js 18+

```bash
# Clone the repo
git clone https://github.com/CursedFork/andrews-tutoring.git
cd andrews-tutoring

# Install dependencies
npm install

# Copy environment variables
copy .env.example .env
# Fill in VITE_WEB3FORMS_KEY and VITE_CALENDLY_URL in .env

# Start dev server
npm run dev
# → http://localhost:3000
```

### Environment Variables

| Variable | Required | Description |
|---|---|---|
| `VITE_WEB3FORMS_KEY` | Yes | Web3Forms access key for contact form |
| `VITE_CALENDLY_URL` | No | Calendly profile URL for booking embed |

---

## Deployment

The site deploys automatically to Vercel on every push to `main`. Environment variables are managed through the Vercel dashboard (Settings → Environments) — the `.env` file is gitignored and never committed.

To deploy your own fork:

```bash
npm install -g vercel
vercel
# Follow prompts — framework is auto-detected as Vite
```

---

## Security

- No `dangerouslySetInnerHTML` used anywhere in the codebase
- All user input is validated client-side before submission (`src/utils/validation.js`)
- Environment variables are prefixed with `VITE_` and never hardcoded
- `.env` is gitignored; secrets are injected at build time via Vercel

---

## Roadmap

Planned features for future iterations:

- [ ] Scheduling system with real-time availability logic
- [ ] Stripe integration for session deposits
- [ ] Student accounts and authentication (Supabase Auth or Clerk)
- [ ] Student dashboard — session history, notes, upcoming appointments
- [ ] Admin dashboard for managing bookings and students
- [ ] Testimonials section

---

## Author

**Andrew K.** — B.S. Computer Science & B.A. Philosophy, UMBC '25  
Substitute Teacher, Howard County Public School System  
[andrew.k.tutors@gmail.com](mailto:andrew.k.tutors@gmail.com)

---

## License

[MIT](LICENSE) — feel free to use this as a template for your own service business site.
