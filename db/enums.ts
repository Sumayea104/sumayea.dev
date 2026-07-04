import { pgEnum } from "drizzle-orm/pg-core"

export const roleEnum = pgEnum("role", ["USER", "ADMIN"])
export const projectStatusEnum = pgEnum("project_status", [
  "COMPLETED",
  "IN_PROGRESS", 
  "ARCHIVED"
])
export const skillCategoryEnum = pgEnum("skill_category", [
  "FRONTEND",
  "BACKEND",
  "DATABASE",
  "DEVOPS",
  "AI",
  "TOOLS",
  "UI_LIBRARIES",
  "DEPLOYMENT"
])