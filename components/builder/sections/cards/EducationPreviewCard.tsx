import { UiTooltip, EditButton, BinButton, UiTextList } from "@/components/ui";
import { Education, MonthOption, UiEducationTranslations, TooltipTranslations } from "@/lib/types";
import { GraduationCap, MapPin, Calendar, Minus } from "lucide-react";

type EducationPreviewCardProps = {
    education: Education;
    months: MonthOption[];
    translation: UiEducationTranslations;
    translationTooltip: TooltipTranslations;
    onEdit: () => void;
    onDeleteEducation: (id: number) => void;
};

export function EducationPreviewCard({
    education, months, translation, translationTooltip,
    onEdit, onDeleteEducation
}: EducationPreviewCardProps){
    
    const hasAdress = education.city || education.state;
    const hasStartDate = education.start.month !== 0 && education.start.year !== 0;
    const hasEndDate = education.end.month !== 0 && education.end.year !== 0;
    const hasDate = hasStartDate && hasEndDate;
    const hasEducation = education.degree || education.field;

    return (<div className="ring-1 ring-gray-200 rounded-lg p-3">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-[14px] font-semibold">{education.university}</span>
                    </div>
                    <div className="flex gap-3 h-6">
                            <UiTooltip label={translationTooltip.edit}>
                                <EditButton onClick={() => onEdit()}/>
                            </UiTooltip>
                        <UiTooltip label={translationTooltip.delete}>
                            <BinButton onClick={() => onDeleteEducation(education.id)}/>
                        </UiTooltip>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    {education.faculty && <span className="text-[12px]">{education.faculty}</span>}
                    {hasEducation && <div className="flex items-center gap-3">
                            <GraduationCap className="size-4"/>
                            <span className="text-[12px]">
                                {[education.degree, education.field].filter(Boolean).join(` ${translation.fields.degree.of} `)}
                            </span>
                        </div>    
                    }
                    {hasAdress && <div className="flex items-center gap-3">
                            <MapPin className="size-4"/>
                            <span className="text-[12px]">{[education.city, education.state].filter(Boolean).join(", ")}</span>
                        </div>
                    }
                    <div className="flex gap-2">
                        {hasStartDate &&
                            <div className="flex items-center gap-3">
                                <Calendar className="size-4"/>
                                <div className="flex gap-1 text-[12px] items-center">
                                    <span className="border border-gray-200 rounded px-1 text-center w-[80px]">{months[education.start.month].name}</span>
                                    
                                    <span className="border border-gray-200 rounded px-1 text-center w-[80px]">{education.start.year}</span>
                                </div>
                            </div>
                        }
                        {hasDate && <Minus className="text-gray-300"/>}
                        {hasEndDate &&
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1 text-[12px] items-center">
                                    <span className="border border-gray-200 rounded px-1 text-center w-[80px]">{months[education.end.month].name}</span>
                                    
                                    <span className="border border-gray-200 rounded px-1 text-center w-[80px]">{education.end.year}</span>
                                </div>
                            </div>
                        }
                    </div>
                    {education.description && <UiTextList text={education.description}/>}
                </div>
            </div>
    )
};