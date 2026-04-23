import { LucideIcon } from "lucide-react";

export type MenuCategory = 
    | "personal"
    | "work"
    | "education"
    | "courses"
    | "skills"
    | "languages"
    | "interests"
    | "projects"

export type categoryMenuItem = {name: MenuCategory, icon: LucideIcon} 
