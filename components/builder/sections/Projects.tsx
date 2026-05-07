import { AddButton, UiSectionHeader } from "@/components/ui";
import { CollectionState, Projects, UiProjectsTranslations, TooltipTranslations } from "@/lib/types";
import { useState } from "react";
import { ProjectEditingCard, ProjectPreviewCard } from "./cards";

type ProjectsSectionProps = {
    projects: CollectionState<Projects>;
    translationsProjects: UiProjectsTranslations;
    translationTooltip: TooltipTranslations;
    onProjectChange: (id: number, field: keyof Projects, value: string) => void;
    onAddProject: () => void;
    onDeleteProject: (id: number) => void;
};

export function ProjectsSection({
    projects,
    translationsProjects,
    translationTooltip,
    onProjectChange,
    onAddProject,
    onDeleteProject,
}: ProjectsSectionProps){

    const [editingId, setEditingId] = useState< number | null >(null);

    return <>
    <UiSectionHeader
        title={translationsProjects.title}
        description={translationsProjects.description}
        counter={projects.items.length}
        itemLabel={translationsProjects.items}
    />
    <div className="overflow-y-auto noScroll h-full border-gray-200 p-2">
        <div className="flex flex-col gap-5 p-5">
            {projects.items.map((p) => (
                (editingId === p.id)
                    ? <ProjectEditingCard
                        key={p.id}
                        project={p}
                        t={translationsProjects}
                        translationTooltip={translationTooltip}
                        onClose={() => setEditingId(null)}
                        onProjectChange={onProjectChange}
                    />
                    : <ProjectPreviewCard
                        key={p.id}
                        project={p}
                        translationTooltip={translationTooltip}
                        onEdit={() => setEditingId(p.id)}
                        onDeleteProject={onDeleteProject}  
                    />
            ))}
        </div>
    </div>
    <div className="flex items-center px-5 py-5 border-t-1 border-gray-200">
        <AddButton
            label={`+ ${translationsProjects.add}`}
            onClick={
                () => {onAddProject();
                const newId = projects.nextId;
                setEditingId(newId)}
            }
        />
    </div>
    </>
}; 