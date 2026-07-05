// scripts/seed.ts
import { db } from "../db"
import { users, portfolioSettings, skills, projects, projectImages } from "../db/schema"
import { eq } from "drizzle-orm"
import bcrypt from "bcryptjs"

async function skillExists(name: string) {
  const result = await db.select().from(skills).where(eq(skills.name, name))
  return result.length > 0
}

async function projectExists(slug: string) {
  const result = await db.select().from(projects).where(eq(projects.slug, slug))
  return result.length > 0
}

async function seed() {
  console.log("🌱 Starting seed...")

  try {
    // 1. Get existing admin user
    console.log("📝 Finding admin user...")
    const [user] = await db.select().from(users).where(eq(users.email, "sumayearahman7@gmail.com"))
    
    if (!user) {
      console.error("❌ Admin user not found!")
      process.exit(1)
    }
    console.log("✅ Found admin user:", user.id)

    // 2. Check portfolio settings
    console.log("📝 Checking portfolio settings...")
    const existingSettings = await db.select().from(portfolioSettings).then(res => res[0])
    
    if (!existingSettings) {
      await db.insert(portfolioSettings).values({
        heroTitle: "Sumayea Rahman",
        heroSubtitle: "Full Stack Developer + MBA (Finance) | FinTech & AI Integration",
        resumeUrl: "/resume.pdf",
        github: "https://github.com/Sumayea104",
        linkedin: "https://www.linkedin.com/in/sumayea-rahman",
        twitter: "https://x.com/RahmanSuma22098",
        email: "sumayearahman7@gmail.com",
        phone: "+880 1403224341",
        location: "Dhaka, Bangladesh",
      })
      console.log("✅ Portfolio settings created")
    } else {
      console.log("✅ Portfolio settings already exist")
    }

    // 3. ADD NEW SKILLS (Only if they don't exist)
    console.log("📝 Adding new skills...")
    
    const allSkills = [
      // FRONTEND
      { name: "JavaScript", icon: "SiJavascript", category: "FRONTEND" as const, proficiency: 90 },
      { name: "TypeScript", icon: "SiTypescript", category: "FRONTEND" as const, proficiency: 88 },
      { name: "React", icon: "SiReact", category: "FRONTEND" as const, proficiency: 85 },
      { name: "Redux", icon: "SiRedux", category: "FRONTEND" as const, proficiency: 80 },
      { name: "Next.js", icon: "SiNextdotjs", category: "FRONTEND" as const, proficiency: 92 },
      { name: "Astro", icon: "SiAstro", category: "FRONTEND" as const, proficiency: 75 },
      { name: "HTML5", icon: "SiHtml5", category: "FRONTEND" as const, proficiency: 95 },
      { name: "CSS3", icon: "SiCss3", category: "FRONTEND" as const, proficiency: 92 },
      // BACKEND
      { name: "Python", icon: "SiPython", category: "BACKEND" as const, proficiency: 82 },
      { name: "Node.js", icon: "SiNodedotjs", category: "BACKEND" as const, proficiency: 85 },
      { name: "Express.js", icon: "SiExpress", category: "BACKEND" as const, proficiency: 80 },
      { name: "Prisma", icon: "SiPrisma", category: "BACKEND" as const, proficiency: 85 },
      { name: "Flask", icon: "SiFlask", category: "BACKEND" as const, proficiency: 70 },
      // DATABASE
      { name: "PostgreSQL", icon: "SiPostgresql", category: "DATABASE" as const, proficiency: 80 },
      { name: "MongoDB", icon: "SiMongodb", category: "DATABASE" as const, proficiency: 75 },
      { name: "Supabase", icon: "SiSupabase", category: "DATABASE" as const, proficiency: 70 },
      { name: "Neon", icon: "SiNeon", category: "DATABASE" as const, proficiency: 75 },
      // DEVOPS
      { name: "Docker", icon: "SiDocker", category: "DEVOPS" as const, proficiency: 72 },
      { name: "Nginx", icon: "SiNginx", category: "DEVOPS" as const, proficiency: 65 },
      { name: "AWS", icon: "SiAmazonaws", category: "DEVOPS" as const, proficiency: 60 },
      { name: "Linux", icon: "SiLinux", category: "DEVOPS" as const, proficiency: 68 },
      // AI & ML
      { name: "LangChain", icon: "SiLangchain", category: "AI" as const, proficiency: 60 },
      { name: "LangGraph", icon: "SiLangchain", category: "AI" as const, proficiency: 55 },
      { name: "OpenAI", icon: "SiOpenai", category: "AI" as const, proficiency: 65 },
      { name: "Mistral AI", icon: "SiMistral", category: "AI" as const, proficiency: 55 },
      { name: "Gemini", icon: "SiGooglebard", category: "AI" as const, proficiency: 55 },
      { name: "pgvector", icon: "SiPostgresql", category: "AI" as const, proficiency: 50 },
      { name: "RAG", icon: "SiRag", category: "AI" as const, proficiency: 50 },
      { name: "n8n", icon: "SiN8n", category: "AI" as const, proficiency: 45 },
      { name: "scikit-learn", icon: "SiScikitlearn", category: "AI" as const, proficiency: 55 },
      { name: "TensorFlow", icon: "SiTensorflow", category: "AI" as const, proficiency: 45 },
      // UI LIBRARIES
      { name: "Tailwind CSS", icon: "SiTailwindcss", category: "UI_LIBRARIES" as const, proficiency: 95 },
      { name: "shadcn/ui", icon: "SiShadcnui", category: "UI_LIBRARIES" as const, proficiency: 90 },
      { name: "daisyUI", icon: "SiDaisyui", category: "UI_LIBRARIES" as const, proficiency: 85 },
      { name: "Bootstrap", icon: "SiBootstrap", category: "UI_LIBRARIES" as const, proficiency: 80 },
      { name: "Framer Motion", icon: "SiFramer", category: "UI_LIBRARIES" as const, proficiency: 82 },
      // DEPLOYMENT
      { name: "Vercel", icon: "SiVercel", category: "DEPLOYMENT" as const, proficiency: 92 },
      { name: "Netlify", icon: "SiNetlify", category: "DEPLOYMENT" as const, proficiency: 85 },
      { name: "Render", icon: "SiRender", category: "DEPLOYMENT" as const, proficiency: 80 },
      { name: "Railway", icon: "SiRailway", category: "DEPLOYMENT" as const, proficiency: 75 },
      { name: "GitHub", icon: "SiGithub", category: "DEPLOYMENT" as const, proficiency: 90 },
      { name: "VSCode", icon: "SiVisualstudiocode", category: "DEPLOYMENT" as const, proficiency: 95 },
      { name: "Git", icon: "SiGit", category: "DEPLOYMENT" as const, proficiency: 88 },
    ]

    let skillsAdded = 0
    for (const skill of allSkills) {
      const exists = await skillExists(skill.name)
      if (!exists) {
        await db.insert(skills).values(skill)
        skillsAdded++
      }
    }
    console.log(`✅ ${skillsAdded} new skills added (${allSkills.length - skillsAdded} already existed)`)

    // 4. ADD NEW PROJECTS (Only if they don't exist)
    console.log("📝 Adding new projects...")

    const allProjects = [
      // === EXISTING PROJECTS (will skip) ===
      {
        title: "Agentic Finance Beast",
        slug: "agentic-finance-beast",
        description: "Multi-agent FinTech system with RAG pipeline, sentiment analysis, and portfolio agents",
        fullDescription: "Built a production-ready multi-agent FinTech system using LangGraph, Mistral AI, and Gemini API. Features RAG pipeline with Supabase (pgvector), sentiment analysis, and portfolio agents.",
        thumbnail: "/images/projects/agentic-finance-beast.jpg",
        techStack: ["Python", "LangGraph", "Mistral AI", "Gemini API", "RAG", "Supabase", "pgvector"],
        liveUrl: "https://github.com/Sumayea104/agentic-finance-beast",
        githubUrl: "https://github.com/Sumayea104/agentic-finance-beast",
        challenges: "Integrating multiple AI services (Mistral, Gemini) with LangGraph, implementing RAG pipeline with pgvector.",
        improvements: "Add real-time market data integration, implement more sophisticated portfolio optimization algorithms.",
        demoVideo: "",
        status: "IN_PROGRESS" as const,
        featured: true,
        order: 1,
        published: true,
        userId: user.id,
      },
      {
        title: "Swiftcart E-commerce",
        slug: "swiftcart-e-commerce",
        description: "Dynamic product catalog with persistent cart using LocalStorage",
        fullDescription: "Swiftcart E-commerce – Dynamic product catalog + persistent cart with LocalStorage. Clean, responsive UI with seamless shopping experience.",
        thumbnail: "/images/projects/swiftcart.jpg",
        techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        liveUrl: "https://github.com/Sumayea104/Swiftcart-E-commerce",
        githubUrl: "https://github.com/Sumayea104/Swiftcart-E-commerce",
        challenges: "Implementing persistent cart state with LocalStorage while maintaining performance across browser tabs.",
        improvements: "Add user authentication, payment gateway integration, and server-side cart persistence.",
        demoVideo: "",
        status: "COMPLETED" as const,
        featured: true,
        order: 2,
        published: true,
        userId: user.id,
      },
      {
        title: "Football Ticket Booking System",
        slug: "football-ticket-booking-system",
        description: "Database design and SQL queries for ticket booking system with 3 tables",
        fullDescription: "Database design and SQL queries for a Football Ticket Booking System. Includes 3 tables (Users, Matches, Bookings), 7 SQL queries, and ERD.",
        thumbnail: "/images/projects/football-ticket.jpg",
        techStack: ["SQL", "Database Design", "ERD"],
        liveUrl: "https://github.com/Sumayea104/football-ticket-booking-system-dbms",
        githubUrl: "https://github.com/Sumayea104/football-ticket-booking-system-dbms",
        challenges: "Designing normalized database schema for ticket booking, handling complex join queries.",
        improvements: "Add seat selection feature, implement real-time availability tracking, build frontend UI.",
        demoVideo: "",
        status: "COMPLETED" as const,
        featured: false,
        order: 7,
        published: true,
        userId: user.id,
      },
      {
        title: "AI Universe",
        slug: "ai-universe",
        description: "Interactive AI-powered web application",
        fullDescription: "AI Universe – A web application showcasing AI capabilities and interactive features built with modern JavaScript.",
        thumbnail: "/images/projects/ai-universe.jpg",
        techStack: ["JavaScript", "HTML", "CSS", "AI APIs"],
        liveUrl: "https://github.com/Sumayea104/AI-Universe",
        githubUrl: "https://github.com/Sumayea104/AI-Universe",
        challenges: "Integrating multiple AI APIs and managing async operations effectively.",
        improvements: "Add more AI models, implement user accounts, create dashboard for tracking usage.",
        demoVideo: "",
        status: "IN_PROGRESS" as const,
        featured: false,
        order: 4,
        published: true,
        userId: user.id,
      },
      {
        title: "Hero IO",
        slug: "hero-io",
        description: "Interactive web application with real-time features",
        fullDescription: "Hero IO – A dynamic web application with interactive features and real-time user engagement.",
        thumbnail: "/images/projects/hero-io.jpg",
        techStack: ["JavaScript", "HTML", "CSS", "WebSocket"],
        liveUrl: "https://github.com/Sumayea104/hero-io",
        githubUrl: "https://github.com/Sumayea104/hero-io",
        challenges: "Implementing real-time communication and maintaining state across multiple clients.",
        improvements: "Add user authentication, persistent data storage, more interactive features.",
        demoVideo: "",
        status: "IN_PROGRESS" as const,
        featured: false,
        order: 5,
        published: true,
        userId: user.id,
      },
      {
        title: "Customer Support Zone",
        slug: "customer-support-zone",
        description: "Customer support system with ticketing and management features",
        fullDescription: "Customer Support Zone – A web-based customer support system for managing tickets and support requests.",
        thumbnail: "/images/projects/customer-support.jpg",
        techStack: ["JavaScript", "HTML", "CSS", "LocalStorage"],
        liveUrl: "https://github.com/Sumayea104/customer-support-zone",
        githubUrl: "https://github.com/Sumayea104/customer-support-zone",
        challenges: "Designing an intuitive UI for ticket management and implementing efficient data storage.",
        improvements: "Add real-time notifications, integrate with email systems, implement AI-powered ticket routing.",
        demoVideo: "",
        status: "COMPLETED" as const,
        featured: false,
        order: 6,
        published: true,
        userId: user.id,
      },
      // === NEW PROJECTS ===
      {
        title: "Portfolio Website (sumayea.dev)",
        slug: "portfolio-website",
        description: "Modern portfolio with Next.js 15, Drizzle ORM, and Neon PostgreSQL",
        fullDescription: "A professional portfolio website built with Next.js 15 App Router, TypeScript, Drizzle ORM, and Neon PostgreSQL. Features dark/light mode, dynamic project pages, blog system, and AI chatbot integration.",
        thumbnail: "/images/projects/portfolio.jpg",
        techStack: ["Next.js 15", "TypeScript", "Drizzle ORM", "Neon PostgreSQL", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://sumayea.dev",
        githubUrl: "https://github.com/Sumayea104/sumayea.dev",
        challenges: "Integrating Drizzle ORM with Neon PostgreSQL, implementing authentication with Auth.js v5, and creating a seamless dark/light theme experience.",
        improvements: "Add AI chatbot integration, implement blog CMS, and add real-time analytics dashboard.",
        demoVideo: "",
        status: "IN_PROGRESS" as const,
        featured: true,
        order: 3,
        published: true,
        userId: user.id,
      },
      {
        title: "ML Price Predictor",
        slug: "ml-price-predictor",
        description: "Machine learning model for price prediction with Flask API",
        fullDescription: "A machine learning price prediction system with a Flask REST API. Uses scikit-learn models with real-time predictions.",
        thumbnail: "/images/projects/ml-predictor.jpg",
        techStack: ["Python", "Flask", "scikit-learn", "React", "Docker"],
        liveUrl: "https://github.com/Sumayea104/ml-price-predictor",
        githubUrl: "https://github.com/Sumayea104/ml-price-predictor",
        challenges: "Model accuracy optimization, handling large datasets, deploying ML model as a REST API.",
        improvements: "Add more models, implement feature importance visualization, create dashboard for model monitoring.",
        demoVideo: "",
        status: "IN_PROGRESS" as const,
        featured: false,
        order: 8,
        published: true,
        userId: user.id,
      },
      {
        title: "Smart FinTech Dashboard",
        slug: "smart-fintech-dashboard",
        description: "Financial analytics dashboard with real-time data visualization",
        fullDescription: "A comprehensive FinTech dashboard for financial analytics with real-time data visualization, AI-powered insights, and portfolio tracking.",
        thumbnail: "/images/projects/fintech-dashboard.jpg",
        techStack: ["React", "D3.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
        liveUrl: "https://github.com/Sumayea104/smart-fintech-dashboard",
        githubUrl: "https://github.com/Sumayea104/smart-fintech-dashboard",
        challenges: "Handling real-time data streams, creating complex data visualizations, optimizing performance.",
        improvements: "Add AI-powered anomaly detection, implement cryptocurrency tracking, add export functionality.",
        demoVideo: "",
        status: "IN_PROGRESS" as const,
        featured: false,
        order: 9,
        published: true,
        userId: user.id,
      },
      {
        title: "TaskFlow - Smart Task Manager",
        slug: "taskflow-smart-task-manager",
        description: "Smart task management with AI-powered prioritization",
        fullDescription: "An intelligent task management system with AI-powered task prioritization, team collaboration, real-time updates, and productivity analytics.",
        thumbnail: "/images/projects/taskflow.jpg",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Redux Toolkit"],
        liveUrl: "https://github.com/Sumayea104/taskflow",
        githubUrl: "https://github.com/Sumayea104/taskflow",
        challenges: "Building real-time collaboration features, implementing AI task prioritization algorithm.",
        improvements: "Add calendar integration, mobile app with React Native, AI-powered meeting scheduler.",
        demoVideo: "",
        status: "IN_PROGRESS" as const,
        featured: false,
        order: 10,
        published: true,
        userId: user.id,
      },
      {
        title: "EcoTrack - Sustainability Tracker",
        slug: "ecotrack-sustainability-tracker",
        description: "Personal sustainability tracker with data visualization",
        fullDescription: "An app to track personal carbon footprint, visualize environmental impact, and get AI-powered recommendations for sustainable lifestyle changes.",
        thumbnail: "/images/projects/ecotrack.jpg",
        techStack: ["Next.js", "TypeScript", "Drizzle", "PostgreSQL", "Recharts", "Tailwind CSS"],
        liveUrl: "https://github.com/Sumayea104/ecotrack",
        githubUrl: "https://github.com/Sumayea104/ecotrack",
        challenges: "Calculating carbon footprint accurately, gamifying sustainability, creating intuitive data visualizations.",
        improvements: "Add social features to compete with friends, integrate with smart home devices.",
        demoVideo: "",
        status: "IN_PROGRESS" as const,
        featured: false,
        order: 11,
        published: true,
        userId: user.id,
      },
    ]

    let projectsAdded = 0
    for (const projectData of allProjects) {
      const exists = await projectExists(projectData.slug)
      if (!exists) {
        const [project] = await db.insert(projects).values(projectData).returning()
        projectsAdded++
        console.log(`   ✅ Added: ${project.title}`)

        // Add sample images for new project
        const sampleImages = [
          "/images/projects/sample-1.jpg",
          "/images/projects/sample-2.jpg",
          "/images/projects/sample-3.jpg",
        ]
        for (let i = 0; i < sampleImages.length; i++) {
          await db.insert(projectImages).values({
            projectId: project.id,
            imageUrl: sampleImages[i],
            order: i,
          })
        }
      }
    }
    console.log(`✅ ${projectsAdded} new projects added`)

    // Final Summary
    const totalSkills = await db.select().from(skills).then(res => res.length)
    const totalProjects = await db.select().from(projects).then(res => res.length)

    console.log("\n🌱 Seed complete! 🎉")
    console.log(`📊 Final Summary:`)
    console.log(`   • Users: 1`)
    console.log(`   • Portfolio Settings: 1`)
    console.log(`   • Skills: ${totalSkills}`)
    console.log(`   • Projects: ${totalProjects}`)

  } catch (error) {
    console.error("❌ Seed failed:", error)
    process.exit(1)
  }
}

seed()