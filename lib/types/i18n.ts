import { en } from "../i18n/en";
import { translations } from "../i18n";

type DeepWiden<T> =
  T extends string 
    ? string
    : T extends readonly (infer U)[]
      ? readonly DeepWiden<U>[]
      : T extends object
        ? { [K in keyof T]: DeepWiden<T[K]> }
        : T;

export type TranslationSchema = DeepWiden<typeof en>;

export type SkillLevel = keyof typeof en["options"]["skills"];
export type SkillOption = { value: SkillLevel, label: string };
export type Skill = { id: number, name: string, level: SkillLevel };

export type LanguageLevel = keyof typeof en["options"]["language"];
export type LanguageOption = { value: LanguageLevel, label: string };
export type Language = { id: number, name: string, level: LanguageLevel };

export type WebLanguage = keyof typeof translations;

