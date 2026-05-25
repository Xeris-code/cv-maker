import { useState } from "react";
import { AddButton, UiSectionHeader } from "@/components/ui";
import { CoursesCertificates, CollectionState, UiCoursesTranslations, YearOption, MonthOption, TooltipTranslations } from "@/lib/types"
import { CourseEditingCard, CoursePreviewCard } from "./cards";
import { useReorderList } from "@/lib/hooks";

type CourseSectionProps = {
    courses: CollectionState<CoursesCertificates>;
    translationCourse: UiCoursesTranslations;
    translationTooltip: TooltipTranslations;
    monthDateOptions: MonthOption[];
    yearDateOptions: YearOption[];
    onCourseChange: (id: number, field: keyof CoursesCertificates, value: CoursesCertificates[keyof CoursesCertificates]) => void;
    onAddCourse: () => void;
    onDeleteCourse: (id: number) => void;
    onReorderCourse: (items: CoursesCertificates[]) => void;
};

export function CourseSection({
    courses,
    translationCourse,
    translationTooltip,
    monthDateOptions,
    yearDateOptions,
    onCourseChange,
    onAddCourse,
    onDeleteCourse,
    onReorderCourse,
}: CourseSectionProps){

    const [editingId, setEditingId] = useState< number | null >(null);

    const {
        draggingId,
        itemRefs,
        handleDragStart
    } = useReorderList(courses.items, onReorderCourse)

    return <>
        <UiSectionHeader
            title={translationCourse.title}
            description={translationCourse.description}
            counter={courses.items.length}
            itemLabel={translationCourse.items}
        />
        <div className="overflow-y-auto noScroll h-full border-gray-200 p-2">
        <div className={`flex flex-col gap-5 p-5 ${draggingId !== null ? "select-none cursor-grab active:cursor-grabbing": ""}`}>
            {courses.items.map((c) => (
                (editingId === c.id)
                    ? <CourseEditingCard
                        key={c.id}
                        course={c}
                        t={translationCourse}
                        translationTooltip={translationTooltip}
                        monthOptions={monthDateOptions}
                        yearOptions={yearDateOptions}
                        onClose={() => setEditingId(null)}
                        onCourseChange={onCourseChange}
                    />
                    : <CoursePreviewCard
                        ref={(el) => {itemRefs.current[c.id] = el}}
                        key={c.id}
                        course={c}
                        translationTooltip={translationTooltip}
                        dragging={draggingId===c.id}
                        months={monthDateOptions}
                        onEdit={() => setEditingId(c.id)}
                        onDeleteCourse={onDeleteCourse} 
                        handleDrag={handleDragStart}
                    />
            ))}
        </div>
    </div>
        <div className="flex items-center px-5 py-5 border-t border-gray-200">
            <AddButton
                label={`+ ${translationCourse.add}`}
                onClick={
                    () => {onAddCourse();
                    const newId = courses.nextId;
                    setEditingId(newId)}
                }
            />
        </div>
    </>
}