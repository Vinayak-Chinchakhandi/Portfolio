// ============================================================
// CENTRALIZED PORTFOLIO DATA — Update this file to edit content
// ============================================================

export const personalInfo = {
  name: "Vinayak Chinchakhandi",
  alternateName: "Vinayak P C",
  aliases: ["Vinayak", "Vinayak P C", "Vinayak PC", "Vinayak Prakash Chinchakhandi"],
  fullName: "Vinayak Prakash Chinchakhandi",
  title: "Full Stack Developer & AI Engineer",
  website: "https://vinayak-p-c.vercel.app",
  tagline: "Building Intelligent Systems That Solve Real-World Problems",
  shortBio:
    "Information Science undergraduate passionate about engineering end-to-end AI applications, RAG systems, and production-ready full-stack platforms. I bridge intelligent backend systems with polished user experiences.",
  location: "Belagavi, India",
  email: "vinayakchinchakhandi165@gmail.com",
  phone: "7338311674",
  linkedin: "https://www.linkedin.com/in/vinayak-chinchakhandi/",
  github: "https://github.com/Vinayak-Chinchakhandi",
  kaggle: "https://www.kaggle.com/vinayakchinchakhandi",
  currentlyBuilding: "ElevAIte — AI-Powered Placement Preparation Platform",
  quote: "Learning, building, and improving with every project.",
};

export const education = [
  {
    id: 1,
    degree: "B.E. in Information Science and Engineering",
    institution: "KLS Gogte Institute of Technology",
    location: "Belagavi",
    period: "2023 – 2027",
    score: "CGPA: 9.27 / 10",
    type: "degree",
  },
  {
    id: 2,
    degree: "Pre University Education (Science)",
    institution: "Padmavati Science PU College",
    location: "Hosur Rabakavi",
    period: "2021 – 2023",
    score: "95.17%",
    type: "pre-university",
  },
  {
    id: 3,
    degree: "SSLC",
    institution: "C.K. Chinchali High School",
    location: "Mahalingapur",
    period: "2020 – 2021",
    score: "93.44%",
    type: "school",
  },
];

export const skills = {
  programming: {
    label: "Programming Languages",
    icon: "Code2",
    color: "#00f5ff",
    items: ["Python", "JavaScript", "C++", "Java", "SQL"],
  },
  frontend: {
    label: "Frontend",
    icon: "Layout",
    color: "#a855f7",
    items: ["React.js", "Vite", "HTML5", "CSS3", "Canvas API"],
  },
  backend: {
    label: "Backend & APIs",
    icon: "Server",
    color: "#06b6d4",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Socket.io"],
  },
  aiml: {
    label: "AI / ML",
    icon: "Brain",
    color: "#f59e0b",
    items: ["RAG Architecture", "LangChain", "FAISS", "Sentence Transformers", "Hugging Face", "Gemini API"],
  },
  databases: {
    label: "Databases",
    icon: "Database",
    color: "#10b981",
    items: ["PostgreSQL", "MySQL", "Firebase Firestore", "SQLite"],
  },
  tools: {
    label: "Tools & Platforms",
    icon: "Wrench",
    color: "#ec4899",
    items: ["Git", "GitHub", "Vercel", "Render", "Postman", "VS Code", "Kaggle"],
  },
  corecs: {
    label: "Core CS",
    icon: "Cpu",
    color: "#8b5cf6",
    items: ["Data Structures & Algorithms", "OOP", "Operating Systems", "DBMS", "Computer Networks"],
  },
};

