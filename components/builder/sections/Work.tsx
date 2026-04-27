import { AddButton, ToggleButton, DeleteButton, SectionTitle, Input, TextArea, CollectionHeader, DateSelectorWrapper, DateSelector, LabeledInput } from "@/components/ui";
import { WorkExperience, CollectionState, WorkTranslations, YearOption, MonthOption, CurrentPositionTranslations } from "@/lib/types"


type WorkSectionProps = {
    title: string;
    work: CollectionState<WorkExperience>;
    currentPosition: string;
    addButtonLabel: string;
    translationCurrentPosition: CurrentPositionTranslations;
    translationWork: WorkTranslations;
    monthDateOptions: MonthOption[];
    yearDateOptions: YearOption[];
    onCurrentPositionChange: (value: string) => void;
    onWorkChange: (id: number, field: keyof WorkExperience, value: WorkExperience[keyof WorkExperience]) => void;
    onAddWork: () => void;
    onDeleteWork: (id: number) => void;
}

export function WorkSection({
    title,
    work,
    currentPosition,
    translationCurrentPosition,
    addButtonLabel,
    translationWork,
    monthDateOptions,
    yearDateOptions,
    onWorkChange,
    onAddWork,
    onDeleteWork,
    onCurrentPositionChange,
}: WorkSectionProps){

    return <>
        <SectionTitle label={title}/>
        <div className="flex flex-col gap-3">
            <LabeledInput
                label={translationCurrentPosition.name}
                value={currentPosition}
                placeholder={translationCurrentPosition.placeholder}
                onValueChange={(e) => onCurrentPositionChange(e.target.value)}
            />
            {work.items.map((work, index) => (
                <div className="flex flex-col w-full gap-2 p-2 border" key={`formWorkField_${index}`}>
                        <CollectionHeader label={`${index + 1}. ${translationWork.name}`}>
                            <DeleteButton onClick={() => onDeleteWork(work.id)}/>
                        </CollectionHeader>

                        <Input value={work.position} placeholder={translationWork.position.placeholder} onValueChange={e => onWorkChange(work.id, "position", e.target.value)}/>
                        <Input value={work.company} placeholder={translationWork.company.placeholder} onValueChange={e => onWorkChange(work.id, "company", e.target.value)}/>
                        <Input value={work.city} placeholder={translationWork.city.placeholder} onValueChange={e => onWorkChange(work.id, "city", e.target.value)}/>
                        <Input value={work.state} placeholder={translationWork.state.placeholder} onValueChange={e => onWorkChange(work.id, "state", e.target.value)}/>

                        <DateSelectorWrapper
                            label={translationWork.from}
                            wrapperClass="grid grid-cols-5 gap-2 w-full">
                            <div className="col-span-2">
                                <DateSelector
                                    value={work.start.month}
                                    options={monthDateOptions}
                                    onChange={(e) => onWorkChange(work.id, "start", {month: e.target.value, year: work.end.year})}
                                />
                            </div>
                            <div className="col-span-2">
                                <DateSelector
                                    value={work.start.year}
                                    options={yearDateOptions}
                                    onChange={(e) => onWorkChange(work.id, "start", {month: work.end.month, year: Number(e.target.value)})}
                                />
                            </div>
                        </DateSelectorWrapper>



                        {work.present && <DateSelectorWrapper
                            label={translationWork.end}
                            wrapperClass="grid grid-cols-5 gap-2 w-full">
                            <div className="col-span-2">
                                <DateSelector
                                    value={work.end.month}
                                    options={monthDateOptions}
                                    onChange={(e) => onWorkChange(work.id, "end", {month: e.target.value, year: work.end.year})}
                                />
                            </div>
                            <div className="col-span-2">
                                <DateSelector
                                    value={work.end.year}
                                    options={yearDateOptions}
                                    onChange={(e) => onWorkChange(work.id, "end", {month: work.end.month, year: Number(e.target.value)})}
                                />
                            </div>
                        </DateSelectorWrapper>}
                        
                        <ToggleButton
                            label={translationWork.present}
                            classNameWrapper="mt-2"
                            condition={work.present}
                            onChange={() => onWorkChange(work.id, "present", !work.present)}
                        />

                        <TextArea 
                            value={work.description}
                            placeholder={translationWork.describe.placeholder}
                            onValueChange={e => onWorkChange(work.id, "description", e.target.value)}
                        />
                    </div>
            ))}
            <AddButton label={addButtonLabel} onClick={onAddWork}/>
        </div>
    </>
}