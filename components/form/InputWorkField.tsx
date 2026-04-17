
import { WorkExperience, TranslationKeys } from "@/lib/types"
import { extendTextAreaArray, handleChangeById} from "@/lib/handlers"
import ButtonToggle from "./ButtonToggle"
import ButtonDelete from "./ButtonDeleteId"
import Label from "./Label"
import { getMonthOptions, getYearOptions } from "@/lib/constants";
import TextArea from "./TextArea"


type Props = {
    index: number;
    work: WorkExperience;
    labels: Record<TranslationKeys, { name: string, placeholder: string }>;
    setFunc: React.Dispatch<React.SetStateAction<WorkExperience[]>>;

}

export default function InputWorkField({
    index,
    work,
    labels,
    setFunc
}: Props){

    const monthDateOptions = getMonthOptions(labels.birthMonth.name)
    const yearDateOptions = getYearOptions(labels.birthYear.name)

    const style = "border border-[#E2E8F0] focus:border-[#3B82F6] focus:outline-none p-2 pl-3 pr-3 rounded w-full text-[15px] text-[#94A3B8]"

    return <div className="flex flex-col w-full gap-2 p-2 border">
        <div className="flex justify-between">
            <Label label={`${index + 1}. ${labels.positionWork.name}`}/>
            <ButtonDelete id={work.id} setFunc={setFunc}/>
        </div>
        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={work.position} onChange={(e) => handleChangeById(work.id, "position", e.target.value, setFunc)} placeholder={labels.positionWork.placeholder}/>
        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={work.company} onChange={(e) => handleChangeById(work.id, "company", e.target.value, setFunc)} placeholder={labels.companyWork.placeholder}/>
        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={work.city} onChange={(e) => handleChangeById(work.id, "city", e.target.value, setFunc)} placeholder={labels.cityWork.placeholder}/>
        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={work.state} onChange={(e) => handleChangeById(work.id, "state", e.target.value, setFunc)} placeholder={labels.stateWork.placeholder}/>
        
        <div className="grid grid-cols-5 gap-2 w-full">
            <div className="w-full content-center border-r-1 text-center">
                <label className="text-[16px] text-[#475569] w-fit ">{labels.fromWork.name}</label>
            </div>
            <div className="col-span-2">
                <select className={style} value={work.start.month} onChange={(e) => handleChangeById(work.id, "start", {month: e.target.value, year: work.start.year}, setFunc)}>
                    {monthDateOptions.map((s) => (<option key={`month_${s.num}`} value={s.name}>{s.name}</option>))}
                </select>
            </div>
            <div className="col-span-2">
                <select className={style} value={work.start.year} onChange={(e) => handleChangeById(work.id, "start", {month: work.start.month, year: Number(e.target.value)}, setFunc)}>
                    {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                </select>
            </div>
        </div>
        {!work.present && 
        <div className="grid grid-cols-5 gap-2 w-full">
            <div className="w-full content-center border-r-1 text-center">
                <label className="text-[16px] text-[#475569] w-fit ">{labels.endWork.name}</label>
            </div>
            <div className="col-span-2">
                <select className={style} value={work.end.month} onChange={(e) => handleChangeById(work.id, "end", {month: e.target.value, year: work.end.year}, setFunc)}>
                    {monthDateOptions.map((s) => (<option key={`month_${s.num}`} value={s.name}>{s.name}</option>))}
                </select>
            </div>
            <div className="col-span-2">
                <select className={style} value={work.end.year} onChange={(e) => handleChangeById(work.id, "end", {month: work.end.month, year: Number(e.target.value)}, setFunc)}>
                    {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                </select>
            </div>
        </div>}
        <ButtonToggle label={labels.presentWork.name} classNameWrapper="mt-2" condition={work.present} func={() => handleChangeById(work.id, "present", !work.present, setFunc)}/>
        <TextArea label="" placeholder={labels.descriptionWork.placeholder} onChange={(e) => { extendTextAreaArray(e, work.id,  "description", setFunc)}}/>
    </div>
}