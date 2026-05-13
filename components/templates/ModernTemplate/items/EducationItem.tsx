import { Education } from "@/lib/types";

export function EducationItem(
    {education}
    :{education: Education}
){
    return (
        <div className="px-5">
            {education.faculty &&
                <div className="relative pl-6">
                    
                    {/* line */}
                    <div className="absolute left-[5px] top-2 bottom-0 w-[1px] bg-[#CBD5F5]" />

                    {/* dot (menší než work) */}
                    <div className="absolute left-0.5 top-1.5 size-2 rounded-full bg-[#60A5FA]" />

                    <div>
                    <p className="text-[12px] font-bold">
                        {education.university}
                    </p>
                    <p className="text-[12px]">
                        {education.faculty}
                    </p>

                    <p className="text-[11px] text-[#334155]">
                        {education.field}
                    </p>
                    {(education.start.year !== 0 || education.end.year !== 0) &&
                    <p className="text-[10px] text-[#64748B]">
                        {[education.start.year, education.end.year].filter(Boolean).join(" - ")}
                    </p>}
                    </div>
                    <div className="text-[11px] mt-1">
                        {education.description}
                    </div>
                </div>}
        </div>
    )
}