(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Hero-module__L4PIWG__actions",
  "btnPrimary": "Hero-module__L4PIWG__btnPrimary",
  "btnSecondary": "Hero-module__L4PIWG__btnSecondary",
  "copy": "Hero-module__L4PIWG__copy",
  "copyCol": "Hero-module__L4PIWG__copyCol",
  "copyInner": "Hero-module__L4PIWG__copyInner",
  "cue": "Hero-module__L4PIWG__cue",
  "cueDrop": "Hero-module__L4PIWG__cueDrop",
  "cueLine": "Hero-module__L4PIWG__cueLine",
  "cueText": "Hero-module__L4PIWG__cueText",
  "eyebrow": "Hero-module__L4PIWG__eyebrow",
  "frame": "Hero-module__L4PIWG__frame",
  "heroBtn": "Hero-module__L4PIWG__heroBtn",
  "intro": "Hero-module__L4PIWG__intro",
  "introTitle": "Hero-module__L4PIWG__introTitle",
  "name": "Hero-module__L4PIWG__name",
  "overlay": "Hero-module__L4PIWG__overlay",
  "player": "Hero-module__L4PIWG__player",
  "playing": "Hero-module__L4PIWG__playing",
  "poster": "Hero-module__L4PIWG__poster",
  "progress": "Hero-module__L4PIWG__progress",
  "stage": "Hero-module__L4PIWG__stage",
  "stat": "Hero-module__L4PIWG__stat",
  "statLabel": "Hero-module__L4PIWG__statLabel",
  "statValue": "Hero-module__L4PIWG__statValue",
  "stats": "Hero-module__L4PIWG__stats",
  "summary": "Hero-module__L4PIWG__summary",
  "tagline": "Hero-module__L4PIWG__tagline",
  "wrapper": "Hero-module__L4PIWG__wrapper",
});
}),
"[project]/Documents/GitHub/PersonalWebsite/src/data/resumeData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resumeData",
    ()=>resumeData
]);
const resumeData = {
    name: "Rayyan Lodhi",
    title: "Computer Engineering & Management at uOttawa",
    location: "Ottawa, Ontario, Canada",
    email: "rayyan.lodhi@uottawa.ca",
    tagline: "I build systems where software meets hardware.",
    summary: "Third-year Computer Engineering student with 1+ year of industry experience across software & data engineering, embedded systems and AI/ML. Shipped a Shopify-featured product at Retailogists, modernised national data pipelines at Statistics Canada, and now build counter-UAS simulation tools for uOttawa research.",
    education: [
        {
            degree: "BASc, Computer Engineering & Engineering Management (Co-op)",
            school: "University of Ottawa",
            location: "Ottawa, ON",
            period: "Sept 2024 – Jan 2029",
            details: [
                "Third-year Computer Engineering student with a minor in Entrepreneurship & Engineering Management",
                "Coursework: Data Structures & Algorithms, Software Construction, Computing I & II, Discrete Math",
                "Holds Government of Canada Reliability Status security clearance"
            ]
        },
        {
            degree: "Sci-Tech & SHSM High School Diploma",
            school: "Port Credit Secondary School",
            location: "Mississauga, ON",
            period: "2020 – 2024",
            details: [
                "Graduated with Honour Roll in the Sci-Tech program",
                "Specialist High Skills Major in Manufacturing Technology"
            ]
        }
    ],
    experience: [
        {
            role: "Systems Engineering Intern",
            company: "Telesat",
            location: "Ottawa, ON",
            period: "Jan 2027 – Apr 2027",
            website: "https://www.telesat.com",
            upcoming: true,
            highlight: "GEO & LEO satellite systems",
            description: [
                "Incoming Winter 2027 co-op on the systems engineering team, working across GEO and LEO satellite programs",
                "Supporting requirements, interface definition and verification for spacecraft and ground segment systems"
            ]
        },
        {
            role: "Software Research Assistant",
            company: "Computational Analysis & Research Group, uOttawa",
            location: "Ottawa, ON (Hybrid)",
            period: "Sept 2026 – Present",
            website: "https://www.uottawa.ca/faculty-engineering/",
            highlight: "Counter-UAS simulation & sensor planning",
            description: [
                "Working on Counter-UAS simulations: visualizing 3D flight telemetry, radar coverage and camera fields of view",
                "Built interactive sensor and mission-planning tools for UAV paths, ground cameras and radar placement"
            ]
        },
        {
            role: "Software & Data Engineer (Statistical Programmer)",
            company: "Statistics Canada",
            location: "Toronto, ON",
            period: "May 2026 – Aug 2026",
            website: "https://www.statcan.gc.ca",
            highlight: "+10% team efficiency with an agentic AI tool",
            description: [
                "Prototyped an agentic AI assistant for code and migration support, increasing team efficiency by 10%",
                "Assisted a large-scale refactor of legacy SAS programs to R, translating data pipelines into maintainable scripts",
                "Validated R outputs against SAS results by comparing transformed datasets, reports and edge cases"
            ]
        },
        {
            role: "Software Engineering Intern",
            company: "Retailogists",
            location: "Kitchener, ON",
            period: "May 2025 – Aug 2025",
            logo: "/logos/retailogists.png",
            website: "https://retailogists.com",
            highlight: "Camera platform used by 500+ retail stores globally",
            description: [
                "Helped prototype AVIA, a foot-traffic camera now actively used by 500+ retail stores worldwide",
                "Developed the MVP of a web app featured on Shopify's App Homepage using TypeScript, GCP BigQuery and Cloud Run",
                "Built APIs, data pipelines and a React Native companion app that talks to the camera over UDP",
                "Prototyped a computer-vision pipeline (OpenCV, YOLOv8) for edge computing on Raspberry Pi",
                "Configured device connectivity with DHCP/static IP addressing, UDP and network scanning"
            ]
        },
        {
            role: "Junior Systems Developer",
            company: "Marcus Evans",
            location: "Toronto, ON (Hybrid)",
            period: "Oct 2022 – Jan 2023",
            logo: "/logos/marcus-evans.png",
            website: "https://www.marcusevans.com",
            highlight: "+10% operational efficiency via internal tools",
            description: [
                "Built internal tools in Python, JavaScript and Microsoft SQL Server that improved Accounting and IT operations by 10%",
                "Built a secure Excel-upload interface for automated database ingestion and reporting",
                "Collaborated cross-functionally under NDA to deploy and maintain reliable data-driven tooling"
            ]
        },
        {
            role: "STEM & Chess Educator",
            company: "GEMS Learning Institute",
            location: "Oakville, ON",
            period: "Sept 2022 – Present",
            logo: "/logos/gems.png",
            website: "https://www.gemslearninginstitute.com",
            highlight: "Coached FIRST LEGO League team to Top 3 in Ontario",
            description: [
                "Designed and delivered AI, robotics and coding curricula (OpenCV, Python, Scratch) for Grades 1–8",
                "Coached a FIRST LEGO League team to Top 3 in Ontario through sensor integration and iterative design",
                "Teach chess openings, tactics and endgame strategy; communicate progress plans with parents"
            ]
        },
        {
            role: "Freelance Discord Bot Developer",
            company: "Fiverr",
            location: "Remote",
            period: "Fall 2021 – Present",
            logo: "/logos/discord.png",
            website: "https://www.fiverr.com",
            highlight: "Bots serving 20k+ users",
            description: [
                "Create, host and maintain Discord bots serving 20k+ users",
                "PostgreSQL integration with Python (asyncpg, psycopg2), API design and AWS Lambda deployment"
            ]
        },
        {
            role: "Founder & CEO",
            company: "The C-Squad",
            location: "Canada",
            period: "June 2018 – Present",
            logo: "/placeholder-project.png",
            website: "",
            highlight: "Partnered with Professional Engineers Ontario",
            description: [
                "Partnered with Professional Engineers Ontario and GEMS Learning Institute to deliver STEM curricula",
                "Directed food drives and fundraising campaigns supporting underprivileged families",
                "Coordinated volunteers, sponsors and community partners to scale outreach"
            ]
        }
    ],
    journey: [
        {
            scene: "mars",
            kicker: "01 · Mars yard",
            title: "Building a Mars Rover",
            body: "ROS2 motor control, IMU telemetry and C++ inverse-kinematics firmware on uORover. 8th internationally at CIRC and 1st at the Quebec Rover Challenge.",
            cta: {
                label: "Meet the team",
                href: "#leadership"
            }
        },
        {
            scene: "orbit",
            kicker: "02 · Earth orbit",
            title: "Next stop: GEO and LEO",
            body: "Incoming Systems Engineering Intern at Telesat for Winter 2027, working on geostationary and low-Earth-orbit satellite systems.",
            cta: {
                label: "See experience",
                href: "#experience"
            }
        },
        {
            scene: "sky",
            kicker: "03 · Low altitude",
            title: "Counter-UAS research",
            body: "Simulating drone flight paths, radar coverage and camera fields of view so researchers can plan where sensors go before anything is built.",
            cta: {
                label: "The research",
                href: "#experience"
            }
        },
        {
            scene: "office",
            kicker: "04 · Ground floor",
            title: "Shipping real software",
            body: "National data pipelines at Statistics Canada, a camera platform running in 500+ retail stores with Retailogists, and bots serving 20k+ users.",
            cta: {
                label: "Browse projects",
                href: "#projects"
            }
        }
    ],
    skills: [
        {
            category: "Languages",
            skills: [
                "Python",
                "TypeScript",
                "JavaScript",
                "C",
                "C++",
                "Java",
                "R",
                "SAS",
                "SQL"
            ]
        },
        {
            category: "AI / Machine Learning",
            skills: [
                "PyTorch",
                "OpenCV",
                "YOLOv8",
                "Agentic AI",
                "RAG",
                "Azure OpenAI",
                "TensorFlow Lite",
                "LM Studio"
            ]
        },
        {
            category: "Software & Data",
            skills: [
                "REST APIs",
                "Flask",
                "React / React Native",
                "Pandas",
                "NumPy",
                "Data Pipelines",
                "SQLAlchemy"
            ]
        },
        {
            category: "Databases",
            skills: [
                "PostgreSQL",
                "Microsoft SQL Server",
                "BigQuery",
                "MySQL",
                "SQLite"
            ]
        },
        {
            category: "Cloud",
            skills: [
                "AWS Lambda",
                "Amazon RDS",
                "GCP BigQuery",
                "GCP Cloud Run",
                "Azure RBAC"
            ]
        },
        {
            category: "Embedded & Hardware",
            skills: [
                "ROS2",
                "Raspberry Pi",
                "Arduino / C++ firmware",
                "QNX RTOS",
                "FPGA (Quartus)",
                "TCP/IP & UDP"
            ]
        },
        {
            category: "Tools & Practices",
            skills: [
                "Git / GitHub",
                "Docker",
                "CI/CD",
                "Linux",
                "Claude Code",
                "Cursor",
                "Excel / VBA"
            ]
        }
    ],
    extracurriculars: [
        {
            title: "Google Developer Group, CEGSC & uOttaHack",
            role: "President · VP of Sponsorships · Sponsorships Team",
            location: "Ottawa, ON",
            period: "May 2026 – Present",
            image: "/placeholder-project.png",
            description: [
                "Lead the Google Developer Group at uOttawa and grow the presence of the Computer Engineering Student Council (CEGSC) by running events with partner companies and organizations",
                "Secure and retain brand sponsors for uOttaHack through outreach, meetings and ongoing sponsor relationships"
            ]
        },
        {
            title: "uOttawa Mars Rover Team (uORover)",
            role: "Robotic Arm / Embedded Sub-team",
            location: "Ottawa, ON",
            period: "Sept 2024 – Present",
            image: "/extracurriculurs/uorover.png",
            highlight: "8th internationally at CIRC · 1st at Quebec Rover Challenge",
            description: [
                "Placed 8th internationally at the Canadian International Rover Challenge and 1st at the Quebec Rover Challenge",
                "Developed ROS2 (Python) motor-control and telemetry systems for rover actuators and IMU",
                "Wrote Arduino/C++ firmware for robotic-arm actuators with inverse kinematics"
            ]
        },
        {
            title: "Kelpie Robotics",
            role: "Software Engineer",
            location: "Ottawa, ON",
            period: "2024 – 2025",
            image: "/placeholder-project.png",
            description: [
                "Developed telemetry systems for the robot's IMU using ROS2 (Python)"
            ]
        }
    ],
    projects: [
        {
            title: "Vision-Based Concrete Crack Growth Monitoring",
            role: "Deep Learning Segmentation + Structural Validation",
            location: "Ottawa, ON",
            period: "February 2026",
            website: "https://github.com/RayyanFLodhi/vision-based-crack-growth-monitoring",
            highlight: "Spearman ≈ 0.72 vs. LVDT across 80+ loading frames",
            description: [
                "Integrated a pretrained FPN (ResNeXt50) crack-segmentation model (crackenpy) using PyTorch",
                "Built a post-processing pipeline (thresholding, morphology, skeletonization) to compute pixel crack length",
                "Automated a threshold sweep (0.60–0.80) with Spearman/Pearson validation against LVDT displacement",
                "Achieved Spearman correlation of roughly 0.72 across 80+ loading frames with consistent crack-growth tracking"
            ],
            techCheck: [
                "PyTorch",
                "ResNeXt50 FPN",
                "OpenCV",
                "NumPy",
                "Computer Vision"
            ]
        },
        {
            title: "SentinelRT",
            role: "Embedded AI Surveillance Rover · uOttaHack 8",
            location: "Ottawa, ON",
            period: "January 2026",
            website: "https://github.com/Aashir5678/Uottahack-8/tree/main",
            highlight: "QNX RTOS 8.0 on Raspberry Pi 5 with live web dashboard",
            description: [
                "Built a real-time surveillance rover running QNX RTOS 8.0 on a Raspberry Pi 5 with a live web dashboard",
                "Implemented TCP/IP socket communication for command, telemetry and video streaming",
                "Developed an on-device OpenCV and TensorFlow Lite object-detection pipeline with backend APIs"
            ],
            techCheck: [
                "QNX RTOS",
                "Raspberry Pi 5",
                "OpenCV",
                "TensorFlow Lite",
                "TCP/IP",
                "Python"
            ]
        },
        {
            title: "LockSmith.AI",
            role: "ML Engineer & Backend Developer · uOttaHack 7",
            location: "Ottawa, ON",
            period: "January 2025",
            image: "/projects/locksmith-ai.png",
            website: "https://locksmith-ai.onrender.com/",
            highlight: "1M+ records analysed",
            description: [
                "Built a password-strength detector at uOttaHack 7 to help users understand and improve their password security",
                "Developed a Random Forest model to analyse password strength with robust accuracy",
                "Managed ingestion of 1 million+ records with SQLite and a Flask backend",
                "Integrated Groq API for secondary ratings and stronger password suggestions, plus a data-breach checker"
            ],
            techCheck: [
                "Python",
                "Flask",
                "Machine Learning",
                "Random Forest",
                "Groq API",
                "Cybersecurity"
            ]
        }
    ],
    leadership: [],
    highSchoolInitiatives: [
        {
            title: "SickKids Hospital Foundation",
            role: "Patient Ambassador & Speaker",
            location: "Toronto, ON",
            period: "March 2018 – Present",
            image: "/extracurriculurs/sickKids.png",
            highlight: "Featured by CP24, CTV and The Globe & Mail",
            description: [
                "Ambassador for SickKids Hospital; spoke at key events featured by CP24, CTV and The Globe & Mail",
                "Notable speeches: SVP Tournament of Hope, Avaal Technologies $1M donation, SickKids Professional Advisory, SickKids Imaginarium"
            ]
        },
        {
            title: "Relay For Life",
            role: "Cancer Survivor Speaker & Executive",
            location: "Ontario",
            period: "Feb 2023 – Present",
            image: "/placeholder-project.png",
            highlight: "Keynotes to 1000+ attendees",
            description: [
                "Delivered keynote speeches to 1000+ attendees and supported logistics for large-scale Relay For Life events"
            ]
        },
        {
            title: "Make-A-Wish & Great Cycle Challenge",
            role: "Ambassador",
            location: "Ontario",
            period: "2022 – Present",
            image: "/placeholder-project.png",
            highlight: "$5,000+ raised",
            description: [
                "Raised $5,000+ through community-led initiatives; cycle annually and promote the cause via social media"
            ]
        },
        {
            title: "PDSB Middle School Hackathon (AI Workshop)",
            role: "Lead Organizer",
            location: "Peel Region, ON",
            period: "March – May 2024",
            image: "/placeholder-project.png",
            description: [
                "Directed the AI curriculum and coordinated event logistics for the board-wide hackathon"
            ]
        },
        {
            title: "VEX Robotics (Port Credit SS)",
            role: "Lead Programmer",
            location: "Mississauga, ON",
            period: "Sept 2023 – April 2024",
            image: "/extracurriculurs/vex.png",
            highlight: "Top 50 in Ontario",
            description: [
                "Led programming for the VEX V5 system, taking the team to Top 50 in Ontario"
            ]
        },
        {
            title: "PDSB / YMCA Chess Tournament",
            role: "Lead Organizer",
            location: "Mississauga, ON",
            period: "2023",
            image: "/extracurriculurs/pdsbTournament.png",
            description: [
                "Managed volunteers, contestants, pairings and event logistics"
            ]
        },
        {
            title: "Port Credit SS Chess Club",
            role: "Founder & President",
            location: "Mississauga, ON",
            period: "Sept 2022 – June 2024",
            image: "/extracurriculurs/pcssChess.png",
            description: [
                "Founded the club and organized tournaments and weekly meets"
            ]
        }
    ],
    awards: [
        {
            title: "Reliability Status Security Clearance",
            organization: "Government of Canada",
            year: "2026",
            image: "/placeholder-project.png",
            description: "Currently hold Reliability Status security clearance with the Government of Canada."
        },
        {
            title: "1st Place – Hack the Hill",
            organization: "Hack the Hill, Ottawa",
            year: "2026",
            image: "/placeholder-project.png",
            description: "Built a device for EMS services to monitor patient heart rate in the field, taking first place overall."
        },
        {
            title: "1st Place Community Service Award",
            organization: "PAQ Community Awards",
            year: "2023",
            image: "/placeholder-project.png",
            description: "Recognized in the House of Commons by Mississauga MP Iqra Khalid for community impact and significant contribution to the community."
        },
        {
            title: "Duke of Edinburgh – Silver Award",
            organization: "The Duke of Edinburgh's International Award",
            year: "2025",
            image: "/placeholder-project.png",
            description: "Completed the service, skills and physical recreation components of the Silver level."
        },
        {
            title: "Merit Award Bursary Program",
            organization: "Merit Award",
            year: "2023",
            image: "/placeholder-project.png",
            description: "Awarded for excellence in community leadership and service despite personal challenges."
        },
        {
            title: "3rd Place – CYCC Qualifier",
            organization: "Canadian Youth Chess Championship, Ontario",
            year: "2023",
            image: "/awards/u18Win.png",
            description: "Placed 3rd in the Ontario qualifier for the Canadian Youth Chess Championship."
        },
        {
            title: "Six Sigma White Belt",
            organization: "Six Sigma Certification",
            year: "2023",
            image: "/placeholder-project.png",
            description: "Certified in the fundamentals of Six Sigma methodology, focusing on process improvement, teamwork and the DMAIC framework."
        },
        {
            title: "Standard First Aid",
            organization: "First Aid Certification",
            year: "2022",
            image: "/placeholder-project.png",
            description: "Trained in administering standard first aid."
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/data/resumeData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const VIDEO_ID = 'WMvjvCNKLlE';
const CLIP_START = 227; // 3:47
const CLIP_END = 246; // 4:06
const POSTER = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
/** Loads the IFrame API once and resolves when it is usable (safe across remounts). */ function loadYouTubeApi() {
    if (window.YT?.Player) return Promise.resolve(window.YT);
    if (!window.__ytApiPromise) {
        window.__ytApiPromise = new Promise((resolve)=>{
            const previous = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = ()=>{
                previous?.();
                if (window.YT) resolve(window.YT);
            };
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            tag.async = true;
            document.head.appendChild(tag);
        });
    }
    return window.__ytApiPromise;
}
const Hero = ()=>{
    _s();
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playerHostRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* ---- Background video (poster shows instantly, player fades in when it actually plays) ---- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const host = playerHostRef.current;
            if (!host) return;
            let cancelled = false;
            let loopTimer = null;
            loadYouTubeApi().then({
                "Hero.useEffect": (YT)=>{
                    if (cancelled || !host.isConnected) return;
                    // The API replaces the element we hand it with an <iframe>, so give it a node React doesn't own.
                    const mount = document.createElement('div');
                    host.appendChild(mount);
                    playerRef.current = new YT.Player(mount, {
                        videoId: VIDEO_ID,
                        playerVars: {
                            autoplay: 1,
                            mute: 1,
                            controls: 0,
                            disablekb: 1,
                            modestbranding: 1,
                            rel: 0,
                            playsinline: 1,
                            iv_load_policy: 3,
                            start: CLIP_START
                        },
                        events: {
                            onReady: {
                                "Hero.useEffect": (e)=>{
                                    e.target.playVideo();
                                    loopTimer = setInterval({
                                        "Hero.useEffect": ()=>{
                                            try {
                                                if (e.target.getCurrentTime() >= CLIP_END) e.target.seekTo(CLIP_START, true);
                                            } catch  {
                                            /* player torn down */ }
                                        }
                                    }["Hero.useEffect"], 100);
                                }
                            }["Hero.useEffect"],
                            onStateChange: {
                                "Hero.useEffect": (e)=>{
                                    if (e.data === YT.PlayerState.PLAYING) setPlaying(true);
                                }
                            }["Hero.useEffect"]
                        }
                    });
                }
            }["Hero.useEffect"]);
            return ({
                "Hero.useEffect": ()=>{
                    cancelled = true;
                    if (loopTimer) clearInterval(loopTimer);
                    try {
                        playerRef.current?.destroy();
                    } catch  {
                    /* already gone */ }
                    playerRef.current = null;
                    host.replaceChildren();
                }
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    /* ---- Scroll choreography: write one progress value (0..1) to --p; CSS does the rest ---- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const wrapper = wrapperRef.current;
            const stage = stageRef.current;
            if (!wrapper || !stage) return;
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            let target = 0;
            let current = -1;
            let raf = 0;
            let offscreen = false;
            const apply = {
                "Hero.useEffect.apply": (v)=>{
                    stage.style.setProperty('--p', v.toFixed(4));
                    stage.dataset.phase = v > 0.4 ? 'copy' : 'intro';
                }
            }["Hero.useEffect.apply"];
            const tick = {
                "Hero.useEffect.tick": ()=>{
                    raf = 0;
                    // Light smoothing so wheel "steps" feel fluid; snaps when close.
                    const next = current < 0 || Math.abs(target - current) < 0.0008 ? target : current + (target - current) * 0.16;
                    if (next !== current) {
                        current = next;
                        apply(current);
                    }
                    if (current !== target) raf = requestAnimationFrame(tick);
                }
            }["Hero.useEffect.tick"];
            const measure = {
                "Hero.useEffect.measure": ()=>{
                    const rect = wrapper.getBoundingClientRect();
                    const range = wrapper.offsetHeight - window.innerHeight;
                    target = range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 1;
                    // Don't burn CPU on a video nobody can see.
                    const nowOffscreen = rect.bottom <= 0;
                    if (nowOffscreen !== offscreen) {
                        offscreen = nowOffscreen;
                        try {
                            if (offscreen) playerRef.current?.pauseVideo();
                            else playerRef.current?.playVideo();
                        } catch  {
                        /* player not ready */ }
                    }
                    if (reduceMotion) {
                        if (current !== 1) {
                            current = 1;
                            apply(1);
                        }
                        return;
                    }
                    if (!raf) raf = requestAnimationFrame(tick);
                }
            }["Hero.useEffect.measure"];
            measure();
            window.addEventListener('scroll', measure, {
                passive: true
            });
            window.addEventListener('resize', measure);
            return ({
                "Hero.useEffect": ()=>{
                    window.removeEventListener('scroll', measure);
                    window.removeEventListener('resize', measure);
                    if (raf) cancelAnimationFrame(raf);
                }
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    const stats = [
        {
            value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].experience.length,
            label: 'Roles'
        },
        {
            value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].projects.length + __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].extracurriculars.length,
            label: 'Teams & projects'
        },
        {
            value: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].awards.length,
            label: 'Awards & certs'
        }
    ];
    const links = [
        {
            label: 'Resume',
            href: '/RayyanLodhisResume.pdf',
            primary: true,
            external: true
        },
        {
            label: 'Contact',
            href: '#contact'
        },
        {
            label: 'GitHub',
            href: 'https://github.com/RayyanFLodhi',
            external: true
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/rayyan-lodhi/',
            external: true
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: stageRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage,
            "aria-label": "Introduction",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].frame,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].poster,
                            src: POSTER,
                            alt: "",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                            lineNumber: 203,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: playerHostRef,
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].player} ${playing ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playing : ''}`
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                            lineNumber: 204,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                            lineNumber: 205,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                    lineNumber: 201,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].intro,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                            children: "Hi, I'm"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                            lineNumber: 210,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "gradient-text",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].name
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                                lineNumber: 212,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                            lineNumber: 211,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].introTitle,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].title
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                            lineNumber: 214,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                    lineNumber: 209,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copy,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copyInner}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copyCol,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].title
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                                    lineNumber: 221,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagline,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].tagline
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                                    lineNumber: 222,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summary,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].summary
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                                    lineNumber: 223,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                                    children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: l.href,
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroBtn} ${l.primary ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnPrimary : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnSecondary}`,
                                            ...l.external ? {
                                                target: '_blank',
                                                rel: 'noopener noreferrer'
                                            } : {},
                                            children: l.label
                                        }, l.label, false, {
                                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                                            lineNumber: 227,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                                    lineNumber: 225,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stats,
                                    children: stats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stat,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                                    children: s.value
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, s.label, true, {
                                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                                            lineNumber: 241,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                                    lineNumber: 239,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                            lineNumber: 220,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                        lineNumber: 219,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                    lineNumber: 218,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cue,
                    "aria-hidden": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cueText,
                            children: "Scroll"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                            lineNumber: 252,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cueLine
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                            lineNumber: 253,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                    lineNumber: 251,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
                    lineNumber: 255,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
            lineNumber: 199,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx",
        lineNumber: 198,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Hero, "dLj7v+wUcsxhY5MOHn3myqUkXRw=");
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/Section.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "eyebrow": "Section-module__lXLiAW__eyebrow",
  "header": "Section-module__lXLiAW__header",
  "lede": "Section-module__lXLiAW__lede",
  "section": "Section-module__lXLiAW__section",
});
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/Reveal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "reveal": "Reveal-module__CpqHlG__reveal",
  "shown": "Reveal-module__CpqHlG__shown",
});
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/Reveal.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
/** Fades and lifts its children into place the first time they scroll into view. */ const Reveal = ({ children, delay = 0, className = '' })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [shown, setShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            // Reduced motion is handled in CSS (the wrapper simply renders visible).
            const io = new IntersectionObserver({
                "Reveal.useEffect": (entries)=>{
                    if (entries.some({
                        "Reveal.useEffect": (e)=>e.isIntersecting
                    }["Reveal.useEffect"])) {
                        setShown(true);
                        io.disconnect();
                    }
                }
            }["Reveal.useEffect"], {
                threshold: 0.12,
                rootMargin: '0px 0px -8% 0px'
            });
            io.observe(el);
            return ({
                "Reveal.useEffect": ()=>io.disconnect()
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reveal} ${shown ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shown : ''} ${className}`,
        style: delay ? {
            transitionDelay: `${delay}ms`
        } : undefined,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Reveal.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Reveal, "ulyIE6ycWSg9Eyuc1w5Wg/OKYqg=");
_c = Reveal;
const __TURBOPACK__default__export__ = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/Section.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/Reveal.tsx [app-client] (ecmascript)");
;
;
;
const Section = ({ id, title, eyebrow, lede, children, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section} ${className || ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                (title || eyebrow) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                children: eyebrow
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Section.tsx",
                                lineNumber: 23,
                                columnNumber: 41
                            }, ("TURBOPACK compile-time value", void 0)),
                            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-title",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Section.tsx",
                                lineNumber: 24,
                                columnNumber: 39
                            }, ("TURBOPACK compile-time value", void 0)),
                            lede && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lede,
                                children: lede
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Section.tsx",
                                lineNumber: 25,
                                columnNumber: 38
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Section.tsx",
                        lineNumber: 22,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Section.tsx",
                    lineNumber: 21,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Section.tsx",
            lineNumber: 19,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Section.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Section;
const __TURBOPACK__default__export__ = Section;
var _c;
__turbopack_context__.k.register(_c, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "breathe": "ExperienceCard-module__dsXe8G__breathe",
  "card": "ExperienceCard-module__dsXe8G__card",
  "clusterSep": "ExperienceCard-module__dsXe8G__clusterSep",
  "company": "ExperienceCard-module__dsXe8G__company",
  "companyCluster": "ExperienceCard-module__dsXe8G__companyCluster",
  "companyRow": "ExperienceCard-module__dsXe8G__companyRow",
  "current": "ExperienceCard-module__dsXe8G__current",
  "currentDot": "ExperienceCard-module__dsXe8G__currentDot",
  "date": "ExperienceCard-module__dsXe8G__date",
  "description": "ExperienceCard-module__dsXe8G__description",
  "header": "ExperienceCard-module__dsXe8G__header",
  "headerContent": "ExperienceCard-module__dsXe8G__headerContent",
  "highlight": "ExperienceCard-module__dsXe8G__highlight",
  "location": "ExperienceCard-module__dsXe8G__location",
  "logo": "ExperienceCard-module__dsXe8G__logo",
  "logoContainer": "ExperienceCard-module__dsXe8G__logoContainer",
  "role": "ExperienceCard-module__dsXe8G__role",
  "titleRow": "ExperienceCard-module__dsXe8G__titleRow",
  "websiteLink": "ExperienceCard-module__dsXe8G__websiteLink",
});
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.module.css [app-client] (css module)");
;
;
const isCurrent = (period)=>/present/i.test(period);
/** Bullets shown on the card; the rest live in the modal. */ const PREVIEW_BULLETS = 3;
const ExperienceCard = ({ experience, onClick })=>{
    const upcoming = !!experience.upcoming;
    const current = !upcoming && isCurrent(experience.period);
    const bullets = experience.description.slice(0, PREVIEW_BULLETS);
    const hidden = experience.description.length - bullets.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} ${upcoming ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardUpcoming : ''}`,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    experience.logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: experience.logo,
                            alt: `${experience.company} logo`,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                            lineNumber: 27,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                        lineNumber: 25,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].role,
                                        children: [
                                            experience.role,
                                            current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].current,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].currentDot,
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Current"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                                                lineNumber: 35,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            upcoming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].current} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].upcoming}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].currentDot} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].upcomingDot}`,
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Incoming"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                                                lineNumber: 41,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                                        lineNumber: 32,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    experience.website && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: experience.website,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].websiteLink,
                                        onClick: (e)=>e.stopPropagation(),
                                        children: "Visit"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                                        lineNumber: 48,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].companyRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].company,
                                        children: experience.company
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                                        lineNumber: 60,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].clusterSep,
                                        "aria-hidden": "true",
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].date,
                                        children: experience.period
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                                        lineNumber: 64,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            experience.highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlight,
                                children: experience.highlight
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                                lineNumber: 66,
                                columnNumber: 46
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                children: bullets.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: item
                    }, index, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                        lineNumber: 71,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            hidden > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].moreNote,
                children: [
                    "+",
                    hidden,
                    " more in details"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
                lineNumber: 74,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ExperienceCard;
const __TURBOPACK__default__export__ = ExperienceCard;
var _c;
__turbopack_context__.k.register(_c, "ExperienceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "ProjectCard-module__b5cmaW__actions",
  "aside": "ProjectCard-module__b5cmaW__aside",
  "card": "ProjectCard-module__b5cmaW__card",
  "description": "ProjectCard-module__b5cmaW__description",
  "featured": "ProjectCard-module__b5cmaW__featured",
  "highlight": "ProjectCard-module__b5cmaW__highlight",
  "highlightLabel": "ProjectCard-module__b5cmaW__highlightLabel",
  "imageContainer": "ProjectCard-module__b5cmaW__imageContainer",
  "index": "ProjectCard-module__b5cmaW__index",
  "main": "ProjectCard-module__b5cmaW__main",
  "meta": "ProjectCard-module__b5cmaW__meta",
  "moreNote": "ProjectCard-module__b5cmaW__moreNote",
  "open": "ProjectCard-module__b5cmaW__open",
  "projectImage": "ProjectCard-module__b5cmaW__projectImage",
  "role": "ProjectCard-module__b5cmaW__role",
  "tag": "ProjectCard-module__b5cmaW__tag",
  "tags": "ProjectCard-module__b5cmaW__tags",
  "title": "ProjectCard-module__b5cmaW__title",
  "topline": "ProjectCard-module__b5cmaW__topline",
  "websiteLink": "ProjectCard-module__b5cmaW__websiteLink",
});
}),
"[project]/Documents/GitHub/PersonalWebsite/src/lib/media.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** True for an image that is worth rendering; the shared placeholder is treated as "no image". */ __turbopack_context__.s([
    "isRealImage",
    ()=>isRealImage
]);
const isRealImage = (src)=>!!src && !/placeholder/i.test(src);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$lib$2f$media$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/lib/media.ts [app-client] (ecmascript)");
;
;
;
/** Recruiters scan for "is there code I can read?", so name the destination honestly. */ const linkLabel = (url)=>/github\.com/i.test(url) ? 'View on GitHub' : 'Live Demo';
const PREVIEW_BULLETS = 2;
const ProjectCard = ({ project, onClick, index, featured = false })=>{
    const bullets = featured ? project.description : project.description.slice(0, PREVIEW_BULLETS);
    const hidden = project.description.length - bullets.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} ${featured ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featured : ''}`,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topline,
                        children: [
                            index !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].index,
                                children: String(index + 1).padStart(2, '0')
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                                lineNumber: 28,
                                columnNumber: 45
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                                children: [
                                    project.period,
                                    project.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            " · ",
                                            project.location
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: project.title
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].role,
                        children: project.role
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                        children: bullets.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: item
                            }, i, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                                lineNumber: 38,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    hidden > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].moreNote,
                        children: [
                            "+",
                            hidden,
                            " more in details"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                        lineNumber: 42,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aside,
                children: [
                    project.highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlight,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightLabel,
                                children: "Outcome"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                                lineNumber: 51,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            project.highlight
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                        lineNumber: 50,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$lib$2f$media$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRealImage"])(project.image) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: project.image,
                            alt: `${project.title} preview`,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectImage
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                            lineNumber: 58,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                        lineNumber: 56,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    project.techCheck && project.techCheck.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tags,
                        children: project.techCheck.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag,
                                children: tech
                            }, tech, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                                lineNumber: 64,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                        lineNumber: 62,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                        children: [
                            project.website ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: project.website,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].websiteLink,
                                onClick: (e)=>e.stopPropagation(),
                                children: linkLabel(project.website)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                                lineNumber: 72,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                                lineNumber: 82,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open,
                                children: [
                                    "Details",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: " →"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                                        lineNumber: 85,
                                        columnNumber: 32
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProjectCard;
const __TURBOPACK__default__export__ = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/AwardCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "AwardCard-module__dn6Pnq__card",
  "description": "AwardCard-module__dn6Pnq__description",
  "image": "AwardCard-module__dn6Pnq__image",
  "imageContainer": "AwardCard-module__dn6Pnq__imageContainer",
  "kind": "AwardCard-module__dn6Pnq__kind",
  "kindCert": "AwardCard-module__dn6Pnq__kindCert",
  "org": "AwardCard-module__dn6Pnq__org",
  "title": "AwardCard-module__dn6Pnq__title",
  "top": "AwardCard-module__dn6Pnq__top",
  "year": "AwardCard-module__dn6Pnq__year",
});
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/AwardCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$AwardCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/AwardCard.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$lib$2f$media$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/lib/media.ts [app-client] (ecmascript)");
;
;
;
const isCertification = (award)=>/certif|clearance|belt|first aid|cpr/i.test(`${award.title} ${award.organization}`);
const AwardCard = ({ award, onClick })=>{
    const cert = isCertification(award);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$AwardCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$AwardCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].top,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$AwardCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].year,
                        children: award.year
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/AwardCard.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$AwardCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kind} ${cert ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$AwardCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kindCert : ''}`,
                        children: cert ? 'Certification' : 'Award'
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/AwardCard.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/AwardCard.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$AwardCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: award.title
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/AwardCard.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$AwardCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].org,
                children: award.organization
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/AwardCard.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$AwardCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                children: award.description
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/AwardCard.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$lib$2f$media$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRealImage"])(award.image) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$AwardCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: award.image,
                    alt: award.title,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$AwardCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/AwardCard.tsx",
                    lineNumber: 27,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/AwardCard.tsx",
                lineNumber: 25,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/AwardCard.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AwardCard;
