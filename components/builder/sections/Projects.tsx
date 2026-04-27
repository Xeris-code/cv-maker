import { AddButton, DeleteButton, SectionTitle, CollectionHeader, Input, TextArea } from "@/components/ui";
import { CollectionState, Projects, ProjectsTranslations } from "@/lib/types";

type ProjectsSectionProps = {
    title: string;
    projects: CollectionState<Projects>;
    addButtonLabel: string;
    translationsProjects: ProjectsTranslations;
    onProjectChange: (id: number, field: keyof Projects, value: string) => void;
    onAddProject: () => void;
    onDeleteProject: (id: number) => void;
};


export function ProjectsSection({
    title,
    projects,
    addButtonLabel,
    translationsProjects,
    onProjectChange,
    onAddProject,
    onDeleteProject,
}: ProjectsSectionProps){

    return <>
        <SectionTitle label={title}/>
        <div className="flex flex-col gap-3">
            {projects.items.map((project, index: number) => (
                <div key={project.id} className="flex flex-col w-full gap-2 p-2 border">
                    <CollectionHeader label={`${index + 1}. ${translationsProjects.name}`}>
                        <DeleteButton onClick={() => onDeleteProject(project.id)}/>
                    </CollectionHeader>

                    <Input value={project.name} placeholder={translationsProjects.title.placeholder} onValueChange={e => onProjectChange(project.id, "name", e.target.value)}/>
                    <Input value={project.tech} placeholder={translationsProjects.technology.placeholder} onValueChange={e => onProjectChange(project.id, "tech", e.target.value)}/>
                    <Input value={project.url} placeholder={translationsProjects.link.placeholder} onValueChange={e => onProjectChange(project.id, "url", e.target.value)}/>
            
                    <TextArea 
                        value={project.description}
                        placeholder={translationsProjects.describe.placeholder}
                        onValueChange={e => onProjectChange(project.id, "description", e.target.value)}
                    />
            </div>
            ))}
            <AddButton label={addButtonLabel} onClick={onAddProject}/>
        </div>
    </>
};