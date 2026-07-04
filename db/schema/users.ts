import { pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { roleEnum } from "../enums"

export const users = pgTable("users", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password"),
  image: text("image"),
  role: roleEnum("role").default("USER"),
  emailVerified: timestamp("email_verified"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})