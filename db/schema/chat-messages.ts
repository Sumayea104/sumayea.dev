import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"

export const chatMessages = pgTable("chat_messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  sessionId: text("session_id").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})