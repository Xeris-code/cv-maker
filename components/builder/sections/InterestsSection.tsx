import { CvState, CvAction } from "@/lib/cvReducer"
import { BasicInformation, TranslationKeys } from "@/lib/types"
import TitleSection from "./components/TitleSection"
import TextArea from "@/components/builder/sections/components/TextArea"

type InterestsSectionProps = {
    state: CvState
    dispatch: React.Dispatch<CvAction>
    t: Record<TranslationKeys, {name: string, placeholder: string}>
}

function extendTextAreaDispatch(
    e: React.ChangeEvent<HTMLTextAreaElement>,
    field: keyof BasicInformation,
    dispatch: React.Dispatch<CvAction>
) {
    dispatch({
    type: "SET_BASICS_FIELD",
    field,
    value: e.target.value,
    })

    e.target.style.height = "auto"
    e.target.style.height = e.target.scrollHeight + "px"
}

export default function InterestsSection({ state, dispatch, t}: InterestsSectionProps){

    return <>
        <TitleSection label={t["interestsTitle"].name}/>
        <TextArea
            label=""
            placeholder={t["interestsTitle"].placeholder}
            onChange={(e) => { extendTextAreaDispatch(e, "interest", dispatch)}}/>
    </>
}