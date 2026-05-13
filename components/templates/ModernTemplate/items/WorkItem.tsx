import { PreviewTranslations, WorkExperience } from "@/lib/types";
import { TextList } from "../blocks";

export function WorkItem(
    {work, t}:{
    work: WorkExperience,
    t: PreviewTranslations,}
){

    function formatWorkDate(
        date: { month: number; year: number }
    ) {
        if (!date.month && !date.year) return "";

        if (!date.month) return String(date.year);
        if (!date.year) return `${date.month > 9 ? "" : 0}${date.month}`;

        return `${date.month > 9 ? "" : 0}${date.month}/${date.year}`;
    }

    return <div className="px-5">
        {(work.position || work.company) &&
            <div className="relative pl-6">
                {/* line */}
                <div className="absolute left-[5px] top-1 bottom-[-18px] w-[1px] bg-[#94A3B8]" />

                {/* dot */}
                <div className="absolute left-0 top-0.5 size-3 rounded-full bg-[#3B82F6]" />

                <div>
                <h3 className="text-[12px] font-bold text-[#0F172A]">
                    {work.position}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-[10px] text-[#334155]">
                    <span className="font-semibold">{work.company}</span>
                    {(work.city || work.state) && <>
                        <span>|</span>
                        <span>{[work.city, work.state].filter(Boolean).join(", ")}</span>
                    </>
                    }

                    {(work.start.year || work.end.year || work.present) && (
                    <>
                        <span>|</span>
                        <span>
                        {formatWorkDate(work.start)} {" - "}
                        {work.present ? t.sections.work.present : formatWorkDate(work.end)}
                        </span>
                    </>
                    )}
                </div>

                {work.description && (
                    <div className="mt-2">
                    <TextList text={work.description} />
                    </div>
                )}
                </div>
            </div>
        }
    </div>
}