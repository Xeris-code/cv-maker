
import { CvState, TranslationSchema } from "@/lib/types";
import { TextList } from "@/components/templates/ModernTemplate/blocks";

export function WorkTimeline(
    { work, t }: { work: CvState["work"]; t: TranslationSchema }
) {

    function formatWorkDate(date: { month: number; year: number }) {
        if (!date.month && !date.year) return "";

        if (!date.month) return String(date.year);
        if (!date.year) return date.month;

        return `${date.month}/${date.year}`;
    }
    
    return (
        <section className="px-5">
        <h1 className="font-semibold mb-2 mt-4">{t.sections.common.work.toUpperCase()} </h1>

        <div className="mt-4 flex flex-col gap-4">
            {work.items.map((item) => (
                <div key={item.id} > {(item.position || item.company) &&
                <div className="relative pl-6">
                    {/* line */}
                    <div className="absolute left-[5px] top-1 bottom-[-18px] w-[1px] bg-[#94A3B8]" />

                    {/* dot */}
                    <div className="absolute left-0 top-0.5 size-3 rounded-full bg-[#3B82F6]" />

                    <div>
                    <h3 className="text-[12px] font-bold text-[#0F172A]">
                        {item.position}
                    </h3>

                    <div className="mt-1 flex items-center gap-2 text-[10px] text-[#334155]">
                        <span className="font-semibold">{item.company}</span>
                        {(item.city || item.state) && <>
                            <span>|</span>
                            <span>{[item.city, item.state].filter(Boolean).join(", ")}</span>
                        </>
                        }

                        {(item.start.year || item.end.year || item.present) && (
                        <>
                            <span>|</span>
                            <span>
                            {formatWorkDate(item.start)} {" - "}
                            {item.present ? t.fields.work.present : formatWorkDate(item.end)}
                            </span>
                        </>
                        )}
                    </div>

                    {item.description && (
                        <div className="mt-2">
                        <TextList text={item.description} />
                        </div>
                    )}
                    </div>
                </div>
                }</div>
            ))}
        </div>
        <div className="mt-8 h-[1px] w-full bg-[#94A3B8]" />
        </section>
    );
};