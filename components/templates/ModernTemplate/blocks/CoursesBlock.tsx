
import { CvState, TranslationSchema } from "@/lib/types";

export function CoursesBlock(
    { courses, t }: { courses: CvState["courses"]; t: TranslationSchema }
) {

    
    return (
        <section className="px-5">
            <h1 className="font-semibold mb-2 mt-4">{t.sections.common.courses.toUpperCase()} </h1>

            <div className="mt-3 flex flex-col gap-3 px-1">
                {courses.items.map((c) => (
                <div key={c.id} className="border-l border-[#CBD5F5] pl-4">
                    <p className="text-[12px] font-semibold">
                    {c.name}
                    </p>

                    <p className="text-[10px] text-[#64748B]">
                    {c.org} • {c.start.year}
                    </p>
                </div>
                ))}
            </div>
            <div className="mt-4 h-[1px] w-full bg-[#94A3B8]" />
        </section>
    );
};