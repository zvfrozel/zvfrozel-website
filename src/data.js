/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Abel George",
  last: "Mathew",
  fullName: "Abel George Mathew",
  tagline: "Olympiad Mathematician • AI & Theoretical CS Researcher",
  location: "Bangalore, Karnataka, India",
  email: "",
  bio: [
    "I'm a Grade 11 student at Creative School, Bangalore, with a deep interest in proof-based mathematics, Olympiad problem solving, and theoretical computer science. My academic journey has been shaped by curiosity, rigorous mathematical thinking, and a passion for solving complex problems.",
    "Beyond competitions, I actively explore AI-driven mathematical reasoning, mentorship, and research initiatives that combine human creativity with computational systems. Through teaching, outreach, and collaborative projects, I aim to make advanced mathematics more accessible while continuing to push the boundaries of mathematical exploration.",
    "My goal is to explore the frontier of mathematical reasoning and contribute to systems that combine rigorous human thought with emerging artificial intelligence — applying analytical thinking and computational innovation to problems at the intersection of mathematics, technology, and intelligent systems.",
  ],
  socials: {
    github: "https://github.com/zvfrozel",
    scholar: "",
    linkedin: "https://www.linkedin.com/in/abel-george-mathew/",
    codeforces: "",
    fide: "",
    imo: "https://www.imo-official.org/results/contestant/35510/",
    wespa: "https://wespa.xerafin.net/player.html?id=37382",
    twitter: "",
  },
  cv: "",
  photo: "/photo.jpg",
  aboutPhoto: "/aboutPhoto.jpg",

};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Research", to: "/work" },
      { label: "Projects", to: "/projects" },
       { label: "Articles", to: "/publications" },
    ],
  },
  
  { label: "Achievements", to: "/awards" },
  {
    label: "Leadership & Teaching",
   
      label: "Leadership & Teaching", to: "/volunteering",
    
  },
 
  { label: "Sports", to: "/sports" },
    
  
];

/* ---- Research & engagement (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "mercor-frontier-math",
    role: "Research & Advanced Engagement",
    org: "IMO–Frontier Math Project (Mercor)",
    logo: "/logos/mercor.jfif",
    location: "Remote",
    dates: "Nov 2025 – Feb 2026",
    meta: "Nov 2025 – Feb 2026 · Remote ·",
    badge: "Contract",
    desc: "Recruited to contribute to cutting-edge research in AI-driven mathematical problem solving, working alongside top Olympiad talent globally.",
    bullets: [
      "Creating novel Olympiad-style problems to train advanced mathematical AI",
      "Advancing problem design for machine learning in high-level mathematics",
      "Bridging human mathematical creativity with artificial intelligence systems",
    ],
    tags: ["AI for Mathematics", "Problem Design", "Olympiad Mathematics"],
    featured: true,
  },
  {
    slug: "sophie-fellowship",
    role: "Organiser & Instructor",
    org: "Sophie Fellowship",
    logo: "/logos/sophie-fellowship.avif",
    location: "India · Remote",
    dates: "2024 – Present",
    meta: "2024 – Present · India · Remote ·",
    badge: "Student-led",
    desc: "A student-led initiative focused on training Olympiad aspirants through structured mentorship and problem-solving sessions.",
    bullets: [
      "Mentored ~25 students annually",
      "Designed curriculum and lecture series",
      "Built a peer-driven learning ecosystem",
    ],
    tags: ["Teaching", "Mentorship", "Curriculum Design"],
    featured: true,
  },
  {
    slug: "inmotc-guest-lecturer",
    role: "Guest Lecturer",
    org: "Karnataka INMOTC 2025",
    logo: "/logos/inmo.avif",
    location: "Karnataka, India",
    dates: "2025",
    meta: "2025 · Karnataka, India ·",
    badge: "Invited",
    desc: "Delivered advanced sessions to top national-level Olympiad students at the Indian National Mathematical Olympiad Training Camp.",
    bullets: [
      "Taught advanced problem-solving techniques to INMO-qualified students",
      "Covered proof strategies across combinatorics and number theory",
    ],
    tags: ["Teaching", "Olympiad Mathematics"],
    featured: true,
  },
  {
    slug: "deva-matha-college",
    role: "Guest Speaker",
    org: "Deva Matha College, Kuravilangad",
    logo: "/logos/deva-matha.avif",
    location: "Kerala, India",
    dates: "2025",
    meta: "2025 · Kerala, India ·",
    badge: "Invited",
    desc: "Conducted lectures for combined batches of undergraduate and postgraduate mathematics students within the Department of Mathematics.",
    bullets: [
      "Engaged with higher-level academic audiences beyond school level",
      "Presented Olympiad approaches to university mathematics students",
    ],
    tags: ["Teaching", "Outreach"],
    featured: false,
  },
  {
    slug: "vedic-mathrix-2024",
    role: "Instructor",
    org: "Vedic Mathrix Camp 2024",
    logo: "/logos/vedic-mathrix.avif",
    location: "India",
    dates: "2024",
    meta: "2024 · India ·",
    badge: "Instructor",
    desc: "Facilitated a hands-on learning session as part of an initiative by the Raising a Mathematician Foundation, focusing on interactive and conceptual mathematical exploration.",
    bullets: [
      "Led interactive sessions on conceptual mathematical exploration",
      "Contributed to a foundation-run outreach programme",
    ],
    tags: ["Teaching", "Outreach"],
    featured: false,
  },

  {
    slug: "online-math-club",
    role: "Staff & Instructor",
    org: "Online Math Club",
    logo: "",
    location: "India · Remote",
    dates: "Present",
    meta: "Present · India · Remote ·",
    badge: "Staff",
    desc: "Staff member and instructor, leading live problem-solving sessions for students across India covering mathematical thinking and Olympiad preparation.",
    bullets: [
      "Leads live problem-solving sessions for students across India",
      "Covers mathematical thinking and Olympiad preparation",
    ],
    tags: ["Teaching", "Olympiad Mathematics"],
    featured: false,
  },
];

/* ---- Projects ---- */

