import { Projects } from "@/lib/types"

import { Code } from "lucide-react"

type Props = {
    project: Projects
}


export default function AddProject({
    project
}: Props){
    return <div className="grid grid-cols-5 mt-1 p-1 gap-2">
        <div className="col-span-4 pl-1">
            {project.name ? <p className="font-bold text-lg pt-1 pb-1">{project.name}</p> : null}
            {project.tech ? <div className="flex gap-2 text-sm"><Code className="shrink-0"/><label className="pt-0.5">{project.tech}</label></div> : null}
            {project.description ? <p className="whitespace-pre-line pt-2 text-sm">{project.description}</p> : null}
            {project.url
                ? <a className="text-[#3b82f6] hover:underline text-sm" rel="noopener noreferrer" target="_blank"
                    href={project.url.startsWith("http")
                        ? project.url
                        : `https://${project.url}`
                    }>View project.</a>
                : null
            }
        </div>
    </div>
}