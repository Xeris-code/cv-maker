import TextArea from "./TextArea"
import { Projects, TranslationKeys } from "@/lib/types"
import { extendTextAreaArray, handleChangeById} from "@/lib/handlers"
import ButtonDelete from "./ButtonDeleteId"
import Label from "./Label"

type Props = {
    index: number;
    project: Projects;
    labels: Record<TranslationKeys, { name: string, placeholder: string }>;
    setFunc: React.Dispatch<React.SetStateAction<Projects[]>>;

}

export default function InputProjectField({
    index,
    project,
    labels,
    setFunc
}: Props){

    return <div className="flex flex-col w-full gap-2 p-2 border">
            <div className="flex justify-between">
                <Label label={`${index + 1}. ${labels.titleProject.name}`}/>
                <ButtonDelete id={project.id} setFunc={setFunc}/>
            </div>
            <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={project.name} onChange={(e) => handleChangeById(project.id, "name", e.target.value, setFunc)} placeholder={labels.nameProject.name}/>
            <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={project.tech} onChange={(e) => handleChangeById(project.id, "tech", e.target.value, setFunc)} placeholder={labels.techProject.name}/>
            <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={project.url} onChange={(e) => handleChangeById(project.id, "url", e.target.value, setFunc)} placeholder={labels.linkProject.name}/>
    
            <TextArea label="" placeholder={labels.descriptionproject.placeholder} onChange={(e) => { extendTextAreaArray(e, project.id,  "description", setFunc)}}/>
        </div>
}