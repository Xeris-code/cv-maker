import { useState } from "react";
import { AddButton, UiSectionHeader } from "@/components/ui";
import { WorkExperience, CollectionState, UiWorkTranslations, YearOption, MonthOption, TooltipTranslations } from "@/lib/types";
import { WorkEditingCard, WorkPreviewCard } from "./cards";
import { useReorderList } from "@/lib/hooks";

type WorkSectionProps = {
    work: CollectionState<WorkExperience>;
    translationWork: UiWorkTranslations;
    translationTooltip: TooltipTranslations;
    monthDateOptions: MonthOption[];
    yearDateOptions: YearOption[];
    onWorkChange: (id: number, field: keyof WorkExperience, value: WorkExperience[keyof WorkExperience]) => void;
    onAddWork: () => void;
    onDeleteWork: (id: number) => void;
    onReorderSkills: (items: WorkExperience[]) => void;
};

export function WorkSection({
    work,
    translationWork,
    translationTooltip,
    monthDateOptions,
    yearDateOptions,
    onWorkChange,
    onAddWork,
    onDeleteWork,
    onReorderSkills,
}: WorkSectionProps){

    const [editingId, setEditingId] = useState< number | null >(null);

    const {
            draggingId,
            itemRefs,
            handleDragStart,
        } = useReorderList(work.items, onReorderSkills)

    return <>
            <UiSectionHeader
                title={translationWork.title}
                description={translationWork.description}
                counter={work.items.length}
                itemLabel={translationWork.items}
            />
            <div className="overflow-y-auto noScroll h-full border-gray-200 p-2">
            <div className={`flex flex-col gap-5 p-5 ${draggingId !== null ? "select-none cursor-grab active:cursor-grabbing": ""}`}>
                {work.items.map((w) => (
                    (editingId === w.id)
                        ? <WorkEditingCard
                            key={w.id}
                            work={w}
                            t={translationWork}
                            translationTooltip={translationTooltip}
                            monthOptions={monthDateOptions}
                            yearOptions={yearDateOptions}
                            onClose={() => setEditingId(null)}
                            onWorkChange={onWorkChange}
                        />
                        : <WorkPreviewCard
                            ref={(el) => {itemRefs.current[w.id] = el}}
                            key={w.id}
                            work={w}
                            months={monthDateOptions}
                            translationTooltip={translationTooltip}
                            dragging={draggingId===w.id}
                            onEdit={() => setEditingId(w.id)}
                            onDeleteWork={onDeleteWork}
                            handleDrag={handleDragStart}
                        />
                ))}
            </div>
        </div>
            <div className="flex items-center px-5 py-5 border-t border-gray-200">
                <AddButton
                    label={`+ ${translationWork.add}`}
                    onClick={
                        () => {onAddWork();
                        const newId = work.nextId;
                        setEditingId(newId)}
                    }
                />
            </div>
        </>
    }