import { CoursesCertificates } from "@/lib/types"

type Props = {
    course: CoursesCertificates
}


export default function AddCourse({
    course
}: Props){
    return <div className="grid grid-cols-5 mt-8 p-1 gap-2">
        <div className="col-span-1 border-r-1 border-[#334155] pl-2">
            {course.start.month || course.start.year 
                ? <div>
                    <p className="font-bold">{course.start.month.substring(0, 3)} {course.start.year}</p>
                </div>
                : null
            }
            {course.end.month || course.end.year
                ? <div>
                    <p className="text-sm">{course.end.month.substring(0, 3)} {course.end.year}</p>
                </div>
                :null}
        </div>
        <div className="col-span-4 pl-1">
            {course.name ? <p className="font-bold text-lg pt-1 pb-1">{course.name}</p> : null}
            {course.org ? <div className="flex gap-2 text-sm"><label>{course.org}</label></div> : null}
            {course.description ? <p className="whitespace-pre-line pt-2 text-sm">{course.description}</p> : null}
            {course.url
                ? <a className="text-[#3b82f6] hover:underline text-sm" rel="noopener noreferrer" target="_blank"
                    href={course.url.startsWith("http")
                        ? course.url
                        : `https://${course.url}`
                    }>Link</a>
                : null
            }
        </div>
    </div>
}