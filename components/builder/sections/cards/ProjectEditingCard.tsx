import { UiInputField, UiTooltip, CheckButton, UiTextArea } from "@/components/ui"
import { Projects, UiProjectsTranslations, TooltipTranslations } from "@/lib/types"

type ProjectEditingCardProps = {
    project: Projects,
    t: UiProjectsTranslations,
    translationTooltip: TooltipTranslations,
    onClose: () => void,
    onProjectChange: (id: number, field: keyof Projects, value: string) => void
}

export function ProjectEditingCard({
    project, t, translationTooltip,
    onClose, onProjectChange
}: ProjectEditingCardProps){

    return <div className="ring-1 ring-blue-400 rounded-lg p-3 flex flex-col gap-3">
        <UiInputField
            value={project.name}
            placeholder={t.fields.title.placeholder}
            onChange={e => onProjectChange(project.id, "name", e.target.value)}
            buttonChildren={
                <UiTooltip label={translationTooltip.confirm}>
                    <CheckButton onClick={() => onClose()}/>
                </UiTooltip>}
        />

        <UiInputField
            label={t.fields.technology.name}
            value={project.tech}
            placeholder={t.fields.technology.placeholder}
            onChange={e => onProjectChange(project.id, "tech", e.target.value)}
        />

        <UiInputField
            label={t.fields.link.name}
            value={project.url}
            placeholder={t.fields.link.placeholder}
            onChange={e => onProjectChange(project.id, "url", e.target.value)}
        />

        <UiTextArea
            label={t.fields.describe.name}
            value={project.description}
            placeholder={t.fields.describe.placeholder}
            onValueChange={e => onProjectChange(project.id, "description", e.target.value)}
        />
        
    </div>
};