import { VisualTemplateComponent } from "@/lib/types";

export const VisualClassicTemplate: VisualTemplateComponent = (
    <div className="space-y-2">
        <div className="h-2 w-2/3 rounded bg-gray-800" />
        <div className="h-2 w-full rounded bg-gray-300" />
        <div className="h-2 w-full rounded bg-gray-300" />
        <div className="h-2 w-4/5 rounded bg-gray-300" />
    </div>
);

export const VisualModernTemplate: VisualTemplateComponent = (
    <div className="h-full">
        <div className="grid grid-cols-[1fr_2fr] h-full">
            <div className="space-y-1 h-full bg-slate-700 px-1">
                <div className="h-6 w-6 rounded-full mx-auto my-1 bg-gray-400" />
                <div className="h-2 bg-gray-300" />
                <div className="h-2 bg-gray-400" />
                <div className="h-2 bg-gray-300" />
            </div>
            <div className="space-y-1 p-1">
                <div className="h-1 w-8 bg-gray-800" />
                <div className="h-3 w-8 rounded bg-gray-300" />
                <div className="h-1 rounded bg-gray-800" />
                <div className="h-3 rounded bg-gray-300" />
                <div className="h-1 rounded bg-gray-800" />
                <div className="h-3 rounded bg-gray-300" />
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

export const VisualInitialTemplate: VisualTemplateComponent = (
    <div>
        <div className="flex gap-1">
            <div className="h-6 w-4/5 rounded bg-gray-800" />
            <div className="h-6 rounded border-1 w-1/5 border-black mb-2"/>
        </div>
        <div className="grid grid-cols-3 gap-1">
            <div className="h-2 col-span-2 rounded bg-gray-800" />
            <div className="h-2 rounded bg-gray-800" />
            <div className="h-2 col-span-2 rounded bg-gray-300" />
            <div className="h-2 rounded bg-gray-300" />
            <div className="h-2 col-span-2 rounded bg-gray-300" />
            <div className="h-2 rounded bg-gray-300" />
            <div className="h-2 col-span-2 rounded bg-gray-300" />
            <div className="h-2 rounded bg-gray-300" />
        </div>
    </div>
);

