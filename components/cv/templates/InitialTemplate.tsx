import { CvState } from "@/lib/cvReducer"
import { TranslationKeys } from "@/lib/types"

type InitialTemplateProps = {
    state: CvState;
    t: Record<TranslationKeys, { name: string, placeholder: string }>
}

export default function InitialTemplate({}: InitialTemplateProps){
    return <p className="text-black">UNDER DEVELOPMENT</p>
}