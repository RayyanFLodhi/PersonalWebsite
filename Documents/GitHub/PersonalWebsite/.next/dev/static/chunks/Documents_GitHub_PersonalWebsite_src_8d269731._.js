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
            title: "Building a rover arm",
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
"[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "art": "Journey-module__n12ipq__art",
  "beacon": "Journey-module__n12ipq__beacon",
  "bob": "Journey-module__n12ipq__bob",
  "body": "Journey-module__n12ipq__body",
  "caption": "Journey-module__n12ipq__caption",
  "captions": "Journey-module__n12ipq__captions",
  "cell": "Journey-module__n12ipq__cell",
  "cellMars": "Journey-module__n12ipq__cellMars",
  "cellOffice": "Journey-module__n12ipq__cellOffice",
  "cellOrbit": "Journey-module__n12ipq__cellOrbit",
  "cellSky": "Journey-module__n12ipq__cellSky",
  "chart": "Journey-module__n12ipq__chart",
  "chartAlt": "Journey-module__n12ipq__chartAlt",
  "code": "Journey-module__n12ipq__code",
  "cta": "Journey-module__n12ipq__cta",
  "cursor": "Journey-module__n12ipq__cursor",
  "eyebrow": "Journey-module__n12ipq__eyebrow",
  "fov": "Journey-module__n12ipq__fov",
  "geo": "Journey-module__n12ipq__geo",
  "heading": "Journey-module__n12ipq__heading",
  "headingNote": "Journey-module__n12ipq__headingNote",
  "j-blink": "Journey-module__n12ipq__j-blink",
  "j-bob": "Journey-module__n12ipq__j-bob",
  "j-dash": "Journey-module__n12ipq__j-dash",
  "j-orbit": "Journey-module__n12ipq__j-orbit",
  "j-steam": "Journey-module__n12ipq__j-steam",
  "j-sweep": "Journey-module__n12ipq__j-sweep",
  "kicker": "Journey-module__n12ipq__kicker",
  "label": "Journey-module__n12ipq__label",
  "leoA": "Journey-module__n12ipq__leoA",
  "leoB": "Journey-module__n12ipq__leoB",
  "line": "Journey-module__n12ipq__line",
  "link": "Journey-module__n12ipq__link",
  "node": "Journey-module__n12ipq__node",
  "panel": "Journey-module__n12ipq__panel",
  "rail": "Journey-module__n12ipq__rail",
  "railDot": "Journey-module__n12ipq__railDot",
  "ring": "Journey-module__n12ipq__ring",
  "stage": "Journey-module__n12ipq__stage",
  "stars": "Journey-module__n12ipq__stars",
  "steam": "Journey-module__n12ipq__steam",
  "sweep": "Journey-module__n12ipq__sweep",
  "tag": "Journey-module__n12ipq__tag",
  "target": "Journey-module__n12ipq__target",
  "title": "Journey-module__n12ipq__title",
  "track": "Journey-module__n12ipq__track",
  "vignette": "Journey-module__n12ipq__vignette",
  "world": "Journey-module__n12ipq__world",
  "wrapper": "Journey-module__n12ipq__wrapper",
});
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarsScene",
    ()=>MarsScene,
    "OfficeScene",
    ()=>OfficeScene,
    "OrbitScene",
    ()=>OrbitScene,
    "SkyScene",
    ()=>SkyScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.module.css [app-client] (css module)");
