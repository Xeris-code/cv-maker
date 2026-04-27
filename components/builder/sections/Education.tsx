import { AddButton, DeleteButton, SectionTitle, Input, TextArea, CollectionHeader, DateSelectorWrapper, DateSelector } from "@/components/ui";
import { Education, CollectionState, EducationTranslations, YearOption } from "@/lib/types"


type EducationSectionProps = {
    title: string;
    education: CollectionState<Education>;
    addButtonLabel: string;
    translationEducation: EducationTranslations;
    yearDateOptions: YearOption[];
    onEducationChange: (id: number, field: keyof Education, value: Education[keyof Education]) => void;
    onAddEducation: () => void;
    onDeleteEducation: (id: number) => void;
};


export function EducationSection({
    title,
    education,
    addButtonLabel,
    translationEducation,
    yearDateOptions,
    onEducationChange,
    onAddEducation,
    onDeleteEducation,
}: EducationSectionProps){

    return <>
        <SectionTitle label={title}/>
        <div className="flex flex-col gap-3">
            {education.items.map((school, index) => (
                <div key={school.id} className="flex flex-col w-full gap-2 p-2 border">
                    <CollectionHeader label={`${index + 1}. ${translationEducation.name}`}>
                        <DeleteButton onClick={() => onDeleteEducation(school.id)}/>
                    </CollectionHeader>

                    <Input value={school.faculty} placeholder={translationEducation.faculty.placeholder} onValueChange={e => onEducationChange(school.id, "faculty", e.target.value)}/>
                    <Input value={school.university} placeholder={translationEducation.university.placeholder} onValueChange={e => onEducationChange(school.id, "university", e.target.value)}/>
                    <Input value={school.field} placeholder={translationEducation.field.placeholder} onValueChange={e => onEducationChange(school.id, "field", e.target.value)}/>
                    <Input value={school.city} placeholder={translationEducation.city.placeholder} onValueChange={e => onEducationChange(school.id, "city", e.target.value)}/>
                    <Input value={school.state} placeholder={translationEducation.state.placeholder} onValueChange={e => onEducationChange(school.id, "state", e.target.value)}/>
                    <Input value={school.degree} placeholder={translationEducation.degree.placeholder} onValueChange={e => onEducationChange(school.id, "degree", e.target.value)}/>
                        
                    <DateSelectorWrapper
                        label={translationEducation.from}
                        wrapperClass="grid grid-cols-3 gap-2 w-full">
                        <div className="col-span-2">
                            <DateSelector
                                value={school.start.year}
                                options={yearDateOptions}
                                onChange={(e) => onEducationChange(school.id, "start", {year: Number(e.target.value)})}
                            />

                        </div>
                    </DateSelectorWrapper>
                    <DateSelectorWrapper
                        label={translationEducation.end}
                        wrapperClass="grid grid-cols-3 gap-2 w-full">
                        <div className="col-span-2">
                            <DateSelector
                                value={school.end.year}
                                options={yearDateOptions}
                                onChange={(e) => onEducationChange(school.id, "end", {year: Number(e.target.value)})}
                            />
                        </div>
                    </DateSelectorWrapper>

                    <TextArea 
                        value={school.description}
                        placeholder={translationEducation.describe.placeholder}
                        onValueChange={e => onEducationChange(school.id, "description", e.target.value)}
                    />
                </div>
            ))}
            <AddButton label={addButtonLabel} onClick={onAddEducation}/>
        </div>
    </>
}