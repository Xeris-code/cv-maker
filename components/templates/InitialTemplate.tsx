import { CvState, TranslationSchema } from "@/lib/types";

type InitialTemplateProps = {
    state: CvState;
    t: TranslationSchema
}

export function InitialTemplate({}: InitialTemplateProps){
    return <p className="text-black">UNDER DEVELOPMENT</p>
}