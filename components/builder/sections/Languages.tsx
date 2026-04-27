import { AddButton, InputSelector, SectionTitle } from "@/components/ui";
import { Language, LanguageOption, LanguageLevel,
    LanguageOptionTranslations, LanguageTranslations, CollectionState } from "@/lib/types";

type LanguagesSectionProps = {
    title: string;
    languages: CollectionState<Language>;
    translationsLanguage: LanguageTranslations;
    translationsOption: LanguageOptionTranslations;
    addButtonLabel: string;
    onLanguageChange: (id: number, field: keyof Language, value: string | LanguageLevel) => void;
    onAddLanguage: () => void;
    onDeleteLanguage: (id: number) => void;
};

export function LanguagesSection({
    title,
    languages,
    translationsLanguage,
    translationsOption,
    addButtonLabel,
    onLanguageChange,
    onAddLanguage,
    onDeleteLanguage,
}: LanguagesSectionProps){

    const languageOptions: LanguageOption[] = [
        {value: 0, label: translationsOption[0]},
        {value: 1, label: translationsOption[1]},
        {value: 2, label: translationsOption[2]},
        {value: 3, label: translationsOption[3]},
        {value: 4, label: translationsOption[4]},
        {value: 5, label: translationsOption[5]},
        {value: 6, label: translationsOption[6]},
        {value: 7, label: translationsOption[7]},
    ];

    return <>
        <SectionTitle label={title}/>
        <div className="flex flex-col gap-3">
            {languages.items.map((language) => (
                <InputSelector 
                    key={language.id}
                    name={language.name}
                    level={language.level}
                    options={languageOptions}
                    placeholderName={translationsLanguage.placeholder} 
                    onNameChange={e => onLanguageChange(language.id, "name", e.target.value)}
                    onLevelChange={e => onLanguageChange(language.id, "level", Number(e.target.value) as LanguageLevel)}
                    onDelete={() => onDeleteLanguage(language.id)}
                />
            ))}
            <AddButton label={addButtonLabel} onClick={onAddLanguage}/>
        </div>
    </>
};