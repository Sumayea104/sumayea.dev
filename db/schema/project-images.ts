import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core"
import { projects } from "./projects"

export const projectImages = pgTable("project_images", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  projectId: text("project_id").notNull().references(() => projects.id, { onDelete: "cascade" }),
  imageUrl: text("image_url").notNull(),
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})