import { Education } from "@/lib/types"

import { GraduationCap, MapPinned, University } from "lucide-react"

type Props = {
    education: Education
}


export default function AddEducation({
    education
}: Props){
    return <div className="grid grid-cols-5 mt-8 p-1 gap-2">
        <div className="col-span-1 border-r-1 border-[#334155] pl-2">
            {education.start.year 
                ? <div>
                    <p className="font-bold">{education.start.year}</p>
                </div>
                : null
            }
            {education.end.year || education.present
                ? <div>{!education.present 
                            ? <p className="text-sm">{education.end.year}</p>
                            : <p className="text-sm">Currently</p>}
                </div>
                :null}
        </div>
        <div className="col-span-4 pl-1">
            {education.faculty ? <p className="font-bold text-2xl pt-1 pb-1">{education.faculty}</p> : null}
            {education.university ? <div className="flex gap-2 text-sm pt-1 pb-1"><University className="shrink-0 relative bottom-1"/><label>{education.university}</label></div> : null}
            {education.field ? <div className="flex gap-2 text-sm pt-1 pb-1"><GraduationCap className="shrink-0 relative bottom-0.5"/><label>{education.field}</label></div> : null}
            {education.city || education.state
                ? <div className="flex gap-2 text-sm pt-1 pb-1"><MapPinned className="shrink-0"/><label className="pt-1">{education.city}{education.city && education.state ? "," : ""} {education.state}</label></div>
                : null}
            {education.degree && !education.present ? <p className="text-xs pb-2 pt-2">Completed {education.degree} degree.</p> : null}
            {education.description ? <p className="whitespace-pre-line text-sm">{education.description}</p> : null}
            
        </div>
    </div>
}