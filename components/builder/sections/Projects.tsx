import { AddButton, UiSectionHeader } from "@/components/ui";
import { CollectionState, Projects, UiProjectsTranslations, TooltipTranslations } from "@/lib/types";
import { useState } from "react";
import { ProjectEditingCard, ProjectPreviewCard } from "./cards";
import { useReorderList } from "@/lib/hooks";

type ProjectsSectionProps = {
    projects: CollectionState<Projects>;
    translationsProjects: UiProjectsTranslations;
    translationTooltip: TooltipTranslations;
    onProjectChange: (id: number, field: keyof Projects, value: string) => void;
    onAddProject: () => void;
    onDeleteProject: (id: number) => void;
    onReorderProjects: (items: Projects[]) => void;
};

export function ProjectsSection({
    projects,
    translationsProjects,
    translationTooltip,
    onProjectChange,
    onAddProject,
    onDeleteProject,
    onReorderProjects,
}: ProjectsSectionProps){

    const [editingId, setEditingId] = useState< number | null >(null);

    const {
        draggingId,
        itemRefs,
        handleDragStart
    } = useReorderList(projects.items, onReorderProjects)

    return <>
    <UiSectionHeader
        title={translationsProjects.title}
        description={translationsProjects.description}
        counter={projects.items.length}
        itemLabel={translationsProjects.items}
    />
    <div className="overflow-y-auto noScroll h-full border-gray-200 p-2">
        <div className={`flex flex-col gap-5 p-5 ${draggingId !== null ? "select-none cursor-grab active:cursor-grabbing": ""}`}>
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
                        ref={(el) => {itemRefs.current[p.id] = el}}
                        key={p.id}
                        project={p}
                        translationTooltip={translationTooltip}
                        dragging={draggingId===p.id}
                        onEdit={() => setEditingId(p.id)}
                        onDeleteProject={onDeleteProject}
                        handleDrag={handleDragStart}
                    />
            ))}
        </div>
    </div>
    <div className="flex items-center px-5 py-5 border-t border-gray-200">
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