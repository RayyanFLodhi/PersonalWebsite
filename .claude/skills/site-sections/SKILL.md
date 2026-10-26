---
name: site-sections
description: Build or restyle sections, cards, and scroll/entrance animations for Rayyan's personal website (Next.js app router, CSS Modules, dark theme, scroll-driven Hero). Use this whenever the user asks to add a section, redesign a block of the home page, add a card type, add motion or a reveal/parallax/pinned effect, change layout or spacing, or says anything like "make the X section look better", "add a Y section", "animate Z" in this repo, even if they don't say "section" or "animation". Also use it before touching Hero.tsx, Reveal.tsx, Section.tsx, page.tsx, or any *.module.css.
---

# Site sections & animations

This repo is a one-page recruiting portfolio. Every section follows the same small set of conventions, and the whole site should still feel like one piece after your change. Read this file, then open the existing component closest to what you're building and mirror it.

## Stack facts (don't fight them)

- Next.js 16 app router, React 19, TypeScript. Single route: `src/app/page.tsx` composes every section in order.
- Styling is **CSS Modules only** (`Foo.module.css` next to `Foo.tsx`). No Tailwind, no styled-components, no animation libraries. Add nothing to `package.json` for a section.
- Fonts come from `next/font` in `layout.tsx` as `--font-base` (Inter, body) and `--font-heading` (Outfit, headings). Never import a font elsewhere.
- Content lives in `src/data/resumeData.ts`. Sections *render* data; they don't hardcode resume facts. If a new section needs new content, add a typed interface and array there first.
- `'use client'` only when the component uses hooks or browser APIs. Plain presentational components stay server components.
- Lint forbids raw `<img>` without a disable comment; the codebase uses `// eslint-disable-next-line @next/next/no-img-element` rather than `next/image` for local art. Follow that.

## Design tokens (globals.css)

Use these variables instead of literal colours or timings. The dark theme is a deliberate, settled decision.

| Token | Value / role |
|---|---|
| `--background` / `--foreground` | `#0a0a0a` / `#ededed` |
| `--secondary` / `--secondary-foreground` | card grey `#171717` / muted text `#a3a3a3` |
| `--primary` / `--primary-glow` | blue `#3b82f6` and its 50% glow |
| `--accent` / `--accent-glow` | violet `#8b5cf6` and its glow |
| `--border` | `#262626` hairline |
| `--section-spacing` | `6rem` vertical rhythm (3rem under 768px) |
| `--transition-fast` / `--transition-medium` | `0.2s ease` / `0.4s ease` for hover states |
| `--ease-out` | `cubic-bezier(0.2, 0.7, 0.2, 1)` for anything that moves into place |

Global utility classes: `.container` (1200px, 1.5rem gutters), `.section-title` (white-to-grey gradient h2), `.gradient-text` (blue-to-violet), `.primaryBtn`.

Surface recipe used everywhere: `background: rgba(255,255,255,0.02–0.06)`, `border: 1px solid var(--border)`, `border-radius: 12px`, hover lifts `translateY(-5px)` and recolours the border to `--accent` or `--primary`. Pills are `border-radius: 100px` with `rgba(255,255,255,0.05)`. Sub-headings get a 3px left border in `--accent`. Reusing this recipe is what makes a new section look native.

## Anatomy of a section

```tsx
<Section id="talks" title="Talks" className={styles.darkSection}>
  <div className={styles.projectsGrid}>
    {resumeData.talks.map((t, i) => (
      <Reveal key={t.title} delay={(i % 3) * 70} className={styles.revealItem}>
        <TalkCard talk={t} onClick={() => setSelectedItem(t)} />
      </Reveal>
    ))}
  </div>
</Section>
```

