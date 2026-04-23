import { CvState, CvAction } from "@/lib/reducer/cvReducer"
import { CoursesCertificates } from "@/lib/types"
import TitleSection from "./components/TitleSection"
import TextArea from "@/components/builder/sections/components/TextArea"
import Label from "./components/Label"
import Button from "./components/Button"
import { TranslationSchema } from "@/lib/i18n/types"

type CourseSectionProps = {
    state: CvState
    dispatch: React.Dispatch<CvAction>
    t: TranslationSchema
}


export default function CourseSection({ state, dispatch, t}: CourseSectionProps){

    const { courses } = state

    const month_list = t.date.months
    const monthDateOptions = Array.from({length: 13}, (_, i) => 
        i === 0 
            ? {num: 0, label: String(0), name: t.fields.birth.month}
            : {num: i, label: String(i), name: month_list[i]}
    )
        
    const currentYear = new Date().getFullYear()
    const yearDateOptions = Array.from({length: 102}, (_, i) => 
        i === 0
            ? {num: 0, label: t.fields.birth.year}
            : i === 1 
                ? {num: currentYear, label: String(currentYear)}
                : {num: currentYear - i + 1, label: String(currentYear - i + 1)}
    )

    const style = "border border-[#E2E8F0] focus:border-[#3B82F6] focus:outline-none p-2 pl-3 pr-3 rounded w-full text-[15px] text-[#94A3B8]"
    const styleInput = "border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]"
    

    return <>
        <TitleSection label={t.sections.common.courses}/>
        <div className="flex flex-col gap-3">
            {courses.items.map((course: CoursesCertificates, index: number) => (
                <div className="flex flex-col w-full gap-2 p-2 border" key={`formCourseField_${index}`}>
                        <div className="flex justify-between">
                            <Label label={`${index + 1}. ${t.fields.courses.name}`}/>
                            <button
                            className="self-center hover:text-red-300 hover:border-red-300 border-1 border-[#E2E8F0] w-6 h-6 text-[#475569]"
                            onClick={() => dispatch({type: "DELETE", target: "courses", id: course.id})}>x</button>
                        </div>
                        <input className={styleInput} value={course.name} onChange={(e) => dispatch({type: "UPDATE", target: "courses", id: course.id, field: "name", value: e.target.value})} placeholder={t.fields.courses.title.placeholder}/>
                        <input className={styleInput} value={course.org} onChange={(e) => dispatch({type: "UPDATE", target: "courses", id: course.id, field: "org", value: e.target.value})} placeholder={t.fields.courses.organization.name}/>
                        <input className={styleInput} value={course.url} onChange={(e) => dispatch({type: "UPDATE", target: "courses", id: course.id, field: "url", value: e.target.value})} placeholder={t.fields.courses.link.name}/>
                
                        <div className="grid grid-cols-5 gap-2 w-full">
                            <div className="w-full content-center border-r-1 text-center">
                                <label className="text-[16px] text-[#475569] w-fit ">{t.fields.courses.from}</label>
                            </div>
                            <div className="col-span-2">
                                <select className={style} value={course.start.month} onChange={(e) => dispatch({type: "UPDATE", target: "courses", id: course.id, field: "start", value: {month: e.target.value, year: course.start.year}})}>
                                    {monthDateOptions.map((s) => (<option key={`month_${s.num}`} value={s.name}>{s.name}</option>))}
                                </select>
                            </div>
                            <div className="col-span-2">
                                <select className={style} value={course.start.year} onChange={(e) => dispatch({type: "UPDATE", target: "courses", id: course.id, field: "start", value: {month: course.start.month, year: Number(e.target.value)}})}>
                                    {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-2 w-full">
                            <div className="w-full content-center border-r-1 text-center">
                                <label className="text-[16px] text-[#475569] w-fit ">{t.fields.courses.end}</label>
                            </div>
                            <div className="col-span-2">
                                <select className={style} value={course.end.month} onChange={(e) => dispatch({type: "UPDATE", target: "courses", id: course.id, field: "end", value: {month: e.target.value, year: course.end.year}})}>
                                    {monthDateOptions.map((s) => (<option key={`month_${s.num}`} value={s.name}>{s.name}</option>))}
                                </select>
                            </div>
                            <div className="col-span-2">
                                <select className={style} value={course.end.year} onChange={(e) => dispatch({type: "UPDATE", target: "courses", id: course.id, field: "end", value: {month: course.end.month, year: Number(e.target.value)}})}>
                                    {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                                </select>
                            </div>
                            
                        </div>
                        <TextArea label="" placeholder={t.fields.courses.describe.placeholder} onChange={(e) => { 
                            dispatch({type: "UPDATE", target: "courses", id: course.id, field: "description", value: e.target.value,}),
                            e.target.style.height = "auto",
                            e.target.style.height = e.target.scrollHeight + "px"
                        }}/>
                    </div>
            ))}
            <Button label={t.actions.addCourse} onClick={() => dispatch({type: "ADD", target: "courses"})}/>
        </div>
    </>
}