;
;
/*
 * Four illustrated backdrops for the Journey section. They are plain inline SVG in the site palette
 * (dark base, blue + violet accents) so the whole "camera flight" ships with zero image assets.
 * Each scene fills a 100vw x 100svh cell; `slice` keeps the ground anchored and crops the sides.
 *
 * Anything that moves continuously is wrapped in its own <g> so CSS transforms don't clobber the
 * positioning transform attribute on the parent.
 */ const ART = {
    viewBox: '0 0 1000 600',
    preserveAspectRatio: 'xMidYMax slice',
    'aria-hidden': true
};
const MarsScene = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].art,
        ...ART,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "j-mars-sky",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#05060c"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 21,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.42",
                                stopColor: "#170b0a"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 22,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.78",
                                stopColor: "#4a2316"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 23,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#6b3a1f"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 24,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 20,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: "j-mars-sun",
                        cx: "0.5",
                        cy: "0.5",
                        r: "0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#ffd9b8",
                                stopOpacity: "0.95"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 27,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.35",
                                stopColor: "#ffb07a",
                                stopOpacity: "0.3"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 28,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#ffb07a",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 29,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "1000",
                height: "600",
                fill: "url(#j-mars-sky)"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "770",
                cy: "300",
                r: "110",
                fill: "url(#j-mars-sun)"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "770",
                cy: "300",
                r: "13",
                fill: "#ffe7d2"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 430 L110 402 L230 420 L340 382 L460 412 L560 374 L690 406 L800 378 L920 404 L1000 390 L1000 600 L0 600Z",
                fill: "#2a130d"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 482 C150 460 260 502 400 480 S650 452 800 478 S950 502 1000 488 L1000 600 L0 600Z",
                fill: "#1a0b08"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "180",
                cy: "522",
                rx: "26",
                ry: "9",
                fill: "#110705"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "860",
                cy: "542",
                rx: "40",
                ry: "12",
                fill: "#110705"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "560",
                cy: "566",
                rx: "18",
                ry: "6",
                fill: "#110705"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(560 468)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M-60 22 L-30 -4 L0 26 L30 -4 L60 22"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 49,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "-60",
                                cy: "22",
                                r: "16"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 50,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "0",
                                cy: "26",
                                r: "16"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 51,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "60",
                                cy: "22",
                                r: "16"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 52,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "-72",
                                y: "-32",
                                width: "144",
                                height: "30",
                                rx: "5"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 53,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "-66",
                                y: "-40",
                                width: "70",
                                height: "8",
                                rx: "2"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 54,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M-30 -40 L-30 -66"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 55,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "-46",
                                y: "-80",
                                width: "34",
                                height: "14",
                                rx: "3"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 56,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M60 -24 L100 -60 L142 -32"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 57,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M142 -32 L154 -20 M142 -32 L132 -18"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 58,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "100",
                        cy: "-60",
                        r: "3.5",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].node
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "142",
                        cy: "-32",
                        r: "3.5",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].node
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "60",
                        cy: "-24",
                        r: "3.5",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].node
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "-22",
                        cy: "-73",
                        r: "3",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].beacon
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M-20 540 Q260 520 500 498",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].track
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M-20 556 Q280 540 520 512",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].track
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = MarsScene;
/* ---------- 02 · Earth orbit: LEO and GEO ---------- */ const Satellite = ({ x, y, scale = 1 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        transform: `translate(${x} ${y}) scale(${scale})`,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "-26",
                y: "-4",
                width: "18",
                height: "8",
                rx: "1",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "8",
                y: "-4",
                width: "18",
                height: "8",
                rx: "1",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "-7",
                y: "-7",
                width: "14",
                height: "14",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 -7 L0 -14"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "0",
                cy: "-15",
                r: "2",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].node
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Satellite;
const OrbitScene = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].art,
        ...ART,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "j-orbit-fade",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#05060c",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 88,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#05060c",
                                stopOpacity: "1"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 89,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: "j-earth",
                        cx: "0.36",
                        cy: "0.28",
                        r: "0.85",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#6fb3ff"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 92,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.4",
                                stopColor: "#2563eb"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 93,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.78",
                                stopColor: "#0b2a6b"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 94,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#030b22"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 95,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 91,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: "j-atmo",
                        cx: "0.5",
                        cy: "0.5",
                        r: "0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.84",
                                stopColor: "#3b82f6",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 98,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.94",
                                stopColor: "#3b82f6",
                                stopOpacity: "0.38"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 99,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#3b82f6",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 100,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: "j-earth-clip",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "500",
                            cy: "760",
                            r: "370"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                            lineNumber: 103,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 102,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "500",
                cy: "760",
                r: "420",
                fill: "url(#j-atmo)"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "500",
                cy: "760",
                r: "370",
                fill: "url(#j-earth)"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#j-earth-clip)",
                fill: "#2f9a68",
                opacity: "0.55",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M300 470 C340 430 420 440 440 480 C470 520 420 560 380 540 C340 520 290 520 300 470Z"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 111,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M560 420 C620 400 700 430 720 480 C740 540 680 560 640 530 C600 500 540 470 560 420Z"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 112,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M470 600 C520 580 580 610 570 650 C560 690 500 690 480 660 C460 630 450 610 470 600Z"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 113,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "760",
                cy: "760",
                rx: "300",
                ry: "420",
                fill: "#02060f",
                opacity: "0.55",
                clipPath: "url(#j-earth-clip)"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "500",
                cy: "760",
                r: "420",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ring
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "500",
                cy: "760",
                r: "560",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ring
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "640",
                y: "358",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                children: "LEO"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "660",
                y: "228",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                children: "GEO"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leoA,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Satellite, {
                    x: 500,
                    y: 340,
                    scale: 0.9
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                    lineNumber: 129,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leoB,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Satellite, {
                    x: 500,
                    y: 340,
                    scale: 0.8
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                    lineNumber: 132,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].geo,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Satellite, {
                    x: 500,
                    y: 200,
                    scale: 1.15
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                    lineNumber: 135,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M500 392 L500 214",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "0",
                y: "440",
                width: "1000",
                height: "160",
                fill: "url(#j-orbit-fade)"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = OrbitScene;
/* ---------- 03 · Low altitude: counter-UAS ---------- */ const Drone = ({ x, y, scale = 1, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        transform: `translate(${x} ${y}) scale(${scale})`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bob,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M-22 -10 L22 10 M-22 10 L22 -10"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                            lineNumber: 152,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "-11",
                            y: "-6",
                            width: "22",
                            height: "12",
                            rx: "3"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                            lineNumber: 153,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "-24",
                            cy: "-11",
                            rx: "12",
                            ry: "3"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                            lineNumber: 154,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "24",
                            cy: "-11",
                            rx: "12",
                            ry: "3"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                            lineNumber: 155,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "-24",
                            cy: "11",
                            rx: "12",
                            ry: "3"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                            lineNumber: 156,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "24",
                            cy: "11",
                            rx: "12",
                            ry: "3"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                            lineNumber: 157,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                    lineNumber: 151,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "0",
                    cy: "0",
                    r: "2.5",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].beacon
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                    lineNumber: 159,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
            lineNumber: 150,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c3 = Drone;
const SkyScene = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].art,
        ...ART,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "j-dusk",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#05060c"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 169,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.5",
                                stopColor: "#0c1230"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 170,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#2a1a3e"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 171,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 168,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "j-sweep",
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#8b5cf6",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 174,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#8b5cf6",
                                stopOpacity: "0.45"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 175,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 173,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "j-edge-r",
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#05060c",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 178,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#05060c",
                                stopOpacity: "0.95"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 179,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 177,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "j-fov",
                        x1: "0",
                        y1: "1",
                        x2: "0",
                        y2: "0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#3b82f6",
                                stopOpacity: "0.18"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 182,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#3b82f6",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 183,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 181,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "1000",
                height: "600",
                fill: "url(#j-dusk)"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "#07070a",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "0",
                        y: "470",
                        width: "1000",
                        height: "130"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 190,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "40",
                        y: "400",
                        width: "70",
                        height: "80"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 191,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "130",
                        y: "430",
                        width: "50",
                        height: "60"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 192,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "200",
                        y: "380",
                        width: "90",
                        height: "100"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 193,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "320",
                        y: "420",
                        width: "60",
                        height: "70"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 194,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "400",
                        y: "350",
                        width: "80",
                        height: "140"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 195,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "500",
                        y: "410",
                        width: "60",
                        height: "80"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 196,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "600",
                        y: "330",
                        width: "80",
                        height: "160"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 197,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "700",
                        y: "400",
                        width: "60",
                        height: "90"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 198,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "790",
                        y: "370",
                        width: "100",
                        height: "120"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 199,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "910",
                        y: "420",
                        width: "70",
                        height: "70"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 200,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 189,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "#3b82f6",
                opacity: "0.35",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "415",
                        y: "370",
                        width: "6",
                        height: "8"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 203,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "445",
                        y: "400",
                        width: "6",
                        height: "8"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 204,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "615",
                        y: "350",
                        width: "6",
                        height: "8"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 205,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "650",
                        y: "380",
                        width: "6",
                        height: "8"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 206,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "630",
                        y: "430",
                        width: "6",
                        height: "8"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 207,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "810",
                        y: "390",
                        width: "6",
                        height: "8"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 208,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "850",
                        y: "430",
                        width: "6",
                        height: "8"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 209,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "225",
                        y: "400",
                        width: "6",
                        height: "8"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 210,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "260",
                        y: "440",
                        width: "6",
                        height: "8"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 211,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 202,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M250 470 L120 250 L360 236 Z",
                fill: "url(#j-fov)"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 215,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M250 470 L120 250 M250 470 L360 236",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fov
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 216,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "238",
                        y: "452",
                        width: "24",
                        height: "14",
                        rx: "3"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 218,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M250 466 L250 480"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 219,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 217,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M640 330 L640 312 M632 312 L648 312"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                    lineNumber: 224,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 223,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "640",
                cy: "312",
                r: "90",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ring
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 226,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "640",
                cy: "312",
                r: "160",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ring
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 227,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "640",
                cy: "312",
                r: "230",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ring
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 228,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sweep,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M640 312 L640 82 A230 230 0 0 1 755 112 Z",
                        fill: "url(#j-sweep)"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 230,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M640 312 L640 82",
                        stroke: "#8b5cf6",
                        strokeOpacity: "0.8",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 231,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 229,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Drone, {
                x: 200,
                y: 180,
                scale: 0.55
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Drone, {
                x: 820,
                y: 140,
                scale: 0.7
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Drone, {
                x: 560,
                y: 210,
                scale: 1,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "-48",
                        y: "-30",
                        width: "96",
                        height: "60",
                        rx: "4",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].target
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 238,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "-46",
                        y: "-38",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag,
                        children: "TRK-01 · 42 m"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 239,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "860",
                y: "0",
                width: "140",
                height: "600",
                fill: "url(#j-edge-r)"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c4 = SkyScene;
const OfficeScene = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].art,
        ...ART,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "j-wall",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#09090b"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 254,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#141216"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 255,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 253,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "j-window",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#05060c"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 258,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#1a1d3f"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 259,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 257,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: "j-lamp",
                        cx: "0.5",
                        cy: "0.1",
                        r: "0.7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#ffd9a8",
                                stopOpacity: "0.3"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 262,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.45",
                                stopColor: "#ffd9a8",
                                stopOpacity: "0.07"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 263,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#ffd9a8",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 264,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 261,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "j-edge-l",
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#05060c",
                                stopOpacity: "0.95"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 267,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#05060c",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 268,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 266,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "j-screen",
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#0f172a"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 271,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#111827"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 272,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 270,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 252,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "1000",
                height: "600",
                fill: "url(#j-wall)"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 275,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "580",
                y: "80",
                width: "340",
                height: "250",
                rx: "6",
                fill: "url(#j-window)"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 278,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "#ffffff",
                opacity: "0.7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "620",
                        cy: "110",
                        r: "1.2"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 280,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "700",
                        cy: "130",
                        r: "1"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 281,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "760",
                        cy: "96",
                        r: "1.4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 282,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "840",
                        cy: "120",
                        r: "1"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 283,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "890",
                        cy: "150",
                        r: "1.2"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 284,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "660",
                        cy: "170",
                        r: "0.9"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 285,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 279,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "850",
                cy: "128",
                r: "14",
                fill: "#e8e6f0",
                opacity: "0.85"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 287,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "#07070a",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "580",
                        y: "250",
                        width: "340",
                        height: "80"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 289,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "600",
                        y: "222",
                        width: "30",
                        height: "40"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 290,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "650",
                        y: "200",
                        width: "40",
                        height: "60"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 291,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "710",
                        y: "236",
                        width: "24",
                        height: "30"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 292,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "760",
                        y: "190",
                        width: "36",
                        height: "70"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 293,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "820",
                        y: "226",
                        width: "28",
                        height: "40"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 294,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "870",
                        y: "208",
                        width: "34",
                        height: "56"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 295,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 288,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "#3b82f6",
                opacity: "0.4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "660",
                        y: "212",
                        width: "4",
                        height: "6"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 298,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "770",
                        y: "204",
                        width: "4",
                        height: "6"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 299,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "780",
                        y: "222",
                        width: "4",
                        height: "6"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 300,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "880",
                        y: "220",
                        width: "4",
                        height: "6"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 301,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 297,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                stroke: "#2a2a30",
                strokeWidth: "6",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "580",
                        y: "80",
                        width: "340",
                        height: "250",
                        rx: "6"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 304,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M750 80 L750 330 M580 205 L920 205"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 305,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 303,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "200",
                cy: "300",
                rx: "190",
                ry: "210",
                fill: "url(#j-lamp)"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 309,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M170 440 L170 330 L220 290"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 311,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M190 300 L250 300 L236 262 L206 262 Z",
                        fill: "#1a1a1f"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 312,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 310,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "40",
                y: "440",
                width: "920",
                height: "16",
                rx: "3",
                fill: "#1c1b20"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 316,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "80",
                y: "456",
                width: "14",
                height: "144",
                fill: "#141317"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 317,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "900",
                y: "456",
                width: "14",
                height: "144",
                fill: "#141317"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 318,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(90 0)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "300",
                                y: "282",
                                width: "236",
                                height: "150",
                                rx: "8",
                                fill: "#0d0d10",
                                stroke: "#2c2c33",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "310",
                                y: "292",
                                width: "216",
                                height: "130",
                                rx: "4",
                                fill: "url(#j-screen)"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].code,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "324",
                                        y: "306",
                                        width: "60",
                                        height: "6",
                                        rx: "3",
                                        fill: "#8b5cf6"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                        lineNumber: 325,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "390",
                                        y: "306",
                                        width: "90",
                                        height: "6",
                                        rx: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                        lineNumber: 326,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "336",
                                        y: "320",
                                        width: "120",
                                        height: "6",
                                        rx: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                        lineNumber: 327,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "336",
                                        y: "334",
                                        width: "70",
                                        height: "6",
                                        rx: "3",
                                        fill: "#3b82f6"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                        lineNumber: 328,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "412",
                                        y: "334",
                                        width: "60",
                                        height: "6",
                                        rx: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                        lineNumber: 329,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "348",
                                        y: "348",
                                        width: "110",
                                        height: "6",
                                        rx: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                        lineNumber: 330,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "348",
                                        y: "362",
                                        width: "52",
                                        height: "6",
                                        rx: "3",
                                        fill: "#8b5cf6"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                        lineNumber: 331,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "336",
                                        y: "376",
                                        width: "96",
                                        height: "6",
                                        rx: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                        lineNumber: 332,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "324",
                                        y: "390",
                                        width: "40",
                                        height: "6",
                                        rx: "3",
                                        fill: "#3b82f6"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                        lineNumber: 333,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "370",
                                        y: "390",
                                        width: "6",
                                        height: "8",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cursor,
                                        fill: "#ededed"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                        lineNumber: 334,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 324,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "408",
                                y: "432",
                                width: "20",
                                height: "10",
                                fill: "#1c1b20"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 336,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "556",
                                y: "318",
                                width: "170",
                                height: "114",
                                rx: "8",
                                fill: "#0d0d10",
                                stroke: "#2c2c33",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "566",
                                y: "328",
                                width: "150",
                                height: "94",
                                rx: "4",
                                fill: "url(#j-screen)"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 341,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chart,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M576 400 L596 390 L616 396 L636 372 L656 378 L676 356 L696 362 L706 344"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                        lineNumber: 343,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M576 410 L596 406 L616 408 L636 398 L656 400 L676 392 L696 394 L706 386",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chartAlt
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                        lineNumber: 344,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 342,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "632",
                                y: "432",
                                width: "18",
                                height: "10",
                                fill: "#1c1b20"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "340",
                        y: "448",
                        width: "180",
                        height: "10",
                        rx: "3",
                        fill: "#232228"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "760",
                                y: "412",
                                width: "30",
                                height: "30",
                                rx: "4",
                                fill: "#1a1a1f"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M790 420 C804 420 804 436 790 436"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                                lineNumber: 352,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M770 404 Q776 394 770 386 M780 404 Q786 394 780 386",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].steam
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 320,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "0",
                y: "0",
                width: "140",
                height: "600",
                fill: "url(#j-edge-l)"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
                lineNumber: 357,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx",
        lineNumber: 251,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c5 = OfficeScene;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "MarsScene");
