# rayyanlodhi.ca

Personal portfolio for Rayyan Lodhi: a one-page recruiting site built with Next.js 16 (app router), React 19, TypeScript and CSS Modules. No UI or animation libraries.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npx eslint src   # lint the source
```

## Where things live

- `src/data/resumeData.ts` holds all content: experience, projects, teams, awards, skills and the Journey chapters. Edit copy here, not in components.
- `src/app/page.tsx` composes the sections in order: Hero, Journey, Experience, Projects, Leadership, Awards, Skills, Contact.
- `src/components/` has one `.tsx` plus one `.module.css` per section or card. Scroll-driven sections (Hero, Journey, the experience timeline) follow the same pattern: JS writes a single `--p` progress variable and CSS derives every transform from it.
- `src/components/JourneyScenes.tsx` is the inline SVG art for the Journey section.
- `public/logos/` and `public/extracurriculurs/` hold the square tiles shown on cards. `placeholder-project.png` is treated as "no image".

Design conventions for new sections are in `.claude/skills/site-sections/`.
