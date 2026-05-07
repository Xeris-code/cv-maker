import { WorkExperience, MonthOption, TooltipTranslations } from "@/lib/types";
import { UiTooltip, EditButton, BinButton, UiTextList } from "@/components/ui";
import { MapPin, Calendar, Minus } from "lucide-react";

type WorkPreviewCardProps = {
    work: WorkExperience;
    months: MonthOption[];
    translationTooltip: TooltipTranslations;
    onEdit: () => void;
    onDeleteWork: (id: number) => void;
}

export function WorkPreviewCard({
    work, months, translationTooltip, onEdit, onDeleteWork
}: WorkPreviewCardProps){
    
    const hasAdress = work.city || work.state;
    const hasStartDate = work.start.month !== 0 && work.start.year !== 0;
    const hasEndDate = work.end.month !== 0 && work.end.year !== 0;
    const hasDate = hasStartDate && hasEndDate;

    return (<div className="ring-1 ring-gray-200 rounded-lg p-3">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-[14px] font-semibold">{work.position}</span>
                    </div>
                    <div className="flex gap-3 h-6">
                        <UiTooltip label={translationTooltip.edit}>
                            <EditButton onClick={() => onEdit()}/>
                        </UiTooltip>
                        <UiTooltip label={translationTooltip.delete}>
                            <BinButton onClick={() => onDeleteWork(work.id)}/>
                        </UiTooltip>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    {work.company && <span className="text-[12px]">{work.company}</span>}
                    {hasAdress && <div className="flex items-center gap-3">
                            <MapPin className="size-4"/>
                            <span className="text-[12px]">{[work.city, work.state].filter(Boolean).join(", ")}</span>
                        </div>
                    }
                    <div className="flex gap-2">
                        {hasStartDate &&
                            <div className="flex items-center gap-3">
                                <Calendar className="size-4"/>
                                <div className="flex gap-1 text-[12px] items-center">
                                    <span className="border border-gray-200 rounded px-1 text-center w-[80px]">{months[work.start.month].name}</span>
                                    
                                    <span className="border border-gray-200 rounded px-1 text-center w-[80px]">{work.start.year}</span>
                                </div>
                            </div>
                        }
                        {hasDate && <Minus className="text-gray-300"/>}
                        {hasEndDate &&
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1 text-[12px] items-center">
                                    <span className="border border-gray-200 rounded px-1 text-center w-[80px]">{months[work.end.month].name}</span>
                                    
                                    <span className="border border-gray-200 rounded px-1 text-center w-[80px]">{work.end.year}</span>
                                </div>
                            </div>
                        }
                    </div>
                    {work.description && <UiTextList text={work.description}/>}
                </div>
            </div>
    )
};