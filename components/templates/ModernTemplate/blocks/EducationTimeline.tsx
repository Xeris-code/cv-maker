
import { CvState, PreviewTranslations } from "@/lib/types";

export function EducationTimeline(
    { education, t }: { education: CvState["education"]; t: PreviewTranslations }
) {

    
    return (
        <section className="px-5">
            <h1 className="font-semibold mb-2 mt-4">{t.sections.education.name.toUpperCase()} </h1>

            <div className="mt-4 flex flex-col gap-4">
                {education.items.map((e) => (
                    <div key={e.id}> {e.faculty &&
                <div className="relative pl-6">
                    
                    {/* line */}
                    <div className="absolute left-[5px] top-2 bottom-0 w-[1px] bg-[#CBD5F5]" />

                    {/* dot (menší než work) */}
                    <div className="absolute left-0.5 top-1.5 size-2 rounded-full bg-[#60A5FA]" />

                    <div>
                    <p className="text-[12px] font-bold">
                        {e.university}
                    </p>
                    <p className="text-[12px]">
                        {e.faculty}
                    </p>

                    <p className="text-[11px] text-[#334155]">
                        {e.field}
                    </p>
                    {(e.start.year !== 0 || e.end.year !== 0) &&
                    <p className="text-[10px] text-[#64748B]">
                        {[e.start.year, e.end.year].filter(Boolean).join(" - ")}
                    </p>}
                    </div>
                    <div className="text-[11px] mt-1">
                        {e.description}
                    </div>
                </div>}
                </div>))}
            </div>
            <div className="mt-4 h-[1px] w-full bg-[#94A3B8]" />
        </section>
    );
};