__turbopack_context__.k.register(_c1, "Satellite");
__turbopack_context__.k.register(_c2, "OrbitScene");
__turbopack_context__.k.register(_c3, "Drone");
__turbopack_context__.k.register(_c4, "SkyScene");
__turbopack_context__.k.register(_c5, "OfficeScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$JourneyScenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/JourneyScenes.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/data/resumeData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
/*
 * A scroll-driven "camera flight" through four places the work has taken me:
 * Mars yard (rover) -> Earth orbit (Telesat) -> low altitude (counter-UAS) -> the office.
 *
 * Same contract as the Hero: JS writes one --p value (0..1) onto the pinned stage, CSS derives
 * the camera position, parallax and caption cross-fades from it. The four scenes live in a 3x2
 * grid of viewport-sized cells and the camera traces an L-shaped route through them.
 */ /* --p thresholds where the active chapter flips (keep in sync with the caption windows in CSS). */ const CHAPTER_BREAKS = [
    0.24,
    0.56,
    0.86
];
const chapterAt = (p)=>CHAPTER_BREAKS.filter((b)=>p >= b).length;
const Journey = ()=>{
    _s();
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Journey.useEffect": ()=>{
            const wrapper = wrapperRef.current;
            const stage = stageRef.current;
            if (!wrapper || !stage) return;
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            let target = 0;
            let current = -1;
            let raf = 0;
            const apply = {
                "Journey.useEffect.apply": (v)=>{
                    stage.style.setProperty('--p', v.toFixed(4));
                    stage.dataset.chapter = String(chapterAt(v));
                }
            }["Journey.useEffect.apply"];
            const tick = {
                "Journey.useEffect.tick": ()=>{
                    raf = 0;
                    const next = current < 0 || Math.abs(target - current) < 0.0008 ? target : current + (target - current) * 0.16;
                    if (next !== current) {
                        current = next;
                        apply(current);
                    }
                    if (current !== target) raf = requestAnimationFrame(tick);
                }
            }["Journey.useEffect.tick"];
            const measure = {
                "Journey.useEffect.measure": ()=>{
                    const rect = wrapper.getBoundingClientRect();
                    const range = wrapper.offsetHeight - window.innerHeight;
                    target = range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 1;
                    // Nothing on screen: skip the smoothing loop entirely.
                    const visible = rect.bottom > 0 && rect.top < window.innerHeight;
                    stage.dataset.visible = visible ? 'true' : 'false';
                    if (reduceMotion) {
                        if (current !== 1) {
                            current = 1;
                            apply(1);
                        }
                        return;
                    }
                    if (!visible) {
                        if (current !== target) {
                            current = target;
                            apply(current);
                        }
                        return;
                    }
                    if (!raf) raf = requestAnimationFrame(tick);
                }
            }["Journey.useEffect.measure"];
            measure();
            window.addEventListener('scroll', measure, {
                passive: true
            });
            window.addEventListener('resize', measure);
            return ({
                "Journey.useEffect": ()=>{
                    window.removeEventListener('scroll', measure);
                    window.removeEventListener('resize', measure);
                    if (raf) cancelAnimationFrame(raf);
                }
            })["Journey.useEffect"];
        }
    }["Journey.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        id: "journey",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: stageRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage,
            "aria-label": "Where the work has taken me",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stars,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                    lineNumber: 92,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].world,
                    "aria-hidden": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cell} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cellOrbit}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$JourneyScenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitScene"], {}, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                                lineNumber: 97,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cell} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cellMars}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$JourneyScenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarsScene"], {}, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                                lineNumber: 100,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                            lineNumber: 99,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cell} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cellSky}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$JourneyScenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkyScene"], {}, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                                lineNumber: 103,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                            lineNumber: 102,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cell} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cellOffice}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$JourneyScenes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OfficeScene"], {}, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                                lineNumber: 106,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                    lineNumber: 95,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vignette,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                    lineNumber: 110,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heading,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                            children: "The route so far"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                            lineNumber: 113,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headingNote,
                            children: "Scroll to fly through it"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                            lineNumber: 114,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                    lineNumber: 112,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].captions,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].journey.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].caption,
                            "data-index": i,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kicker,
                                    children: c.kicker
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                                    lineNumber: 121,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                    children: c.title
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                                    lineNumber: 122,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
                                    children: c.body
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                                    lineNumber: 123,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: c.cta.href,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cta,
                                    children: [
                                        c.cta.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            children: " →"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                                            lineNumber: 126,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                                    lineNumber: 124,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, c.scene, true, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                            lineNumber: 120,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                    lineNumber: 118,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rail,
                    "aria-hidden": "true",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].journey.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].railDot
                        }, c.scene, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                            lineNumber: 135,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
                    lineNumber: 133,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
            lineNumber: 90,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx",
        lineNumber: 89,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Journey, "11ao0WyH290/HsyRbJE21TpRPFA=");