const __TURBOPACK__default__export__ = AwardCard;
var _c;
__turbopack_context__.k.register(_c, "AwardCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/SkillsList.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "category": "SkillsList-module__0JkKDG__category",
  "categoryTitle": "SkillsList-module__0JkKDG__categoryTitle",
  "grid": "SkillsList-module__0JkKDG__grid",
  "skill": "SkillsList-module__0JkKDG__skill",
  "skills": "SkillsList-module__0JkKDG__skills",
});
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/SkillsList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$SkillsList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/SkillsList.module.css [app-client] (css module)");
;
;
const SkillsList = ({ categories })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$SkillsList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$SkillsList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$SkillsList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryTitle,
                        children: cat.category
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/SkillsList.tsx",
                        lineNumber: 14,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$SkillsList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skills,
                        children: cat.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$SkillsList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skill,
                                children: skill
                            }, skill, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/SkillsList.tsx",
                                lineNumber: 17,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/SkillsList.tsx",
                        lineNumber: 15,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, cat.category, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/SkillsList.tsx",
                lineNumber: 13,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/SkillsList.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SkillsList;
const __TURBOPACK__default__export__ = SkillsList;
var _c;
__turbopack_context__.k.register(_c, "SkillsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/Modal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backdrop": "Modal-module__R9jEpa__backdrop",
  "closeButton": "Modal-module__R9jEpa__closeButton",
  "content": "Modal-module__R9jEpa__content",
  "fadeIn": "Modal-module__R9jEpa__fadeIn",
  "modal": "Modal-module__R9jEpa__modal",
});
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/Modal.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Modal = ({ isOpen, onClose, children })=>{
    _s();
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const handleKeyDown = {
                "Modal.useEffect.handleKeyDown": (event)=>{
                    if (event.key === 'Escape') {
                        onClose();
                    }
                }
            }["Modal.useEffect.handleKeyDown"];
            if (isOpen) {
                document.addEventListener('keydown', handleKeyDown);
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
            return ({
                "Modal.useEffect": ()=>{
                    document.removeEventListener('keydown', handleKeyDown);
                    document.body.style.overflow = '';
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        isOpen,
        onClose
    ]);
    const handleBackdropClick = (e)=>{
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backdrop,
        onClick: handleBackdropClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
            ref: modalRef,
            role: "dialog",
            "aria-modal": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                    onClick: onClose,
                    "aria-label": "Close",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Modal.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Modal.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Modal.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Modal.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Modal, "iXNJws+mDn9J+ZcpHudMXHGV85c=");
_c = Modal;
const __TURBOPACK__default__export__ = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/PersonalWebsite/src/app/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "aboutContainer": "page-module__KRuL7W__aboutContainer",
  "aboutContent": "page-module__KRuL7W__aboutContent",
  "aboutPhotos": "page-module__KRuL7W__aboutPhotos",
  "backgroundSection": "page-module__KRuL7W__backgroundSection",
  "contactContainer": "page-module__KRuL7W__contactContainer",
  "darkSection": "page-module__KRuL7W__darkSection",
  "degree": "page-module__KRuL7W__degree",
  "eduDetails": "page-module__KRuL7W__eduDetails",
  "eduHeader": "page-module__KRuL7W__eduHeader",
  "eduItem": "page-module__KRuL7W__eduItem",
  "education": "page-module__KRuL7W__education",
  "introHeading": "page-module__KRuL7W__introHeading",
  "introSection": "page-module__KRuL7W__introSection",
  "introText": "page-module__KRuL7W__introText",
  "modalHighlight": "page-module__KRuL7W__modalHighlight",
  "photo1": "page-module__KRuL7W__photo1",
  "photo2": "page-module__KRuL7W__photo2",
  "photoWrapper": "page-module__KRuL7W__photoWrapper",
  "projectsGrid": "page-module__KRuL7W__projectsGrid",
  "revealItem": "page-module__KRuL7W__revealItem",
  "school": "page-module__KRuL7W__school",
  "sectionHeading": "page-module__KRuL7W__sectionHeading",
  "subHeading": "page-module__KRuL7W__subHeading",
  "text": "page-module__KRuL7W__text",
  "year": "page-module__KRuL7W__year",
});
}),
"[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$AwardCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/AwardCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$SkillsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/SkillsList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/data/resumeData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/app/page.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [selectedItem, setSelectedItem] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const renderModalContent = (item)=>{
        if (!item) return null;
        // Determine type based on fields (naive check or passed context)
        // Common fields: title/role, company/organization, period/year, description (array or string)
        // Normalize data for display
        const title = item.title || item.role;
        const subtitle = item.company || item.organization || item.role; // Fallback for Project which has title+role
        const date = item.period || item.year;
        const location = item.location;
        const description = Array.isArray(item.description) ? item.description : [
            item.description
        ];
        const image = item.image || item.logo;
        const link = item.website;
        const highlight = item.highlight;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: '1.5rem',
                        textAlign: 'center'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: image,
                        alt: title,
                        style: {
                            maxWidth: '100%',
                            maxHeight: '300px',
                            objectFit: 'contain',
                            borderRadius: '8px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: '2rem',
                        marginBottom: '0.5rem',
                        color: 'var(--foreground)'
                    },
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    style: {
                        fontSize: '1.5rem',
                        color: 'var(--primary)',
                        marginBottom: '0.5rem'
                    },
                    children: subtitle
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: '1rem',
                        color: 'var(--secondary-foreground)',
                        marginBottom: '1.5rem',
                        fontSize: '0.95rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: date
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "• ",
                                location
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                            lineNumber: 44,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalHighlight,
                    children: highlight
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 47,
                    columnNumber: 23
                }, this),
                link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: '1.5rem'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            background: 'var(--primary)',
                            color: 'var(--background)',
                            textDecoration: 'none',
                            borderRadius: '6px',
                            fontWeight: '500'
                        },
                        children: /github\.com/i.test(link) ? 'View on GitHub' : 'Visit Website'
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    style: {
                        paddingLeft: '1.5rem',
                        color: 'var(--secondary-foreground)',
                        lineHeight: '1.8'
                    },
                    children: description.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                marginBottom: '0.5rem'
                            },
                            children: d
                        }, i, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                item.techCheck && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: '2rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                    },
                    children: item.techCheck.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                padding: '0.25rem 0.75rem',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '100px',
                                fontSize: '0.85rem',
                                border: '1px solid var(--border)'
                            },
                            children: tech
                        }, tech, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                            lineNumber: 79,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "about",
                title: "About",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    delay: 80,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutPhotos,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].photoWrapper,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/profile-1.png",
                                        alt: "Rayyan Lodhi",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].photo1
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].introSection,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].introHeading,
                                                children: "Nice to meet you!"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].introText,
                                                children: "I'm a third-year Computer Engineering student who likes working at the seam between software and hardware: computer vision on edge devices, data pipelines at national scale, ROS2 on a Mars rover, and counter-UAS simulation tools for research. I'm happiest when a system I built ends up in real hands, whether that's 500+ retail stores or a Grade 4 robotics class."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].education,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeading,
                                                children: "Education"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].education.map((edu, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eduItem,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eduHeader,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].degree,
                                                                    children: edu.degree
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                                                    lineNumber: 124,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].year,
                                                                    children: edu.period
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                                                    lineNumber: 125,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].school,
                                                            children: [
                                                                edu.school,
                                                                ", ",
                                                                edu.location
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eduDetails,
                                                            children: edu.details.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: d
                                                                }, i, false, {
                                                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 48
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "experience",
                title: "Experience",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].darkSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].experience.map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: index * 70,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                experience: exp,
                                onClick: ()=>setSelectedItem(exp)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "projects",
                title: "Projects",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].darkSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectsGrid,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: index * 70,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].revealItem,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                project: project,
                                onClick: ()=>setSelectedItem(project)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "leadership",
                title: "Leadership",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subHeading,
                            children: "University & Technical Teams"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                            lineNumber: 166,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectsGrid,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].extracurriculars.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: index * 70,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].revealItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    project: item,
                                    onClick: ()=>setSelectedItem(item)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this)
                            }, `extra-${index}`, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subHeading,
                            style: {
                                marginTop: '3rem'
                            },
                            children: "High School Initiatives"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                            lineNumber: 178,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectsGrid,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].highSchoolInitiatives.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: index % 3 * 70,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].revealItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    project: item,
                                    onClick: ()=>setSelectedItem(item)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            }, `hs-${index}`, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "awards",
                title: "Awards & Certifications",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].darkSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectsGrid,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].awards.map((award, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: index % 3 * 70,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].revealItem,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$AwardCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                award: award,
                                onClick: ()=>setSelectedItem(award)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                lineNumber: 195,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "skills",
                title: "Skills",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    delay: 80,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$SkillsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        categories: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].skills
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "contact",
                title: "Contact",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    delay: 80,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Open to co-op and internship opportunities. Let's talk."
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].email}`,
                                className: "primaryBtn",
                                children: "Say Hello"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: !!selectedItem,
                onClose: ()=>setSelectedItem(null),
                children: renderModalContent(selectedItem)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "1YGeiIMlDw0BzM8kVWnRaE6POaA=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_PersonalWebsite_src_02a5c466._.js.map