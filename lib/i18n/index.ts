import { en } from "./en";
import { sk } from "./sk";
import { de } from "./de";
import { TranslationSchema, WebLanguage } from "../types";

export const translations = {
    en,
    sk,
    de
} satisfies Record<WebLanguage, TranslationSchema>;