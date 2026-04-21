import { TranslationSchema } from "@/lib/i18n/types";
import { CvState } from "@/lib/reducer/cvReducer"

type InitialTemplateProps = {
    state: CvState;
    t: TranslationSchema
}

export default function InitialTemplate({}: InitialTemplateProps){
    return <p className="text-black">UNDER DEVELOPMENT</p>
}