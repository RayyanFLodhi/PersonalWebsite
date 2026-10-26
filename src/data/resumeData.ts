export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  /** One punchy, quantified outcome shown as a pill on the card (e.g. "500+ stores worldwide"). */
  highlight?: string;
  logo?: string;
  website?: string;
  /** Offer accepted, role not started yet (rendered as an "Incoming" pill instead of "Current"). */
  upcoming?: boolean;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  highlight?: string;
  techCheck?: string[];
  image?: string;
  website?: string;
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
  image?: string;
}

/** One stop on the scroll-driven Journey section. `scene` picks the illustrated backdrop. */
export interface JourneyChapter {
  scene: 'mars' | 'orbit' | 'sky' | 'office';
  kicker: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
}

export const resumeData = {
  name: "Rayyan Lodhi",
  title: "Computer Engineering & Management at uOttawa",
  location: "Ottawa, Ontario, Canada",
  email: "rayyan.lodhi@uottawa.ca",
  tagline: "I build systems where software meets hardware.",
  summary:
    "Third-year Computer Engineering student with 1+ year of industry experience across software & data engineering, embedded systems and AI/ML. Shipped a Shopify-featured product at Retailogists, modernised national data pipelines at Statistics Canada, and now build counter-UAS simulation tools for uOttawa research.",
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
      cta: { label: "Meet the team", href: "#leadership" }
    },
    {
      scene: "orbit",
      kicker: "02 · Earth orbit",
      title: "Next stop: GEO and LEO",
      body: "Incoming Systems Engineering Intern at Telesat for Winter 2027, working on geostationary and low-Earth-orbit satellite systems.",
      cta: { label: "See experience", href: "#experience" }
    },
    {
      scene: "sky",
      kicker: "03 · Low altitude",
      title: "Counter-UAS research",
      body: "Simulating drone flight paths, radar coverage and camera fields of view so researchers can plan where sensors go before anything is built.",
      cta: { label: "The research", href: "#experience" }
    },
    {
      scene: "office",
      kicker: "04 · Ground floor",
      title: "Shipping real software",
      body: "National data pipelines at Statistics Canada, a camera platform running in 500+ retail stores with Retailogists, and bots serving 20k+ users.",
      cta: { label: "Browse projects", href: "#projects" }
    }
  ] as JourneyChapter[],
  skills: [
    { category: "Languages", skills: ["Python", "TypeScript", "JavaScript", "C", "C++", "Java", "R", "SAS", "SQL"] },
    { category: "AI / Machine Learning", skills: ["PyTorch", "OpenCV", "YOLOv8", "Agentic AI", "RAG", "Azure OpenAI", "TensorFlow Lite", "LM Studio"] },
    { category: "Software & Data", skills: ["REST APIs", "Flask", "React / React Native", "Pandas", "NumPy", "Data Pipelines", "SQLAlchemy"] },
    { category: "Databases", skills: ["PostgreSQL", "Microsoft SQL Server", "BigQuery", "MySQL", "SQLite"] },
    { category: "Cloud", skills: ["AWS Lambda", "Amazon RDS", "GCP BigQuery", "GCP Cloud Run", "Azure RBAC"] },
    { category: "Embedded & Hardware", skills: ["ROS2", "Raspberry Pi", "Arduino / C++ firmware", "QNX RTOS", "FPGA (Quartus)", "TCP/IP & UDP"] },
    { category: "Tools & Practices", skills: ["Git / GitHub", "Docker", "CI/CD", "Linux", "Claude Code", "Cursor", "Excel / VBA"] }
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
      techCheck: ["PyTorch", "ResNeXt50 FPN", "OpenCV", "NumPy", "Computer Vision"]
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
      techCheck: ["QNX RTOS", "Raspberry Pi 5", "OpenCV", "TensorFlow Lite", "TCP/IP", "Python"]
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
      techCheck: ["Python", "Flask", "Machine Learning", "Random Forest", "Groq API", "Cybersecurity"]
    }
  ],
  leadership: [], // Deprecated, strictly using categories below
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
      description: ["Delivered keynote speeches to 1000+ attendees and supported logistics for large-scale Relay For Life events"]
    },
    {
      title: "Make-A-Wish & Great Cycle Challenge",
      role: "Ambassador",
      location: "Ontario",
      period: "2022 – Present",
      image: "/placeholder-project.png",
      highlight: "$5,000+ raised",
      description: ["Raised $5,000+ through community-led initiatives; cycle annually and promote the cause via social media"]
    },
    {
      title: "PDSB Middle School Hackathon (AI Workshop)",
      role: "Lead Organizer",
      location: "Peel Region, ON",
      period: "March – May 2024",
      image: "/placeholder-project.png",
      description: ["Directed the AI curriculum and coordinated event logistics for the board-wide hackathon"]
    },
    {
      title: "VEX Robotics (Port Credit SS)",
      role: "Lead Programmer",
      location: "Mississauga, ON",
      period: "Sept 2023 – April 2024",
      image: "/extracurriculurs/vex.png",
      highlight: "Top 50 in Ontario",
      description: ["Led programming for the VEX V5 system, taking the team to Top 50 in Ontario"]
    },
    {
      title: "PDSB / YMCA Chess Tournament",
      role: "Lead Organizer",
      location: "Mississauga, ON",
      period: "2023",
      image: "/extracurriculurs/pdsbTournament.png",
      description: ["Managed volunteers, contestants, pairings and event logistics"]
    },
    {
      title: "Port Credit SS Chess Club",
      role: "Founder & President",
      location: "Mississauga, ON",
      period: "Sept 2022 – June 2024",
      image: "/extracurriculurs/pcssChess.png",
      description: ["Founded the club and organized tournaments and weekly meets"]
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
