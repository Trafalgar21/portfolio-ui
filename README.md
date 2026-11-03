# Portfolio — Backend Engineer

A dark-by-default, technical portfolio for a backend developer, built with
Angular (standalone components) and TypeScript.

## Features

- **Day/night mode** — toggle in the navbar, defaults to dark, persists via
  `localStorage`, and respects the OS preference on first visit. Logic lives
  in `src/app/services/theme.service.ts`. An inline script in `src/index.html`
  applies the saved theme before Angular boots, so there's no flash of the
  wrong theme on load.
- **Backend-focused content** — bio, skills, and project placeholders are
  written for a backend/API/infrastructure role rather than a frontend one.

## Structure

- `src/app/services/theme.service.ts` — dark/light mode state, using a signal + `effect`
- `src/app/components/navbar` — sticky nav with the theme toggle and mobile menu
- `src/app/components/hero` — intro + a terminal-style "status card"
- `src/app/components/about` — bio + experience timeline
- `src/app/components/projects` — project list (edit `projects.component.ts` to add your own)
- `src/app/components/skills` — grouped skills/tools list
- `src/app/components/contact` — reactive contact form (currently logs to console — wire up `onSubmit()` in `contact.component.ts` to an email service or API)
- `src/app/components/footer` — social links

Design tokens (colors, fonts, spacing) live in `src/styles.scss` as CSS
variables, split into `[data-theme='dark']` and `[data-theme='light']` blocks.

## Getting started

```bash
npm install
npm start
```

Then open http://localhost:4200.

## Build for production

```bash
npm run build
```

Output goes to `dist/portfolio-backend`.

## Next steps

- Replace placeholder name, bio, project details, and social links throughout the components.
- Swap in a favicon under `public/`.
- Connect the contact form to a real backend or a service like Formspree/EmailJS.
- A "recently played on Spotify" section was scoped out for now — it needs
  OAuth credentials and a small backend proxy (the client secret can't live
  in frontend code safely). Happy to add it later once you're ready to wire
  up real credentials.
