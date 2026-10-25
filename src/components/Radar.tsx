'use client';

import React, { useEffect, useRef } from 'react';
import type { Domain } from '@/data/resumeData';

export interface Blip {
  label: string;
  angle: number; // degrees, 0 = north, clockwise
  r: number; // 0..1 of scope radius
  domain: Domain;
}

interface RadarProps {
  blips: Blip[];
  className?: string;
}

const DOMAIN_VARS: Record<Domain, string> = {
  ai: '--c-ai',
  embedded: '--c-embedded',
  cloud: '--c-cloud',
  data: '--c-data',
  web: '--c-web',
  people: '--c-people',
};

const TAU = Math.PI * 2;
const SWEEP_PERIOD_MS = 7000;

/** A live radar scope. Blips light up when the sweep passes them, then fade. */
export default function Radar({ blips, className }: RadarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const css = getComputedStyle(document.documentElement);
    const col = (v: string) => css.getPropertyValue(v).trim() || '#0e9f6e';
    const GREEN = col('--radar');
    const INK = col('--ink');
    const PAPER = col('--bg');
    const blipColors = blips.map((b) => col(DOMAIN_VARS[b.domain]));

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      // The canvas is absolutely positioned to fill the wrapper, so changing its
      // bitmap size never feeds back into the wrapper's layout.
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    // Resizing a canvas clears it, so always schedule a redraw afterwards
    // (matters when reduced motion means there is no animation loop running).
    const ro = new ResizeObserver(() => {
      resize();
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(draw);
    });
    ro.observe(wrap);

    const state = {
      sweep: reduceMotion ? Math.PI * 1.25 : 0,
      hits: blips.map<number>(() => (reduceMotion ? 1 : 0)),
      mouse: null as { x: number; y: number } | null,
      last: performance.now(),
      t: 0,
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      state.mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      state.mouse = null;
    };
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerleave', onLeave);

    const blipAngles = blips.map((b) => ((b.angle - 90) * Math.PI) / 180); // canvas angle (0 = east)

    const withAlpha = (hex: string, a: number) => {
      const m = hex.replace('#', '');
      const n = m.length === 3 ? m.split('').map((c) => c + c).join('') : m;
      const r = parseInt(n.slice(0, 2), 16);
      const g = parseInt(n.slice(2, 4), 16);
      const b = parseInt(n.slice(4, 6), 16);
      return `rgba(${r},${g},${b},${a})`;
    };

    const draw = (now: number) => {
      const dt = Math.min(64, now - state.last);
      state.last = now;
      state.t += dt;

      const cx = w / 2;
      const cy = h / 2;
      const R = Math.max(10, Math.min(w, h) / 2 - 14);

      if (!reduceMotion) {
        const prev = state.sweep;
        state.sweep = (state.sweep + (dt / SWEEP_PERIOD_MS) * TAU) % TAU;
        // Light up blips the sweep crossed this frame
        blipAngles.forEach((a, i) => {
          const na = ((a % TAU) + TAU) % TAU;
          const crossed = prev <= state.sweep ? na > prev && na <= state.sweep : na > prev || na <= state.sweep;
          if (crossed) state.hits[i] = 1;
          state.hits[i] = Math.max(0, state.hits[i] - dt / 3200);
        });
      }

      ctx.clearRect(0, 0, w, h);

      // Scope face
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, TAU);
      ctx.fillStyle = INK;
      ctx.fill();
      ctx.clip();

      // Faint fine grid
      ctx.strokeStyle = withAlpha(GREEN, 0.08);
      ctx.lineWidth = 1;
      const step = R / 6;
      for (let x = cx - R; x <= cx + R; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, cy - R);
        ctx.lineTo(x, cy + R);
        ctx.stroke();
      }
      for (let y = cy - R; y <= cy + R; y += step) {
        ctx.beginPath();
        ctx.moveTo(cx - R, y);
        ctx.lineTo(cx + R, y);
        ctx.stroke();
      }

      // Rings
      ctx.strokeStyle = withAlpha(GREEN, 0.35);
      [0.25, 0.5, 0.75, 1].forEach((f) => {
        ctx.beginPath();
        ctx.arc(cx, cy, R * f, 0, TAU);
        ctx.lineWidth = f === 1 ? 1.5 : 1;
        ctx.stroke();
      });

      // Crosshair
      ctx.strokeStyle = withAlpha(GREEN, 0.28);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx - R, cy);
      ctx.lineTo(cx + R, cy);
      ctx.moveTo(cx, cy - R);
      ctx.lineTo(cx, cy + R);
      ctx.stroke();

      // Degree ticks
      ctx.strokeStyle = withAlpha(GREEN, 0.5);
      for (let d = 0; d < 360; d += 10) {
        const a = ((d - 90) * Math.PI) / 180;
        const len = d % 30 === 0 ? 10 : 5;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a) * (R - len), cy + Math.sin(a) * (R - len));
        ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R);
        ctx.stroke();
      }

      // Sweep (trailing wedge)
      const sweepColor = withAlpha(GREEN, 0.0);
      const hasConic = typeof (ctx as CanvasRenderingContext2D & { createConicGradient?: unknown }).createConicGradient === 'function';
      if (hasConic) {
        const g = ctx.createConicGradient(state.sweep - Math.PI * 0.5, cx, cy);
        g.addColorStop(0, sweepColor);
        g.addColorStop(0.75, withAlpha(GREEN, 0.0));
        g.addColorStop(1, withAlpha(GREEN, 0.5));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, TAU);
        ctx.fill();
      }
      ctx.strokeStyle = withAlpha(GREEN, 0.95);
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(state.sweep) * R, cy + Math.sin(state.sweep) * R);
      ctx.stroke();

      // Blips
      ctx.font = `500 11px ${css.getPropertyValue('--font-mono') || 'monospace'}`;
      ctx.textBaseline = 'middle';
      blips.forEach((b, i) => {
        const a = blipAngles[i];
        const rr = b.r * R;
        const x = cx + Math.cos(a) * rr;
        const y = cy + Math.sin(a) * rr;
        const hit = state.hits[i];
        const color = blipColors[i];

        // resting dot
        ctx.fillStyle = withAlpha(color, 0.35 + 0.65 * hit);
        ctx.beginPath();
        ctx.arc(x, y, 3.2, 0, TAU);
        ctx.fill();

        if (hit > 0) {
          // expanding ring
          const ring = 4 + (1 - hit) * 18;
          ctx.strokeStyle = withAlpha(color, hit * 0.8);
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(x, y, ring, 0, TAU);
          ctx.stroke();

          // label with leader line
          const alpha = Math.min(1, hit * 1.6);
          const right = x < cx;
          const lx = x + (right ? 14 : -14);
          ctx.strokeStyle = withAlpha(color, alpha * 0.7);
          ctx.beginPath();
          ctx.moveTo(x + (right ? 5 : -5), y);
          ctx.lineTo(lx, y);
          ctx.stroke();
          ctx.textAlign = right ? 'left' : 'right';
          ctx.fillStyle = withAlpha(PAPER, alpha);
          ctx.fillText(b.label.toUpperCase(), lx + (right ? 4 : -4), y);
        }
      });

      // Mouse crosshair + readout
      if (state.mouse) {
        const { x, y } = state.mouse;
        const dx = x - cx;
        const dy = y - cy;
        const dist = Math.hypot(dx, dy);
        if (dist <= R) {
          ctx.setLineDash([3, 4]);
          ctx.strokeStyle = withAlpha(PAPER, 0.45);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x, cy - R);
          ctx.lineTo(x, cy + R);
          ctx.moveTo(cx - R, y);
          ctx.lineTo(cx + R, y);
          ctx.stroke();
          ctx.setLineDash([]);

          const az = ((Math.atan2(dy, dx) * 180) / Math.PI + 90 + 360) % 360;
          const rng = (dist / R) * 12; // "km"
          ctx.textAlign = 'left';
          ctx.fillStyle = withAlpha(PAPER, 0.85);
          ctx.fillText(`AZ ${az.toFixed(1).padStart(5, '0')}°  RNG ${rng.toFixed(1)} KM`, cx - R + 14, cy + R - 16);
        }
      }

      // Corner readouts inside scope
      ctx.textAlign = 'left';
      ctx.fillStyle = withAlpha(GREEN, 0.85);
      ctx.fillText(`SWP ${((state.sweep * 180) / Math.PI + 90).toFixed(0).padStart(3, '0')}°`, cx - R + 14, cy - R + 16);
      ctx.textAlign = 'right';
      ctx.fillText(`TRK ${String(blips.length).padStart(2, '0')}`, cx + R - 14, cy - R + 16);

      ctx.restore();

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
    };
  }, [blips]);

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', contain: 'size layout' }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
        aria-label="Radar scope showing Rayyan's projects as tracked targets"
        role="img"
      />
    </div>
  );
}
