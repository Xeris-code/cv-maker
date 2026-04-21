import { CvState, CvAction } from "@/lib/reducer/cvReducer"
import { BasicInformation } from "@/lib/types"
import TitleSection from "./components/TitleSection"
import TextArea from "@/components/builder/sections/components/TextArea"
import { TranslationSchema } from "@/lib/i18n/types"

type InterestsSectionProps = {
    state: CvState
    dispatch: React.Dispatch<CvAction>
    t: TranslationSchema
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
        <TitleSection label={t.sections.common.interests}/>
        <TextArea
            label=""
            placeholder={t.fields.interests.placeholder}
            onChange={(e) => { extendTextAreaDispatch(e, "interest", dispatch)}}/>
    </>
}