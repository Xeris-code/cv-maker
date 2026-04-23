import { Language, LanguageOption, CvState, CvAction, LanguageLevel, TranslationSchema } from "@/lib/types"
import TitleSection from "./components/TitleSection"
import InputAddSelectText from "./components/InputAddSelectText"
import Button from "@/components/builder/sections/components/Button"

type LanguagesSectionProps = {
    state: CvState
    dispatch: React.Dispatch<CvAction>
    t: TranslationSchema
}


export default function LanguagesSection({ state, dispatch, t}: LanguagesSectionProps){

    const {languages} = state
    const langsOptions: LanguageOption[] = [
        {value: 0, label: t.options.language[0]},
        {value: 1, label: t.options.language[1]},
        {value: 2, label: t.options.language[2]},
        {value: 3, label: t.options.language[3]},
        {value: 4, label: t.options.language[4]},
        {value: 5, label: t.options.language[5]},
        {value: 6, label: t.options.language[6]},
        {value: 7, label: t.options.language[7]},
    ]

    return <>
        <TitleSection label={t.sections.common.languages}/>
        <div className="flex flex-col gap-3">
            {languages.items.map((lang: Language) => (
                <InputAddSelectText 
                key={`formLanguageField_${lang.id}`}
                name={lang.name} level={lang.level} placeholderName={t.fields.languages.placeholder} options={langsOptions}
                onNameChange={e => dispatch({type: "UPDATE", target: "languages", id: lang.id, field: "name", value: e.target.value})}
                onLevelChange={e => dispatch({type: "UPDATE", target: "languages", id: lang.id, field: "level", value: Number(e.target.value) as LanguageLevel})}
                onClickDelete={() => dispatch({type: "DELETE", target: "languages", id: lang.id})}/>
            ))}
            <Button label={t.actions.addLanguage} onClick={() => dispatch({type: "ADD", target: "languages"})}/>
        </div>
    </>
}