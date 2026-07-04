// db/types.ts
import { skillCategoryEnum } from "./enums"

export type SkillCategory = (typeof skillCategoryEnum.enumValues)[number]

export interface SkillInsert {
  name: string
  icon: string
  category: SkillCategory
  proficiency: number
  order?: number
}

// scripts/seed.ts
import "dotenv/config"
import { db } from "../db"
import { users, portfolioSettings, skills } from "../db/schema"
import type { SkillInsert } from "../db/types"
import bcrypt from "bcryptjs"

const skillsData: SkillInsert[] = [
  { name: "Next.js", icon: "SiNextdotjs", category: "FRONTEND", proficiency: 92 },
  { name: "TypeScript", icon: "SiTypescript", category: "FRONTEND", proficiency: 88 },
  { name: "React", icon: "SiReact", category: "FRONTEND", proficiency: 85 },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "FRONTEND", proficiency: 95 },
  { name: "Node.js", icon: "SiNodedotjs", category: "BACKEND", proficiency: 82 },
  { name: "Drizzle ORM", icon: "SiPrisma", category: "DATABASE", proficiency: 85 },
  { name: "PostgreSQL", icon: "SiPostgresql", category: "DATABASE", proficiency: 80 },
  { name: "Docker", icon: "SiDocker", category: "DEVOPS", proficiency: 72 },
]

async function seed() {
  console.log("🌱 Starting seed...")

  try {
    // ... rest of your seed logic

    // Insert skills with proper typing
    await db.insert(skills).values(skillsData)
    
    console.log(`✅ ${skillsData.length} skills created`)
    console.log("🌱 Seed complete!")

  } catch (error) {
    console.error("❌ Seed failed:", error)
  }
}

seed()