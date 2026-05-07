import { Education, UiEducationTranslations, TooltipTranslations, MonthOption, YearOption } from "@/lib/types";
import { UiInputField, UiTooltip, CheckButton, DateSelector, UiTextArea } from "@/components/ui";

type EducationEditingCardProps = {
    education: Education;
    t: UiEducationTranslations;
    translationTooltip: TooltipTranslations;
    monthOptions: MonthOption[];
    yearOptions: YearOption[];
    onClose: () => void;
    onEducationChange: (id: number, field: keyof Education, value: Education[keyof Education]) => void;
};


export function EducationEditingCard({
    education, t, translationTooltip, monthOptions, yearOptions,
    onClose, onEducationChange
}: EducationEditingCardProps){

    return <div className="ring-1 ring-blue-400 rounded-lg p-3 flex flex-col gap-3">
        
        <UiInputField 
            value={education.university}
            placeholder={t.fields.university.placeholder}
            onChange={e => onEducationChange(education.id, "university", e.target.value)}
            buttonChildren={<UiTooltip label={translationTooltip.confirm}><CheckButton onClick={() => onClose()}/></UiTooltip>}
        />

        <UiInputField 
            label={t.fields.faculty.name}
            value={education.faculty}
            placeholder={t.fields.faculty.placeholder}
            onChange={e => onEducationChange(education.id, "faculty", e.target.value)}
        
        />

        <UiInputField 
            label={t.fields.field.name}
            value={education.field}
            placeholder={t.fields.field.placeholder}
            onChange={e => onEducationChange(education.id, "field", e.target.value)}
        
        />

        <UiInputField 
            label={t.fields.degree.name}
            value={education.degree}
            placeholder={t.fields.degree.placeholder}
            onChange={e => onEducationChange(education.id, "degree", e.target.value)}
        
        />

        <UiInputField
            label={t.fields.city.name}
            value={education.city}
            placeholder={t.fields.city.placeholder}
            onChange={e => onEducationChange(education.id, "city", e.target.value)}
        />

        <UiInputField
            label={t.fields.state.name}
            value={education.state}
            placeholder={t.fields.state.placeholder}
            onChange={e => onEducationChange(education.id, "state", e.target.value)}
        />

        <div className="flex flex-col gap-2">
            <span className="text-[14px] text-gray-800">{t.from}</span>
            <div className="grid grid-cols-2 gap-2">
                <DateSelector
                value={education.start.month}
                options={monthOptions}
                onChange={(value: number) => onEducationChange(education.id, "start", {month: value, year: education.start.year})}
                />
                <DateSelector
                    value={education.start.year}
                    options={yearOptions}
                    onChange={(value: number) => onEducationChange(education.id, "start", {month: education.start.month, year: value})}
                />
            </div>
        </div>

        <div className="flex flex-col gap-2">
            <span className="text-[14px] text-gray-800">{t.end}</span>
            <div className="grid grid-cols-2 gap-2">
                <DateSelector
                value={education.end.month}
                options={monthOptions}
                onChange={(value: number) => onEducationChange(education.id, "end", {month: value, year: education.end.year})}
                />
                <DateSelector
                    value={education.end.year}
                    options={yearOptions}
                    onChange={(value: number) => onEducationChange(education.id, "end", {month: education.end.month, year: value})}
                />
            </div>
        </div>

        <UiTextArea
            label={t.fields.describe.name}
            value={education.description}
            placeholder={t.fields.describe.placeholder}
            onValueChange={e => onEducationChange(education.id, "description", e.target.value)}
        />
        
    </div>
};