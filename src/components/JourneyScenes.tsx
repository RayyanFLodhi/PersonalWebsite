import React from 'react';
import styles from './Journey.module.css';

/*
 * Four illustrated backdrops for the Journey section. They are plain inline SVG in the site palette
 * (dark base, blue + violet accents) so the whole "camera flight" ships with zero image assets.
 * Each scene fills a 100vw x 100svh cell; `slice` keeps the ground anchored and crops the sides.
 *
 * Anything that moves continuously is wrapped in its own <g> so CSS transforms don't clobber the
 * positioning transform attribute on the parent.
 */

const ART = { viewBox: '0 0 1000 600', preserveAspectRatio: 'xMidYMax slice', 'aria-hidden': true as const };

/* ---------- 01 · Mars: the rover yard ---------- */

export const MarsScene = () => (
    <svg className={styles.art} {...ART}>
        <defs>
            <linearGradient id="j-mars-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#05060c" />
                <stop offset="0.42" stopColor="#170b0a" />
                <stop offset="0.78" stopColor="#4a2316" />
                <stop offset="1" stopColor="#6b3a1f" />
            </linearGradient>
            <radialGradient id="j-mars-sun" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0" stopColor="#ffd9b8" stopOpacity="0.95" />
                <stop offset="0.35" stopColor="#ffb07a" stopOpacity="0.3" />
                <stop offset="1" stopColor="#ffb07a" stopOpacity="0" />
            </radialGradient>
        </defs>
        <rect width="1000" height="600" fill="url(#j-mars-sky)" />
        <circle cx="770" cy="300" r="110" fill="url(#j-mars-sun)" />
        <circle cx="770" cy="300" r="13" fill="#ffe7d2" />

        {/* far ridge, near dunes, a few rocks */}
        <path
            d="M0 430 L110 402 L230 420 L340 382 L460 412 L560 374 L690 406 L800 378 L920 404 L1000 390 L1000 600 L0 600Z"
            fill="#2a130d"
        />
        <path d="M0 482 C150 460 260 502 400 480 S650 452 800 478 S950 502 1000 488 L1000 600 L0 600Z" fill="#1a0b08" />
        <ellipse cx="180" cy="522" rx="26" ry="9" fill="#110705" />
        <ellipse cx="860" cy="542" rx="40" ry="12" fill="#110705" />
        <ellipse cx="560" cy="566" rx="18" ry="6" fill="#110705" />

        {/* everything rover-related sits in one wrapper so phones can shrink and recentre it in CSS */}
        <g className={styles.rover}>
        {/* ground shadow under the rover */}
        <ellipse cx="572" cy="508" rx="122" ry="7" fill="#110705" />
        {/* the rock the arm is reaching for */}
        <ellipse cx="712" cy="503" rx="13" ry="6.5" fill="#2a130d" />
        <path d="M702 501 Q710 494 722 500" fill="none" stroke="#5a2e1c" strokeWidth="1.2" />

        {/* rover: rocker-bogie suspension, chassis with solar deck, mast cameras, high-gain dish, and a
            3-link arm. Everything static lives in one translated group; the forearm is animated, so it is
            drawn in absolute coordinates (CSS transforms would clobber a transform attribute). */}
        <g transform="translate(560 468)">
            {/* suspension linkage sits behind the wheels */}
            <g className={styles.line} strokeWidth="2.4">
                <path d="M62 22 L14 -10 L-30 2" />
                <path d="M-62 22 L-30 2 L2 22" />
            </g>
            {[-62, 2, 62].map((x) => (
                <g key={x} transform={`translate(${x} 22)`}>
                    <circle r="17" className={styles.line} />
                    <circle r="13.5" className={styles.tread} />
                    <circle r="8" className={styles.line} />
                    <path d="M0 -8 L0 8 M-8 0 L8 0 M-5.7 -5.7 L5.7 5.7 M-5.7 5.7 L5.7 -5.7" className={styles.spoke} />
                    <circle r="2.6" className={styles.node} />
                </g>
            ))}
            <circle cx="14" cy="-10" r="3" className={styles.node} />
            <circle cx="-30" cy="2" r="3" className={styles.node} />

            <g className={styles.line}>
                {/* chassis with a chamfered nose */}
                <path d="M-80 -34 Q-80 -38 -76 -38 L62 -38 L84 -24 L84 -8 Q84 -4 80 -4 L-76 -4 Q-80 -4 -80 -8Z" />
                <path d="M-70 -21 L56 -21" className={styles.seam} />
                {/* solar deck + electronics box */}
                <rect x="-74" y="-46" width="104" height="8" rx="1.5" className={styles.panel} />
                <path d="M-48 -46 L-48 -38 M-22 -46 L-22 -38 M4 -46 L4 -38" className={styles.seam} />
                <rect x="-8" y="-58" width="24" height="12" rx="2" />
                {/* mast with a stereo camera head */}
                <path d="M-40 -46 L-40 -82" />
                <rect x="-58" y="-98" width="36" height="16" rx="3" />
                <circle cx="-49" cy="-90" r="3.4" />
                <circle cx="-31" cy="-90" r="3.4" />
                {/* high-gain dish on a short stem */}
                <path d="M-66 -46 L-66 -54" />
                <path d="M-78 -66 A12 12 0 0 0 -54 -66 Z" />
                <path d="M-66 -66 L-66 -74" />
                {/* whip antenna with a pennant */}
                <path d="M66 -35 L76 -76" />
                {/* arm turret + upper arm (shoulder at 50,-50; elbow at 92,-88) */}
                <rect x="38" y="-50" width="24" height="12" rx="2" />
                <rect x="0" y="-4.5" width="57" height="9" rx="4.5" transform="translate(50 -50) rotate(-42)" />
            </g>
            <path d="M76 -76 L87 -72 L76 -68Z" className={styles.flag} />
            <circle cx="-49" cy="-90" r="1.5" className={styles.node} />
            <circle cx="-31" cy="-90" r="1.5" className={styles.node} />
            <circle cx="-66" cy="-75" r="2" className={styles.node} />
            <circle cx="-26" cy="-101" r="2.6" className={styles.beacon} />
            <circle cx="50" cy="-50" r="5" className={styles.line} />
            <circle cx="50" cy="-50" r="2.2" className={styles.node} />
        </g>

        {/* forearm + wrist + gripper: rotates slowly about the elbow (652,380) */}
        <g className={styles.reach}>
            <g className={styles.line}>
                <rect x="0" y="-4.5" width="70" height="9" rx="4.5" transform="translate(652 380) rotate(62)" />
                <path d="M678 446 L692 438" strokeWidth="3" />
                <path d="M678 446 L688.3 465.4 L692.7 463" />
                <path d="M692 438 L702.3 457.4 L697.9 459.7" />
            </g>
            <circle cx="685" cy="442" r="4.5" className={styles.line} />
            <circle cx="685" cy="442" r="2" className={styles.node} />
        </g>
        <circle cx="652" cy="380" r="5" className={styles.line} />
        <circle cx="652" cy="380" r="2.2" className={styles.node} />
        </g>

        {/* wheel tracks leading in */}
        <path d="M-20 540 Q260 520 500 498" className={styles.track} />
        <path d="M-20 556 Q280 540 520 512" className={styles.track} />
    </svg>
);

