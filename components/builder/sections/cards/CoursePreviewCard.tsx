import { CoursesCertificates, MonthOption, TooltipTranslations } from "@/lib/types";
import { UiTooltip, UiTextList, EditButton, BinButton } from "@/components/ui";
import { Calendar, Link, GripHorizontal } from "lucide-react";
import { Ref } from "react";

type CoursePreviewCardProps = {
    course: CoursesCertificates;
    months: MonthOption[];
    translationTooltip: TooltipTranslations;
    dragging: boolean;
    ref: Ref<HTMLDivElement>;
    onEdit: () => void;
    onDeleteCourse: (id: number) => void;
    handleDrag: (id: number) => void;
};

export function CoursePreviewCard({
    course, months, translationTooltip, ref, dragging,
    onEdit, onDeleteCourse, handleDrag
}: CoursePreviewCardProps){
    
    const hasDate = course.date.month !== 0 && course.date.year !== 0
    
    return <div ref={ref} className={`ring-1 ring-gray-200 rounded-lg p-3 ${dragging ? "opacity-50 scale-[0.98]" : ""}`}>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-[14px] font-semibold">{course.name}</span>
                    </div>
                    <div className="flex gap-3">
                        <GripHorizontal onMouseDown={() => handleDrag(course.id)} className="size-6 text-gray-300 cursor-grab"/>
                        <UiTooltip label={translationTooltip.edit}>
                            <EditButton onClick={() => onEdit()}/>
                        </UiTooltip>
                        <UiTooltip label={translationTooltip.delete}>
                            <BinButton onClick={() => onDeleteCourse(course.id)}/>
                        </UiTooltip>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    {course.org && <span className="text-[12px]">{course.org}</span>}
                    {hasDate &&
                        <div className="flex items-center gap-3">
                            <Calendar className="size-4"/>
                            <div className="flex gap-1 text-[12px] items-center">
                                <span className="border border-gray-200 rounded px-1 text-center w-[80px]">{months[course.date.month].name}</span>
                                
                                <span className="border border-gray-200 rounded px-1 text-center w-[80px]">{course.date.year}</span>
                            </div>
                        </div>
                    }
                    {course.url && <div className="flex items-center gap-3">
                        <Link className="size-4"/>
                        <a href={course.url} target="_blank" className="text-[12px] text-[#3b82f6] hover:text-[#2563eb]">{course.url}</a>
                    </div>}
                    {course.description && <UiTextList text={course.description}/>}
                </div>
    </div>
};