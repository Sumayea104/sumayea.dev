import { skillCategoryEnum } from "./enums"

export type SkillCategory = (typeof skillCategoryEnum.enumValues)[number]

export interface SkillInsert {
  name: string
  icon: string
  category: SkillCategory
  proficiency: number
  order?: number
}