import { BasicInformation, UiPersonalTranslations, DayOption, MonthOption, YearOption, BirthDate } from "@/lib/types";
import { TextArea, ToggleButton, DateSelector, PhotoUpload, UiSectionHeader, UiInputField } from "@/components/ui";


type PersonalSectionProps = {
    birth: BirthDate;
    personal: BasicInformation;
    translation: UiPersonalTranslations;
    dayDateOptions:  DayOption[];
    monthDateOptions: MonthOption[];
    yearDateOptions: YearOption[];
    onBirthChange: (field: keyof BirthDate, value: BirthDate[keyof BirthDate]) => void;
    onPersonalChange: (field: keyof BasicInformation, value: BasicInformation[keyof BasicInformation]) => void;
    onPhotoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function PersonalSection({
    birth,
    personal,
    translation,
    dayDateOptions,
    monthDateOptions,
    yearDateOptions,
    onBirthChange,
    onPersonalChange,
    onPhotoChange,
}: PersonalSectionProps){

    return <>
        <UiSectionHeader
            title={translation.title}
            description={translation.description}
        />
        <div className="overflow-y-auto noScroll h-full border-gray-200 p-2">
        <div className="grid grid-cols-2 pt-2 gap-y-5 gap-x-3">
            <UiInputField
                label={translation.fields.firstName.name}
                value={personal.name}
                placeholder={translation.fields.firstName.placeholder}
                onChange={ (e) => onPersonalChange("name", e.target.value)}
            />
            <UiInputField
                label={translation.fields.lastName.name}
                value={personal.surname}
                placeholder={translation.fields.lastName.placeholder}
                onChange={ (e) => onPersonalChange("surname", e.target.value)}
            />
            <div className="col-span-2 justify-end">
                <ToggleButton
                    label={translation.toggleButton}
                    condition={personal.titleActive}
                    onChange={() => onPersonalChange("titleActive", !personal.titleActive)}
                />
            </div>
            
            {personal.titleActive
                ? <>
                    <UiInputField
                        label={translation.fields.title.front.name}
                        value={personal.titleFront}
                        placeholder={translation.fields.title.front.placeholder}
                        onChange={ (e) => onPersonalChange("titleFront", e.target.value)}
                    />
                    <UiInputField
                        label={translation.fields.title.back.name}
                        value={personal.titleBack}
                        placeholder={translation.fields.title.back.placeholder}
                        onChange={ (e) => onPersonalChange("titleBack", e.target.value)}
                    />
                </>
                : null
            }
            <div className="col-span-2">
                <UiInputField
                    label={translation.fields.position.name}
                    value={personal.position}
                    placeholder={translation.fields.position.placeholder}
                    onChange={ (e) => onPersonalChange("position", e.target.value)}
                />
            </div>

            <UiInputField
                label={translation.fields.address.city.name}
                value={personal.adress_city}
                placeholder={translation.fields.address.city.placeholder}
                onChange={ (e) => onPersonalChange("adress_city", e.target.value)}
            />
            <UiInputField
                label={translation.fields.address.state.name}
                value={personal.adress_state}
                placeholder={translation.fields.address.state.placeholder}
                onChange={ (e) => onPersonalChange("adress_state", e.target.value)}
            />

            <UiInputField
                label={translation.fields.email.name}
                value={personal.mail}
                placeholder={translation.fields.email.placeholder}
                onChange={ (e) => onPersonalChange("mail", e.target.value)}
            />
            <UiInputField
                label={translation.fields.phone.name}
                value={personal.phone}
                placeholder={translation.fields.phone.placeholder}
                onChange={ (e) => onPersonalChange("phone", e.target.value)}
            />

            <div className="col-span-2">
            <UiInputField
                label={translation.fields.portfolio.name}
                value={personal.portfolio}
                placeholder={translation.fields.portfolio.placeholder}
                onChange={ (e) => onPersonalChange("portfolio", e.target.value)}
            />
            </div>

            <div className="col-span-2 flex flex-col gap-2">
                <span className="text-[14px] text-gray-800">{translation.fields.birth.name}</span>
                <div className="grid grid-cols-3 w-full gap-2">
                    <DateSelector
                    value={birth.day}
                    options={dayDateOptions}
                    onChange={(value: number) => onBirthChange("day", value)}
                    />
                    <DateSelector
                        value={birth.month}
                        options={monthDateOptions}
                        onChange={(value: number) => onBirthChange("month", value)}
                    />
                    <DateSelector
                        value={birth.year}
                        options={yearDateOptions}
                        onChange={(value: number) => onBirthChange("year", value)}
                    />
                </div>
            </div>
            <div className="col-span-2">
                <TextArea
                label={translation.fields.summary.name}
                value={personal.summary}
                placeholder={translation.fields.summary.placeholder}
                onValueChange={ (e) => onPersonalChange("summary", e.target.value)}/>
            </div>
            
            <div className="col-span-2">
                <PhotoUpload
                photo={personal.photo}
                sectionLabel={translation.fields.photo.name}
                photoLabel={translation.addPhoto}
                placeholder={translation.fields.photo.placeholder}
                onPhotoChange={onPhotoChange}
            />
            </div>
        </div>
        </div>
        <div className="flex items-center px-5 py-5 border-t-1 border-gray-200">
        
        </div>
    </>
}