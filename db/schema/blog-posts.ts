import { pgTable, text, timestamp, boolean, jsonb, uuid } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"
import { users } from "./users"
import { projects } from "./projects"

export const blogPosts = pgTable("blog_posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  coverImage: text("cover_image"),
  tags: jsonb("tags").$type<string[]>().default([]),
  published: boolean("published").default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  authorId: uuid("author_id").references(() => users.id, { onDelete: "set null" }),
  projectId: uuid("project_id").references(() => projects.id, { onDelete: "set null" }),
})

export const blogPostsRelations = relations(blogPosts, ({ one }) => ({
  author: one(users, {
    fields: [blogPosts.authorId],
    references: [users.id],
  }),
  project: one(projects, {
    fields: [blogPosts.projectId],
    references: [projects.id],
  }),
}))