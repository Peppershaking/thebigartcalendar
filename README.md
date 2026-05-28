# The Big Art Calendar

An informational portal for art events across Europe. The calendar is the main page — every visitor lands there and can browse upcoming exhibitions, workshops, lectures, short courses, competitions, and meetups.

**The problem it solves:** art lovers and creative professionals often miss events or find out too late to plan travel and book tickets at a good price. This portal gives them a single place to discover what's happening, plan ahead, and never miss an event that matters to them.

**Audience:** artists, designers, curators, and anyone with a general interest in the arts across Europe.

**Data sources:** art event databases — specific integrations to be defined.

---

## Folder structure

```
src/
├── app/                    # Next.js App Router — pages and layouts
├── components/
│   ├── calendar/           # Calendar UI (grid, date strip, month strip, badges)
│   ├── events/             # Event cards, modals, and preview components
│   ├── filters/            # Filter bar
│   ├── layout/             # App-wide layout (header)
│   ├── mobile/             # Mobile-specific views (agenda)
│   └── ui/                 # Shared UI primitives (shadcn/ui components)
├── data/                   # Mock event data (temporary, until real sources are wired)
├── lib/                    # Utility functions (calendar logic, cn helper)
└── types/                  # Shared TypeScript types
```

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI library | React 19 |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui, Base UI |
| Icons | lucide-react |
| Deployment | Vercel |

### Constraints

- **SEO-first.** All content must be server-rendered and crawler-accessible (Google, GPT Search, etc.). Client-only rendering should be avoided for anything that carries indexable content.
- **Mobile-first.** Layouts are designed for mobile and scaled up to desktop — not the other way around.
- **No authentication at launch.** Email marketing subscription opt-in may be added later as the only user account surface.

---

## Running the project

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # run ESLint
```
