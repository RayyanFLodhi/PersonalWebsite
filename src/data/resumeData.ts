// Single source of truth for the site content. Mirrors Rayyan's resume (Oct 2026).

export type Domain = 'ai' | 'embedded' | 'cloud' | 'data' | 'web' | 'people';

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
  domain: Domain;
  logo?: string;
  monogram: string; // fallback when no logo image exists
  website?: string;
  current?: boolean;
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
  domain: Domain;
  skills: string[];
}

export interface Project {
  code: string; // short label shown on the card header, e.g. PRJ-01
  title: string;
  short?: string; // compact label for the radar scope
  subtitle: string;
  period: string;
  description: string[];
  tags: string[];
  domain: Domain;
  image?: string;
  github?: string;
  website?: string;
  highlight?: string; // one-line result shown as a badge
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
  kind: 'award' | 'certification' | 'clearance';
  image?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const resumeData = {
  name: 'Rayyan Lodhi',
  firstName: 'Rayyan',
  tagline: 'Computer Engineering @ uOttawa',
  location: 'Ottawa, ON',
  email: 'rayyan.lodhi@uottawa.ca',
  phone: '647-654-4202',
  github: 'https://github.com/RayyanFLodhi',
  linkedin: 'https://www.linkedin.com/in/rayyan-lodhi/',
  site: 'https://rayyanfaisal.ca',
  resumePdf: '/RayyanLodhisResume.pdf',

  // Rotating "currently" line in the hero
  nowDoing: [
    'visualizing radar coverage for Counter-UAS sims',
    'writing ROS2 firmware for a Mars rover arm',
    'shipping computer-vision pipelines to the edge',
    'prototyping agentic AI tools for data teams',
    'teaching kids to build robots',
  ],

  intro: [
    "I'm a third-year Computer Engineering student at the University of Ottawa, minoring in Entrepreneurship and Engineering Management. I like problems where software has to meet the physical world: cameras on store ceilings, radar coverage over an airfield, a robotic arm that has to land on a target.",
    'Right now I am a Software Research Assistant with the Computational Analysis and Research Group at uOttawa, building Counter-UAS simulation and mission-planning tools. Before that I spent a summer at Statistics Canada prototyping an agentic AI migration assistant, and a summer at Retailogists prototyping a foot-traffic camera now used in 500+ stores.',
    'Outside of class I coach a FIRST LEGO League team, build the robotic arm on the uOttawa Mars Rover team, and speak at hospital fundraising events as a SickKids ambassador.',
  ],

  stats: [
    { value: '500+', label: 'retail stores running a camera I helped prototype' },
    { value: '8th', label: 'internationally at the Canadian International Rover Challenge' },
    { value: '1000+', label: 'attendees reached as a keynote speaker' },
    { value: '$5K+', label: 'raised for Make-A-Wish through community initiatives' },
  ] as Stat[],

  ticker: [
    'Counter-UAS simulation @ uOttawa CARG',
    '1st place · HackTheHill 2026',
    '8th @ CIRC · 1st @ Quebec Rover Challenge',
    'Featured on the Shopify App Home page',
    'Reliability Status clearance · Government of Canada',
    'FIRST LEGO League coach · Top 3 in Ontario',
    'Speaker featured by CP24, CTV and The Globe & Mail',
    'Statistics Canada · Retailogists · Marcus Evans',
  ],

  education: [
    {
      degree: 'BASc Computer Engineering & Engineering Management (Co-op)',
      school: 'University of Ottawa',
      location: 'Ottawa, ON',
      period: 'Sep 2024 – Jan 2029',
      details: [
        'Minor in Entrepreneurship and Engineering Management',
        'Coursework: Data Structures & Algorithms, Software Construction, Computing I & II, Discrete Math',
      ],
    },
    {
      degree: 'Sci-Tech & SHSM High School Diploma',
      school: 'Port Credit Secondary School',
      location: 'Mississauga, ON',
      period: '2020 – 2024',
      details: ['Honour Roll, Sci-Tech program', 'Specialist High Skills Major in Manufacturing Technology'],
    },
  ] as Education[],

  experience: [
    {
      role: 'Software Research Assistant',
      company: 'Computational Analysis and Research Group, uOttawa',
      location: 'Ottawa, ON (Hybrid)',
      period: 'Sep 2026 – Present',
      current: true,
      domain: 'embedded',
      monogram: 'CA',
      tags: ['Counter-UAS', '3D telemetry', 'Radar coverage', 'Mission planning'],
      description: [
        'Working on Counter-UAS simulations: visualizing 3D flight telemetry, radar coverage and camera fields of view.',
        'Built interactive sensor and mission-planning tools for UAV paths, ground cameras and radar placement.',
      ],
    },
    {
      role: 'Statistical Programmer · Software & Data Engineering',
      company: 'Statistics Canada',
      location: 'Toronto, ON',
      period: 'May 2026 – Aug 2026',
      domain: 'data',
      monogram: 'SC',
      website: 'https://www.statcan.gc.ca',
      tags: ['Agentic AI', 'R', 'SAS', 'Data pipelines'],
      description: [
        'Prototyped an agentic AI tool for code and migration support, increasing team efficiency by ~10%.',
        'Assisted a large-scale refactor of legacy SAS programs to R, translating data pipelines into maintainable scripts.',
        'Validated R outputs against SAS results by comparing transformed datasets, reports and edge cases.',
      ],
    },
    {
      role: 'Software Engineering Intern',
      company: 'Retailogists',
      location: 'Kitchener, ON',
      period: 'May 2025 – Aug 2025',
      domain: 'ai',
      monogram: 'RL',
      logo: '/logos/retailogists.png',
      website: 'https://retailogists.com',
      tags: ['TypeScript', 'GCP BigQuery', 'Cloud Run', 'OpenCV', 'YOLOv8', 'React Native'],
      description: [
        'Helped prototype AVIA, a foot-traffic camera now actively used by 500+ retail stores globally.',
        "Developed the MVP of a web app featured on Shopify's App Home page using TypeScript, GCP BigQuery and Cloud Run.",
        'Built APIs, data pipelines and a React Native companion app that talks to the camera over UDP.',
        'Prototyped a computer-vision pipeline (OpenCV, YOLOv8) for edge computing on Raspberry Pi.',
        'Configured device connectivity with DHCP/static IP addressing, UDP and network scanning.',
      ],
    },
    {
      role: 'Junior Systems Developer',
      company: 'Marcus Evans',
      location: 'Toronto, ON',
      period: 'Oct 2022 – Jan 2023',
      domain: 'web',
      monogram: 'ME',
      logo: '/logos/marcus-evans.png',
      website: 'https://www.marcusevans.com',
      tags: ['Python', 'JavaScript', 'Microsoft SQL Server'],
      description: [
        'Built internal tools in Python, JavaScript and Microsoft SQL Server that improved Accounting and IT department workflows by ~10%.',
        'Built a secure Excel upload interface for automated database ingestion and reporting.',
      ],
    },
    {
      role: 'STEM Educator',
      company: 'GEMS Learning Institute',
      location: 'Oakville, ON',
      period: 'Sep 2022 – Present',
      current: true,
      domain: 'people',
      monogram: 'GL',
      logo: '/logos/gems.png',
      website: 'https://www.gemslearninginstitute.com',
      tags: ['Curriculum design', 'Robotics', 'OpenCV', 'Python', 'Scratch'],
      description: [
        'Designed and delivered AI, robotics and coding curricula (OpenCV, Python, Scratch) for Grades 1–8.',
        'Coached a FIRST LEGO League team to Top 3 in Ontario through sensor integration and iterative design.',
        'Communicated with parents about student progress and improvement plans.',
      ],
    },
    {
      role: 'Founder & CEO',
      company: 'C-Squad',
      location: 'Canada',
      period: 'Jun 2018 – Present',
      current: true,
      domain: 'people',
      monogram: 'C²',
      tags: ['Community', 'Fundraising', 'STEM outreach'],
      description: [
        'Partnered with Professional Engineers Ontario and GEMS Learning Institute to deliver STEM curricula.',
        'Directed food drives and fundraising campaigns supporting underprivileged communities and families in need.',
        'Coordinated volunteers, sponsors and community partners to scale outreach.',
      ],
    },
  ] as Experience[],

  projects: [
    {
      code: 'PRJ-01',
      title: 'Vision-Based Concrete Crack Growth Monitoring',
      short: 'Crack monitoring',
      subtitle: 'Deep-learning segmentation with structural validation',
      period: 'Feb 2026',
      domain: 'ai',
      github: 'https://github.com/RayyanFLodhi/vision-based-crack-growth-monitoring',
      highlight: 'Spearman ρ ≈ 0.72 across 80+ loading frames',
      tags: ['PyTorch', 'FPN · ResNeXt50', 'OpenCV', 'Skeletonization', 'SciPy'],
      description: [
        'Integrated a pretrained FPN (ResNeXt50) crack segmentation model (crackenpy) using PyTorch.',
        'Built a post-processing pipeline (thresholding, morphology, skeletonization) to compute pixel crack length.',
        'Automated a threshold sweep (0.60–0.80) with Spearman/Pearson validation against LVDT displacement.',
        'Achieved consistent crack-growth tracking with Spearman correlation ≈ 0.72 across 80+ frames.',
      ],
    },
    {
      code: 'PRJ-02',
      title: 'SentinelRT',
      subtitle: 'Embedded AI surveillance rover · uOttaHack 8',
      period: 'Jan 2026',
      domain: 'embedded',
      github: 'https://github.com/Aashir5678/Uottahack-8/tree/main',
      highlight: 'QNX RTOS 8.0 on Raspberry Pi 5',
      tags: ['QNX RTOS', 'Raspberry Pi 5', 'OpenCV', 'TensorFlow Lite', 'TCP/IP'],
      description: [
        'Built a real-time surveillance rover running QNX RTOS 8.0 on a Raspberry Pi 5 with a live web dashboard.',
        'Implemented TCP/IP socket communication for command, telemetry and video streaming.',
        'Developed an on-device OpenCV + TensorFlow Lite object-detection pipeline with backend APIs.',
      ],
    },
    {
      code: 'PRJ-03',
      title: 'TrackGuard',
      subtitle: 'Rail signal diagnostics simulator',
      period: 'Mar 2026',
      domain: 'embedded',
      github: 'https://github.com/RayyanFLodhi/trackguard-rail-signal-diagnostics',
      tags: ['Qt C++', 'Python Flask', 'TCP/IP', 'Perl', 'Excel VBA'],
      description: [
        'Built a rail-signal diagnostics simulator with a Qt C++ control center and Python Flask backend over TCP/IP.',
        'Simulated infrastructure components including railway signals, track sensors and switches.',
        'Designed system-state APIs and real-time diagnostic monitoring tools.',
        'Developed Perl log-processing tools and Excel VBA automation for exported diagnostic data.',
      ],
    },
    {
      code: 'PRJ-04',
      title: 'EMS Heart-Rate Monitor',
      short: 'EMS monitor',
      subtitle: '1st place · HackTheHill 2026',
      period: '2026',
      domain: 'embedded',
      highlight: '1st place · HackTheHill',
      tags: ['Embedded', 'Sensors', 'Hackathon'],
      description: ['Built a device for EMS services to monitor patient heart rate; won first place at HackTheHill in Ottawa.'],
    },
    {
      code: 'PRJ-05',
      title: 'FPGA Arithmetic Logic Unit',
      short: 'FPGA ALU',
      subtitle: 'Digital logic lab · Quartus',
      period: 'Oct 2025',
      domain: 'embedded',
      tags: ['Quartus', 'FPGA', 'Digital logic'],
      description: [
        'Designed a hierarchical 4-bit ALU supporting 16 arithmetic, logic and shift operations.',
        'Implemented carry, overflow, zero and sign status flags using combinational logic.',
        'Verified operation through Quartus simulation, waveform analysis and FPGA hardware testing.',
      ],
    },
    {
      code: 'PRJ-06',
      title: 'LockSmith.AI',
      subtitle: 'Password strength analyzer · uOttaHack 7',
      period: 'Jan 2024',
      domain: 'data',
      image: '/projects/locksmith-ai.png',
      website: 'https://locksmith-ai.onrender.com/',
      tags: ['Python', 'Flask', 'Random Forest', 'SQLite', 'Groq API'],
      description: [
        'Built a password strength detector to help users understand and improve their password security.',
        'Trained a Random Forest model on 1M+ records ingested into SQLite.',
        'Flask backend with Groq API for secondary ratings, stronger suggestions and a data-breach check.',
      ],
    },
  ] as Project[],

  leadership: [
    {
      code: 'LEAD-01',
      title: 'uOttawa Mars Rover Team',
      short: 'Mars rover arm',
      subtitle: 'Robotic arm / embedded sub-team',
      period: 'Sep 2024 – Present',
      domain: 'embedded',
      image: '/extracurriculurs/uorover.png',
      highlight: '8th @ CIRC · 1st @ Quebec Rover Challenge',
      tags: ['ROS2', 'Python', 'Arduino / C++', 'Inverse kinematics'],
      description: [
        'Placed 8th internationally at the Canadian International Rover Challenge and 1st at the Quebec Rover Challenge.',
        'Developed ROS2-based motor control and telemetry systems for rover actuators and IMU.',
        'Wrote Arduino/C++ firmware for the robotic-arm actuators using inverse kinematics.',
      ],
    },
    {
      code: 'LEAD-02',
      title: 'Google Developer Group · uOttawa',
      short: 'GDG uOttawa',
      subtitle: 'President',
      period: 'May 2026 – Present',
      domain: 'people',
      tags: ['Community', 'Events', 'Partnerships'],
      description: ['Leading the campus Google Developer Group chapter: coordinating with companies and organizations to run events and grow the community.'],
    },
    {
      code: 'LEAD-03',
      title: 'Computer Engineering Student Council',
      subtitle: 'VP of Sponsorships',
      period: 'May 2026 – Present',
      domain: 'people',
      tags: ['Sponsorships', 'Outreach'],
      description: ['Coordinated with companies and organizations to run events and increase the presence of the CEGSC.'],
    },
    {
      code: 'LEAD-04',
      title: 'uOttaHack',
      subtitle: 'Sponsorships team',
      period: 'May 2026 – Present',
      domain: 'people',
      tags: ['Sponsorships', 'Hackathon'],
      description: ['Organized meetings and coordinated with brands to continue sponsoring uOttaHack, the largest hackathon in Ottawa.'],
    },
    {
      code: 'LEAD-05',
      title: 'Kelpie Robotics',
      subtitle: 'Embedded / telemetry',
      period: '2024 – 2025',
      domain: 'embedded',
      tags: ['ROS2', 'IMU', 'Telemetry'],
      description: ['Developed telemetry systems for the robot IMU using ROS2 (Python).'],
    },
    {
      code: 'LEAD-06',
      title: 'SickKids, Make-A-Wish & Relay For Life',
      subtitle: 'Ambassador, speaker & executive',
      period: 'Mar 2018 – Present',
      domain: 'people',
      image: '/extracurriculurs/sickKids.png',
      highlight: 'Featured by CP24, CTV and The Globe & Mail',
      tags: ['Public speaking', 'Fundraising', 'Logistics'],
      description: [
        'Ambassador for SickKids Hospital; spoke at key events featured by CP24, CTV and The Globe & Mail.',
        'Delivered keynote speeches to 1000+ attendees and supported logistics for large-scale Relay For Life events.',
        'Raised $5,000+ through Make-A-Wish community-led initiatives.',
        'Notable speeches: SVP Tournament of Hope, Avaal Technologies $1M donation, SickKids Professional Advisory, SickKids Imaginarium, Relay For Life conferences.',
      ],
    },
  ] as Project[],

  // Collapsed by default: earlier high-school initiatives
  earlier: [
    {
      code: 'HS-01',
      title: 'VEX Robotics · Port Credit SS',
      subtitle: 'Lead programmer',
      period: '2023 – 2024',
      domain: 'embedded',
      image: '/extracurriculurs/vex.png',
      tags: ['VEX V5', 'C++'],
      description: ['Led programming for the VEX V5 system, taking the team to the Top 50 in Ontario.'],
    },
    {
      code: 'HS-02',
      title: 'PDSB Middle School Hackathon',
      subtitle: 'Lead organizer · AI workshop',
      period: '2024',
      domain: 'people',
      tags: ['Curriculum', 'Logistics'],
      description: ['Directed the AI curriculum and coordinated logistics for the event.'],
    },
    {
      code: 'HS-03',
      title: 'PDSB / YMCA Chess Tournament',
      subtitle: 'Lead organizer',
      period: '2023',
      domain: 'people',
      image: '/extracurriculurs/pdsbTournament.png',
      tags: ['Events'],
      description: ['Managed volunteers, contestants, pairings and event logistics.'],
    },
    {
      code: 'HS-04',
      title: 'Port Credit SS Chess Club',
      subtitle: 'Founder & president',
      period: '2022 – 2024',
      domain: 'people',
      image: '/extracurriculurs/pcssChess.png',
      tags: ['Chess', 'Community'],
      description: ['Founded the club and organized tournaments and weekly meets.'],
    },
  ] as Project[],

  awards: [
    {
      title: 'Reliability Status security clearance',
      organization: 'Government of Canada',
      year: 'Current',
      kind: 'clearance',
      description: 'Currently hold Reliability Status security clearance with the Government of Canada.',
    },
    {
      title: '1st Place · HackTheHill',
      organization: 'Ottawa, ON',
      year: '2026',
      kind: 'award',
      description: 'Built a device for EMS services to monitor patient heart rate.',
    },
    {
      title: '1st Place Community Service Award',
      organization: 'PAQ Community Awards',
      year: '2023',
      kind: 'award',
      description: 'Recognized in the House of Commons for community impact and significant contribution to the community.',
    },
    {
      title: 'Silver Award',
      organization: 'The Duke of Edinburgh Award',
      year: '2025',
      kind: 'award',
      description: 'Completed the service, skills and physical recreation components.',
    },
    {
      title: 'Merit Award Program',
      organization: 'Mississauga, ON',
      year: '2023',
      kind: 'award',
      description: 'Rewarded for excellence in community leadership.',
    },
    {
      title: '3rd Place · CYCC Qualifier',
      organization: 'Canadian Youth Chess Championship, Ontario',
      year: '2023',
      kind: 'award',
      image: '/awards/u18Win.png',
      description: 'Placed 3rd in the Ontario qualifier for the Canadian Youth Chess Championship.',
    },
    {
      title: 'Six Sigma White Belt',
      organization: 'Six Sigma Certification',
      year: '2023',
      kind: 'certification',
      description: 'Fundamentals of Six Sigma methodology, process improvement and the DMAIC framework.',
    },
    {
      title: 'Standard First Aid',
      organization: 'First Aid certification',
      year: '2022',
      kind: 'certification',
      description: 'Trained in administering standard first aid.',
    },
  ] as Award[],

  skills: [
    { category: 'Languages', domain: 'web', skills: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'TypeScript', 'R', 'SAS'] },
    { category: 'AI / Machine Learning', domain: 'ai', skills: ['PyTorch', 'OpenCV', 'YOLOv8', 'Agentic AI', 'RAG', 'Azure OpenAI', 'LM Studio'] },
    { category: 'Software & Data', domain: 'data', skills: ['Flask', 'REST APIs', 'Pandas', 'NumPy', 'Data pipelines', 'SQLAlchemy'] },
    { category: 'Databases', domain: 'data', skills: ['PostgreSQL', 'Microsoft SQL Server', 'SQLite', 'MySQL', 'BigQuery'] },
    { category: 'Cloud', domain: 'cloud', skills: ['AWS Lambda', 'Amazon RDS', 'GCP BigQuery', 'GCP Cloud Run', 'Azure RBAC'] },
    { category: 'Embedded & Robotics', domain: 'embedded', skills: ['ROS2', 'Arduino', 'QNX RTOS', 'Raspberry Pi', 'FPGA / Quartus', 'TCP/IP · UDP'] },
    { category: 'Tooling', domain: 'people', skills: ['GitHub', 'Docker', 'CI/CD', 'Linux', 'Cursor', 'Claude Code', 'Excel'] },
  ] as SkillCategory[],
};

export type ResumeData = typeof resumeData;
