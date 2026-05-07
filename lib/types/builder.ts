import { LucideIcon } from "lucide-react";
import { MenuCategory } from "./i18n";

export type Completion = "empty" | "partial" | "complete"
export type CompletionRecord = Record<MenuCategory, Completion>
export type CategoryMenuItem = {name: MenuCategory, completion: Completion, icon: LucideIcon} 
