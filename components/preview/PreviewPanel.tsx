import { CvState, AllowedTemplateType, TemplateComponent, TranslationSchema } from "@/lib/types";
import { ModernTemplate, ClassicTemplate, GraphicTemplate, InitialTemplate, CentralizedTemplate } from "@/components/templates";

type PreviewProps = {
    state: CvState;
    t: TranslationSchema;
    styleWrapper?: string;
    stylePage?: string;
}

const templateMap: Record<AllowedTemplateType, TemplateComponent> = {
    classic: ClassicTemplate,
    modern: ModernTemplate,
    graphic: GraphicTemplate,
    initial: InitialTemplate,
    centralized: CentralizedTemplate,
}

export function PreviewPanel({ state, t, styleWrapper="preview-panel", stylePage="cv-page" }: PreviewProps){

    const Template = templateMap[state.template];

    return <div className={styleWrapper}>
        <div className={stylePage}>
            <Template state={state} t={t}/>
        </div>
    </div> 
}