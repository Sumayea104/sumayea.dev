import { pgTable, text, timestamp, boolean, uuid } from "drizzle-orm/pg-core"

export const contactMessages = pgTable("contact_messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  isRead: boolean("is_read").default(false),
  replied: boolean("replied").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})