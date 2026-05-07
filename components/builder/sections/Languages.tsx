import { AddButton, BinButton, Selector, UiSectionHeader, UiTooltip } from "@/components/ui";
import { Language, LanguageOption, LanguageLevel, TooltipTranslations,
    LanguageOptionTranslations, UiLanguagesTranslations, CollectionState } from "@/lib/types";
import { GripVertical } from "lucide-react";
import { useReorderList } from "@/lib/hooks";
import { LanguageIndicator } from "./indicators";

type LanguagesSectionProps = {
    languages: CollectionState<Language>;
    translationsLanguage: UiLanguagesTranslations;
    translationsOption: LanguageOptionTranslations;
    translationTooltip: TooltipTranslations;
    onLanguageChange: (id: number, field: keyof Language, value: string | LanguageLevel) => void;
    onAddLanguage: () => void,
    onReorderLanguages: (items: Language[]) => void;
    onDeleteLanguage: (id: number) => void;
};

export function LanguagesSection({
    languages,
    translationsLanguage,
    translationsOption,
    translationTooltip,
    onLanguageChange,
    onAddLanguage,
    onReorderLanguages,
    onDeleteLanguage,
}: LanguagesSectionProps){

    const languageOptions: LanguageOption[] = [
        {value: 0, label: translationsOption[0]},
        {value: 1, label: translationsOption[1].split("-")[1]},
        {value: 2, label: translationsOption[2].split("-")[1]},
        {value: 3, label: translationsOption[3].split("-")[1]},
        {value: 4, label: translationsOption[4].split("-")[1]},
        {value: 5, label: translationsOption[5].split("-")[1]},
        {value: 6, label: translationsOption[6].split("-")[1]},
        {value: 7, label: translationsOption[7]},
    ];

    const {
            draggingId,
            itemRefs,
            handleDragStart,
        } = useReorderList(languages.items, onReorderLanguages)

    return (<>
        <UiSectionHeader
            title={translationsLanguage.title}
            description={translationsLanguage.description}
            counter={languages.items.length}
            itemLabel={translationsLanguage.items}
        />
        <div className="overflow-y-auto noScroll h-full border-gray-200 p-2">
            <div className={`flex flex-col gap-5 p-5 ${draggingId !== null ? "select-none cursor-grab active:cursor-grabbing": ""}`}>
                {languages.items.map((language) => (
                    <div key={language.id} ref={(el) => {itemRefs.current[language.id] = el}} className={`grid grid-cols-[max-content_1fr_1fr_max-content] justify-between gap-2 items-center w-full pl-1 pr-2 py-3 ring-1 ring-gray-200 rounded-lg ${draggingId === language.id ? "opacity-50 scale-[0.98" : ""}`}>
                        <GripVertical onMouseDown={() => handleDragStart(language.id)} className="size-6 text-gray-300 cursor-grab"/>
                        <input className="w-full text-[12px] p-1 border border-gray-200 rounded-lg px-3 py-2 transition hover:bg-[#F8FAFC] hover:border-blue-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" value={language.name} placeholder={translationsLanguage.placeholder} onChange={(e) => onLanguageChange(language.id, "name", e.target.value)}/>
                        <Selector
                            item={language}
                            options={languageOptions}
                            onChange={(id: number, value: number) => onLanguageChange(id, "level", value as LanguageLevel)}
                            indicator={(value: number) => <LanguageIndicator level={value}/>}
                        />
                        <UiTooltip label={translationTooltip.delete}>
                            <BinButton onClick={() => onDeleteLanguage(language.id)}/>
                        </UiTooltip>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex items-center px-5 py-5 border-t-1 border-gray-200">
            <AddButton
                label={`+ ${translationsLanguage.add}`}
                onClick={() => onAddLanguage()}
            />
        </div>
    </>
    )
};