import { WorkExperience, UiWorkTranslations, TooltipTranslations, MonthOption, YearOption } from "@/lib/types"
import { UiInputField, UiTooltip, CheckButton, DateSelector, UiTextArea } from "@/components/ui"

type WorkEditingCardProps = {
    work: WorkExperience;
    t: UiWorkTranslations;
    translationTooltip: TooltipTranslations;
    monthOptions: MonthOption[];
    yearOptions: YearOption[];
    onClose: () => void;
    onWorkChange: (id: number, field: keyof WorkExperience, value: WorkExperience[keyof WorkExperience]) => void;
}

export function WorkEditingCard({
    work, t, translationTooltip, monthOptions, yearOptions,
    onClose, onWorkChange
}: WorkEditingCardProps){

    return <div className="ring-1 ring-blue-400 rounded-lg p-3 flex flex-col gap-3">
        
        <UiInputField 
            value={work.position}
            placeholder={t.fields.position.placeholder}
            onChange={e => onWorkChange(work.id, "position", e.target.value)}
            buttonChildren={<UiTooltip label={translationTooltip.confirm}><CheckButton onClick={() => onClose()}/></UiTooltip>}
        />

        <UiInputField 
            label={t.fields.company.name}
            value={work.company}
            placeholder={t.fields.company.placeholder}
            onChange={e => onWorkChange(work.id, "company", e.target.value)}
        
        />

        <UiInputField
            label={t.fields.city.name}
            value={work.city}
            placeholder={t.fields.city.placeholder}
            onChange={e => onWorkChange(work.id, "city", e.target.value)}
        />

        <UiInputField
            label={t.fields.state.name}
            value={work.state}
            placeholder={t.fields.state.placeholder}
            onChange={e => onWorkChange(work.id, "state", e.target.value)}
        />

        <div className="flex flex-col gap-2">
            <span className="text-[14px] text-gray-800">{t.from}</span>
            <div className="grid grid-cols-2 gap-2">
                <DateSelector
                value={work.start.month}
                options={monthOptions}
                onChange={(value: number) => onWorkChange(work.id, "start", {month: value, year: work.start.year})}
                />
                <DateSelector
                    value={work.start.year}
                    options={yearOptions}
                    onChange={(value: number) => onWorkChange(work.id, "start", {month: work.start.month, year: value})}
                />
            </div>
        </div>

        <div className="flex flex-col gap-2">
            <span className="text-[14px] text-gray-800">{t.end}</span>
            <div className="grid grid-cols-2 gap-2">
                <DateSelector
                value={work.end.month}
                options={monthOptions}
                onChange={(value: number) => onWorkChange(work.id, "end", {month: value, year: work.end.year})}
                />
                <DateSelector
                    value={work.end.year}
                    options={yearOptions}
                    onChange={(value: number) => onWorkChange(work.id, "end", {month: work.end.month, year: value})}
                />
            </div>
        </div>

        <UiTextArea
            label={t.fields.describe.name}
            value={work.description}
            placeholder={t.fields.describe.placeholder}
            onValueChange={e => onWorkChange(work.id, "description", e.target.value)}
        />
        
    </div>
};