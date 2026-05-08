import { VisualTemplateComponent, AllowedTemplateType, TemplateComponent, TemplateOption, TranslationSchema } from "@/lib/types";
import { ClassicTemplate, ModernTemplate, GraphicTemplate, CentralizedTemplate } from "@/components/templates";

export const templateMap: Record<AllowedTemplateType, TemplateComponent> = {
    classic: ClassicTemplate,
    modern: ModernTemplate,
    graphic: GraphicTemplate,
    centralized: CentralizedTemplate,
};

export function getTemplates(t: TranslationSchema): TemplateOption[] { 
    return [
    { type: "classic", label: t.ui.templates.classic, visual: VisualClassicTemplate },
    { type: "modern", label: t.ui.templates.modern, visual: VisualModernTemplate },
    { type: "graphic", label: t.ui.templates.graphic, visual: VisualGraphicTemplate },
    { type: "centralized", label: t.ui.templates.centralized, visual: VisualCentralizedTemplate },
    ];
};

export const VisualClassicTemplate: VisualTemplateComponent = (
    <div className="space-y-2">
        <div className="h-2 w-2/3 rounded bg-gray-800" />
        <div className="h-2 w-full rounded bg-gray-300" />
        <div className="h-2 w-full rounded bg-gray-300" />
        <div className="h-2 w-4/5 rounded bg-gray-300" />
    </div>
);

export const VisualCentralizedTemplate: VisualTemplateComponent = (
    <div className="bg-[#2B2B2B] py-1">
        <div className="flex justify-center gap-1 items-center">
            <div className="h-1 w-5 bg-[#3B82F6]" />
            <div className="h-6 w-6 bg-gray-200 rounded-full ring-1 ring-[#444444]"/>
            <div className="h-1 w-5 bg-[#3B82F6]" />
        </div>
        <div className="flex mb-1">
            <div className="w-1/2 h-9 border-r-1 border-[#444444] flex flex-col items-end px-2 py-1 gap-1">
                <div className="h-1 w-8 bg-white" />
                <div className="h-2 w-full rounded bg-[#444444]"/>
                <div className="h-2 w-full rounded bg-[#444444]"/>
            </div>
            <div className="w-1/2 h-9 border-l-1 border-[#444444] flex flex-col items-start px-2 py-1 gap-1">
                <div className="h-1 w-8 bg-white" />
                <div className="h-2 w-full rounded bg-[#444444]"/>
                <div className="h-2 w-full rounded bg-[#444444]"/>
            </div>
        </div>
        <div className="w-full h-2 flex gap-4 justify-center">
            <div className="h-2 w-2 rounded bg-gray-300"/>
            <div className="h-2 w-2 rounded bg-gray-300"/>
            <div className="h-2 w-2 rounded bg-gray-300"/>
            <div className="h-2 w-2 rounded bg-gray-300"/>
        </div>
    </div>
);

export const VisualModernTemplate: VisualTemplateComponent = (
    <div className="h-full">
        <div className="grid grid-cols-[2fr_1fr] h-full">
            <div className="space-y-1 p-1">
                <div className="h-1 w-8 bg-gray-800" />
                <div className="h-3 rounded bg-gray-300" />
                <div className="h-1 rounded bg-gray-800" />
                <div className="h-3 rounded bg-gray-300" />
                <div className="h-1 rounded bg-gray-800" />
                <div className="h-3 rounded bg-gray-300" />
            </div>
            <div className="space-y-1 h-full bg-slate-700 px-1">
                <div className="h-6 w-6 rounded-full mx-auto my-1 bg-gray-400" />
                <div className="h-2 bg-gray-300" />
                <div className="h-2 bg-gray-400" />
                <div className="h-2 bg-gray-300" />
            </div>
        </div>
    </div>
);

export const VisualGraphicTemplate: VisualTemplateComponent = (
    <div className="space-y-2">
        <div className="h-3 w-1/2 rounded bg-gray-800" />
        <div className="grid grid-cols-3 gap-1">
            <div className="h-8 rounded bg-gray-300" />
            <div className="h-8 rounded bg-gray-300" />
            <div className="h-8 rounded bg-gray-300" />
        </div>
    </div>
);