/* ---------- 02 · Earth orbit: LEO and GEO ---------- */

const Satellite = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) => (
    <g transform={`translate(${x} ${y}) scale(${scale})`} className={styles.line}>
        <rect x="-26" y="-4" width="18" height="8" rx="1" className={styles.panel} />
        <rect x="8" y="-4" width="18" height="8" rx="1" className={styles.panel} />
        <rect x="-7" y="-7" width="14" height="14" rx="2" />
        <path d="M0 -7 L0 -14" />
        <circle cx="0" cy="-15" r="2" className={styles.node} />
    </g>
);

export const OrbitScene = () => (
    <svg className={styles.art} {...ART}>
        <defs>
            <linearGradient id="j-orbit-fade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#05060c" stopOpacity="0" />
                <stop offset="1" stopColor="#05060c" stopOpacity="1" />
            </linearGradient>
            <radialGradient id="j-earth" cx="0.36" cy="0.28" r="0.85">
                <stop offset="0" stopColor="#6fb3ff" />
                <stop offset="0.4" stopColor="#2563eb" />
                <stop offset="0.78" stopColor="#0b2a6b" />
                <stop offset="1" stopColor="#030b22" />
            </radialGradient>
            <radialGradient id="j-atmo" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0.84" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="0.94" stopColor="#3b82f6" stopOpacity="0.38" />
                <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
            <clipPath id="j-earth-clip">
                <circle cx="500" cy="760" r="370" />
            </clipPath>
        </defs>

        {/* atmosphere glow, planet, a few land masses, night-side shading */}
        <circle cx="500" cy="760" r="420" fill="url(#j-atmo)" />
        <circle cx="500" cy="760" r="370" fill="url(#j-earth)" />
        <g clipPath="url(#j-earth-clip)" fill="#2f9a68" opacity="0.55">
            <path d="M300 470 C340 430 420 440 440 480 C470 520 420 560 380 540 C340 520 290 520 300 470Z" />
            <path d="M560 420 C620 400 700 430 720 480 C740 540 680 560 640 530 C600 500 540 470 560 420Z" />
            <path d="M470 600 C520 580 580 610 570 650 C560 690 500 690 480 660 C460 630 450 610 470 600Z" />
        </g>
        <ellipse cx="760" cy="760" rx="300" ry="420" fill="#02060f" opacity="0.55" clipPath="url(#j-earth-clip)" />

        {/* orbit rings */}
        <circle cx="500" cy="760" r="420" className={styles.ring} />
        <circle cx="500" cy="760" r="560" className={styles.ring} />
        <text x="640" y="358" className={styles.label}>
            LEO
        </text>
        <text x="660" y="228" className={styles.label}>
            GEO
        </text>

        {/* satellites: the <g> wrappers rotate around the planet's centre in CSS */}
        <g className={styles.leoA}>
            <Satellite x={500} y={340} scale={0.9} />
        </g>
        <g className={styles.leoB}>
            <Satellite x={500} y={340} scale={0.8} />
        </g>
        <g className={styles.geo}>
            <Satellite x={500} y={200} scale={1.15} />
        </g>

        {/* a faint uplink from the ground station to GEO */}
        <path d="M500 392 L500 214" className={styles.link} />

        {/* the scene below is Mars: fade to black before the cell edge */}
        <rect x="0" y="440" width="1000" height="160" fill="url(#j-orbit-fade)" />
    </svg>
);

