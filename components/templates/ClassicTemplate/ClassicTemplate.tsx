import { CvState, TranslationSchema } from "@/lib/types";

type ClassicTemplateProps = {
    state: CvState;
    t: TranslationSchema;
}

export function ClassicTemplate({state, t}: ClassicTemplateProps){
    return (
        <div className={'flex flex-col min-h-full'}>

        </div>
    );
};