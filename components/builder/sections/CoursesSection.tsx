import { CvState, CvAction } from "@/lib/cvReducer"
import { CoursesCertificates, TranslationKeys } from "@/lib/types"
import TitleSection from "./components/TitleSection"
import TextArea from "@/components/builder/sections/components/TextArea"
import Label from "./components/Label"
import Button from "./components/Button"
import { months } from "@/lib/translations"

type CourseSectionProps = {
    state: CvState
    dispatch: React.Dispatch<CvAction>
    t: Record<TranslationKeys, {name: string, placeholder: string}>
}

function extendTextAreaDispatch(
    e: React.ChangeEvent<HTMLTextAreaElement>,
    id: number,
    field: keyof CoursesCertificates,
    dispatch: React.Dispatch<CvAction>
) {
    dispatch({
    type: "UPDATE_COURSE",
    id,
    field,
    value: e.target.value,
    })

    e.target.style.height = "auto"
    e.target.style.height = e.target.scrollHeight + "px"
}


export default function CourseSection({ state, dispatch, t}: CourseSectionProps){

    const { courses } = state

    const month_list = months[state.webLang]
    const monthDateOptions = Array.from({length: 13}, (_, i) => 
        i === 0 
            ? {num: 0, label: String(0), name: t["birthMonth"].name}
            : {num: i, label: String(i), name: month_list[i]}
    )
        
    const currentYear = new Date().getFullYear()
    const yearDateOptions = Array.from({length: 102}, (_, i) => 
        i === 0
            ? {num: 0, label: t["birthYear"].name}
            : i === 1 
                ? {num: currentYear, label: String(currentYear)}
                : {num: currentYear - i + 1, label: String(currentYear - i + 1)}
    )

    const style = "border border-[#E2E8F0] focus:border-[#3B82F6] focus:outline-none p-2 pl-3 pr-3 rounded w-full text-[15px] text-[#94A3B8]"

    

    return <>
        <TitleSection label={t["workTitle"].name}/>
        <div className="flex flex-col gap-3">
            {courses.map((course: CoursesCertificates, index: number) => (
                <div className="flex flex-col w-full gap-2 p-2 border" key={`formCourseField_${index}`}>
                        <div className="flex justify-between">
                            <Label label={`${index + 1}. ${t["titleCourse"].name}`}/>
                            <button
                            className="self-center hover:text-red-300 hover:border-red-300 border-1 border-[#E2E8F0] w-6 h-6 text-[#475569]"
                            onClick={() => dispatch({type: "DELETE_COURSE", id: course.id})}>x</button>
                        </div>
                        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={course.name} onChange={(e) => dispatch({type: "UPDATE_COURSE", id: course.id, field: "name", value: e.target.value})} placeholder={t["nameCourse"].name}/>
                        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={course.org} onChange={(e) => dispatch({type: "UPDATE_COURSE", id: course.id, field: "org", value: e.target.value})} placeholder={t["orgCourse"].name}/>
                        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={course.url} onChange={(e) => dispatch({type: "UPDATE_COURSE", id: course.id, field: "url", value: e.target.value})} placeholder={t["linkCourse"].name}/>
                
                        <div className="grid grid-cols-5 gap-2 w-full">
                            <div className="w-full content-center border-r-1 text-center">
                                <label className="text-[16px] text-[#475569] w-fit ">{t["fromWork"].name}</label>
                            </div>
                            <div className="col-span-2">
                                <select className={style} value={course.start.month} onChange={(e) => dispatch({type: "UPDATE_COURSE", id: course.id, field: "start", value: {month: e.target.value, year: course.start.year}})}>
                                    {monthDateOptions.map((s) => (<option key={`month_${s.num}`} value={s.name}>{s.name}</option>))}
                                </select>
                            </div>
                            <div className="col-span-2">
                                <select className={style} value={course.start.year} onChange={(e) => dispatch({type: "UPDATE_COURSE", id: course.id, field: "start", value: {month: course.start.month, year: Number(e.target.value)}})}>
                                    {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-2 w-full">
                            <div className="w-full content-center border-r-1 text-center">
                                <label className="text-[16px] text-[#475569] w-fit ">{t["endWork"].name}</label>
                            </div>
                            <div className="col-span-2">
                                <select className={style} value={course.end.month} onChange={(e) => dispatch({type: "UPDATE_COURSE",id: course.id, field: "end", value: {month: e.target.value, year: course.end.year}})}>
                                    {monthDateOptions.map((s) => (<option key={`month_${s.num}`} value={s.name}>{s.name}</option>))}
                                </select>
                            </div>
                            <div className="col-span-2">
                                <select className={style} value={course.end.year} onChange={(e) => dispatch({type: "UPDATE_COURSE",id: course.id, field: "end", value: {month: course.end.month, year: Number(e.target.value)}})}>
                                    {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                                </select>
                            </div>
                            
                        </div>
                        <TextArea label="" placeholder={t["descriptionCourse"].placeholder} onChange={(e) => { extendTextAreaDispatch(e, course.id,  "description", dispatch)}}/>
                    </div>
            ))}
            <Button label={t["addCourse"].name} onClick={() => dispatch({type: "ADD_COURSE"})}/>
        </div>
    </>
}