export const PROJECTS = [
  {
    name: "Rubik's Cube Group Theory Algorithm",
    org: "Personal Project",
    meta: "Grade 8",
    desc: "Applied group theory to the Rubik's Cube, building a solving algorithm on the mathematical structure underlying the puzzle's permutations.",
    tags: ["Group Theory", "Algorithms", "Mathematics"],
    featured: true,
  },
  {
    name: "Vedic Multiplication Method",
    org: "Personal Project",
    meta: "Grade 7",
    desc: "Studied and implemented Vedic multiplication techniques, comparing their efficiency against conventional long multiplication.",
    tags: ["Mathematics", "Number Theory", "Algorithms"],
    featured: true,
  },
  {
    name: "Habit Fitness Website",
    org: "Personal Project",
    meta: "Grade 7",
    desc: "Built a habit and fitness tracking website using Django, covering both the backend models and the user-facing interface.",
    tags: ["Django", "Python", "Full-Stack Development"],
    featured: true,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🥇",
    title: "International Mathematical Olympiad (IMO) 2026",
    meta: "2026",
    detail: "Gold Medal. Global Rank 17, India Rank 1.",
    link: "https://www.imo-official.org/results/contestant/35510/",
    featured: true,
  },
  {
    icon: "🥈",
    title: "International Mathematical Olympiad (IMO) 2025",
    meta: "2025",
    detail: "Silver Medal, Global Rank 78, competing at Sunshine Coast, Australia.",
    link: "https://www.imo-official.org/results/contestant/35510/",
    featured: true,
  },
  {
    icon: "🥇",
    title: "Asian Pacific Mathematical Olympiad (APMO) 2026",
    meta: "2026",
    detail: "Gold Medal, ranking first in India.",
    link: "",
    featured: true,
  },
  {
    icon: "🥉",
    title: "Asian Pacific Mathematical Olympiad (APMO) 2025",
    meta: "2025",
    detail: "Bronze Medal, ranking in the top 5 in India.",
    link: "",
    featured: true,
  },
  {
    icon: "🏅",
    title: "Indian National Mathematical Olympiad (INMO)",
    meta: "2023 – 2026",
    detail: "All India Rank 1 in 2025; perfect score and top 4 nationwide in 2024; 4-time INMO awardee.",
    link: "",
    featured: true,
  },
  {
    icon: "💻",
    title: "Indian National Olympiad in Informatics (INOI) 2024",
    meta: "2024",
    detail: "Bronze Medal.",
    link: "",
    featured: true,
  },
  {
    icon: "🏆",
    title: "Cambridge Outstanding Learner Award",
    meta: "IGCSE",
    detail: "Awarded by Cambridge Assessment International Education for exceptional performance in IGCSE Combined Sciences.",
    link: "",
    featured: false,
  },
  {
    icon: "🔤",
    title: "World Youth Scrabble Championship",
    meta: "Malaysia, 2025",
    detail: "Represented the Indian youth scrabble team. WESPA rating 1613.",
    link: "https://wespa.xerafin.net/player.html?id=37382",
    featured: false,
  },
];
/* ---- Research interests ---- */

