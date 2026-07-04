// scripts/seed.ts
import { db } from "../db"
import { users, portfolioSettings, skills, projects, projectImages } from "../db/schema"
import { eq } from "drizzle-orm"
import bcrypt from "bcryptjs"

async function seed() {
  console.log("🌱 Starting seed...")

  try {
    // 1. Get existing admin user
    console.log("📝 Finding admin user...")
    const [user] = await db.select().from(users).where(eq(users.email, "sumayearahman7@gmail.com"))
    
    if (!user) {
      console.error("❌ Admin user not found! Please create one first.")
      process.exit(1)
    }
    console.log("✅ Found admin user:", user.id)

    // 2. Check if portfolio settings exist
    console.log("📝 Checking portfolio settings...")
    const existingSettings = await db.select().from(portfolioSettings).then(res => res[0])
    
    if (!existingSettings) {
      console.log("📝 Creating portfolio settings...")
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

    // 3. Create Skills - Updated with Complete Tech Stack
    console.log("📝 Creating skills...")
    const existingSkills = await db.select().from(skills).then(res => res.length)
    
    if (existingSkills === 0) {
      const skillsData = [
        // Frontend
        { name: "JavaScript", icon: "SiJavascript", category: "FRONTEND" as const, proficiency: 90 },
        { name: "TypeScript", icon: "SiTypescript", category: "FRONTEND" as const, proficiency: 88 },
        { name: "React", icon: "SiReact", category: "FRONTEND" as const, proficiency: 85 },
        { name: "Redux", icon: "SiRedux", category: "FRONTEND" as const, proficiency: 80 },
        { name: "Next.js", icon: "SiNextdotjs", category: "FRONTEND" as const, proficiency: 92 },
        { name: "Astro", icon: "SiAstro", category: "FRONTEND" as const, proficiency: 75 },
        
        // Backend
        { name: "Python", icon: "SiPython", category: "BACKEND" as const, proficiency: 82 },
        { name: "Node.js", icon: "SiNodedotjs", category: "BACKEND" as const, proficiency: 85 },
        { name: "Express.js", icon: "SiExpress", category: "BACKEND" as const, proficiency: 80 },
        { name: "Prisma", icon: "SiPrisma", category: "BACKEND" as const, proficiency: 85 },
        
        // Database
        { name: "PostgreSQL", icon: "SiPostgresql", category: "DATABASE" as const, proficiency: 80 },
        { name: "MongoDB", icon: "SiMongodb", category: "DATABASE" as const, proficiency: 75 },
        
        // DevOps & Cloud
        { name: "Docker", icon: "SiDocker", category: "DEVOPS" as const, proficiency: 72 },
        { name: "Nginx", icon: "SiNginx", category: "DEVOPS" as const, proficiency: 65 },
        { name: "AWS", icon: "SiAmazonaws", category: "DEVOPS" as const, proficiency: 60 },
        
        // AI & ML
        { name: "LangChain", icon: "SiLangchain", category: "AI" as const, proficiency: 60 },
        { name: "OpenAI", icon: "SiOpenai", category: "AI" as const, proficiency: 65 },
        { name: "Mistral AI", icon: "SiMistral", category: "AI" as const, proficiency: 55 },
        { name: "Gemini", icon: "SiGooglebard", category: "AI" as const, proficiency: 55 },
        { name: "pgvector", icon: "SiPostgresql", category: "AI" as const, proficiency: 50 },
        { name: "RAG", icon: "SiRag", category: "AI" as const, proficiency: 50 },
        { name: "n8n", icon: "SiN8n", category: "AI" as const, proficiency: 45 },
        
        // UI Libraries
        { name: "Tailwind CSS", icon: "SiTailwindcss", category: "UI_LIBRARIES" as const, proficiency: 95 },
        { name: "shadcn/ui", icon: "SiShadcnui", category: "UI_LIBRARIES" as const, proficiency: 90 },
        { name: "daisyUI", icon: "SiDaisyui", category: "UI_LIBRARIES" as const, proficiency: 85 },
        { name: "Bootstrap", icon: "SiBootstrap", category: "UI_LIBRARIES" as const, proficiency: 80 },
        
        // Deployment & Hosting
        { name: "Vercel", icon: "SiVercel", category: "DEPLOYMENT" as const, proficiency: 92 },
        { name: "Netlify", icon: "SiNetlify", category: "DEPLOYMENT" as const, proficiency: 85 },
        { name: "Render", icon: "SiRender", category: "DEPLOYMENT" as const, proficiency: 80 },
        { name: "Railway", icon: "SiRailway", category: "DEPLOYMENT" as const, proficiency: 75 },
        { name: "GitHub", icon: "SiGithub", category: "DEPLOYMENT" as const, proficiency: 90 },
        { name: "VSCode", icon: "SiVisualstudiocode", category: "DEPLOYMENT" as const, proficiency: 95 },
      ]

      for (const skill of skillsData) {
        await db.insert(skills).values(skill)
      }
      console.log(`✅ ${skillsData.length} skills created`)
    } else {
      console.log(`✅ ${existingSkills} skills already exist, skipping...`)
    }

    // 4. Create Projects - Your GitHub Repositories
    console.log("📝 Creating projects...")
    const existingProjects = await db.select().from(projects).then(res => res.length)
    
    if (existingProjects === 0) {
      const projectsData = [
        {
          title: "Agentic Finance Beast",
          slug: "agentic-finance-beast",
          description: "Multi-agent FinTech system with RAG pipeline, sentiment analysis, and portfolio agents",
          fullDescription: "Built a production-ready multi-agent FinTech system using LangGraph, Mistral AI, and Gemini API. Features RAG pipeline with Supabase (pgvector), sentiment analysis, and portfolio agents. Deployed with modern AI architecture.",
          thumbnail: "/images/projects/agentic-finance-beast.jpg",
          techStack: ["Python", "LangGraph", "Mistral AI", "Gemini API", "RAG", "Supabase", "pgvector"],
          liveUrl: "https://github.com/Sumayea104/agentic-finance-beast",
          githubUrl: "https://github.com/Sumayea104/agentic-finance-beast",
          challenges: "Integrating multiple AI services (Mistral, Gemini) with LangGraph, implementing RAG pipeline with pgvector, and ensuring real-time sentiment analysis performance.",
          improvements: "Add real-time market data integration, implement more sophisticated portfolio optimization algorithms, and add a frontend dashboard for visualization.",
          demoVideo: "https://youtube.com/watch?v=agentic-finance",
          status: "COMPLETED" as const,
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
          challenges: "Implementing persistent cart state with LocalStorage while maintaining performance and synchronization across browser tabs.",
          improvements: "Add user authentication, payment gateway integration, and server-side cart persistence with a backend API.",
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
          fullDescription: "Database design and SQL queries for a Football Ticket Booking System. Includes 3 tables (Users, Matches, Bookings), 7 SQL queries, and ERD for complete ticketing workflow.",
          thumbnail: "/images/projects/football-ticket.jpg",
          techStack: ["SQL", "Database Design", "ERD"],
          liveUrl: "https://github.com/Sumayea104/football-ticket-booking-system-dbms",
          githubUrl: "https://github.com/Sumayea104/football-ticket-booking-system-dbms",
          challenges: "Designing normalized database schema for ticket booking, handling complex join queries, and preventing double-booking scenarios.",
          improvements: "Add seat selection feature, implement real-time availability tracking, and build a frontend UI for the system.",
          demoVideo: "",
          status: "COMPLETED" as const,
          featured: false,
          order: 3,
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
          improvements: "Add more AI models, implement user accounts, and create a dashboard for tracking usage.",
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
          improvements: "Add user authentication, persistent data storage, and more interactive features.",
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
          improvements: "Add real-time notifications, integrate with email systems, and implement AI-powered ticket routing.",
          demoVideo: "",
          status: "COMPLETED" as const,
          featured: false,
          order: 6,
          published: true,
          userId: user.id,
        },
      ]

      for (const projectData of projectsData) {
        const [project] = await db.insert(projects).values(projectData).returning()
        console.log(`✅ Project created: ${project.title}`)

        // Add sample project images
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
        console.log(`✅ ${sampleImages.length} sample images added for ${project.title}`)
      }
      console.log(`✅ ${projectsData.length} projects created`)
    } else {
      console.log(`✅ ${existingProjects} projects already exist, skipping...`)
    }

    console.log("\n🌱 Seed complete! 🎉")
    console.log("📋 You can now login with:")
    console.log("   Email: sumayearahman7@gmail.com")
    console.log("   Password: admin123")
    console.log(`\n📊 Summary:`)
    console.log(`   • Users: 1 (existing)`)
    console.log(`   • Portfolio Settings: 1 (checked)`)
    console.log(`   • Skills: ${existingSkills === 0 ? '32 created' : `${existingSkills} existing`}`)
    console.log(`   • Projects: ${existingProjects === 0 ? '6 created' : `${existingProjects} existing`}`)
    console.log(`   • Project Images: ${existingProjects === 0 ? '18 created' : 'already exist'}`)

  } catch (error) {
    console.error("❌ Seed failed:", error)
    console.error("Error details:", error)
    process.exit(1)
  }
}

seed()