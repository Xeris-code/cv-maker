import { CvState } from "@/lib/reducer/cvReducer"
import { AllowedTemplate, TemplateComponent } from "@/lib/types";
import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplates";
import GraphicTemplate from "./templates/GraphicTemplate";
import InitialTemplate from "./templates/InitialTemplate";
import { TranslationSchema } from "@/lib/i18n/types";

type PreviewProps = {
    state: CvState;
    t: TranslationSchema
}

const templateMap: Record<AllowedTemplate, TemplateComponent> = {
    classic: ClassicTemplate,
    modern: ModernTemplate,
    graphic: GraphicTemplate,
    initial: InitialTemplate
}

export default function CvPreview({ state, t }: PreviewProps){

    const Template = templateMap[state.template] ?? ClassicTemplate

    return <div className="preview-panel bg-[#ffffff] p-10">
        <div className="cv-page">
                <Template state={state} t={t}/>
        </div>
    </div> 
}