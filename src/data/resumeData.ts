export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  logo?: string;
  website?: string;
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
  techCheck?: string[];
  image?: string;
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
  image?: string;
}

export const resumeData = {
  name: "Rayyan Lodhi",
  title: "Computer Engineering Student",
  location: "Ontario, Canada",
  summary: "Second year Computer Engineering student at the University of Ottawa, Honour roll and Co-op. Over eight months’ experience in designing, developing, and testing software applications. Proficient in multiple programming languages and software development, including Agile and Scrum.",
  education: [
    {
      degree: "BAsc, Computer Engineering (Management and Entrepreneurship)",
      school: "University of Ottawa",
      location: "ON",
      period: "2024-2029",
      details: [
        "Honors and Co-op in Computer Engineering with Engineering Management an Entrepreneurship",
        "Expected graduation date: June, 2029"
      ]
    }
  ],
  experience: [
    {
      role: "Software Engineering Internship",
      company: "Retailogists",
      location: "Montreal, Quebec (Hybrid)",
      period: "Summer 2025",
      logo: "/vercel.svg",
      website: "https://retailogists.com",
      description: [
        "Built MVP of a web-app, now featured on Shopify’s App Home page. Specifically worked on Traffic Classifier (Avia) project using TypeScript/JavaScript, BigQuery, Cloud SQL, Docker, and GCP",
        "Prototyped computer vision (OpenCV, YOLOv8) pipelines in Python",
        "Contributed to the React Native companion app for real-time camera interaction"
      ]
    },
    {
      role: "Junior Systems Developer",
      company: "Marcus Evans",
      location: "Toronto, Ontario (Hybrid)",
      period: "Fall 2022",
      logo: "/next.svg",
      website: "https://www.marcusevans.com",
      description: [
        "Optimized company efficiency through internal tools using Python, JavaScript, and Microsoft SQL",
        "Built a secure Excel-upload interface for staff to submit attendee and event data, enabling automatic database processing and output generation",
        "Collaborated cross-functionally under NDA-protected systems to deploy and maintain reliable data-driven solutions for operation teams"
      ]
    },
    {
      role: "STEM Educator & Chess Educator",
      company: "Gems Learning Institute",
      location: "Oakville, Ontario",
      period: "Fall 2022-present",
      logo: "/vercel.svg",
      website: "https://www.gemslearninginstitute.com",
      description: [
        "Developed and delivered AI, robotics, and coding curricula (OpenCV, Python, Scratch) for Grades 1-8",
        "Coached a Junior FLL robotics team to top 3 teams in Ontario through applied sensor-based design integration",
        "Taught various chess openings, tactics and end game strategies"
      ]
    },
    {
      role: "Freelance Discord Bot Developer",
      company: "Fiverr",
      location: "Ontario",
      period: "Fall 2021-present",
      logo: "/next.svg",
      website: "https://www.fiverr.com",
      description: [
        "Created, host and manage bots serving 20k+ users",
        "Integrated PostgreSQL with python (asyncpg, psycopg2), API Design, AWS Lambda"
      ]
    }
  ],
  skills: [
    { category: "Programming Languages", skills: ["Java", "Python", "C++", "JavaScript", "SQL"] },
    { category: "Web Technologies", skills: ["HTML", "CSS", "React", "Node.js"] },
    { category: "AI Technologies", skills: ["OpenCV", "YOLOv8", "DeepFace", "InsightFace", "Computer Vision"] },
    { category: "Software Development", skills: ["Object-Oriented Programming", "Scrum methodologies", "Version Control (GitHub)"] },
    { category: "Databases", skills: ["PostgreSQL", "Microsoft SQL Server", "BigQuery", "SQLite"] },
    { category: "Tools & Frameworks", skills: ["Docker", "Click-up", "Google Cloud Platform", "Amazon Web Services", "Cloud Run"] },
    { category: "Operating Systems", skills: ["Windows", "Linux", "macOS"] },
    { category: "Others", skills: ["API Development", "Internal Tool development", "Continuous Integration/Continuous Deployment (CI/CD)"] }
  ],
  extracurriculars: [
    {
      title: "uORover",
      role: "Software/Electrical Engineer",
      location: "Ottawa, Ontario",
      period: "2025",
      image: "/placeholder-project.png",
      description: [
        "Implementing ROS2 motor control systems in Python, mapping controller inputs to robot actuators for uOttawa’s official Mars Rover team."
      ]
    },
    {
      title: "Kelpie Robotics",
      role: "Software Engineer",
      location: "Ottawa, Ontario",
      period: "2024-2025",
      image: "/placeholder-project.png",
      description: [
        "Developed essential telemetry systems for Robot IMU system using ROS2 (in Python)."
      ]
    },
    {
      title: "CEGSA",
      role: "Interim VP of Partnerships",
      location: "Ottawa, Ontario",
      period: "2025",
      image: "/placeholder-project.png",
      description: [
        "Helping Kick start the Computer Engineering Student Association by taking a part as the interim VP of partnerships"
      ]
    }
  ],
  leadership: [], // Deprecated, strictly using categories below
  highSchoolInitiatives: [
    {
      title: "The C-Squad",
      role: "Founder & CEO",
      location: "",
      period: "2018-Present",
      image: "/placeholder-project.png",
      description: ["Ran STEM & cancer fundraising events; partnered with SickKids, Professional Engineers of Ontario, and various community sponsors."]
    },
    {
      title: "PDSB Middle School Hackathon (AI Workshop)",
      role: "Lead Organizer",
      location: "",
      period: "03/24-05/24",
      image: "/placeholder-project.png",
      description: ["Directed AI curriculum, coordinated logistics for event."]
    },
    {
      title: "VEX Robotics (Port Credit SS)",
      role: "Lead Programmer",
      location: "Ontario",
      period: "09/23-04/24",
      image: "/placeholder-project.png",
      description: ["Led programming efforts for the VEX V5 system, allowing the team to rank Top 50 in Ontario."]
    },
    {
      title: "PDSB/YMCA",
      role: "Lead Organizer",
      location: "",
      period: "", // Not specified clearly in prompt, leaving empty or generic
      image: "/placeholder-project.png",
      description: ["Managed volunteers, contestants, pairings, event logistics, and more."]
    },
    {
      title: "Port Credit SS Chess Club",
      role: "President",
      location: "",
      period: "09/22-06/24",
      image: "/placeholder-project.png",
      description: ["Founded club, organized tournaments/weekly meets."]
    },
    {
      title: "SickKids Hospital Foundation",
      role: "Patient Ambassador",
      location: "Toronto, Ontario",
      period: "03/18-Present",
      image: "/placeholder-project.png",
      description: ["Spoke at major events: CP24, CTV, Globe & Mail, #Tech4SickKids."]
    },
    {
      title: "Make-A-Wish & Great Cycle Challenge",
      role: "Ambassador",
      location: "",
      period: "2022-Present",
      image: "/placeholder-project.png",
      description: ["Fundraised $5K+, biked annually, promoted causes via social media."]
    },
    {
      title: "Cancer Survivor Speaker & Relay for Life",
      role: "Exec",
      location: "",
      period: "02/23-Present",
      image: "/placeholder-project.png",
      description: ["Delivered motivational speeches to 1000+ attendees; managed event logistics."]
    }
  ],
  awards: [
    {
      title: "1st Place Community Service Award",
      organization: "PAQ Community Awards",
      year: "2023",
      image: "/placeholder-project.png",
      description: "Chosen for my excellence in serving the community, especially being recognized in the house of commons by local Mississauga MP Iqra Khalid"
    },
    {
      title: "Merit Award Bursary Program",
      organization: "Merit Award",
      year: "2023",
      image: "/placeholder-project.png",
      description: "Nominated for my excellent service to the community despite personal struggles"
    },
    {
      title: "Duke of Edinburgh – Silver Award",
      organization: "The Duke of Edinburgh Award",
      year: "2025",
      image: "/placeholder-project.png",
      description: "Helping Kick start the Computer Engineering Student Association by taking a part as the interim VP of partnerships"
    },
    {
      title: "Six Sigma White Belt",
      organization: "Six Sigma Certification",
      year: "2023",
      image: "/placeholder-project.png",
      description: "Certified in the fundamentals of Six Sigma methodology, focusing on process improvement, teamwork, and the DMAIC framework."
    },
    {
      title: "3rd Place Gems Chess CYCC Qualifier",
      organization: "Gems Learning Institute",
      year: "2023",
      image: "/placeholder-project.png",
      description: "Achieved 3rd place in a competitive chess tournament qualifying for the Canadian Youth Chess Championship, demonstrating strategic planning and problem-solving skills."
    },
    {
      title: "Standard First Aid",
      organization: "First-Aid",
      year: "2022",
      image: "/placeholder-project.png",
      description: "Trained in administering standard first aid"
    }
  ]
};
