import { UiInputField, UiTooltip, CheckButton, DateSelector, UiTextArea } from "@/components/ui";
import { CoursesCertificates, UiCoursesTranslations, TooltipTranslations, MonthOption, YearOption } from "@/lib/types"

type CourseEditingCardProps = {
    course: CoursesCertificates;
    t: UiCoursesTranslations;
    translationTooltip: TooltipTranslations;
    monthOptions: MonthOption[];
    yearOptions: YearOption[];
    onClose: () => void;
    onCourseChange: (id: number, field: keyof CoursesCertificates, value: CoursesCertificates[keyof CoursesCertificates]) => void;
}

export function CourseEditingCard({
    course, t, translationTooltip, monthOptions, yearOptions,
    onClose, onCourseChange
}: CourseEditingCardProps){

    return <div className="ring-1 ring-blue-400 rounded-lg p-3 flex flex-col gap-3">
        
        <UiInputField 
            value={course.name}
            placeholder={t.fields.title.placeholder}
            onChange={e => onCourseChange(course.id, "name", e.target.value)}
            buttonChildren={<UiTooltip label={translationTooltip.confirm}><CheckButton onClick={() => onClose()}/></UiTooltip>}
        />

        <UiInputField 
            label={t.fields.organization.name}
            value={course.org}
            placeholder={t.fields.organization.placeholder}
            onChange={e => onCourseChange(course.id, "org", e.target.value)}
        
        />

        <UiInputField
            label={t.fields.link.name}
            value={course.url}
            placeholder={t.fields.link.placeholder}
            onChange={e => onCourseChange(course.id, "url", e.target.value)}
        />

        <div className="flex flex-col gap-2">
            <span className="text-[14px] text-gray-800">{t.date}</span>
            <div className="grid grid-cols-2 gap-2">
                <DateSelector
                value={course.date.month}
                options={monthOptions}
                onChange={(value: number) => onCourseChange(course.id, "date", {month: value, year: course.date.year})}
                />
                <DateSelector
                    value={course.date.year}
                    options={yearOptions}
                    onChange={(value: number) => onCourseChange(course.id, "date", {month: course.date.month, year: value})}
                />
            </div>
        </div>

        <UiTextArea
            label={t.fields.describe.name}
            value={course.description}
            placeholder={t.fields.describe.placeholder}
            onValueChange={e => onCourseChange(course.id, "description", e.target.value)}
        />
        
    </div>
};
