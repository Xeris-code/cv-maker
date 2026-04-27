import { useRef } from "react";
import { AllowedTemplateType, TemplateOption } from "@/lib/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TemplateSelectorProps = {
    templates: TemplateOption[];
    selectorActive: boolean;
    selectedTemplate: AllowedTemplateType;
    onTemplateChange: (template: AllowedTemplateType) => void;
};

export function TemplateSelector({ templates, selectorActive, selectedTemplate, onTemplateChange }: TemplateSelectorProps){
    
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const styles = {
        wrapper: `mx-auto max-w-6xl px-6 py-2 ${selectorActive ? null : "hidden"}`,
        mainBox: "rounded-2xl border border-gray-200 bg-white p-4 shadow-sm",
        scrollButton: "text-black flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 bg-white hover:bg-gray-50",
        templateLabel: "text-sm font-semibold text-gray-600 text-center",
    };

    function scrollLeft() {
        scrollRef.current?.scrollBy({ left: -240, behavior: "smooth" })
    };

    function scrollRight() {
        scrollRef.current?.scrollBy({ left: 240, behavior: "smooth" })
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.mainBox}>
                <div className="flex items-center gap-3">
                    <button type="button" className={styles.scrollButton} onClick={scrollLeft}><ChevronLeft/></button>
                    <div ref={scrollRef} className="flex flex-1 gap4 overflow-x-auto scroll-smooth">
                        {templates.map((template) => {
                            const isActive = selectedTemplate === template.type

                            return (
                            <button key={template.type} type="button" onClick={() => onTemplateChange(template.type)}
                                className={["min-w-[160px] rounded-2xl border p-3 text-left transition",
                                isActive
                                    ? "border-blue-500 ring-2 ring-blue-200"
                                    : "border-gray-200 hover:border-gray-300",].join(" ")}>
                                    <div className="mb-3 h-24 rounded-lg border bg-gray-50 p-2">
                                        {template.visual}
                                    </div>
                                    <div className={styles.templateLabel}>{template.label}</div>
                                </button>
                            )
                        })}
                    </div>
                    <button type="button" className={styles.scrollButton} onClick={scrollRight}><ChevronRight/></button>
                </div>
            </div>
        </div>
    );
}