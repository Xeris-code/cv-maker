import { CvState } from "@/lib/cvReducer"
import { Skill, Language, TranslationKeys } from "@/lib/types"

type HeadingProps = {
    label: string
}

function Heading({label}: HeadingProps){
    return <h1 className="border-b-1 font-bold pb-2">{label}</h1>
}

type ModernTemplateProps = {
    state: CvState;
    t: Record<TranslationKeys, { name: string, placeholder: string }>
}

export default function ModernTemplate({state, t}: ModernTemplateProps){

    const skillMap: Record<number, TranslationKeys> = { 1: "skillOption1", 2: "skillOption2", 3: "skillOption3", 4: "skillOption4", 5: "skillOption5", }
    const languageMap: Record<number, TranslationKeys> = { 1: "langOption1", 2: "langOption2", 3: "langOption3", 4: "langOption4", 5: "langOption5", 6: "langOption6", 7: "langOption7", }

    return <div className="flex h-full text-black">
        <div className={`bg-[#F1F5F9] w-1/3 h-full ${
            state.basics.name || state.basics.surname || state.currentPosition
                ? `${state.basics.name || state.basics.surname
                    ? `${state.currentPosition
                        ? "pt-71"
                        : "pt-65.5"
                    }`
                    : "pt-58"
                }`
                : "pt-53"
        }
            pl-10 pr-10 flex flex-col gap-10 text-[14px]`}>
            {<div className="flex flex-col gap-3">
                <Heading label={t["contactsTitle"].name.toUpperCase()}/>
                <div className="flex flex-col gap-4">
                    {(state.basics.adress_city || state.basics.adress_state) && <div className="flex flex-col gap-1">
                    <p>{t["adress"].name}</p>
                    <p className="text-[12px]">
                        {`${state.basics.adress_city}${state.basics.adress_city && state.basics.adress_state ? ", " : ""}${state.basics.adress_state}`}
                    </p></div>}
                    {state.basics.phone && <div className="flex flex-col gap-1">
                        <p>{t["phone"].name}</p>
                        <p className="text-[12px]">{state.basics.phone}</p>
                    </div>}
                    {state.basics.mail && <div className="flex flex-col gap-1">
                        <p>{t["mail"].name}</p>
                        <p className="text-[12px]">{state.basics.mail}</p>
                    </div>}
                </div>
            </div>}
            {state.skills.length > 0 && <div className="flex flex-col gap-3">
                <Heading label={t["skillsTitle"].name.toUpperCase()}/>
                {state.skills.map((skill: Skill) => (skill.name &&
                    <div key={`languagePreview${skill.id}`} className="grid grid-cols-2">
                        <p>{skill.name}</p>
                        {skill.level > 0 && <p className="text-[12px] text-end">{t[skillMap[skill.level]].name}</p>}
                    </div>
                ))}
            </div>}
            {state.langs.length > 0 && <div className="flex flex-col gap-3">
                <Heading label={t["languagesTitle"].name.toUpperCase()}/>
                {state.langs.map((lang: Language) => (lang.name &&
                    <div key={`languagePreview${lang.id}`} className="">
                        <p>{lang.name}</p>
                        {lang.level > 0 && <p className="text-[12px]">{t[languageMap[lang.level]].name}</p>}
                    </div>
                ))}
            </div>}
            {state.basics.interest && <div className="flex flex-col gap-3">
                <Heading label={t["interestsTitle"].name.toUpperCase()}/>
                <p className="whitespace-pre-line break-words">{state.basics.interest}</p>
            </div>}
        </div>
        <div className="w-2/3 h-full">
            <div className="border-3 border-black p-10 relative right-30 top-15 flex flex-col gap-3 bg-white">
                <h1 className=" font-bold text-center text-[34px]">{state.basics.name} {state.basics.surname}</h1>
                <p className="text-center text-[14px]">{state.currentPosition}</p>
            </div>
            <div className="pt-28 pl-10 pr-10 flex flex-col gap-10">
                <div className="">
                    <Heading label={t["summary"].name.toUpperCase()}/>
                </div>
                <div className="">
                    <Heading label={t["workTitle"].name.toUpperCase()}/>
                </div>
                <div className="">
                    <Heading label={t["educationTitle"].name.toUpperCase()}/>
                </div>
                <div className="">
                    <Heading label={t["coursesTitle"].name.toUpperCase()}/>
                </div>
                <div className="">
                    <Heading label={t["projectsTitle"].name.toUpperCase()}/>
                </div>
            </div>
            
        </div>
    </div>
}