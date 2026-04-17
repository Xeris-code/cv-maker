import TextArea from "./TextArea"
import { CoursesCertificates, TranslationKeys } from "@/lib/types"
import { extendTextAreaArray, handleChangeById} from "@/lib/handlers"
import InputText from "./InputFieldText"
import ButtonDelete from "./ButtonDeleteId"
import Label from "./Label"

import { getMonthOptions, getYearOptions } from "@/lib/constants";

type Props = {
    index: number;
    course: CoursesCertificates;
    labels: Record<TranslationKeys, { name: string, placeholder: string }>;
    setFunc: React.Dispatch<React.SetStateAction<CoursesCertificates[]>>;

}


export default function InputCourseField({
    index,
    course,
    labels,
    setFunc
}: Props){

    const monthDateOptions = getMonthOptions(labels.birthMonth.name)
    const yearDateOptions = getYearOptions(labels.birthYear.name)

    const style = "border border-[#E2E8F0] focus:border-[#3B82F6] focus:outline-none p-2 pl-3 pr-3 rounded w-full text-[15px] text-[#94A3B8]"

    return <div className="flex flex-col w-full gap-2 p-2 border">
        <div className="flex justify-between">
            <Label label={`${index + 1}. ${labels.titleCourse.name}`}/>
            <ButtonDelete id={course.id} setFunc={setFunc}/>
        </div>
        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={course.name} onChange={(e) => handleChangeById(course.id, "name", e.target.value, setFunc)} placeholder={labels.nameCourse.name}/>
        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={course.org} onChange={(e) => handleChangeById(course.id, "org", e.target.value, setFunc)} placeholder={labels.orgCourse.name}/>
        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={course.url} onChange={(e) => handleChangeById(course.id, "url", e.target.value, setFunc)} placeholder={labels.linkCourse.name}/>

        <div className="grid grid-cols-5 gap-2 w-full">
            <div className="w-full content-center border-r-1 text-center">
                <label className="text-[16px] text-[#475569] w-fit ">{labels.fromWork.name}</label>
            </div>
            <div className="col-span-2">
                <select className={style} value={course.start.month} onChange={(e) => handleChangeById(course.id, "start", {month: e.target.value, year: course.start.year}, setFunc)}>
                    {monthDateOptions.map((s) => (<option key={`month_${s.num}`} value={s.name}>{s.name}</option>))}
                </select>
            </div>
            <div className="col-span-2">
                <select className={style} value={course.start.year} onChange={(e) => handleChangeById(course.id, "start", {month: course.start.month, year: Number(e.target.value)}, setFunc)}>
                    {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                </select>
            </div>
        </div>
        <div className="grid grid-cols-5 gap-2 w-full">
            <div className="w-full content-center border-r-1 text-center">
                <label className="text-[16px] text-[#475569] w-fit ">{labels.endWork.name}</label>
            </div>
            <div className="col-span-2">
                <select className={style} value={course.end.month} onChange={(e) => handleChangeById(course.id, "end", {month: e.target.value, year: course.end.year}, setFunc)}>
                    {monthDateOptions.map((s) => (<option key={`month_${s.num}`} value={s.name}>{s.name}</option>))}
                </select>
            </div>
            <div className="col-span-2">
                <select className={style} value={course.end.year} onChange={(e) => handleChangeById(course.id, "end", {month: course.end.month, year: Number(e.target.value)}, setFunc)}>
                    {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                </select>
            </div>
            
        </div>
        <TextArea label="" placeholder={labels.descriptionCourse.placeholder} onChange={(e) => { extendTextAreaArray(e, course.id,  "description", setFunc)}}/>
    </div>
}