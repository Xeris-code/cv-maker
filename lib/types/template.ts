import { TranslationSchema } from "./i18n";
import { CvState } from "@/lib/types";

export type TemplateComponent = React.FC<{
    state: CvState;
    t: TranslationSchema;
}>;

export type VisualTemplateComponent = React.ReactNode

export type AllowedTemplateType = 
    | "classic"
    | "modern"
    | "graphic"
    | "initial"
    | "centralized"

export type TemplateOption = {
    type: AllowedTemplateType;
    name?: string;
    label: string;
    description?: string;
    visual: VisualTemplateComponent;
};

