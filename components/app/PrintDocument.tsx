import { CvState, PreviewTranslations } from "@/lib/types";
import { templateMap } from "../templates";

export function PrintDocument ({ state, t } : {
    state: CvState;
    t: PreviewTranslations;
}) {
    const Template = templateMap[state.template];

    return (
        <div className="print-document">
            <div className="print-page">
                <div className="cv-page print-cv-page">
                    <Template state={state} t={t}/>
                </div>
            </div>
        </div>
    )
}