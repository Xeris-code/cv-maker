import TextArea from "./TextArea"
import { CoursesCertificates } from "@/lib/types"
import { extendTextAreaArray, handleChangeById} from "@/lib/handlers"
import InputText from "./InputFieldText"
import ButtonDelete from "./ButtonDeleteId"

import { monthDateOptions, yearDateOptions } from "@/lib/constants"

type Props = {
    index: number;
    course: CoursesCertificates;
    setFunc: React.Dispatch<React.SetStateAction<CoursesCertificates[]>>;

}

type WrapperProps = {
    children: React.ReactNode;
    label: string
}

function DateSelectorWrapper({children, label}: WrapperProps){
    return <div className="col-span-2 bg-[#334155] flex gap-4 ring-[#475569] ring-2 rounded-lg">
            <label className="content-center pl-2" >
                {label}
            </label>
            {children}
        </div>
}

export default function InputCourseField({
    index,
    course,
    setFunc
}: Props){

    const styleSelector = "w-full bg-[#1e293b] text-[#9ca3af] text-center placeholder:text-[#9ca3af] focus:outline-none focus:-[#3b82f6] rounded-lg border-[#475569] p-2 ring-2 ring-[#475569] focus:-[#3b82f6]";

    return <div className="pt-2" key={`formcourseField_${course.id}`}>
        <div className="flex justify-between">
            <div className="content-center">
                <label className="pl-2 pr-2">{index + 1}. Course / Certificate</label>
                <ButtonDelete id={course.id} setFunc={setFunc}/>
            </div>
        </div>
        <InputText label="Name" value={course.name} placeholder="Name..." onChange={(e) => handleChangeById(course.id, "name", e.target.value, setFunc)}/>
        <InputText label="Organization" value={course.org} placeholder="Organization..." onChange={(e) => handleChangeById(course.id, "org", e.target.value, setFunc)}/>
        <InputText label="Link" value={course.url} placeholder="www.course.com..." onChange={(e) => handleChangeById(course.id, "url", e.target.value, setFunc)}/>
        
            <div className="grid grid-cols-5 gap-3 mt-3">
                <div className="col-span-1 content-center text-center border-r-1 border-[#334155]">Start</div>
                <DateSelectorWrapper label="Month" key={`formcourseField_startMonth_${course.id}`}>
                    <select className={styleSelector} value={course.start.month} onChange={(e) => handleChangeById(course.id, "start", {month: e.target.value, year: course.start.year}, setFunc)}>
                        {monthDateOptions.map((s) => (<option key={`month_${s.num}`} value={s.name}>{s.name}</option>))}
                    </select>
                </DateSelectorWrapper>
                <DateSelectorWrapper label="Year" key={`formcourseField_startYear_${course.id}`}>
                    <select className={styleSelector} value={course.start.year} onChange={(e) => handleChangeById(course.id, "start", {month: course.start.month, year: Number(e.target.value)}, setFunc)}>
                        {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                    </select>
                </DateSelectorWrapper>
                <div className="col-span-1 content-center text-center border-r-1 border-[#334155] mt-2.5">End</div>
                    <DateSelectorWrapper label="Month" key={`formcourseField_endMonth_${course.id}`}>
                    <select className={styleSelector} value={course.end.month} onChange={(e) => handleChangeById(course.id, "end", {month: e.target.value, year: course.end.year}, setFunc)}>
                        {monthDateOptions.map((s) => (<option key={`month_${s.num}`} value={s.name}>{s.name}</option>))}
                    </select>
                    </DateSelectorWrapper>
                    <DateSelectorWrapper label="Year" key={`formcourseField_endYear_${course.id}`}>
                    <select className={styleSelector} value={course.end.year} onChange={(e) => handleChangeById(course.id, "end", {month: course.end.month, year: Number(e.target.value)}, setFunc)}>
                        {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                    </select>
                    </DateSelectorWrapper>
            </div>
            <TextArea classNameWrapper="mt-3" key={`formcourseField_textArea_${course.id}`} placeholder="Description" onChange={(e) => { extendTextAreaArray(e, course.id,  "description", setFunc)}}/>
    </div>
}