_c = Journey;
const __TURBOPACK__default__export__ = Journey;
var _c;
__turbopack_context__.k.register(_c, "Journey");
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
"[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceTimeline.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "item": "ExperienceTimeline-module__ufNs3W__item",
  "list": "ExperienceTimeline-module__ufNs3W__list",
  "node": "ExperienceTimeline-module__ufNs3W__node",
  "nodeCol": "ExperienceTimeline-module__ufNs3W__nodeCol",
  "reveal": "ExperienceTimeline-module__ufNs3W__reveal",
  "row": "ExperienceTimeline-module__ufNs3W__row",
  "when": "ExperienceTimeline-module__ufNs3W__when",
  "where": "ExperienceTimeline-module__ufNs3W__where",
  "years": "ExperienceTimeline-module__ufNs3W__years",
});
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "breathe": "ExperienceCard-module__dsXe8G__breathe",
  "breathe-accent": "ExperienceCard-module__dsXe8G__breathe-accent",
  "card": "ExperienceCard-module__dsXe8G__card",
  "cardUpcoming": "ExperienceCard-module__dsXe8G__cardUpcoming",
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
  "moreNote": "ExperienceCard-module__dsXe8G__moreNote",
  "role": "ExperienceCard-module__dsXe8G__role",
  "titleRow": "ExperienceCard-module__dsXe8G__titleRow",
  "upcoming": "ExperienceCard-module__dsXe8G__upcoming",
  "upcomingDot": "ExperienceCard-module__dsXe8G__upcomingDot",
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
"[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceTimeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceTimeline$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceTimeline.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/Reveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
/** "2026", "2025 – 2026" or "2022 – Now" from a free-form period string. */ const yearLabel = (period)=>{
    const years = Array.from(new Set(period.match(/\d{4}/g) ?? []));
    const open = /present/i.test(period);
    if (years.length === 0) return period;
    if (open) return `${years[0]} – Now`;
    return years.length > 1 ? `${years[0]} – ${years[years.length - 1]}` : years[0];
};
/**
 * Roles on a vertical spine. The spine fills as the reader scrolls (--p on the list) and each
 * node lights up when the fill passes it (--t on the item, measured from layout).
 */ const ExperienceTimeline = ({ items, onSelect })=>{
    _s();
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExperienceTimeline.useEffect": ()=>{
            const list = listRef.current;
            if (!list) return;
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const rows = Array.from(list.children);
            let raf = 0;
            // offsetTop ignores the Reveal transform, so this is stable before/after the entrance.
            const layout = {
                "ExperienceTimeline.useEffect.layout": ()=>{
                    const total = list.offsetHeight || 1;
                    rows.forEach({
                        "ExperienceTimeline.useEffect.layout": (row)=>row.style.setProperty('--t', ((row.offsetTop + 28) / total).toFixed(4))
                    }["ExperienceTimeline.useEffect.layout"]);
                }
            }["ExperienceTimeline.useEffect.layout"];
            const measure = {
                "ExperienceTimeline.useEffect.measure": ()=>{
                    raf = 0;
                    if (reduceMotion) {
                        list.style.setProperty('--p', '1');
                        return;
                    }
                    const rect = list.getBoundingClientRect();
                    const focus = window.innerHeight * 0.62;
                    const p = Math.min(1, Math.max(0, (focus - rect.top) / rect.height));
                    list.style.setProperty('--p', p.toFixed(4));
                }
            }["ExperienceTimeline.useEffect.measure"];
            const onScroll = {
                "ExperienceTimeline.useEffect.onScroll": ()=>{
                    if (!raf) raf = requestAnimationFrame(measure);
                }
            }["ExperienceTimeline.useEffect.onScroll"];
            const onResize = {
                "ExperienceTimeline.useEffect.onResize": ()=>{
                    layout();
                    onScroll();
                }
            }["ExperienceTimeline.useEffect.onResize"];
            layout();
            measure();
            const ro = new ResizeObserver(onResize);
            ro.observe(list);
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            window.addEventListener('resize', onResize);
            return ({
                "ExperienceTimeline.useEffect": ()=>{
                    ro.disconnect();
                    window.removeEventListener('scroll', onScroll);
                    window.removeEventListener('resize', onResize);
                    if (raf) cancelAnimationFrame(raf);
                }
            })["ExperienceTimeline.useEffect"];
        }
    }["ExperienceTimeline.useEffect"], [
        items.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
        ref: listRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceTimeline$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
        children: items.map((exp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceTimeline$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    delay: i === 0 ? 60 : 0,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceTimeline$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reveal,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceTimeline$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceTimeline$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].when,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceTimeline$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].years,
                                        children: yearLabel(exp.period)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceTimeline.tsx",
                                        lineNumber: 84,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceTimeline$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].where,
                                        children: exp.location
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceTimeline.tsx",
                                        lineNumber: 85,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceTimeline.tsx",
                                lineNumber: 83,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceTimeline$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nodeCol,
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceTimeline$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].node
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceTimeline.tsx",
                                    lineNumber: 88,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceTimeline.tsx",
                                lineNumber: 87,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                experience: exp,
                                onClick: ()=>onSelect(exp)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceTimeline.tsx",
                                lineNumber: 90,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceTimeline.tsx",
                        lineNumber: 82,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceTimeline.tsx",
                    lineNumber: 81,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, `${exp.company}-${exp.role}`, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceTimeline.tsx",
                lineNumber: 80,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceTimeline.tsx",
        lineNumber: 78,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ExperienceTimeline, "84n7gRvM2a8Nl9i4H/fLGxCIUPc=");
