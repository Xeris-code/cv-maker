import { Projects, CvState, CvAction, TranslationSchema } from "@/lib/types"
import TitleSection from "./components/TitleSection"
import TextArea from "@/components/builder/sections/components/TextArea"
import Label from "./components/Label"
import Button from "./components/Button"

type ProjectsSectionProps = {
    state: CvState
    dispatch: React.Dispatch<CvAction>
    t: TranslationSchema
}


export default function ProjectsSection({ state, dispatch, t}: ProjectsSectionProps){

    const { projects } = state

    const styleInput = "border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]"

    return <>
        <TitleSection label={t.sections.common.projects}/>
        <div className="flex flex-col gap-3">
            {projects.items.map((prj: Projects, index: number) => (
            <div className="flex flex-col w-full gap-2 p-2 border" key={`formProjectField_${prj.id}`}>
                <div className="flex justify-between">
                    <Label label={`${index + 1}. ${t.fields.project.name}`}/>
                    <button className="self-center hover:text-red-300 hover:border-red-300 border-1 border-[#E2E8F0] w-6 h-6 text-[#475569]"
                    onClick={() => dispatch({type:"DELETE", target: "projects", id: prj.id})}>x</button>
                </div>
                <input className={styleInput} value={prj.name} onChange={(e) => dispatch({type: "UPDATE", target: "projects", id: prj.id, field: "name", value: e.target.value})} placeholder={t.fields.project.title.placeholder}/>
                <input className={styleInput} value={prj.tech} onChange={(e) => dispatch({type: "UPDATE", target: "projects", id: prj.id, field: "tech", value: e.target.value})} placeholder={t.fields.project.technology.placeholder}/>
                <input className={styleInput} value={prj.url} onChange={(e) => dispatch({type: "UPDATE", target: "projects", id: prj.id, field: "url", value: e.target.value})} placeholder={t.fields.project.link.placeholder}/>
        
                <TextArea label="" placeholder={t.fields.project.describe.placeholder} onChange={(e) => { 
                    dispatch({type: "UPDATE", target: "projects", id: prj.id, field: "description", value: e.target.value,}),
                    e.target.style.height = "auto", 
                    e.target.style.height = e.target.scrollHeight + "px"
                }}/>
            </div>
            ))}
            <Button label={t.actions.addProject} onClick={() => dispatch({type: "ADD", target: "projects"})}/>
        </div>
    </>
}