import { AddButton, DeleteButton, SectionTitle, Input, TextArea, CollectionHeader, DateSelectorWrapper, DateSelector } from "@/components/ui";
import { CoursesCertificates, CollectionState, CoursesTranslations, YearOption, MonthOption } from "@/lib/types"


type CourseSectionProps = {
    title: string;
    courses: CollectionState<CoursesCertificates>;
    addButtonLabel: string;
    translationCourse: CoursesTranslations;
    monthDateOptions: MonthOption[];
    yearDateOptions: YearOption[];
    onCourseChange: (id: number, field: keyof CoursesCertificates, value: CoursesCertificates[keyof CoursesCertificates]) => void;
    onAddCourse: () => void;
    onDeleteCourse: (id: number) => void;
}


export function CourseSection({
    title,
    courses,
    addButtonLabel,
    translationCourse,
    monthDateOptions,
    yearDateOptions,
    onCourseChange,
    onAddCourse,
    onDeleteCourse, 
}: CourseSectionProps){

    return <>
        <SectionTitle label={title}/>
        <div className="flex flex-col gap-3">
            {courses.items.map((course, index) => (
                <div key={course.id} className="flex flex-col w-full gap-2 p-2 border">
                        <CollectionHeader label={`${index + 1}. ${translationCourse.name}`}>
                            <DeleteButton onClick={() => onDeleteCourse(course.id)}/>
                        </CollectionHeader>
                        <Input value={course.name} placeholder={translationCourse.title.placeholder} onValueChange={e => onCourseChange(course.id, "name", e.target.value)}/>
                        <Input value={course.org} placeholder={translationCourse.organization.placeholder} onValueChange={e => onCourseChange(course.id, "org", e.target.value)}/>
                        <Input value={course.url} placeholder={translationCourse.link.placeholder} onValueChange={e => onCourseChange(course.id, "url", e.target.value)}/>
                        <DateSelectorWrapper
                            label={translationCourse.date}
                            wrapperClass="grid grid-cols-5 gap-2 w-full">
                            <div className="col-span-2">
                                <DateSelector
                                    value={course.date.month}
                                    options={monthDateOptions}
                                    onChange={(e) => onCourseChange(course.id, "date", {month: Number(e.target.value), year: course.date.year})}
                                />
                            </div>
                            <div className="col-span-2">
                                <DateSelector
                                    value={course.date.year}
                                    options={yearDateOptions}
                                    onChange={(e) => onCourseChange(course.id, "date", {month: course.date.month, year: Number(e.target.value)})}
                                />
                            </div>
                        </DateSelectorWrapper>
                        <TextArea 
                            value={course.description}
                            placeholder={translationCourse.describe.placeholder}
                            onValueChange={e => onCourseChange(course.id, "description", e.target.value)}
                        />
                    </div>
            ))}
            <AddButton label={addButtonLabel} onClick={onAddCourse}/>
        </div>
    </>
}