export const ARTICLES = [
  {
    title: "Olympiad Mathematics",
    outlet: "Advanced problem solving, proof strategies, combinatorics, inequalities, and number theory",
    link: "",
  },
  {
    title: "Artificial Intelligence for Mathematics",
    outlet: "Symbolic reasoning systems, theorem exploration, and AI-assisted mathematical discovery",
    link: "",
  },
  {
    title: "Theoretical Computer Science",
    outlet: "Algorithms, complexity, abstraction, and computational structures",
    link: "",
  },
  {
    title: "Mathematical Logic & Formal Systems",
    outlet: "Formal reasoning pathways, proof systems, and foundational mathematical structures",
    link: "",
  },
];

/* ---- Leadership, teaching & activities ---- */

export const VOLUNTEER = {
  stats: [
    { value: "25+", label: "Students Mentored Yearly" },
    { value: "3+", label: "Guest Lectures" },
    { value: "2+", label: "Years Teaching" },
  ],
  orgs: [
    {
      name: "Sophie Fellowship",
      role: "Organiser & Instructor · Since 2024",
      desc: "A student-led initiative training Olympiad aspirants through structured mentorship and problem-solving sessions. Mentored roughly 25 students a year, designed the curriculum and lecture series, and built a peer-driven learning ecosystem.",
    },
    {
      name: "Karnataka INMOTC 2025",
      role: "Guest Lecturer",
      desc: "Delivered advanced sessions to top national-level Olympiad students at the Indian National Mathematical Olympiad Training Camp.",
    },
    {
      name: "Deva Matha College, Kuravilangad",
      role: "Guest Speaker",
      desc: "Conducted lectures for combined undergraduate and postgraduate batches within the Department of Mathematics.",
    },
    {
      name: "Vedic Mathrix Camp 2024",
      role: "Instructor",
      desc: "Facilitated a hands-on session for the Raising a Mathematician Foundation, focused on interactive and conceptual mathematical exploration.",
    },

     {
      name: "OTIS — Olympiad Training for Individual Study",
      role: "Instructor",
      desc: "Instructor on Evan Chen's OTIS programme, training a cohort of five students through weekly sessions on advanced olympiad material.",
    },
    
  ],
};

/* ---- Sports & strategy ---- */

export const SPORTS = [
  {
    icon: "🏀",
    name: "Basketball",
    desc: "Served in leadership roles within school basketball initiatives, developing teamwork, communication, and on-court decision making.",
  },
  {
    icon: "🏸",
    name: "Badminton",
    desc: "Actively participated in competitive badminton, strengthening discipline, focus, and consistency through individual performance.",
  },
  {
    icon: "🏅",
    name: "Sports Leadership",
    desc: "Held positions including Sports Captain and Vice Captain, contributing toward team coordination, leadership, and student engagement.",
  },
  {
    icon: "♟️",
    name: "Chess",
    desc: "Exploring structured thinking, long-term planning, and tactical decision making through competitive chess.",
    link: "https://ratings.fide.com/profile/33332240",

  },
  {
    icon: "🔤",
    name: "Scrabble",
    desc: "Represented the Indian youth scrabble team at the World Youth Scrabble Championship, Malaysia 2025. WESPA rating 1613.",
    link: "https://wespa.xerafin.net/player.html?id=37382",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Programming",
    items: ["Python", "C++", "Django"],
  },
  {
    group: "Tools & Technologies",
    items: ["LaTeX", "HTML", "Git"],
  },
  {
    group: "Mathematics",
    items: ["Number Theory", "Combinatorics", "Inequalities", "Proof Strategies", "Mathematical Logic"],
  },
  {
    group: "Academic Interests",
    items: ["Pure Mathematics", "Theoretical Computer Science", "Algorithm Design & Complexity", "Formal Systems"],
  },
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Achievements", to: "/awards" },
  { label: "Research Interests", to: "/publications" },
  { label: "Leadership", to: "/volunteering" },
  { label: "About", to: "/about" },
];

export const FOOTER_PROFILES = [
  { label: "IMO Official", href: PROFILE.socials.imo },
  { label: "WESPA Official", href: PROFILE.socials.wespa },
   
];
