import { CvState } from "@/lib/cvReducer"
import { AllowedTemplate, TemplateComponent, TranslationKeys } from "@/lib/types";
import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplates";
import GraphicTemplate from "./templates/GraphicTemplate";
import InitialTemplate from "./templates/InitialTemplate";

type PreviewProps = {
    state: CvState;
    t: Record<TranslationKeys, { name: string, placeholder: string }>
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