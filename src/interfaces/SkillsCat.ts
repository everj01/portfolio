interface Skill {
  name: string;
  level: "basic" | "learning" | "advanced" | "";
}

export default interface SkillsCat {
  title?: string
  icon?: string
  color?: string
  skills?: Skill[]
}