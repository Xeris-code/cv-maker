import { en } from "./en";

type DeepWiden<T> =
  T extends string
    ? string
    : T extends readonly (infer U)[]
      ? readonly DeepWiden<U>[]
      : T extends object
        ? { [K in keyof T]: DeepWiden<T[K]> }
        : T;

export type TranslationSchema = DeepWiden<typeof en>;

export type SkillLevel = keyof TranslationSchema["options"]["skills"];
export type LanguageLevel = keyof TranslationSchema["options"]["language"];