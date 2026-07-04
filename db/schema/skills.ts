import { pgTable, text, integer, timestamp, uuid } from "drizzle-orm/pg-core"
import { skillCategoryEnum } from "../enums"

export const skills = pgTable("skills", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  icon: text("icon"),
  category: skillCategoryEnum("category").notNull(),
  proficiency: integer("proficiency").default(80),
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})