_c = ExperienceTimeline;
const __TURBOPACK__default__export__ = ExperienceTimeline;
var _c;
__turbopack_context__.k.register(_c, "ExperienceTimeline");
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
"[project]/Documents/GitHub/PersonalWebsite/src/components/Leadership.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "chevron": "Leadership-module__wGbELa__chevron",
  "ledger": "Leadership-module__wGbELa__ledger",
  "monogram": "Leadership-module__wGbELa__monogram",
  "more": "Leadership-module__wGbELa__more",
  "pill": "Leadership-module__wGbELa__pill",
  "row": "Leadership-module__wGbELa__row",
  "rowIndex": "Leadership-module__wGbELa__rowIndex",
  "rowItem": "Leadership-module__wGbELa__rowItem",
  "rowMeta": "Leadership-module__wGbELa__rowMeta",
  "rowPill": "Leadership-module__wGbELa__rowPill",
  "rowText": "Leadership-module__wGbELa__rowText",
  "rowTitle": "Leadership-module__wGbELa__rowTitle",
  "team": "Leadership-module__wGbELa__team",
  "teamBody": "Leadership-module__wGbELa__teamBody",
  "teamMedia": "Leadership-module__wGbELa__teamMedia",
  "teamPeriod": "Leadership-module__wGbELa__teamPeriod",
  "teamRole": "Leadership-module__wGbELa__teamRole",
  "teamSummary": "Leadership-module__wGbELa__teamSummary",
  "teamTitle": "Leadership-module__wGbELa__teamTitle",
  "teamTop": "Leadership-module__wGbELa__teamTop",
  "thumb": "Leadership-module__wGbELa__thumb",
});
}),
"[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InitiativeLedger",
    ()=>InitiativeLedger,
    "TeamCard",
    ()=>TeamCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/Leadership.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$lib$2f$media$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/lib/media.ts [app-client] (ecmascript)");
