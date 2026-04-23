import TitleSection from "./components/TitleSection"
import TextArea from "@/components/builder/sections/components/TextArea"
import { CvState, CvAction, TranslationSchema } from "@/lib/types"

type InterestsSectionProps = {
    state: CvState
    dispatch: React.Dispatch<CvAction>
    t: TranslationSchema
}

export default function InterestsSection({ state, dispatch, t}: InterestsSectionProps){

    return <>
        <TitleSection label={t.sections.common.interests}/>
        <TextArea
            label=""
            placeholder={t.fields.interests.placeholder}
            onChange={(e) => {
                dispatch({type: "SET_BASICS_FIELD", field: "interest", value: e.target.value,});
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px"
            }
        }/>
    </>
}