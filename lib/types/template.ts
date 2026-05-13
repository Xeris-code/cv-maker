import { PreviewTranslations } from "./i18n";
import { CvState } from "@/lib/types";

export type TemplateComponent = React.FC<{
    state: CvState;
    t: PreviewTranslations;
    pageIndex?: number;
    renderAllPages?: boolean;
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

export type TemplateBlock = {
    id: string;
    element: React.ReactNode;
};

export type MeasuredBlock = TemplateBlock & {
    height: number;
}