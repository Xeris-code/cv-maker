import { LucideIcon } from "lucide-react";
import { CvState } from "./reducer/cvReducer";
import { LanguageLevel, SkillLevel, TranslationSchema } from "./i18n/types";

export type BasicInformation = {
    name: string;
    surname: string;
    titleActive: boolean;
    titleFront: string;
    titleBack: string;
    photo: string | null;
    summary: string;
    interest: string;
    driving: string;
    mail: string;
    phone: string | number;
    adress_city: string;
    adress_state: string
};

export type BirthDate = {
    day: number | null;
    month: number | null;
    year: number | null
}

export type Skill = {
    id: number;
    name: string;
    level: SkillLevel
};

export type SkillOption = {
    value: number;
    label: string
};

export type Language = {
    id: number;
    name: string;
    level: LanguageLevel
};

export type LanguageOption = {
    value: number;
    label: string
};

export type WorkExperience = {
    id: number;
    start: {month: string, year: number};
    end: {month: string, year: number};
    present: boolean;
    position: string;
    company: string;
    city: string;
    state: string;
    description: string;
    tasks: string[]
}

export type Education = {
    id: number;
    start: {year: number};
    end: {year: number};
    present: boolean;
    faculty: string;
    university: string;
    field: string;
    degree: string;
    city: string;
    state: string;
    description: string;
}

export type CoursesCertificates = {
    id: number;
    name: string;
    org: string;
    description: string;
    start: {month: string, year: number};
    end: {month: string, year: number};
    url: string
}

export type Projects = {
    id: number;
    name: string;
    description: string;
    tech: string;
    url: string
}


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


export type AllowedTemplate = 
    | "classic"
    | "modern"
    | "graphic"
    | "initial"

export type TemplateOption = {
  id: AllowedTemplate
  label: string
  description?: string
}

export const templates: TemplateOption[] = [
  { id: "classic", label: "Classic" },
  { id: "modern", label: "Modern" },
  { id: "graphic", label: "Graphic" },
  { id: "initial", label: "Initial" },
]

export type TemplateComponent = React.FC<{
    state: CvState
    t: TranslationSchema
}>