/* ---------- 03 · Low altitude: counter-UAS ---------- */

const Drone = ({ x, y, scale = 1, children }: { x: number; y: number; scale?: number; children?: React.ReactNode }) => (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
        <g className={styles.bob}>
            <g className={styles.line}>
                <path d="M-22 -10 L22 10 M-22 10 L22 -10" />
                <rect x="-11" y="-6" width="22" height="12" rx="3" />
                <ellipse cx="-24" cy="-11" rx="12" ry="3" />
                <ellipse cx="24" cy="-11" rx="12" ry="3" />
                <ellipse cx="-24" cy="11" rx="12" ry="3" />
                <ellipse cx="24" cy="11" rx="12" ry="3" />
            </g>
            <circle cx="0" cy="0" r="2.5" className={styles.beacon} />
            {children}
        </g>
    </g>
);

export const SkyScene = () => (
    <svg className={styles.art} {...ART}>
        <defs>
            <linearGradient id="j-dusk" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#05060c" />
                <stop offset="0.5" stopColor="#0c1230" />
                <stop offset="1" stopColor="#2a1a3e" />
            </linearGradient>
            <linearGradient id="j-sweep" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#8b5cf6" stopOpacity="0" />
                <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.45" />
            </linearGradient>
            <linearGradient id="j-edge-r" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#05060c" stopOpacity="0" />
                <stop offset="1" stopColor="#05060c" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="j-fov" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0" stopColor="#3b82f6" stopOpacity="0.18" />
                <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
        </defs>
        <rect width="1000" height="600" fill="url(#j-dusk)" />

        {/* skyline */}
        <g fill="#07070a">
            <rect x="0" y="470" width="1000" height="130" />
            <rect x="40" y="400" width="70" height="80" />
            <rect x="130" y="430" width="50" height="60" />
            <rect x="200" y="380" width="90" height="100" />
            <rect x="320" y="420" width="60" height="70" />
            <rect x="400" y="350" width="80" height="140" />
            <rect x="500" y="410" width="60" height="80" />
            <rect x="600" y="330" width="80" height="160" />
            <rect x="700" y="400" width="60" height="90" />
            <rect x="790" y="370" width="100" height="120" />
            <rect x="910" y="420" width="70" height="70" />
        </g>
        <g fill="#3b82f6" opacity="0.35">
            <rect x="415" y="370" width="6" height="8" />
            <rect x="445" y="400" width="6" height="8" />
            <rect x="615" y="350" width="6" height="8" />
            <rect x="650" y="380" width="6" height="8" />
            <rect x="630" y="430" width="6" height="8" />
            <rect x="810" y="390" width="6" height="8" />
            <rect x="850" y="430" width="6" height="8" />
            <rect x="225" y="400" width="6" height="8" />
            <rect x="260" y="440" width="6" height="8" />
        </g>

        {/* ground camera + field of view */}
        <path d="M250 470 L120 250 L360 236 Z" fill="url(#j-fov)" />
        <path d="M250 470 L120 250 M250 470 L360 236" className={styles.fov} />
        <g className={styles.line}>
            <rect x="238" y="452" width="24" height="14" rx="3" />
            <path d="M250 466 L250 480" />
        </g>

        {/* rooftop radar: dashed coverage rings + rotating sweep */}
        <g className={styles.line}>
            <path d="M640 330 L640 312 M632 312 L648 312" />
        </g>
        <circle cx="640" cy="312" r="90" className={styles.ring} />
        <circle cx="640" cy="312" r="160" className={styles.ring} />
        <circle cx="640" cy="312" r="230" className={styles.ring} />
        <g className={styles.sweep}>
            <path d="M640 312 L640 82 A230 230 0 0 1 755 112 Z" fill="url(#j-sweep)" />
            <path d="M640 312 L640 82" stroke="#8b5cf6" strokeOpacity="0.8" strokeWidth="1.5" />
        </g>

        {/* drones at three depths; the one in the beam is being tracked */}
        <Drone x={200} y={180} scale={0.55} />
        <Drone x={820} y={140} scale={0.7} />
        <Drone x={560} y={210} scale={1}>
            <rect x="-48" y="-30" width="96" height="60" rx="4" className={styles.target} />
            <text x="-46" y="-38" className={styles.tag}>
                TRK-01 · 42 m
            </text>
        </Drone>

        <rect x="860" y="0" width="140" height="600" fill="url(#j-edge-r)" />
    </svg>
);

