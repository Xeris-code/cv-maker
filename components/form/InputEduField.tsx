import TextArea from "./TextArea"
import { Education, TranslationKeys } from "@/lib/types"
import { extendTextAreaArray, handleChangeById} from "@/lib/handlers"
import ButtonDelete from "./ButtonDeleteId"
import Label from "./Label"

import { getYearOptions } from "@/lib/constants";

type Props = {
    index: number;
    education: Education;
    labels: Record<TranslationKeys, { name: string, placeholder: string }>;
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
    labels,
    setFunc
}: Props){

    const yearDateOptions = getYearOptions(labels.birthYear.name)

    const style = "border border-[#E2E8F0] focus:border-[#3B82F6] focus:outline-none p-2 pl-3 pr-3 rounded w-full text-[15px] text-[#94A3B8]"
    

    return <div className="flex flex-col w-full gap-2 p-2 border">
        <div className="flex justify-between">
            <Label label={`${index + 1}. ${labels.titleEdu.name}`}/>
            <ButtonDelete id={education.id} setFunc={setFunc}/>
        </div>
        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={education.faculty} onChange={(e) => handleChangeById(education.id, "faculty", e.target.value, setFunc)} placeholder={labels.facultyEdu.placeholder}/>
        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={education.university} onChange={(e) => handleChangeById(education.id, "university", e.target.value, setFunc)} placeholder={labels.uniEdu.placeholder}/>
        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={education.field} onChange={(e) => handleChangeById(education.id, "field", e.target.value, setFunc)} placeholder={labels.fieldEdu.placeholder}/>
        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={education.city} onChange={(e) => handleChangeById(education.id, "city", e.target.value, setFunc)} placeholder={labels.cityEdu.placeholder}/>
        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={education.state} onChange={(e) => handleChangeById(education.id, "state", e.target.value, setFunc)} placeholder={labels.stateEdu.placeholder}/>
        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={education.degree} onChange={(e) => handleChangeById(education.id, "degree", e.target.value, setFunc)} placeholder={`${labels.degreeEdu.name} / ${labels.degreeEdu.placeholder}`}/>
        <div className="grid grid-cols-3 gap-2 w-full">
            <div className="w-full content-center border-r-1 text-center">
                <label className="text-[16px] text-[#475569] w-fit ">{labels.fromWork.name}</label>
            </div>
            
            <div className="col-span-2">
                <select className={style} value={education.start.year} onChange={(e) => handleChangeById(education.id, "start", {year: Number(e.target.value)}, setFunc)}>
                    {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                </select>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-2 w-full">
            <div className="w-full content-center border-r-1 text-center">
                <label className="text-[16px] text-[#475569] w-fit ">{labels.endWork.name}</label>
            </div>
            <div className="col-span-2">
                <select className={style} value={education.end.year} onChange={(e) => handleChangeById(education.id, "end", {year: Number(e.target.value)}, setFunc)}>
                    {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                </select>
            </div>
        </div>
        <TextArea label="" placeholder={labels.descriptionEdu.placeholder} onChange={(e) => { extendTextAreaArray(e, education.id,  "description", setFunc)}}/>
    </div>
}