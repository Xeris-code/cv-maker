import TextArea from "./TextArea"
import { WorkExperience } from "@/lib/types"
import { extendTextAreaArray, handleChangeById} from "@/lib/handlers"
import InputText from "./InputFieldText"
import Button from "./Button"
import ButtonToggle from "./ButtonToggle"
import ButtonDelete from "./ButtonDeleteId"

import { monthDateOptions, yearDateOptions } from "@/lib/constants"


type Props = {
    index: number;
    work: WorkExperience;
    setFunc: React.Dispatch<React.SetStateAction<WorkExperience[]>>;

}

type WrapperProps = {
    children: React.ReactNode;
    label: string
}

function DateSelectorWrapper({children, label}: WrapperProps){
    return <div className="col-span-2 bg-[#334155] flex gap-2 ring-[#475569] ring-2 rounded-lg">
            <label className="content-center pl-2" >
                {label}
            </label>
            {children}
        </div>
}

export default function InputWorkField({
    index,
    work,
    setFunc
}: Props){

    const styleSelector = "w-full bg-[#1e293b] text-[#9ca3af] text-center placeholder:text-[#9ca3af] focus:outline-none focus:-[#3b82f6] rounded-lg border-[#475569] p-2 ring-2 ring-[#475569] focus:-[#3b82f6]";
    

    return <div className="pt-2" key={`formWorkField_${work.id}`}>
        <div className="flex justify-between">
            <div className="content-center">
                <label className="pl-2 pr-2">{index + 1}. Position</label>
                <ButtonDelete id={work.id} setFunc={setFunc}/>
            </div>
            <div className="pr-1">
                <ButtonToggle key={`formWorkField_toggleButton_${work.id}`} label="Present:" classNameWrapper="mt-2" condition={work.present} func={() => handleChangeById(work.id, "present", !work.present, setFunc)}/>
            </div>
        </div>
        <InputText label="Position" value={work.position} placeholder="Position..." onChange={(e) => handleChangeById(work.id, "position", e.target.value, setFunc)}/>
        <InputText label="Company" value={work.company} placeholder="Company..." onChange={(e) => handleChangeById(work.id, "company", e.target.value, setFunc)}/>
        <InputText label="City" value={work.city} placeholder="City..." onChange={(e) => handleChangeById(work.id, "city", e.target.value, setFunc)}/>
        <InputText label="State" value={work.state} placeholder="State..." onChange={(e) => handleChangeById(work.id, "state", e.target.value, setFunc)}/>
        <div className="grid grid-cols-5 gap-2 mt-2.5 mr-0.5">
            
            <div className="content-center text-center border-r-1 border-[#334155]">Start</div>
            <DateSelectorWrapper label="Month" key={`formWorkField_startMonth_${work.id}`}>
                <select className={styleSelector} value={work.start.month} onChange={(e) => handleChangeById(work.id, "start", {month: e.target.value, year: work.start.year}, setFunc)}>
                    {monthDateOptions.map((s) => (<option key={`month_${s.num}`} value={s.name}>{s.name}</option>))}
                </select>
            </DateSelectorWrapper>
            <DateSelectorWrapper label="Year" key={`formWorkField_startYear_${work.id}`}>
                <select className={styleSelector} value={work.start.year} onChange={(e) => handleChangeById(work.id, "start", {month: work.start.month, year: Number(e.target.value)}, setFunc)}>
                    {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                </select>
            </DateSelectorWrapper>
            
            {work.present
                ? <></>
                : <><div className="content-center text-center border-r-1 border-[#334155] mt-2.5">End</div>
                <DateSelectorWrapper label="Month" key={`formWorkField_endMonth_${work.id}`}>
                <select className={styleSelector} value={work.end.month} onChange={(e) => handleChangeById(work.id, "end", {month: e.target.value, year: work.end.year}, setFunc)}>
                    {monthDateOptions.map((s) => (<option key={`month_${s.num}`} value={s.name}>{s.name}</option>))}
                </select>
                </DateSelectorWrapper>
                <DateSelectorWrapper label="Year" key={`formWorkField_endYear_${work.id}`}>
                <select className={styleSelector} value={work.end.year} onChange={(e) => handleChangeById(work.id, "end", {month: work.end.month, year: Number(e.target.value)}, setFunc)}>
                    {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                </select>
                </DateSelectorWrapper></>
            }
            <div className="col-span-5">
                <TextArea classNameWrapper="mt-1" key={`formWorkField_textArea_${work.id}`} placeholder="Description" onChange={(e) => { extendTextAreaArray(e, work.id,  "description", setFunc)}}/>
            </div>
            <div className="col-span-5">
                {work.tasks.map((task: string, i:number) => (
                    <div className="flex gap-2">
                            <InputText
                                key={i}
                                classNameWrapper="w-full" label="Task" placeholder="task"
                                value={task}
                                onChange={(e) => setFunc(prev => prev.map(item =>
                                    item.id === work.id
                                        ? { ...item, tasks: item.tasks.map((t, index) => index === i ? e.target.value : t)}
                                        : item))}/>

                        <div className="self-center col-span-1 pt-2 flex justify-center">
                            <ButtonDelete id={work.id} setFunc={setFunc}/>
                        </div>
                        
                    </div>
                ))

                }
                <div className="flex justify-end">
                    <Button label="+ Add task" onClick={() => setFunc(prev => prev.map(item => item.id === work.id ? { ...item, tasks: [...item.tasks, ""] } : item))}/>
                </div>
            </div>
            
            
        </div>
    </div>
}