export const projects = [
  {
    id: 1,
    name: "ResearchGPT",
    subtitle: "Multi-Document AI Research Platform",
    emoji: "📄",
    description:
      "A full-stack research intelligence platform that lets you upload multiple research PDFs and get source-aware AI answers with persistent workspaces.",
    problem:
      "Researchers struggle to synthesize insights across dozens of papers simultaneously — manually cross-referencing sources is slow and error-prone.",
    approach:
      "Built a project-isolated RAG architecture where each research workspace maintains its own vector database. Semantic retrieval surfaces the most relevant passages before AI synthesis.",
    result:
      "Enables source-attributed AI answers, literature review generation, and research gap identification — all within a persistent, multi-session workspace.",
    technologies: ["React.js", "Node.js", "FastAPI", "PostgreSQL", "FAISS", "Sentence Transformers", "Gemini API", "RAG"],
    github: "https://github.com/Vinayak-Chinchakhandi/Research-Paper-Analysis",
    live: null,
    period: "Apr 2026 – Present",
    featured: true,
    highlights: [
      "Project-isolated vector databases for multi-document analysis",
      "Semantic retrieval with FAISS and Sentence Transformers",
      "Source attribution pinpointing exact papers & pages",
      "Persistent chat sessions and contextual querying",
    ],
    category: "AI / Full Stack",
  },
  {
    id: 2,
    name: "Metro AI",
    subtitle: "AI-Powered Metro Ticketing & Analytics Platform",
    emoji: "🚇",
    description:
      "End-to-end AI-powered platform for metro management — from QR-based ticketing and demand forecasting to real-time fraud detection and operational analytics.",
    problem:
      "Metro systems face passenger congestion, ticket fraud, and poor route guidance — with no unified intelligent platform to address these simultaneously.",
    approach:
      "Engineered a full-stack platform integrating QR ticketing, ML-based demand forecasting (Random Forest), real-time fraud detection, and a smart journey engine with multi-line routing.",
    result:
      "Secured 2nd Place at the AI-Based Metro Ticketing Challenge (i-ACT 2026, MIT Manipal). Deployed ML services via FastAPI, supporting live analytics dashboards.",
    technologies: ["React.js", "Node.js", "FastAPI", "PostgreSQL", "SQLite", "Gemini API", "Machine Learning", "Random Forest"],
    github: "https://github.com/Vinayak-Chinchakhandi/Metro",
    live: null,
    period: "Mar 2026 – Jun 2026",
    featured: false,
    highlights: [
      "QR-based digital ticket generation & validation",
      "ML demand prediction — Random Forest models",
      "Real-time fraud detection pipeline",
      "Multi-line routing with interchange navigation",
    ],
    category: "AI / Full Stack",
    achievement: "🏆 2nd Place — i-ACT 2026, MIT Manipal",
  },
  {
    id: 3,
    name: "Moodify",
    subtitle: "Emotion-Driven Music Intelligence Platform",
    emoji: "🎵",
    description:
      "A public full-stack music recommendation platform that detects your mood and curates perfectly matched music with full audio/video streaming.",
    problem:
      "Music discovery apps rely on generic recommendations — they don't adapt to real-time emotional state or provide truly personalized curation.",
    approach:
      "Integrated Hugging Face Inference APIs for questionnaire-based mood analysis and emotion detection. Built a full persistence layer with Firebase for playlists, history, and favorites.",
    result:
      "Deployed publicly on Vercel + Render with Firebase Authentication, persistent audio/video playback, and real-time mood-driven music curation.",
    technologies: ["React.js", "Node.js", "Express.js", "Firebase", "Hugging Face APIs", "Vercel", "Render"],
    github: "https://github.com/Vinayak-Chinchakhandi/Moodify",
    live: null,
    period: "Nov 2025 – Dec 2025",
    featured: false,
    highlights: [
      "Questionnaire-based mood analysis via Hugging Face",
      "Emotion-driven personalized music recommendations",
      "Firebase Authentication with persistent playlists",
      "Full audio/video in-app streaming",
    ],
    category: "Full Stack / AI",
  },
  {
    id: 4,
    name: "Bengaluru Metro Dataset",
    subtitle: "Open-Source Geospatial Network Dataset",
    emoji: "🗺️",
    description:
      "Open-source Bengaluru Metro dataset published on Kaggle containing station metadata, GPS coordinates, and graph-ready network connectivity for routing and smart-city research.",
    problem:
      "While building Metro AI, no graph-ready Bengaluru Metro dataset existed — blocking routing algorithms, geospatial analysis, and demand forecasting research.",
    approach:
      "Engineered a geospatial dataset with Haversine-based distance calculations, station interchange relationships, and complete network connectivity under CC0 open-source license.",
    result:
      "Published on Kaggle with a 9.41/10 usability score, 267+ views, and 25+ downloads — used for smart-city, visualization, and demand forecasting applications.",
    technologies: ["Python", "Geospatial Analysis", "Graph Theory", "Kaggle", "Open Source"],
    github: "https://github.com/Vinayak-Chinchakhandi/Bengaluru-Metro-Network-Dataset",
    kaggle: "https://www.kaggle.com/datasets/vinayakchinchakhandi/bengaluru-metro-network-dataset",
    live: null,
    period: "Mar 2026",
    featured: false,
    highlights: [
      "9.41/10 usability score on Kaggle",
      "300+ views, 40+ downloads",
      "Haversine-based distance calculations",
      "Graph-ready network connectivity data",
    ],
    category: "Open Source / Data",
  },
  {
    id: 5,
    name: "Quick Quiz",
    subtitle: "Interactive Learning & Quiz Platform",
    emoji: "🧠",
    description:
      "An interactive quiz platform featuring category-based assessments, leaderboard rankings, and performance tracking for engaging learning experiences.",
    problem: "Standard study tools are passive — learners need active, competitive, and trackable assessments.",
    approach: "Built with React and JSONBin.io for persistent data. Features global leaderboards, user profiles, and instant performance feedback.",
    result:
      "A fully functional edtech platform with category-based quizzes, competitive leaderboards, and real-time performance insights.",
    technologies: ["React", "JSONBin.io", "JavaScript"],
    github: "https://github.com/Vinayak-Chinchakhandi/Quick-quiz",
    live: null,
    period: "Nov 2025",
    featured: false,
    highlights: [
      "Category-based quiz assessments",
      "Global leaderboard with real-time rankings",
      "User profiles with score history",
      "Instant evaluation and performance insights",
    ],
    category: "Frontend / EdTech",
  },
];

export const achievements = [
  {
    id: 1,
    title: "1st Place — Spot Ideathon",
    org: "MIT Manipal",
    icon: "Trophy",
    color: "#f59e0b",
    description: "First place at the Spot Ideathon competition.",
  },
  {
    id: 2,
    title: "2nd Place — AI Metro Ticketing Challenge",
    org: "i-ACT 2026, MIT Manipal",
    icon: "Medal",
    color: "#a855f7",
    description: "Second place for the Metro AI platform at i-ACT 2026.",
  },
  {
    id: 3,
    title: "Kaggle Dataset Published",
    org: "9.41/10 Usability Score",
    icon: "BarChart2",
    color: "#00f5ff",
    description: "Bengaluru Metro Network Dataset — 267+ views, 25+ downloads.",
  },
];

export const certifications = [
  {
    id: 1,
    name: "Fundamentals of Designing and Deploying Computer Networks",
    issuer: "ISOC (Internet Society)",
    icon: "Network",
    color: "#06b6d4",
  },
  {
    id: 2,
    name: "Introduction to Frontend Development",
    issuer: "Meta",
    icon: "Globe",
    color: "#0A66C2",
  },
];

export const currentlyBuilding = {
  name: "ElevAIte",
  description: "AI-Powered Placement Preparation Platform",
  features: [
    "Resume Analysis",
    "Placement Readiness Prediction",
    "AI Interview Preparation",
    "Skill Gap Analysis & Learning Paths",
  ],
  status: "In Progress",
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];
