import { AddButton, BinButton, Selector, UiSectionHeader, UiTooltip } from "@/components/ui";
import { useReorderList } from "@/lib/hooks";
import { Skill, SkillOption, UiSkillsTranslations,
    SkillLevel, CollectionState, SkillOptionTranslations, TooltipTranslations } from "@/lib/types";
import { GripVertical } from "lucide-react";
import { SkillIndicator } from "./indicators";

type SkillsSectionProps = {
    skills: CollectionState<Skill>;
    translationsSkill: UiSkillsTranslations;
    translationsOption: SkillOptionTranslations;
    translationTooltip: TooltipTranslations;
    onSkillChange: (id: number, field: keyof Skill, value: string | SkillLevel) => void;
    onAddSkill: () => void;
    onReorderSkills: (items: Skill[]) => void;
    onDeleteSkill: (id: number) => void;
};

export function SkillsSection({
    skills,
    translationsSkill,
    translationsOption,
    translationTooltip,
    onSkillChange,
    onAddSkill,
    onReorderSkills,
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

    const {
        draggingId,
        itemRefs,
        handleDragStart,
    } = useReorderList(skills.items, onReorderSkills)

    return (<>
        <UiSectionHeader
            title={translationsSkill.title}
            description={translationsSkill.description}
            counter={skills.items.length}
            itemLabel={translationsSkill.items}
        />
        <div className="overflow-y-auto noScroll h-full border-gray-200 p-2">
            <div className={`flex flex-col gap-5 p-5 ${draggingId !== null ? "select-none cursor-grab active:cursor-grabbing": ""}`}>
                {skills.items.map((skill) => (
                    <div key={skill.id} ref={(el) => {itemRefs.current[skill.id] = el}} className={`grid grid-cols-[max-content_1fr_1fr_max-content] justify-between gap-2 items-center w-full pl-1 pr-2 py-3 ring-1 ring-gray-200 rounded-lg ${draggingId === skill.id ? "opacity-50 scale-[0.98" : ""}`}>
                        <GripVertical onMouseDown={() => {handleDragStart(skill.id)}} className="size-6 text-gray-300 cursor-grab"/>
                        <input className="w-full text-[12px] p-1 border border-gray-200 rounded-lg px-3 py-2 transition hover:bg-[#F8FAFC] hover:border-blue-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" value={skill.name} placeholder={translationsSkill.placeholder} onChange={(e) => onSkillChange(skill.id, "name", e.target.value)}/>
                        <Selector 
                            item={skill}
                            options={skillOptions}
                            onChange={(id: number, value: number) => onSkillChange(id, "level", value as SkillLevel)}
                            indicator={(value: number) => <SkillIndicator level={value}/>}
                        />
                        <UiTooltip label={translationTooltip.delete}>
                            <BinButton onClick={() => onDeleteSkill(skill.id)}/>
                        </UiTooltip>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex items-center px-5 py-5 border-t-1 border-gray-200">
            <AddButton
                label={`+ ${translationsSkill.add}`}
                onClick={() => onAddSkill()}
            />
        </div>
    </>
    )
};