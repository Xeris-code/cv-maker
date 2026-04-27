import { en } from "../i18n/en";

export const languageCodes = ["en", "sk", "de"] as const;

type DeepWiden<T> =
  T extends string 
    ? string
    : T extends readonly (infer U)[]
      ? readonly DeepWiden<U>[]
      : T extends object
        ? { [K in keyof T]: DeepWiden<T[K]> }
        : T;

export type TranslationSchema = DeepWiden<typeof en>;
export type WebLanguage = (typeof languageCodes)[number];

export type Skill = { id: number, name: string, level: SkillLevel };
export type SkillTranslations = Record<keyof TranslationSchema["fields"]["skills"], string>
export type SkillLevel = keyof TranslationSchema["options"]["skills"];
export type SkillOption = { value: SkillLevel, label: string };
export type SkillOptionTranslations = Record<SkillLevel, string>

export type Language = { id: number, name: string, level: LanguageLevel };
export type LanguageTranslations = Record<keyof TranslationSchema["fields"]["languages"], string>
export type LanguageLevel = keyof TranslationSchema["options"]["language"];
export type LanguageOption = { value: LanguageLevel, label: string };
export type LanguageOptionTranslations = Record<LanguageLevel, string>

export type MenuCategory = keyof TranslationSchema["sections"]["common"]
export type MenuTranslations = Record<MenuCategory, string>

export type ProjectsTranslations = TranslationSchema["fields"]["project"]
export type CoursesTranslations = TranslationSchema["fields"]["courses"]
export type WorkTranslations = TranslationSchema["fields"]["work"]
export type EducationTranslations = TranslationSchema["fields"]["education"]
export type InterestsTranslations = TranslationSchema["fields"]["interests"]

export type CurrentPositionTranslations = TranslationSchema["fields"]["position"]
export type FieldTranslations = TranslationSchema["fields"]