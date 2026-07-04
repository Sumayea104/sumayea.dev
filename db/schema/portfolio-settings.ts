import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"

export const portfolioSettings = pgTable("portfolio_settings", {
  id: uuid("id").defaultRandom().primaryKey(),
  heroTitle: text("hero_title").notNull(),
  heroSubtitle: text("hero_subtitle").notNull(),
  resumeUrl: text("resume_url"),
  github: text("github"),
  linkedin: text("linkedin"),
  twitter: text("twitter"),
  email: text("email"),
  phone: text("phone"),
  location: text("location"),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})