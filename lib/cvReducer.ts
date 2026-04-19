import {
    Skill, Language,
    WorkExperience, Education,
    CoursesCertificates, Projects, BasicInformation,
    BirthDate,
    AllowedLanguage,
    MenuCategory,
} from "@/lib/types"

export type CvState = {
    webLang: AllowedLanguage,
    menuCategory: MenuCategory,
    basics: BasicInformation,
    birth: BirthDate,
    skills: Skill[],
    langs: Language[],
    work: WorkExperience[],
    education: Education[],
    courses: CoursesCertificates[],
    projects: Projects[],
    nextSkillId: number,
    nextLangId: number,
    nextWorkId: number,
    nextEduId: number,
    nextCourseId: number,
    nextProjectId: number,
}

export const initialState: CvState = {
  webLang: "sk",
  menuCategory: "personal",
  basics: {
    name: "",
    surname: "",
    titleActive: false,
    titleFront: "",
    titleBack: "",
    photo: null,
    summary: "",
    interest: "",
    driving: "",
    mail: "",
    phone: "",
    adress_city: "",
    adress_state: "",
  },
  birth: { day: null, month: null, year: null, },
  skills: [],
  langs: [],
  work: [],
  education: [],
  courses: [],
  projects: [],
  nextSkillId: 1,
  nextLangId: 1,
  nextWorkId: 1,
  nextEduId: 1,
  nextCourseId: 1,
  nextProjectId: 1,
}

export type CvAction = 
    | { type: "SET_LANGUAGE", value: AllowedLanguage}
    | { type: "SET_ACTIVE_MENU", value: MenuCategory}
    | { type: "SET_BASICS_FIELD", field: keyof BasicInformation, value: string | boolean | null }
    | { type: "SET_BIRTH_FIELD", field: keyof BirthDate, value: number | null }
    | { type: "ADD_SKILL" }
    | { type: "UPDATE_SKILL", id: number, field: keyof Skill, value: Skill[keyof Skill] }
    | { type: "DELETE_SKILL", id: number }
    | { type: "ADD_LANGUAGE" }
    | { type: "UPDATE_LANGUAGE", id: number, field: keyof Language, value: Language[keyof Language] }
    | { type: "DELETE_LANGUAGE", id: number }
    | { type: "ADD_WORK" }
    | { type: "UPDATE_WORK", id: number, field: keyof WorkExperience, value: WorkExperience[keyof WorkExperience] }
    | { type: "DELETE_WORK", id: number }
    | { type: "ADD_EDUCATION" }
    | { type: "UPDATE_EDUCATION", id: number, field: keyof Education, value: Education[keyof Education] }
    | { type: "DELETE_EDUCATION", id: number }
    | { type: "ADD_COURSE" }
    | { type: "UPDATE_COURSE", id: number, field: keyof CoursesCertificates, value: CoursesCertificates[keyof CoursesCertificates] }
    | { type: "DELETE_COURSE", id: number }
    | { type: "ADD_PROJECT" }
    | { type: "UPDATE_PROJECT", id: number, field: keyof Projects, value: Projects[keyof Projects] }
    | { type: "DELETE_PROJECT", id: number }

export function cvReducer(state: CvState, action: CvAction): CvState {
    switch(action.type) {
        case "SET_LANGUAGE":
            return {...state, webLang: action.value}

        case "SET_ACTIVE_MENU":
            return {...state, menuCategory: action.value}

        case "SET_BASICS_FIELD":
            return {...state, basics: {...state.basics, [action.field]: action.value}}
        
        case "SET_BIRTH_FIELD":
            return {...state, birth: {...state.birth, [action.field]: action.value}}

        case "ADD_SKILL":
            return {...state, skills: [...state.skills, { id: state.nextSkillId, name: "", level: 0}], nextSkillId: state.nextSkillId + 1}

        case "UPDATE_SKILL":
            return {...state, skills: updateById(state.skills, action.id, action.field, action.value)}

        case "DELETE_SKILL":
            return {...state, skills: deleteById(state.skills, action.id)}

        case "ADD_LANGUAGE":
            return {...state, langs: [...state.langs, { id: state.nextLangId, name: "", level: 0}], nextLangId: state.nextLangId + 1}

        case "UPDATE_LANGUAGE":
            return {...state, langs: updateById(state.langs, action.id, action.field, action.value)}

        case "DELETE_LANGUAGE":
            return {...state, langs: deleteById(state.langs, action.id)}

        case "ADD_WORK":
            return {...state, work: [...state.work, { id: state.nextWorkId, start: {month: "", year: 0}, end: {month: "", year: 0}, present: false, position: "", company: "", city: "", state: "", description: "",  tasks: [] }], nextWorkId: state.nextWorkId + 1}

        case "UPDATE_WORK":
            return {...state, work: updateById(state.work, action.id, action.field, action.value)}

        case "DELETE_WORK":
            return {...state, work: deleteById(state.work, action.id)}

        case "ADD_EDUCATION":
            return {...state, education: [...state.education, { id: state.nextEduId, start: {year: 0}, end: {year: 0}, present: false, faculty: "", university: "", field: "", degree: "", city: "", state: "", description: "" }], nextEduId: state.nextEduId + 1}

        case "UPDATE_EDUCATION":
            return {...state, education: updateById(state.education, action.id, action.field, action.value)}

        case "DELETE_EDUCATION":
            return {...state, education: deleteById(state.education, action.id)}
        
        case "ADD_COURSE":
            return {...state, courses: [...state.courses, { id: state.nextCourseId, name: "", org: "", description: "", start: {month: "", year: 0}, end: {month: "", year: 0}, url: "" }], nextCourseId: state.nextCourseId + 1}

        case "UPDATE_COURSE":
            return {...state, courses: updateById(state.courses, action.id, action.field, action.value)}

        case "DELETE_COURSE":
            return {...state, courses: deleteById(state.courses, action.id)}

        case "ADD_PROJECT":
            return {...state, projects: [...state.projects, { id: state.nextProjectId, name: "", description: "", tech: "", url: "" }], nextProjectId: state.nextProjectId + 1}

        case "UPDATE_PROJECT":
            return {...state, projects: updateById(state.projects, action.id, action.field, action.value)}

        case "DELETE_PROJECT":
            return {...state, projects: deleteById(state.projects, action.id)}


        default:
            return state
    }
}

function updateById<T extends { id: number }> (
    items: T[],
    id: number,
    field: keyof T,
    value: T[keyof T]
): T[] {
    return items.map((item) =>
        item.id === id ? {...item, [field]: value }: item
    )
}

function deleteById<T extends {id: number}> (
    items: T[],
    id: number,
): T[] {
    return items.filter(item => 
        item.id !== id
    )
}