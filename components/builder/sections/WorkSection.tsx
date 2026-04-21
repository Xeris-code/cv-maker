import { CvState, CvAction } from "@/lib/reducer/cvReducer"
import { WorkExperience } from "@/lib/types"
import TitleSection from "./components/TitleSection"
import TextArea from "@/components/builder/sections/components/TextArea"
import Label from "./components/Label"
import Button from "./components/Button"
import ButtonToggle from "./components/ButtonToggle"
import InputText from "./components/InputText"
import { TranslationSchema } from "@/lib/i18n/types"

type WorkSectionProps = {
    state: CvState
    dispatch: React.Dispatch<CvAction>
    t: TranslationSchema
}

function extendTextAreaDispatch(
    e: React.ChangeEvent<HTMLTextAreaElement>,
    id: number,
    field: keyof WorkExperience,
    dispatch: React.Dispatch<CvAction>
) {
    dispatch({
    type: "UPDATE_WORK",
    id,
    field,
    value: e.target.value,
    })

    e.target.style.height = "auto"
    e.target.style.height = e.target.scrollHeight + "px"
}

export default function WorkSection({ state, dispatch, t}: WorkSectionProps){

    const { work } = state

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

    return <>
        <TitleSection label={t.sections.common.work}/>
        <div className="flex flex-col gap-3">
            <InputText
            label={t.fields.position.name}
            value={state.currentPosition}
            placeholder={t.fields.position.placeholder}
            onChange={(e) => dispatch({type: "SET_CURRENT_POSITION", value: e.target.value})}/>
            {work.map((work: WorkExperience, index: number) => (
                <div className="flex flex-col w-full gap-2 p-2 border" key={`formWorkField_${index}`}>
                        <div className="flex justify-between">
                            <Label label={`${index + 1}. ${t.fields.work.name}`}/>
                            <button
                            className="self-center hover:text-red-300 hover:border-red-300 border-1 border-[#E2E8F0] w-6 h-6 text-[#475569]"
                            onClick={() => dispatch({type: "DELETE_WORK", id: work.id})}>x</button>
                        </div>
                        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={work.position} onChange={(e) => dispatch({type: "UPDATE_WORK", id: work.id, field: "position", value: e.target.value})} placeholder={t.fields.work.position.placeholder}/>
                        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={work.company} onChange={(e) => dispatch({type: "UPDATE_WORK", id: work.id, field: "company", value: e.target.value})} placeholder={t.fields.work.company.placeholder}/>
                        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={work.city} onChange={(e) => dispatch({type: "UPDATE_WORK", id: work.id, field: "city", value: e.target.value})} placeholder={t.fields.work.city.placeholder}/>
                        <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={work.state} onChange={(e) => dispatch({type: "UPDATE_WORK", id: work.id, field: "state", value: e.target.value})} placeholder={t.fields.work.state.placeholder}/>
                        
                        <div className="grid grid-cols-5 gap-2 w-full">
                            <div className="w-full content-center border-r-1 text-center">
                                <label className="text-[16px] text-[#475569] w-fit ">{t.fields.work.from}</label>
                            </div>
                            <div className="col-span-2">
                                <select className={style} value={work.start.month} onChange={(e) => dispatch({type: "UPDATE_WORK", id: work.id, field: "start", value: {month: e.target.value, year: work.start.year}})}>
                                    {monthDateOptions.map((s) => (<option key={`month_${s.num}`} value={s.name}>{s.name}</option>))}
                                </select>
                            </div>
                            <div className="col-span-2">
                                <select className={style} value={work.start.year} onChange={(e) => dispatch({type: "UPDATE_WORK", id: work.id, field: "start", value: {month: work.start.month, year: Number(e.target.value)}})}>
                                    {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                                </select>
                            </div>
                        </div>
                        {!work.present && 
                        <div className="grid grid-cols-5 gap-2 w-full">
                            <div className="w-full content-center border-r-1 text-center">
                                <label className="text-[16px] text-[#475569] w-fit ">{t.fields.work.end}</label>
                            </div>
                            <div className="col-span-2">
                                <select className={style} value={work.end.month} onChange={(e) => dispatch({type: "UPDATE_WORK", id: work.id, field: "end", value: {month: e.target.value, year: work.end.year}})}>
                                    {monthDateOptions.map((s) => (<option key={`month_${s.num}`} value={s.name}>{s.name}</option>))}
                                </select>
                            </div>
                            <div className="col-span-2">
                                <select className={style} value={work.end.year} onChange={(e) => dispatch({type: "UPDATE_WORK", id: work.id, field: "end", value: {month: work.end.month, year: Number(e.target.value)}})}>
                                    {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                                </select>
                            </div>
                        </div>}
                        <ButtonToggle
                            label={t.fields.work.present}
                            classNameWrapper="mt-2" condition={work.present}
                            func={() => dispatch({type: "UPDATE_WORK", id: work.id, field: "present", value: !work.present})}/>
                        <TextArea label="" placeholder={t.fields.work.describe.placeholder} onChange={(e) => { extendTextAreaDispatch(e, work.id,  "description", dispatch)}}/>
                    </div>
            ))}
            <Button label={t.actions.addWork} onClick={() => dispatch({type: "ADD_WORK"})}/>
        </div>
    </>
}