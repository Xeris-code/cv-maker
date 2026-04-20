import { CvAction, CvState } from "@/lib/cvReducer"
import { TranslationKeys, BasicInformation } from "@/lib/types"
import { styleMenuButtonIcon } from "@/lib/styles"
import { ContactRoundIcon } from "lucide-react"
import TitleSection from "./components/TitleSection"
import InputText from "./components/InputText"
import ButtonToggle from "./components/ButtonToggle"
import DateSelect from "./components/DateSelect"
import TextArea from "@/components/builder/sections/components/TextArea"
import Label from "./components/Label"

type PersonalSectionProps = {
    state: CvState
    dispatch: React.Dispatch<CvAction>
    t: Record<TranslationKeys, {name: string, placeholder: string}>
}

function extendTextAreaDispatch(
    e: React.ChangeEvent<HTMLTextAreaElement>,
    field: keyof BasicInformation,
    dispatch: React.Dispatch<CvAction>
) {
    dispatch({
    type: "SET_BASICS_FIELD",
    field,
    value: e.target.value,
    })

    e.target.style.height = "auto"
    e.target.style.height = e.target.scrollHeight + "px"
}

function getPhoto(
    e: React.ChangeEvent<HTMLInputElement>,
    dispatch: React.Dispatch<CvAction>
) {
    const file = e.target.files?.[0]
    if (!file) return
    const imageUrl = URL.createObjectURL(file)
    dispatch({
        type: "SET_BASICS_FIELD",
        field: "photo",
        value: imageUrl,
    })
}


export default function PersonalSection({ state, dispatch, t }: PersonalSectionProps){

    const { basics, birth } = state

    const zeroNullConverter = (value: number) => {
        return value === 0 ? null: value
    }

    return <>
        <TitleSection label={t["personalTitle"].name} />
        <div className="flex flex-col pt-2 gap-3">
            <InputText
                label={t["name"].name}
                value={basics.name}
                placeholder={t["name"].placeholder}
                onChange={(e) => dispatch({type: "SET_BASICS_FIELD", field: "name", value: e.target.value})}/>
            <InputText
                label={t["surname"].name}
                value={basics.surname}
                placeholder={t["surname"].placeholder}
                onChange={(e) => dispatch({type: "SET_BASICS_FIELD", field: "surname", value: e.target.value})}/>
            <ButtonToggle 
                label={t["title"].name}
                condition={basics.titleActive}
                func={() => dispatch({type: "SET_BASICS_FIELD", field: "titleActive", value: !basics.titleActive})}/>
            {basics.titleActive
                ? <>
                    <InputText
                        label={t["titleFront"].name}
                        value={basics.titleFront}
                        placeholder={t["titleFront"].placeholder}
                        onChange={(e) => dispatch({type: "SET_BASICS_FIELD", field: "titleFront", value: e.target.value})}/>
                    <InputText
                        label={t["titleBack"].name}
                        value={basics.titleBack}
                        placeholder={t["titleBack"].placeholder}
                        onChange={(e) => dispatch({type: "SET_BASICS_FIELD", field: "titleBack", value: e.target.value})}/>
                </>
                : <div className="border-b-1"></div>
            }
            <InputText
                label={t["cityContact"].name}
                value={basics.adress_city}
                placeholder={t["cityContact"].placeholder}
                onChange={(e) => dispatch({type: "SET_BASICS_FIELD", field: "adress_city", value: e.target.value})}/>
            <InputText
                label={t["stateContact"].name}
                value={basics.adress_state}
                placeholder={t["stateContact"].placeholder}
                onChange={(e) => dispatch({type: "SET_BASICS_FIELD", field: "adress_state", value: e.target.value})}/>       
            <DateSelect
                label={t["birth"].name}
                day={birth.day}
                month={birth.month}
                year={birth.year}
                webLang={state.webLang}
                selectionPlaceholder={{day: t["birthDay"].name, month: t["birthMonth"].name, year: t["birthYear"].name}}
                onDayChange={(e) => dispatch({type: "SET_BIRTH_FIELD", field: "day", value: zeroNullConverter(Number(e.target.value))})} 
                onMonthChange={(e) => dispatch({type: "SET_BIRTH_FIELD", field: "month", value: zeroNullConverter(Number(e.target.value))})}
                onYearChange={(e) => dispatch({type: "SET_BIRTH_FIELD", field: "year", value: zeroNullConverter(Number(e.target.value))})}/>
            <TextArea 
                label={t["summary"].name}
                placeholder={t["summary"].placeholder}
                onChange={(e) => { extendTextAreaDispatch(e, "summary", dispatch)}}/>
            <InputText 
                label={t["mail"].name}
                value={basics.mail}
                placeholder={t["mail"].placeholder}
                onChange={(e) => dispatch({type: "SET_BASICS_FIELD", field: "mail", value: e.target.value})}/>
            <InputText
                label={t["phone"].name}
                value={basics.phone}
                placeholder={t["phone"].placeholder}
                onChange={(e) => dispatch({type: "SET_BASICS_FIELD", field: "phone", value: e.target.value})}/>
            <div className="flex flex-col gap-1">
                <Label label={t["photo"].name}/>
                {basics.photo
                    ? <div className="border-1 border-[#94A3B8] border-dashed rounded-xl bg-[#F1F5F9] pt-5 pb-5 flex flex-col gap-3">
                        <div className="self-center">
                            <img className="w-[100px] h-[130px] object-fit rounded" src={basics.photo} alt="CV photo"/>
                        </div>
                        <label className="self-center cursor-pointer bg-gradient-to-r from-[#CBD5F5] to-[#3B82F6] h-fit pt-2 pb-2 pl-4 pr-4 shadow-lg rounded-lg w-fit flex gap-2">
                            <ContactRoundIcon className={styleMenuButtonIcon}/>{t["newPhoto"].name}
                            <input className="hidden" type="file" accept="image/*" onChange={(e) => getPhoto(e, dispatch)}></input>
                        </label>
                        <label className="text-[14px] text-[#94A3B8] self-center">
                            {t["newPhoto"].placeholder}
                        </label>
                    </div>
                    : <div className="border-1 border-[#94A3B8] border-dashed rounded-xl bg-[#F1F5F9] pt-5 pb-5 flex flex-col gap-3">
                    <label className="self-center cursor-pointer bg-gradient-to-r from-[#CBD5F5] to-[#3B82F6] h-fit pt-2 pb-2 pl-4 pr-4 shadow-lg rounded-lg w-fit flex gap-2">
                      <ContactRoundIcon className={styleMenuButtonIcon}/>{t["firstPhoto"].name}
                      <input className="hidden" type="file" accept="image/*" onChange={(e) => getPhoto(e, dispatch)}></input>
                    </label>
                    <label className="text-[14px] text-[#94A3B8] self-center">
                      {t["firstPhoto"].placeholder}
                    </label>
                </div>}
            </div>
        </div>
    </>
}