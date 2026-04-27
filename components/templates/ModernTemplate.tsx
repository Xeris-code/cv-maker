import { Skill, Language, CvState, TranslationSchema } from "@/lib/types"

type HeadingProps = {
    label: string
}

function Heading({label}: HeadingProps){
    return <h1 className="border-b-1 font-bold pb-2">{label}</h1>
}

type ModernTemplateProps = {
    state: CvState;
    t: TranslationSchema
}

export function ModernTemplate({state, t}: ModernTemplateProps){

    const { basics, skills, languages, work, education, courses, projects } = state

    const hasAdress = basics.adress_state || basics.adress_city

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
                <Heading label={t.sections.common.contacts.toUpperCase()}/>
                <div className="flex flex-col gap-4">
                    {(state.basics.adress_city || state.basics.adress_state) && <div className="flex flex-col gap-1">
                    <p>{t.fields.address.name}</p>
                    <p className="text-[12px]">
                        {`${state.basics.adress_city}${state.basics.adress_city && state.basics.adress_state ? ", " : ""}${state.basics.adress_state}`}
                    </p></div>}
                    {state.basics.phone && <div className="flex flex-col gap-1">
                        <p>{t.fields.phone.name}</p>
                        <p className="text-[12px]">{state.basics.phone}</p>
                    </div>}
                    {state.basics.mail && <div className="flex flex-col gap-1">
                        <p>{t.fields.email.name}</p>
                        <p className="text-[12px]">{state.basics.mail}</p>
                    </div>}
                </div>
            </div>}
            {state.skills.items.length > 0 && <div className="flex flex-col gap-3">
                <Heading label={t.sections.common.skills.toUpperCase()}/>
                {state.skills.items.map((skill: Skill) => (skill.name &&
                    <div key={`languagePreview${skill.id}`} className="grid grid-cols-2">
                        <p>{skill.name}</p>
                        {skill.level > 0 && <p className="text-[12px] text-end">{t.options.skills[skill.level]}</p>}
                    </div>
                ))}
            </div>}
            {state.languages.items.length > 0 && <div className="flex flex-col gap-3">
                <Heading label={t.sections.common.languages.toUpperCase()}/>
                {state.languages.items.map((lang: Language) => (lang.name &&
                    <div key={`languagePreview${lang.id}`} className="">
                        <p>{lang.name}</p>
                        {lang.level > 0 && <p className="text-[12px]">{t.options.language[lang.level]}</p>}
                    </div>
                ))}
            </div>}
            {state.basics.interest && <div className="flex flex-col gap-3">
                <Heading label={t.sections.common.interests.toUpperCase()}/>
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
                    <Heading label={t.fields.summary.name.toUpperCase()}/>
                </div>
                <div className="">
                    <Heading label={t.sections.common.work.toUpperCase()}/>
                </div>
                <div className="">
                    <Heading label={t.sections.common.education.toUpperCase()}/>
                </div>
                <div className="">
                    <Heading label={t.sections.common.courses.toUpperCase()}/>
                </div>
                <div className="">
                    <Heading label={t.sections.common.projects.toUpperCase()}/>
                </div>
            </div>
            
        </div>
    </div>
}