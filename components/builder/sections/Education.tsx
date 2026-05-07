import { useState } from "react";
import { AddButton, UiSectionHeader } from "@/components/ui";
import { Education, CollectionState, UiEducationTranslations, YearOption, MonthOption, TooltipTranslations } from "@/lib/types"
import { EducationEditingCard, EducationPreviewCard } from "./cards";

type EducationSectionProps = {
    education: CollectionState<Education>;
    translationEducation: UiEducationTranslations;
    translationTooltip: TooltipTranslations
    monthDateOptions: MonthOption[];
    yearDateOptions: YearOption[];
    onEducationChange: (id: number, field: keyof Education, value: Education[keyof Education]) => void;
    onAddEducation: () => void;
    onDeleteEducation: (id: number) => void;
};

export function EducationSection({
    education,
    translationEducation,
    translationTooltip,
    monthDateOptions,
    yearDateOptions,
    onEducationChange,
    onAddEducation,
    onDeleteEducation,
}: EducationSectionProps){

    const [editingId, setEditingId] = useState< number | null >(null);

    return <>
        <UiSectionHeader
            title={translationEducation.title}
            description={translationEducation.description}
            counter={education.items.length}
            itemLabel={translationEducation.items}
        />
        <div className="overflow-y-auto noScroll h-full border-gray-200 p-2">
        <div className="flex flex-col gap-5 p-5">
            {education.items.map((e) => (
                (editingId === e.id)
                    ? <EducationEditingCard
                        key={e.id}
                        education={e}
                        t={translationEducation}
                        translationTooltip={translationTooltip}
                        monthOptions={monthDateOptions}
                        yearOptions={yearDateOptions}
                        onClose={() => setEditingId(null)}
                        onEducationChange={onEducationChange}
                    />
                    : <EducationPreviewCard
                        key={e.id}
                        education={e}
                        months={monthDateOptions}
                        translation={translationEducation}
                        translationTooltip={translationTooltip}
                        onEdit={() => setEditingId(e.id)}
                        onDeleteEducation={onDeleteEducation}  
                    />
            ))}
        </div>
    </div>
        <div className="flex items-center px-5 py-5 border-t-1 border-gray-200">
            <AddButton
                label={`+ ${translationEducation.add}`}
                onClick={
                    () => {onAddEducation();
                    const newId = education.nextId;
                    setEditingId(newId)}
                }
            />
        </div>
    </>
}