/* ---------- 04 · Ground floor: the office ---------- */

export const OfficeScene = () => (
    <svg className={styles.art} {...ART}>
        <defs>
            <linearGradient id="j-wall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#09090b" />
                <stop offset="1" stopColor="#141216" />
            </linearGradient>
            <linearGradient id="j-window" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#05060c" />
                <stop offset="1" stopColor="#1a1d3f" />
            </linearGradient>
            <radialGradient id="j-lamp" cx="0.5" cy="0.1" r="0.7">
                <stop offset="0" stopColor="#ffd9a8" stopOpacity="0.3" />
                <stop offset="0.45" stopColor="#ffd9a8" stopOpacity="0.07" />
                <stop offset="1" stopColor="#ffd9a8" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="j-edge-l" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#05060c" stopOpacity="0.95" />
                <stop offset="1" stopColor="#05060c" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="j-screen" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#0f172a" />
                <stop offset="1" stopColor="#111827" />
            </linearGradient>
        </defs>
        <rect width="1000" height="600" fill="url(#j-wall)" />

        {/* window with the night city outside */}
        <rect x="580" y="80" width="340" height="250" rx="6" fill="url(#j-window)" />
        <g fill="#ffffff" opacity="0.7">
            <circle cx="620" cy="110" r="1.2" />
            <circle cx="700" cy="130" r="1" />
            <circle cx="760" cy="96" r="1.4" />
            <circle cx="840" cy="120" r="1" />
            <circle cx="890" cy="150" r="1.2" />
            <circle cx="660" cy="170" r="0.9" />
        </g>
        <circle cx="850" cy="128" r="14" fill="#e8e6f0" opacity="0.85" />
        <g fill="#07070a">
            <rect x="580" y="250" width="340" height="80" />
            <rect x="600" y="222" width="30" height="40" />
            <rect x="650" y="200" width="40" height="60" />
            <rect x="710" y="236" width="24" height="30" />
            <rect x="760" y="190" width="36" height="70" />
            <rect x="820" y="226" width="28" height="40" />
            <rect x="870" y="208" width="34" height="56" />
        </g>
        <g fill="#3b82f6" opacity="0.4">
            <rect x="660" y="212" width="4" height="6" />
            <rect x="770" y="204" width="4" height="6" />
            <rect x="780" y="222" width="4" height="6" />
            <rect x="880" y="220" width="4" height="6" />
        </g>
        <g stroke="#2a2a30" strokeWidth="6" fill="none">
            <rect x="580" y="80" width="340" height="250" rx="6" />
            <path d="M750 80 L750 330 M580 205 L920 205" />
        </g>

        {/* lamp */}
        <ellipse cx="200" cy="300" rx="190" ry="210" fill="url(#j-lamp)" />
        <g className={styles.line}>
            <path d="M170 440 L170 330 L220 290" />
            <path d="M190 300 L250 300 L236 262 L206 262 Z" fill="#1a1a1f" />
        </g>

        {/* desk, monitors, keyboard, mug */}
        <rect x="40" y="440" width="920" height="16" rx="3" fill="#1c1b20" />
        <rect x="80" y="456" width="14" height="144" fill="#141317" />
        <rect x="900" y="456" width="14" height="144" fill="#141317" />

        <g transform="translate(90 0)">
        <g>
            <rect x="300" y="282" width="236" height="150" rx="8" fill="#0d0d10" stroke="#2c2c33" strokeWidth="2" />
            <rect x="310" y="292" width="216" height="130" rx="4" fill="url(#j-screen)" />
            <g className={styles.code}>
                <rect x="324" y="306" width="60" height="6" rx="3" fill="#8b5cf6" />
                <rect x="390" y="306" width="90" height="6" rx="3" />
                <rect x="336" y="320" width="120" height="6" rx="3" />
                <rect x="336" y="334" width="70" height="6" rx="3" fill="#3b82f6" />
                <rect x="412" y="334" width="60" height="6" rx="3" />
                <rect x="348" y="348" width="110" height="6" rx="3" />
                <rect x="348" y="362" width="52" height="6" rx="3" fill="#8b5cf6" />
                <rect x="336" y="376" width="96" height="6" rx="3" />
                <rect x="324" y="390" width="40" height="6" rx="3" fill="#3b82f6" />
                <rect x="370" y="390" width="6" height="8" className={styles.cursor} fill="#ededed" />
            </g>
            <rect x="408" y="432" width="20" height="10" fill="#1c1b20" />
        </g>

        <g>
            <rect x="556" y="318" width="170" height="114" rx="8" fill="#0d0d10" stroke="#2c2c33" strokeWidth="2" />
            <rect x="566" y="328" width="150" height="94" rx="4" fill="url(#j-screen)" />
            <g className={styles.chart}>
                <path d="M576 400 L596 390 L616 396 L636 372 L656 378 L676 356 L696 362 L706 344" />
                <path d="M576 410 L596 406 L616 408 L636 398 L656 400 L676 392 L696 394 L706 386" className={styles.chartAlt} />
            </g>
            <rect x="632" y="432" width="18" height="10" fill="#1c1b20" />
        </g>

        <rect x="340" y="448" width="180" height="10" rx="3" fill="#232228" />
        <g className={styles.line}>
            <rect x="760" y="412" width="30" height="30" rx="4" fill="#1a1a1f" />
            <path d="M790 420 C804 420 804 436 790 436" />
        </g>
        <path d="M770 404 Q776 394 770 386 M780 404 Q786 394 780 386" className={styles.steam} />
        </g>

        <rect x="0" y="0" width="140" height="600" fill="url(#j-edge-l)" />
    </svg>
);
