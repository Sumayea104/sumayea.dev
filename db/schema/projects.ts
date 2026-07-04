import { pgTable, text, timestamp, boolean, integer, jsonb } from "drizzle-orm/pg-core"
import { users } from "./users"
import { projectStatusEnum } from "../enums"

export const projects = pgTable("projects", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  fullDescription: text("full_description"),
  thumbnail: text("thumbnail").notNull(),
  techStack: jsonb("tech_stack").$type<string[]>().notNull(),
  liveUrl: text("live_url"),
  githubUrl: text("github_url"),
  challenges: text("challenges"),
  improvements: text("improvements"),
  demoVideo: text("demo_video"),
  status: projectStatusEnum("status").default("COMPLETED"),
  featured: boolean("featured").default(false),
  order: integer("order").default(0),
  published: boolean("published").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  userId: text("user_id").references(() => users.id, { onDelete: "cascade" }),
})