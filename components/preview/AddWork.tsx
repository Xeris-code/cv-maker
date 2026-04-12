import { WorkExperience } from "@/lib/types"

import { Building2, MapPinned } from "lucide-react"

type Props = {
    work: WorkExperience
}


export default function AddWork({
    work
}: Props){
    return <div className="grid grid-cols-5 mt-8 p-1 gap-2">
        <div className="col-span-1 border-r-1 border-[#334155] pl-2">
            {work.start.month || work.start.year 
                ? <div>
                    <p className="font-bold">{work.start.month.substring(0, 3)} {work.start.year}</p>
                </div>
                : null
            }
            {work.end.month || work.end.year || work.present
                ? <div>{!work.present 
                            ? <p className="text-sm">{work.end.month.substring(0, 3)} {work.end.year}</p>
                            : <p className="text-sm">Currently</p>}
                </div>
                :null}
        </div>
        <div className="col-span-4 pl-1">
            {work.position ? <p className="font-bold text-2xl pt-1 pb-1">{work.position}</p> : null}
            {work.company ? <div className="flex gap-2 text-sm pt-1 pb-1"><Building2 className="shrink-0 relative bottom-1"/><label>{work.company}</label></div> : null}
            {work.city || work.state
                ? <div className="flex gap-2 text-sm pt-1 pb-1"><MapPinned className="shrink-0"/><label className="pt-1">{work.city}{work.city && work.state ? "," : ""} {work.state}</label></div>
                : null}
            {work.description ? <p className="whitespace-pre-line pt-2 text-sm">{work.description}</p> : null}
            {work.tasks
                ? <ul className="list-disc pl-5 pt-1">
                    {work.tasks.map((t: string, index: number) => 
                        t
                            ? <li key={`task_${index}`} className="text-sm">{t}</li>
                            : null)}
                </ul>
                : null}
        </div>
    </div>
}