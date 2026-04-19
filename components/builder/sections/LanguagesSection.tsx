import { CvState, CvAction } from "@/lib/cvReducer"
import { Language, TranslationKeys } from "@/lib/types"
import TitleSection from "./components/TitleSection"
import InputAddSelectText from "./components/InputAddSelectText"
import Button from "@/components/builder/sections/components/Button"

type LanguagesSectionProps = {
    state: CvState
    dispatch: React.Dispatch<CvAction>
    t: Record<TranslationKeys, {name: string, placeholder: string}>
}


export default function LanguagesSection({ state, dispatch, t}: LanguagesSectionProps){

    const {langs} = state
    const langsOptions = [
        {value: 0, label: t["langOption0"].name},
        {value: 1, label: t["langOption1"].name},
        {value: 2, label: t["langOption2"].name},
        {value: 3, label: t["langOption3"].name},
        {value: 4, label: t["langOption4"].name},
        {value: 5, label: t["langOption5"].name},
        {value: 6, label: t["langOption6"].name},
        {value: 7, label: t["langOption7"].name},
    ]

    return <>
        <TitleSection label={t["languagesTitle"].name}/>
        <div className="flex flex-col gap-3">
            {langs.map((lang: Language) => (
                <InputAddSelectText 
                key={`formLanguageField_${lang.id}`}
                name={lang.name} level={lang.level} placeholderName={t["langButton"].placeholder} options={langsOptions}
                onNameChange={e => dispatch({type: "UPDATE_LANGUAGE", id: lang.id, field: "name", value: e.target.value})}
                onLevelChange={e => dispatch({type: "UPDATE_LANGUAGE", id: lang.id, field: "level", value: Number(e.target.value)})}
                onClickDelete={() => dispatch({type: "DELETE_LANGUAGE", id: lang.id})}/>
            ))}
            <Button label={t["langButton"].name} onClick={() => dispatch({type: "ADD_LANGUAGE"})}/>
        </div>
    </>
}