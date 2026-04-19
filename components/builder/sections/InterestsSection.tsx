import { CvState, CvAction } from "@/lib/cvReducer"
import { TranslationKeys } from "@/lib/types"
import { extendTextAreaDispatch } from "@/lib/handlers"
import TitleSection from "./components/TitleSection"
import TextArea from "@/components/builder/sections/components/TextArea"

type InterestsSectionProps = {
    state: CvState
    dispatch: React.Dispatch<CvAction>
    t: Record<TranslationKeys, {name: string, placeholder: string}>
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