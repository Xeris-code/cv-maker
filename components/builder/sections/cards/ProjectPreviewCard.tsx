import { Projects, TooltipTranslations } from "@/lib/types";
import { BinButton, UiTooltip, EditButton, UiTextList } from "@/components/ui";
import { GripHorizontal, Link } from "lucide-react";
import { Ref } from "react";

type ProjectPreviewCardProps = {
    project: Projects;
    translationTooltip: TooltipTranslations;
    dragging: boolean;
    ref: Ref<HTMLDivElement>;
    onEdit: () => void;
    onDeleteProject: (id: number) => void;
    handleDrag: (id: number) => void;
};

export function ProjectPreviewCard({
    project, translationTooltip, ref, dragging,
    onEdit, onDeleteProject, handleDrag
}: ProjectPreviewCardProps){
    return (
        <div ref={ref} className={`ring-1 ring-gray-200 rounded-lg p-3 ${dragging ? "opacity-50 scale-[0.98]" : ""}`}>
            <div className="flex justify-between w-full">
                <div className="flex flex-col">
                    <span className="text-[14px] font-semibold">{project.name}</span>
                </div>
                <div className="flex gap-3 h-6">
                    <GripHorizontal onMouseDown={() => handleDrag(project.id)} className="size-6 text-gray-300 cursor-grab"/>
                    <UiTooltip label={translationTooltip.edit}>
                        <EditButton onClick={() => onEdit()}/>
                    </UiTooltip>
                    <UiTooltip label={translationTooltip.delete}>
                        <BinButton onClick={() => onDeleteProject(project.id)}/>
                    </UiTooltip>
                </div>
            </div>
            
            <div className="flex flex-col gap-3">
                {project.tech && <span className="text-[12px]">{project.tech}</span>}
                {project.url && <div className="flex items-center gap-3">
                    <Link className="size-3 shrink-0"/>
                    <a href={project.url} target="_blank" className="text-[12px] text-[#3b82f6] hover:text-[#2563eb]">{project.url}</a>
                </div>}
                {project.description && <UiTextList text={project.description}/>}
            </div>
               
        </div>
    );
};