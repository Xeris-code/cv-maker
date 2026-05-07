import { Projects, TooltipTranslations } from "@/lib/types";
import { BinButton, UiTooltip, EditButton, UiTextList } from "@/components/ui";
import { Link } from "lucide-react";

type ProjectPreviewCardProps = {
    project: Projects;
    translationTooltip: TooltipTranslations;
    onEdit: () => void;
    onDeleteProject: (id: number) => void;
};

export function ProjectPreviewCard({
    project, translationTooltip,
    onEdit, onDeleteProject
}: ProjectPreviewCardProps){
    return (
        <div className="ring-1 ring-gray-200 rounded-lg p-3">
            <div className="flex justify-between w-full">
                <div className="flex flex-col">
                    <span className="text-[14px] font-semibold">{project.name}</span>
                </div>
                <div className="flex gap-3 h-6">
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