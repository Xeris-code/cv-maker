
import { CvState, PreviewTranslations } from "@/lib/types";

export function CoursesBlock(
    { courses, t }: { courses: CvState["courses"]; t: PreviewTranslations }
) {

    
    
    return (
        <section className="px-5">
            <h1 className="font-semibold mb-2 mt-4">{t.sections.courses.name.toUpperCase()} </h1>

            <div className="mt-3 flex flex-col gap-3 px-1">
                {courses.items.map((c) => (
                    
                <div key={c.id} className="border-l border-[#CBD5F5] pl-4">

                    <p className="text-[12px]">
                        <span className="font-bold">{c.name}</span><span className="text-[10px]">{c.url ? " | " : ""}</span><a className="text-[10px] text-[#3B82F6]">{c.url}</a>
                    </p>

                    {c.org || c.date.year ? <p className="text-[10px] text-[#64748B]">
                    {[c.org, c.date.year].filter(Boolean).join(" • ")}
                    </p> : null}
                    <div className="text-[11px] mt-1">
                        {c.description}
                    </div>
                </div>
                ))}
            </div>
            <div className="mt-4 h-[1px] w-full bg-[#94A3B8]" />
        </section>
    );
};