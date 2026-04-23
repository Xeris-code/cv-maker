import { BasicInformation, TranslationSchema, CvAction, CvState } from "@/lib/types"
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
    t: TranslationSchema
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
        <TitleSection label={t.sections.common.personal} />
        <div className="flex flex-col pt-2 gap-3">
            <InputText
                label={t.fields.firstName.name}
                value={basics.name}
                placeholder={t.fields.firstName.placeholder}
                onChange={(e) => dispatch({type: "SET_BASICS_FIELD", field: "name", value: e.target.value})}/>
            <InputText
                label={t.fields.lastName.name}
                value={basics.surname}
                placeholder={t.fields.lastName.placeholder}
                onChange={(e) => dispatch({type: "SET_BASICS_FIELD", field: "surname", value: e.target.value})}/>
            <ButtonToggle 
                label={t.fields.title.name}
                condition={basics.titleActive}
                func={() => dispatch({type: "SET_BASICS_FIELD", field: "titleActive", value: !basics.titleActive})}/>
            {basics.titleActive
                ? <>
                    <InputText
                        label={t.fields.title.front.name}
                        value={basics.titleFront}
                        placeholder={t.fields.title.front.placeholder}
                        onChange={(e) => dispatch({type: "SET_BASICS_FIELD", field: "titleFront", value: e.target.value})}/>
                    <InputText
                        label={t.fields.title.back.name}
                        value={basics.titleBack}
                        placeholder={t.fields.title.back.placeholder}
                        onChange={(e) => dispatch({type: "SET_BASICS_FIELD", field: "titleBack", value: e.target.value})}/>
                </>
                : <div className="border-b-1"></div>
            }
            <InputText
                label={t.fields.address.city.name}
                value={basics.adress_city}
                placeholder={t.fields.address.city.placeholder}
                onChange={(e) => dispatch({type: "SET_BASICS_FIELD", field: "adress_city", value: e.target.value})}/>
            <InputText
                label={t.fields.address.state.name}
                value={basics.adress_state}
                placeholder={t.fields.address.state.placeholder}
                onChange={(e) => dispatch({type: "SET_BASICS_FIELD", field: "adress_state", value: e.target.value})}/>       
            <DateSelect
                label={t.fields.birth.name}
                day={birth.day}
                month={birth.month}
                year={birth.year}
                t={t}
                onDayChange={(e) => dispatch({type: "SET_BIRTH_FIELD", field: "day", value: zeroNullConverter(Number(e.target.value))})} 
                onMonthChange={(e) => dispatch({type: "SET_BIRTH_FIELD", field: "month", value: zeroNullConverter(Number(e.target.value))})}
                onYearChange={(e) => dispatch({type: "SET_BIRTH_FIELD", field: "year", value: zeroNullConverter(Number(e.target.value))})}/>
            <TextArea 
                label={t.fields.summary.name}
                placeholder={t.fields.summary.placeholder}
                onChange={(e) => { extendTextAreaDispatch(e, "summary", dispatch)}}/>
            <InputText 
                label={t.fields.email.name}
                value={basics.mail}
                placeholder={t.fields.email.placeholder}
                onChange={(e) => dispatch({type: "SET_BASICS_FIELD", field: "mail", value: e.target.value})}/>
            <InputText
                label={t.fields.phone.name}
                value={basics.phone}
                placeholder={t.fields.phone.placeholder}
                onChange={(e) => dispatch({type: "SET_BASICS_FIELD", field: "phone", value: e.target.value})}/>
            <div className="flex flex-col gap-1">
                <Label label={t.fields.photo.name}/>
                {basics.photo
                    ? <div className="border-1 border-[#94A3B8] border-dashed rounded-xl bg-[#F1F5F9] pt-5 pb-5 flex flex-col gap-3">
                        <div className="self-center">
                            <img className="w-[100px] h-[130px] object-fit rounded" src={basics.photo} alt="CV photo"/>
                        </div>
                        <label className="self-center cursor-pointer bg-gradient-to-r from-[#CBD5F5] to-[#3B82F6] h-fit pt-2 pb-2 pl-4 pr-4 shadow-lg rounded-lg w-fit flex gap-2">
                            <ContactRoundIcon className={styleMenuButtonIcon}/>{t.actions.addPhoto}
                            <input className="hidden" type="file" accept="image/*" onChange={(e) => getPhoto(e, dispatch)}></input>
                        </label>
                        <label className="text-[14px] text-[#94A3B8] self-center">
                            {t.fields.photo.placeholder}
                        </label>
                    </div>
                    : <div className="border-1 border-[#94A3B8] border-dashed rounded-xl bg-[#F1F5F9] pt-5 pb-5 flex flex-col gap-3">
                    <label className="self-center cursor-pointer bg-gradient-to-r from-[#CBD5F5] to-[#3B82F6] h-fit pt-2 pb-2 pl-4 pr-4 shadow-lg rounded-lg w-fit flex gap-2">
                      <ContactRoundIcon className={styleMenuButtonIcon}/>{t.actions.addPhoto}
                      <input className="hidden" type="file" accept="image/*" onChange={(e) => getPhoto(e, dispatch)}></input>
                    </label>
                    <label className="text-[14px] text-[#94A3B8] self-center">
                      {t.fields.photo.placeholder}
                    </label>
                </div>}
            </div>
        </div>
    </>
}