ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "id" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "status" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "user_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "project_images" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "project_images" ALTER COLUMN "id" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "project_images" ALTER COLUMN "project_id" SET DATA TYPE text;