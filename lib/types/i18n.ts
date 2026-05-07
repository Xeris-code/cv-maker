import { en } from "../i18n/en";

export const languageCodes = ["en", "sk", "de"] as const;

type DeepWiden<T> =
  T extends string
    ? string
    : T extends number
      ? number
      : T extends boolean
        ? boolean
        : T extends readonly (infer U)[]
          ? Array<DeepWiden<U>>
          : T extends object
            ? { -readonly [K in keyof T]: DeepWiden<T[K]> }
            : T;

export type TranslationSchema = DeepWiden<typeof en>;

export type WebLanguage = (typeof languageCodes)[number];
export type WebLanguageOptions = {language: WebLanguage, name: TranslationSchema["ui"]["languages"][WebLanguage]}[]

export type SkillLevel = keyof TranslationSchema["ui"]["options"]["skills"];
export type SkillOption = { value: SkillLevel, label: string };
export type SkillOptionTranslations = Record<SkillLevel, string>

export type LanguageLevel = keyof TranslationSchema["ui"]["options"]["language"];
export type LanguageOption = { value: LanguageLevel, label: string };
export type LanguageOptionTranslations = Record<LanguageLevel, string>


export type MenuTranslations = TranslationSchema["ui"]["sections"]
export type MenuCategory = keyof MenuTranslations

export type TooltipTranslations = TranslationSchema["ui"]["tooltip"]

export type AppTranslations = TranslationSchema["ui"]["app"]
export type UiActionTranslations = TranslationSchema["ui"]["actions"]
export type UiPersonalTranslations = TranslationSchema["ui"]["sections"]["personal"]
export type UiSkillsTranslations = TranslationSchema["ui"]["sections"]["skills"]
export type UiLanguagesTranslations = TranslationSchema["ui"]["sections"]["languages"]
export type UiWorkTranslations = TranslationSchema["ui"]["sections"]["work"]
export type UiEducationTranslations = TranslationSchema["ui"]["sections"]["education"]
export type UiCoursesTranslations = TranslationSchema["ui"]["sections"]["courses"]
export type UiProjectsTranslations = TranslationSchema["ui"]["sections"]["projects"]
export type UiInterestsTranslations = TranslationSchema["ui"]["sections"]["interests"]


