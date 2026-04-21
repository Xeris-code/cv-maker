import { en } from "./en";
import { sk } from "./sk";
import { de } from "./de";

export const translations = {
    en,
    sk,
    de
} as const;


export type WebLanguage = keyof typeof translations;