import { relations } from "drizzle-orm"
import { users } from "./users"
import { projects } from "./projects"
import { projectImages } from "./project-images"
import { sessions, accounts } from "./auth"
import { blogPosts } from "./blog-posts"

export const usersRelations = relations(users, ({ many }) => ({
  projects: many(projects),
  blogPosts: many(blogPosts),
  sessions: many(sessions),
  accounts: many(accounts),
}))

export const projectsRelations = relations(projects, ({ one, many }) => ({
  user: one(users, { fields: [projects.userId], references: [users.id] }),
  images: many(projectImages),
  blogPosts: many(blogPosts),
}))

export const projectImagesRelations = relations(projectImages, ({ one }) => ({
  project: one(projects, { fields: [projectImages.projectId], references: [projects.id] }),
}))