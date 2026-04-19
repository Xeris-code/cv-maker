import { LucideIcon } from "lucide-react";

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
    level: number
};

export type SkillOption = {
    value: number;
    label: string
};

export type Language = {
    id: number;
    name: string;
    level: number
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

export type LanguageWebSelection = {
    sk: boolean;
    en: boolean;
    de: boolean
}

export type AllowedLanguage = "sk" | "en" | "de"
export type TranslationKeys = 
    | "appTitle"
    | "appDescription"
    | "exportPdf"
    | "formTitle"
    | "personalTitle"
    | "workTitle"
    | "educationTitle"
    | "coursesTitle"
    | "skillsTitle"
    | "languagesTitle"
    | "interestsTitle"
    | "projectsTitle"
    | "name"
    | "surname"
    | "mail"
    | "phone"
    | "cityContact"
    | "stateContact"
    | "title"
    | "titleFront"
    | "titleBack"
    | "birth"
    | "birthDay"
    | "birthMonth"
    | "birthYear"
    | "summary"
    | "photo"
    | "firstPhoto"
    | "newPhoto"
    | "positionWork"
    | "companyWork"
    | "cityWork"
    | "stateWork"
    | "fromWork"
    | "endWork"
    | "presentWork"
    | "descriptionWork"
    | "addWork"
    | "titleEdu"
    | "facultyEdu"
    | "uniEdu"
    | "fieldEdu"
    | "cityEdu"
    | "stateEdu"
    | "degreeEdu"
    | "fromEdu"
    | "endEdu"
    | "descriptionEdu"
    | "addEdu"
    | "langOption0"    
    | "langOption1"
    | "langOption2"
    | "langOption3"
    | "langOption4"
    | "langOption5"
    | "langOption6"
    | "langOption7"
    | "skillOption0"
    | "skillOption1"
    | "skillOption2"
    | "skillOption3"
    | "skillOption4"
    | "skillOption5"
    | "langButton"
    | "skillButton"
    | "nameCourse"
    | "orgCourse"
    | "linkCourse"
    | "startCourse"
    | "endCourse"
    | "descriptionCourse"
    | "addCourse"
    | "nameProject"
    | "techProject"
    | "linkProject"
    | "descriptionproject"
    | "addProject"
    | "titleProject"
    | "titleCourse"


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