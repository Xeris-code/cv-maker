import { Projects } from "@/lib/types";

export function ProjectItem({
    project
}: {
    project: Projects
}){
    return (
        <div className="border-l-2 border-[#3B82F6] pl-4 ml-5">
            <p className="text-[12px]">
                <span className="font-bold">{project.name}</span>
                <span className="text-[10px]">{project.url ? " | " : ""}</span>
                <a className="text-[10px] text-[#3B82F6]">{project.url}</a>
            </p>

            <p className="text-[10px] text-[#64748B]">
                {project.tech}
            </p>

            <p className="mt-1 text-[11px] text-[#0F172A]">
                {project.description}
            </p>
        </div>
    )
}