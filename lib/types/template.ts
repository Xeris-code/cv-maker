import { PreviewTranslations } from "./i18n";
import { CvState } from "@/lib/types";

export type TemplateComponent = React.FC<{
    state: CvState;
    t: PreviewTranslations;
}>;

export type VisualTemplateComponent = React.ReactNode

export type AllowedTemplateType = 
    | "classic"
    | "modern"
    | "graphic"
    | "centralized"

export type TemplateOption = {
    type: AllowedTemplateType;
    name?: string;
    label: string;
    description?: string;
    visual: VisualTemplateComponent;
};

