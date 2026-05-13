import { CoursesCertificates } from "@/lib/types";

export function CourseItem({
    course
}: {
    course: CoursesCertificates,
}){

    return (
        <div className="border-l border-[#CBD5F5] pl-4 ml-5">
            <p className="text-[12px]">
                <span className="font-bold">{course.name}</span>
                <span className="text-[10px]">{course.url ? " | " : ""}</span>
                <a className="text-[10px] text-[#3B82F6]">{course.url}</a>
            </p>

            {course.org || course.date.year
                ? <p className="text-[10px] text-[#64748B]">
                    {[course.org, course.date.year].filter(Boolean).join(" • ")}
                </p>
                : null}
            <div className="text-[11px] mt-1">
                {course.description}
            </div>
        </div>
    )
}