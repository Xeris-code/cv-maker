import { TranslationSchema } from "./i18n";
import { CvState } from "@/lib/types";

export type TemplateComponent = React.FC<{
    state: CvState;
    t: TranslationSchema;
}>;

export type AllowedTemplateType = 
    | "classic"
    | "modern"
    | "graphic"
    | "initial"

export type TemplateOption = {
    type: AllowedTemplateType;
    name?: string;
    label: string;
    description?: string;
};