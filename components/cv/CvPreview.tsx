import { CvState, AllowedTemplateType, TemplateComponent, TranslationSchema } from "@/lib/types";
import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplates";
import GraphicTemplate from "./templates/GraphicTemplate";
import InitialTemplate from "./templates/InitialTemplate";

type PreviewProps = {
    state: CvState;
    t: TranslationSchema
}

const templateMap: Record<AllowedTemplateType, TemplateComponent> = {
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