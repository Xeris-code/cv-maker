import { useRef } from "react";
import { AllowedTemplateType, TemplateOption } from "@/lib/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TemplateSelectorProps = {
  templates: TemplateOption[];
  selectorActive: boolean;
  selectedTemplate: AllowedTemplateType;
  onTemplateChange: (template: AllowedTemplateType) => void;
};

export function TemplateSelector({
  templates,
  selectorActive,
  selectedTemplate,
  onTemplateChange,
}: TemplateSelectorProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const styles = {
    wrapper: `mx-auto max-w-6xl px-6 py-3 ${selectorActive ? "" : "hidden"}`,
    mainBox: "rounded-2xl border border-gray-200 bg-white/95 p-4 shadow-lg",
    scrollButton:
      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-md",
    templateLabel: "mt-2 text-center text-sm font-semibold",
  };

  function scrollLeft() {
    scrollRef.current?.scrollBy({ left: -240, behavior: "smooth" });
  }

  function scrollRight() {
    scrollRef.current?.scrollBy({ left: 240, behavior: "smooth" });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainBox}>
        <div className="flex items-center gap-3">
          <button type="button" className={styles.scrollButton} onClick={scrollLeft}>
            <ChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="flex flex-1 gap-4 overflow-x-auto scroll-smooth py-1"
          >
            {templates.map((template) => {
              const isActive = selectedTemplate === template.type;

              return (
                <button
                  key={template.type}
                  type="button"
                  onClick={() => onTemplateChange(template.type)}
                  className={[
                    "group relative min-w-[160px] rounded-2xl border p-3 text-left transition-all duration-200",
                    "hover:-translate-y-1 hover:shadow-md",
                    isActive
                      ? "border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200"
                      : "border-gray-200 bg-white hover:border-blue-300",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "mb-3 h-24 rounded-xl border p-2 transition",
                      isActive
                        ? "border-blue-200 bg-white"
                        : "border-gray-200 bg-gray-50 group-hover:bg-white",
                    ].join(" ")}
                  >
                    {template.visual}
                  </div>

                  <div
                    className={[
                      styles.templateLabel,
                      isActive
                        ? "text-blue-600"
                        : "text-slate-700 group-hover:text-blue-600",
                    ].join(" ")}
                  >
                    {template.label}
                  </div>
                </button>
              );
            })}
          </div>

          <button type="button" className={styles.scrollButton} onClick={scrollRight}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}