;
;
;
const initials = (title)=>title.split(/[\s(]+/).filter(Boolean).slice(0, 2).map((w)=>w[0]).join('').toUpperCase();
const TeamCard = ({ item, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].team,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamMedia,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$lib$2f$media$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRealImage"])(item.image) ? // eslint-disable-next-line @next/next/no-img-element
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: item.image,
                    alt: ""
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].monogram,
                    children: initials(item.title)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamBody,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamTop,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamTitle,
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                                lineNumber: 33,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamPeriod,
                                children: item.period
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                                lineNumber: 34,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamRole,
                        children: item.role
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    item.highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pill,
                        children: item.highlight
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                        lineNumber: 37,
                        columnNumber: 32
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamSummary,
                        children: item.description[0]
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].more,
                        children: [
                            "Details",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: " →"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                                lineNumber: 40,
                                columnNumber: 24
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = TeamCard;
const InitiativeLedger = ({ items, onSelect })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ledger,
        children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowItem,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                    onClick: ()=>onSelect(item),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumb,
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$lib$2f$media$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRealImage"])(item.image) ? // eslint-disable-next-line @next/next/no-img-element
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.image,
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                                lineNumber: 60,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowIndex,
                                children: String(i + 1).padStart(2, '0')
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                                lineNumber: 62,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowText,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowTitle,
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                                    lineNumber: 66,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowMeta,
                                    children: [
                                        item.role,
                                        " · ",
                                        item.period
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                                    lineNumber: 67,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                item.highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pill} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowPill}`,
                                    children: item.highlight
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                                    lineNumber: 70,
                                    columnNumber: 44
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Leadership$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chevron,
                            "aria-hidden": "true",
                            children: "→"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                    lineNumber: 56,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, item.title, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = InitiativeLedger;
var _c, _c1;
__turbopack_context__.k.register(_c, "TeamCard");
__turbopack_context__.k.register(_c1, "InitiativeLedger");
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
  "awardsGrid": "page-module__KRuL7W__awardsGrid",
  "contactContainer": "page-module__KRuL7W__contactContainer",
  "darkSection": "page-module__KRuL7W__darkSection",
  "modalHighlight": "page-module__KRuL7W__modalHighlight",
  "projectsGrid": "page-module__KRuL7W__projectsGrid",
  "revealFeatured": "page-module__KRuL7W__revealFeatured",
  "revealItem": "page-module__KRuL7W__revealItem",
  "subHeading": "page-module__KRuL7W__subHeading",
  "subHeadingSpaced": "page-module__KRuL7W__subHeadingSpaced",
  "teamsGrid": "page-module__KRuL7W__teamsGrid",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/Journey.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceTimeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/ExperienceTimeline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/ProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$LeadershipCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PersonalWebsite/src/components/LeadershipCards.tsx [app-client] (ecmascript)");
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
        const rawImage = item.image || item.logo;
        const image = rawImage && !/placeholder/i.test(rawImage) ? rawImage : undefined;
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
                        lineNumber: 40,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 39,
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
                    lineNumber: 43,
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
                    lineNumber: 44,
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
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "• ",
                                location
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                            lineNumber: 47,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalHighlight,
                    children: highlight
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 50,
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
                        lineNumber: 54,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 53,
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
                            lineNumber: 75,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 73,
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
                            lineNumber: 82,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this);
    };
    const [featuredProject, ...otherProjects] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].projects;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Journey$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "experience",
                title: "Experience",
                eyebrow: "Where I've worked",
                lede: "Eight roles across research, government, startups and teaching. Click any one for the full story.",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].darkSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ExperienceTimeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    items: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].experience,
                    onSelect: setSelectedItem
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "projects",
                title: "Projects",
                eyebrow: "What I've built",
                lede: "Hackathon builds and research tooling, with code you can read.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectsGrid,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].revealFeatured,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                project: featuredProject,
                                index: 0,
                                featured: true,
                                onClick: ()=>setSelectedItem(featuredProject)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        otherProjects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: index % 3 * 70,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].revealItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    project: project,
                                    index: index + 1,
                                    onClick: ()=>setSelectedItem(project)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this)
                            }, project.title, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "leadership",
                title: "Leadership",
                eyebrow: "Teams & community",
                lede: "The rover team, the developer community, and a decade of speaking and organizing.",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].darkSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamsGrid,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].extracurriculars.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: index % 2 * 70,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].revealItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$LeadershipCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TeamCard"], {
                                    item: item,
                                    onClick: ()=>setSelectedItem(item)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this)
                            }, item.title, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subHeading} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subHeadingSpaced}`,
                            children: "Earlier initiatives"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        delay: 60,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$LeadershipCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InitiativeLedger"], {
                            items: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].highSchoolInitiatives,
                            onSelect: setSelectedItem
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "awards",
                title: "Awards & Certifications",
                eyebrow: "Recognition",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].awardsGrid,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].awards.map((award, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: index % 4 * 60,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].revealItem,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$AwardCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                award: award,
                                onClick: ()=>setSelectedItem(award)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                lineNumber: 171,
                                columnNumber: 15
                            }, this)
                        }, award.title, false, {
                            fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "skills",
                title: "Skills",
                eyebrow: "Toolbox",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].darkSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    delay: 80,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$SkillsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        categories: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].skills
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "contact",
                title: "Contact",
                eyebrow: "Say hi",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    delay: 80,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Open to co-op and internship opportunities. Let's talk."
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$data$2f$resumeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resumeData"].email}`,
                                className: "primaryBtn",
                                children: "Say Hello"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PersonalWebsite$2f$src$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: !!selectedItem,
                onClose: ()=>setSelectedItem(null),
                children: renderModalContent(selectedItem)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PersonalWebsite/src/app/page.tsx",
                lineNumber: 195,
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

//# sourceMappingURL=Documents_GitHub_PersonalWebsite_src_8d269731._.js.map