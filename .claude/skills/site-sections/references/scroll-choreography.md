# Scroll choreography: the `--p` pattern

Used by `src/components/Hero.tsx` / `Hero.module.css`. Reuse it for any effect that depends on *how far* the user has scrolled rather than on a one-shot "is it visible" trigger: pinned stages, parallax layers, a frame that shrinks into a card, text acts that swap as you scroll.

## The idea

- A **tall wrapper** (`height: 250–320svh`) provides scroll distance.
- A **sticky stage** inside it (`position: sticky; top: 0; height: 100svh; overflow: hidden`) stays on screen while the wrapper scrolls past.
- JS computes `progress = clamp(-wrapper.top / (wrapper.height - viewport.height), 0, 1)` and writes it to the stage as `--p`.
- CSS slices `--p` into **acts** and derives every transform/opacity from them. Nothing else is animated from JS.

Why this split: the browser only has to repaint composited properties, the JS is a dozen lines, and you can redesign the whole sequence by editing CSS variables without touching the effect code.

## Minimal JS (client component)

```tsx
useEffect(() => {
  const wrapper = wrapperRef.current, stage = stageRef.current;
  if (!wrapper || !stage) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let target = 0, current = -1, raf = 0;

  const apply = (v: number) => stage.style.setProperty('--p', v.toFixed(4));
  const tick = () => {
    raf = 0;
    const next = current < 0 || Math.abs(target - current) < 0.0008 ? target : current + (target - current) * 0.16;
    if (next !== current) { current = next; apply(current); }
    if (current !== target) raf = requestAnimationFrame(tick);
  };
  const measure = () => {
    const rect = wrapper.getBoundingClientRect();
    const range = wrapper.offsetHeight - window.innerHeight;
    target = range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 1;
    if (reduce) { if (current !== 1) { current = 1; apply(1); } return; }
    if (!raf) raf = requestAnimationFrame(tick);
  };

  measure();
  window.addEventListener('scroll', measure, { passive: true });
  window.addEventListener('resize', measure);
  return () => {
    window.removeEventListener('scroll', measure);
    window.removeEventListener('resize', measure);
    if (raf) cancelAnimationFrame(raf);
  };
}, []);
```

The 0.16 lerp smooths wheel steps; it's fine to drop it and `apply(target)` directly for simpler effects.

## Minimal CSS

```css
.wrapper { position: relative; height: 280vh; height: 280svh; }

.stage {
  --p: 1;                                   /* no-JS / reduced-motion: show the finished state */
  --a: clamp(0, var(--p) / 0.35, 1);        /* act 1 runs over the first 35% */
  --b: clamp(0, (var(--p) - 0.3) / 0.4, 1); /* act 2 overlaps slightly */
  --ae: calc(1 - (1 - var(--a)) * (1 - var(--a)));  /* ease-out of --a */
  --be: calc(1 - (1 - var(--b)) * (1 - var(--b)));

  position: sticky; top: 0;
  height: 100vh; height: 100svh;
  overflow: hidden;
  isolation: isolate;
}

.layerOut { opacity: calc(1 - var(--ae)); transform: translateY(calc(var(--ae) * -10vh)); will-change: transform, opacity; }
.layerIn  { opacity: var(--be); transform: translateY(calc((1 - var(--be)) * 48px)); will-change: transform, opacity; }

@media (prefers-reduced-motion: reduce) {
  .wrapper { height: auto; }
  .stage { --p: 1 !important; position: relative; }
  .layerOut { display: none; }
}
```

## Rules of thumb

- Keep each act to 25–40% of the range and overlap neighbours a little so there is never a dead scroll zone.
- Square the act value (`1 - (1-a)^2`) for ease-out; it reads as "settling" rather than linear sliding.
- Expose layout endpoints as variables (`--frame-scale`, `--frame-x`) so the mobile media query can change *where* things end up without rewriting the transforms.
- Anything under the sticky stage that should not receive clicks while hidden needs `pointer-events: none` (Hero toggles `data-phase` for this).
- Pause video/canvas when `rect.bottom <= 0`.
- Test with reduced motion on: the page must read correctly as a static layout.
