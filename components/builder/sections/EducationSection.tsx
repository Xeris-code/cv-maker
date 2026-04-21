import { CvState, CvAction } from "@/lib/reducer/cvReducer"
import { Education } from "@/lib/types"
import TitleSection from "./components/TitleSection"
import TextArea from "@/components/builder/sections/components/TextArea"
import Label from "./components/Label"
import Button from "./components/Button"
import { TranslationSchema } from "@/lib/i18n/types"

type EducationSectionProps = {
    state: CvState
    dispatch: React.Dispatch<CvAction>
    t: TranslationSchema
}

function extendTextAreaDispatch(
    e: React.ChangeEvent<HTMLTextAreaElement>,
    id: number,
    field: keyof Education,
    dispatch: React.Dispatch<CvAction>
) {
    dispatch({
    type: "UPDATE_EDUCATION",
    id,
    field,
    value: e.target.value,
    })

    e.target.style.height = "auto"
    e.target.style.height = e.target.scrollHeight + "px"
}


export default function EducationSection({ state, dispatch, t}: EducationSectionProps){

    const { education } = state
        
    const currentYear = new Date().getFullYear()
    const yearDateOptions = Array.from({length: 102}, (_, i) => 
        i === 0
            ? {num: 0, label: t.fields.birth.year}
            : i === 1 
                ? {num: currentYear, label: String(currentYear)}
                : {num: currentYear - i + 1, label: String(currentYear - i + 1)}
    )

    const style = "border border-[#E2E8F0] focus:border-[#3B82F6] focus:outline-none p-2 pl-3 pr-3 rounded w-full text-[15px] text-[#94A3B8]"


    return <>
        <TitleSection label={t.sections.common.education}/>
        <div className="flex flex-col gap-3">
            {education.map((education: Education, index: number) => (
                <div className="flex flex-col w-full gap-2 p-2 border" key={`formEducationField_${index}`}>
                        <div className="flex justify-between">
                            <Label label={`${index + 1}. ${t.fields.education.name}`}/>
                            <button
                            className="self-center hover:text-red-300 hover:border-red-300 border-1 border-[#E2E8F0] w-6 h-6 text-[#475569]"
                            onClick={() => dispatch({type: "DELETE_EDUCATION", id: education.id})}>x</button>
                        </div>
                        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={education.faculty} onChange={(e) => dispatch({type: "UPDATE_EDUCATION", id: education.id, field: "faculty", value: e.target.value})} placeholder={t.fields.education.faculty.placeholder}/>
                        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={education.university} onChange={(e) => dispatch({type: "UPDATE_EDUCATION", id: education.id, field: "university", value: e.target.value})} placeholder={t.fields.education.university.placeholder}/>
                        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={education.field} onChange={(e) => dispatch({type: "UPDATE_EDUCATION", id: education.id, field: "field", value: e.target.value})} placeholder={t.fields.education.field.placeholder}/>
                        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={education.city} onChange={(e) => dispatch({type: "UPDATE_EDUCATION", id: education.id, field: "city", value: e.target.value})} placeholder={t.fields.education.city.placeholder}/>
                        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={education.state} onChange={(e) => dispatch({type: "UPDATE_EDUCATION", id: education.id, field: "state", value: e.target.value})} placeholder={t.fields.education.state.placeholder}/>
                        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={education.degree} onChange={(e) => dispatch({type: "UPDATE_EDUCATION", id: education.id, field: "degree", value: e.target.value})} placeholder={`${t.fields.education.degree.name} / ${t.fields.education.degree.placeholder}`}/>
                        <div className="grid grid-cols-3 gap-2 w-full">
                            <div className="w-full content-center border-r-1 text-center">
                                <label className="text-[16px] text-[#475569] w-fit ">{t.fields.education.from}</label>
                            </div>
                            
                            <div className="col-span-2">
                                <select className={style} value={education.start.year} onChange={(e) => dispatch({type: "UPDATE_EDUCATION", id: education.id, field: "start", value: {year: Number(e.target.value)}})}>
                                    {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 w-full">
                            <div className="w-full content-center border-r-1 text-center">
                                <label className="text-[16px] text-[#475569] w-fit ">{t.fields.education.end}</label>
                            </div>
                            <div className="col-span-2">
                                <select className={style} value={education.end.year} onChange={(e) => dispatch({type: "UPDATE_EDUCATION", id: education.id, field: "end", value: {year: Number(e.target.value)}})}>
                                    {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                                </select>
                            </div>
                        </div>
                        <TextArea label="" placeholder={t.fields.education.describe.placeholder} onChange={(e) => { extendTextAreaDispatch(e, education.id,  "description", dispatch)}}/>
                    </div>
            ))}
            <Button label={t.actions.addEducation} onClick={() => dispatch({type: "ADD_EDUCATION"})}/>
        </div>
    </>
}