import { CvState, CvAction } from "@/lib/cvReducer"
import { Projects, TranslationKeys } from "@/lib/types"
import TitleSection from "./components/TitleSection"
import TextArea from "@/components/builder/sections/components/TextArea"
import Label from "./components/Label"
import Button from "./components/Button"

type ProjectsSectionProps = {
    state: CvState
    dispatch: React.Dispatch<CvAction>
    t: Record<TranslationKeys, {name: string, placeholder: string}>
}


export default function ProjectsSection({ state, dispatch, t}: ProjectsSectionProps){

    const { projects } = state

    function extendTextAreaDispatch(
          e: React.ChangeEvent<HTMLTextAreaElement>,
          id: number,
          field: keyof Projects,
          dispatch: React.Dispatch<CvAction>
        ) {
          dispatch({
            type: "UPDATE_PROJECT",
            id,
            field,
            value: e.target.value,
          })
        
          e.target.style.height = "auto"
          e.target.style.height = e.target.scrollHeight + "px"
        }

    return <>
        <TitleSection label={t["projectsTitle"].name}/>
        <div className="flex flex-col gap-3">
            {projects.map((prj: Projects, index: number) => (
            <div className="flex flex-col w-full gap-2 p-2 border" key={`formProjectField_${prj.id}`}>
                <div className="flex justify-between">
                    <Label label={`${index + 1}. ${t["titleProject"].name}`}/>
                    <button className="self-center hover:text-red-300 hover:border-red-300 border-1 border-[#E2E8F0] w-6 h-6 text-[#475569]"
                    onClick={() => dispatch({type:"DELETE_PROJECT", id: prj.id})}>x</button>
                </div>
                <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={prj.name} onChange={(e) => dispatch({type: "UPDATE_PROJECT", id: prj.id, field: "name", value: e.target.value})} placeholder={t["nameProject"].name}/>
                <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={prj.tech} onChange={(e) => dispatch({type: "UPDATE_PROJECT", id: prj.id, field: "tech", value: e.target.value})} placeholder={t["techProject"].name}/>
                <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={prj.url} onChange={(e) => dispatch({type: "UPDATE_PROJECT", id: prj.id, field: "url", value: e.target.value})} placeholder={t["linkProject"].name}/>
        
                <TextArea label="" placeholder={t["descriptionproject"].placeholder} onChange={(e) => { extendTextAreaDispatch(e, prj.id, "description", dispatch)}}/>
            </div>
            ))}
            <Button label={t["addProject"].name} onClick={() => dispatch({type: "ADD_PROJECT"})}/>
        </div>
    </>
}