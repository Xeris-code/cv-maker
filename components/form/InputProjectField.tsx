import TextArea from "./TextArea"
import { Projects } from "@/lib/types"
import { extendTextAreaArray, handleChangeById} from "@/lib/handlers"
import InputText from "./InputFieldText"
import ButtonDelete from "./ButtonDeleteId"

type Props = {
    index: number;
    project: Projects;
    setFunc: React.Dispatch<React.SetStateAction<Projects[]>>;

}

export default function InputProjectField({
    index,
    project,
    setFunc
}: Props){

    const styleSelector = "w-full bg-[#1e293b] text-[#9ca3af] text-center placeholder:text-[#9ca3af] focus:outline-none focus:-[#3b82f6] rounded-lg border-[#475569] p-2 ring-2 ring-[#475569] focus:-[#3b82f6]";

    return <div className="pt-2" key={`formprojectField_${project.id}`}>
        <div className="flex justify-between">
            <div className="content-center">
                <label className="pl-2 pr-2">{index + 1}. Project</label>
                <ButtonDelete id={project.id} setFunc={setFunc}/>
            </div>
        </div>
        <InputText label="Name" value={project.name} placeholder="Name..." onChange={(e) => handleChangeById(project.id, "name", e.target.value, setFunc)}/>
        <InputText label="Technology" value={project.tech} placeholder="e.g. React, Python..." onChange={(e) => handleChangeById(project.id, "tech", e.target.value, setFunc)}/>
        <InputText label="Git / Demo" value={project.url} placeholder="www.project.com..." onChange={(e) => handleChangeById(project.id, "url", e.target.value, setFunc)}/>
        
        <TextArea classNameWrapper="mt-3" key={`formprojectField_textArea_${project.id}`} placeholder="Description" onChange={(e) => { extendTextAreaArray(e, project.id,  "description", setFunc)}}/>
    </div>
}