import { CvState, AllowedTemplateType, TemplateComponent, TranslationSchema } from "@/lib/types";
import { ModernTemplate, ClassicTemplate, GraphicTemplate, InitialTemplate, CentralizedTemplate } from "@/components/templates";

type PreviewProps = {
    state: CvState;
    t: TranslationSchema
}

const templateMap: Record<AllowedTemplateType, TemplateComponent> = {
    classic: ClassicTemplate,
    modern: ModernTemplate,
    graphic: GraphicTemplate,
    initial: InitialTemplate,
    centralized: CentralizedTemplate,
}

export function PreviewPanel({ state, t }: PreviewProps){

    const Template = templateMap[state.template];

    return <div className="preview-panel">
        <div className="cv-page">
                <Template state={state} t={t}/>
        </div>
    </div> 
}