- `Section` (`src/components/Section.tsx`) gives the `id`, vertical padding, container, and an auto-revealed `.section-title`. Always use it; don't hand-roll `<section>`.
- Sections alternate plain and `styles.darkSection` (a 1% white wash) down the page. Keep the alternation when inserting one.
- `Reveal` (`src/components/Reveal.tsx`) is the entrance animation: fade + 28px lift the first time it scrolls into view. Stagger grid children with `delay={(i % columns) * 70}`. Inside a grid, pass `className={styles.revealItem}` so the wrapper is `height: 100%` and the card stretches.
- Card grids use `repeat(auto-fit, minmax(300px, 1fr))` with `gap: 2rem`.
- Clickable cards open the shared `Modal` via `setSelectedItem(item)` in `page.tsx`. The modal reads `title|role`, `company|organization`, `period|year`, `location`, `description`, `image|logo`, `website`, `techCheck`. Shape new data to fit those keys and you get the modal for free.
- Add an `{ name, href: '#id' }` entry to `navLinks` in `Navbar.tsx` if the section deserves a nav slot (the nav is short on purpose; not everything goes there).

Starter files: copy `assets/SectionTemplate.tsx` and `assets/SectionTemplate.module.css` and rename.

## Motion rules

Motion on this site is quiet and physical: things settle into place, they don't bounce or spin. Aim for "the page is already there, you're just uncovering it."

1. **Entrances**: use `Reveal`. Don't write a second IntersectionObserver unless you need a different trigger (e.g. re-triggering, or progress rather than a one-shot).
2. **Hover**: `transform` and `border-color`/`box-shadow` only, on `--transition-fast`. Never animate `width`, `height`, `top`, `left`, or `margin`.
3. **Scroll-driven / pinned effects** (parallax, a card that shrinks as you scroll, a stage that sticks while text swaps): follow the Hero pattern. JS measures scroll and writes a single `--p` progress variable (0..1) onto the pinned element; CSS derives every transform and opacity from `--p` with `clamp()` and `calc()`. See `references/scroll-choreography.md` for the full recipe and a minimal template. This keeps the JS tiny, the choreography declarative, and the effect cheap.
4. **Reduced motion is mandatory.** Every animated module gets a `@media (prefers-reduced-motion: reduce)` block that renders the finished state with no transition. For scroll choreography, also honour `matchMedia` in JS and snap `--p` to 1.
5. **Perf hygiene**: `passive: true` scroll listeners, coalesce into `requestAnimationFrame`, `will-change` only on the few elements that really move, pause anything expensive (video, canvas) once it's offscreen.
6. **Timings**: 0.2s for hover, 0.4s for state swaps, 0.7s on `--ease-out` for entrances. Longer than ~0.9s starts to feel sluggish on a resume site.

## Responsive breakpoints

Two breakpoints are in use: `768px` (section padding, about-grid collapse) and `900px` (Hero layout). Pick the one the neighbouring component uses. Mobile is a real audience for recruiters opening links from LinkedIn, so check narrow widths; horizontal overflow is the most common regression (body uses `overflow-x: clip`, so sticky still works, but an overflowing child will still scroll).

## Workflow

1. Read the closest existing component and its module. Note which tokens, radii, and hover recipe it uses.
2. If new content is needed, extend `resumeData.ts` (interface + data) before writing UI.
3. Write `Component.tsx` + `Component.module.css`, then mount it in `page.tsx` in the right order with `Section` + `Reveal`.
4. Add the nav link if warranted.
5. Verify:
   ```bash
   npm run lint
   npm run build
   ```
   Then `npm run dev` and check the section at desktop width, ~900px, and ~375px, plus once with reduced motion enabled in DevTools (Rendering, then emulate the prefers-reduced-motion media feature).
6. Summarise what changed in terms of files and the one visual idea, not a line-by-line diff.

## Things that have bitten before

- `overflow: hidden` on `html`/`body` breaks `position: sticky`; the site uses `overflow-x: clip` for that reason. Don't add overflow rules to ancestors of a pinned stage.
- The YouTube IFrame API replaces the DOM node you give it. Mount it on a node React doesn't own (see Hero) or React will throw on unmount.
- `Reveal` wrappers inside a CSS grid collapse the card height unless the wrapper is `height: 100%` (`styles.revealItem`).
- Inline `style={{}}` crept into `page.tsx`'s modal renderer. Don't extend that pattern; new styles go in a module.
