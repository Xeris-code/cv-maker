import { BasicInformation, FieldTranslations, DayOption, MonthOption, YearOption, BirthDate } from "@/lib/types";
import { TextArea, LabeledInput, SectionTitle, ToggleButton, Label, DateSelectorWrapper, DateSelector, PhotoUpload } from "@/components/ui";


type PersonalSectionProps = {
    title: string;
    birth: BirthDate;
    personal: BasicInformation;
    translation: FieldTranslations;
    dayDateOptions:  DayOption[];
    monthDateOptions: MonthOption[];
    yearDateOptions: YearOption[];
    addButtonPhotoLabel: string;
    onBirthChange: (field: keyof BirthDate, value: BirthDate[keyof BirthDate]) => void;
    onPersonalChange: (field: keyof BasicInformation, value: BasicInformation[keyof BasicInformation]) => void;
    onPhotoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function PersonalSection({
    title,
    birth,
    personal,
    translation,
    dayDateOptions,
    monthDateOptions,
    yearDateOptions,
    addButtonPhotoLabel,
    onBirthChange,
    onPersonalChange,
    onPhotoChange,
}: PersonalSectionProps){

    const zeroNullConverter = (value: number): number | null => {
        return value === 0 ? null: value
    }

    return <>
        <SectionTitle label={title}/>
        <div className="flex flex-col pt-2 gap-3">
            <LabeledInput
                label={translation.firstName.name}
                value={personal.name}
                placeholder={translation.firstName.placeholder}
                onValueChange={ (e) => onPersonalChange("name", e.target.value)}
            />
            <LabeledInput
                label={translation.lastName.name}
                value={personal.surname}
                placeholder={translation.lastName.placeholder}
                onValueChange={ (e) => onPersonalChange("surname", e.target.value)}
            />
            <ToggleButton
                label={translation.title.name}
                condition={personal.titleActive}
                onChange={() => onPersonalChange("titleActive", !personal.titleActive)}
            />
            {personal.titleActive
                ? <>
                    <LabeledInput
                        label={translation.title.front.name}
                        value={personal.titleFront}
                        placeholder={translation.title.front.placeholder}
                        onValueChange={ (e) => onPersonalChange("titleFront", e.target.value)}
                    />
                    <LabeledInput
                        label={translation.title.back.name}
                        value={personal.titleBack}
                        placeholder={translation.title.back.placeholder}
                        onValueChange={ (e) => onPersonalChange("titleBack", e.target.value)}
                    />
                </>
                : <div className="border-b-1"></div>
            }
            <LabeledInput
                label={translation.address.city.name}
                value={personal.adress_city}
                placeholder={translation.address.city.placeholder}
                onValueChange={ (e) => onPersonalChange("adress_city", e.target.value)}
            />
            <LabeledInput
                label={translation.address.state.name}
                value={personal.adress_state}
                placeholder={translation.address.state.placeholder}
                onValueChange={ (e) => onPersonalChange("adress_state", e.target.value)}
            />
            <Label label={translation.birth.name}/>
            <DateSelectorWrapper wrapperClass="w-full flex justify-center gap-3">
                <DateSelector
                    value={birth.day}
                    options={dayDateOptions}
                    onChange={ (e) => onBirthChange("day", zeroNullConverter(Number(e.target.value)))}
                />
                <div className="border-r-1 border-[#E2E8F0]"></div>
                <DateSelector
                    value={birth.month}
                    options={monthDateOptions}
                    onChange={ (e) => onBirthChange("month", zeroNullConverter(Number(e.target.value)))}
                />
                <div className="border-r-1 border-[#E2E8F0]"></div>
                <DateSelector
                    value={birth.year}
                    options={yearDateOptions}
                    onChange={ (e) => onBirthChange("year", zeroNullConverter(Number(e.target.value)))}
                />
            </DateSelectorWrapper>
            <TextArea 
                label={translation.summary.name}
                value={personal.summary}
                placeholder={translation.summary.placeholder}
                onValueChange={ (e) => onPersonalChange("summary", e.target.value)}/>
            <LabeledInput
                label={translation.portfolio.name}
                value={personal.portfolio}
                placeholder={translation.portfolio.placeholder}
                onValueChange={ (e) => onPersonalChange("portfolio", e.target.value)}
            />
            <LabeledInput
                label={translation.email.name}
                value={personal.mail}
                placeholder={translation.email.placeholder}
                onValueChange={ (e) => onPersonalChange("mail", e.target.value)}
            />
            <LabeledInput
                label={translation.phone.name}
                value={personal.phone}
                placeholder={translation.phone.placeholder}
                onValueChange={ (e) => onPersonalChange("phone", e.target.value)}
            />
            <PhotoUpload
                photo={personal.photo}
                sectionLabel={translation.photo.name}
                photoLabel={addButtonPhotoLabel}
                placeholder={translation.photo.placeholder}
                onPhotoChange={onPhotoChange}
            />
        </div>
    </>
}