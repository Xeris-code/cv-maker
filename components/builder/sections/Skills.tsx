import { AddButton, InputSelector, SectionTitle } from "@/components/ui";
import { Skill, SkillOption, SkillTranslations,
    SkillLevel, CollectionState, SkillOptionTranslations } from "@/lib/types";

type SkillsSectionProps = {
    title: string;
    skills: CollectionState<Skill>;
    translationsSkill: SkillTranslations;
    translationsOption: SkillOptionTranslations;
    addButtonLabel: string;
    onSkillChange: (id: number, field: keyof Skill, value: string | SkillLevel) => void;
    onAddSkill: () => void;
    onDeleteSkill: (id: number) => void;
};

export function SkillsSection({
    title,
    skills,
    translationsSkill,
    translationsOption,
    addButtonLabel,
    onSkillChange,
    onAddSkill,
    onDeleteSkill,
}: SkillsSectionProps){

    const skillOptions: SkillOption[] = [
        {value: 0, label: translationsOption[0]},
        {value: 1, label: translationsOption[1]},
        {value: 2, label: translationsOption[2]},
        {value: 3, label: translationsOption[3]},
        {value: 4, label: translationsOption[4]},
        {value: 5, label: translationsOption[5]},
    ];

    return <>
        <SectionTitle label={title}/>
        <div className="flex flex-col gap-3">
            {skills.items.map((skill) => (
                <InputSelector 
                    key={skill.id}
                    name={skill.name}
                    level={skill.level}
                    options={skillOptions}
                    placeholderName={translationsSkill.placeholder} 
                    onNameChange={e => onSkillChange(skill.id, "name", e.target.value)}
                    onLevelChange={e => onSkillChange(skill.id, "level", Number(e.target.value) as SkillLevel)}
                    onDelete={() => onDeleteSkill(skill.id)}
                />
            ))}
            <AddButton label={addButtonLabel} onClick={onAddSkill}/>
        </div>
    </>
};