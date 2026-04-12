import TextArea from "./TextArea"
import { Education } from "@/lib/types"
import { extendTextAreaArray, handleChangeById} from "@/lib/handlers"
import InputText from "./InputFieldText"
import ButtonToggle from "./ButtonToggle"
import ButtonDelete from "./ButtonDeleteId"

import { yearDateOptions } from "@/lib/constants"

type Props = {
    index: number;
    education: Education;
    setFunc: React.Dispatch<React.SetStateAction<Education[]>>;

}

type WrapperProps = {
    children: React.ReactNode;
    label: string
}

function DateSelectorWrapper({children, label}: WrapperProps){
    return <div className="col-span-4 bg-[#334155] flex gap-4 ring-[#475569] ring-2 rounded-lg">
            <label className="content-center pl-2" >
                {label}
            </label>
            {children}
        </div>
}

export default function InputEduField({
    index,
    education,
    setFunc
}: Props){

    const styleSelector = "w-full bg-[#1e293b] text-[#9ca3af] text-center placeholder:text-[#9ca3af] focus:outline-none focus:-[#3b82f6] rounded-lg border-[#475569] p-2 ring-2 ring-[#475569] focus:-[#3b82f6]";
    

    return <div className="pt-2" key={`formeducationField_${education.id}`}>
        <div className="flex justify-between">
            <div className="content-center">
                <label className="pl-2 pr-2">{index + 1}. Education</label>
                <ButtonDelete id={education.id} setFunc={setFunc}/>
            </div>
            <div className="pr-1">
                <ButtonToggle key={`formeducationField_toggleButton_${education.id}`} label="Present:" classNameWrapper="mt-2" condition={education.present} func={() => handleChangeById(education.id, "present", !education.present, setFunc)}/>
            </div>
        </div>
        <InputText label="Faculty" value={education.faculty} placeholder="Faculty..." onChange={(e) => handleChangeById(education.id, "faculty", e.target.value, setFunc)}/>
        <InputText label="University" value={education.university} placeholder="University..." onChange={(e) => handleChangeById(education.id, "university", e.target.value, setFunc)}/>
        <InputText label="Field" value={education.field} placeholder="e.g. physics., managment., IT..." onChange={(e) => handleChangeById(education.id, "field", e.target.value, setFunc)}/>
        <InputText label="City" value={education.city} placeholder="City..." onChange={(e) => handleChangeById(education.id, "city", e.target.value, setFunc)}/>
        <InputText label="State" value={education.state} placeholder="State..." onChange={(e) => handleChangeById(education.id, "state", e.target.value, setFunc)}/>
        <InputText label="Degree" value={education.degree} placeholder="e.g. bachelor's, master's..." onChange={(e) => handleChangeById(education.id, "degree", e.target.value, setFunc)}/>

            <div className="grid grid-cols-5 gap-3 mt-3">
                <div className="col-span-1 content-center text-center border-r-1 border-[#334155]">Start</div>
                <DateSelectorWrapper label="Year" key={`formeducationField_startYear_${education.id}`}>
                    <select className={styleSelector} value={education.start.year} onChange={(e) => handleChangeById(education.id, "start", {year: Number(e.target.value)}, setFunc)}>
                        {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                    </select>
                </DateSelectorWrapper>

            {education.present
                ? <></>
                : <><div className="col-span-1 content-center text-center border-r-1 border-[#334155] mt-2.5">End</div>
                    <DateSelectorWrapper label="Year" key={`formeducationField_endYear_${education.id}`}>
                    <select className={styleSelector} value={education.end.year} onChange={(e) => handleChangeById(education.id, "end", {year: Number(e.target.value)}, setFunc)}>
                        {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                    </select>
                    </DateSelectorWrapper>
                </>
            }
            </div>
            

            <TextArea classNameWrapper="mt-3" key={`formeducationField_textArea_${education.id}`} placeholder="Description" onChange={(e) => { extendTextAreaArray(e, education.id,  "description", setFunc)}}/>


    </div>
}