import path from "path"
import dotenv from "dotenv"
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") })

import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import * as schema from "./schema"

const sql = neon(process.env.DATABASE_URL!)
export const db = drizzle(sql, { schema })

export * from "./schema"