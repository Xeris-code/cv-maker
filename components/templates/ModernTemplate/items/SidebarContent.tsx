import { BasicInformation, Interest, Skill, PreviewTranslations, UiInterestsTranslations, Language } from "@/lib/types";
import { SkillBar, LanguageBar } from "../blocks";
import { SidebarSectionHeader } from "@/components/templates/ModernTemplate";

export function SidebarContent({
    photo, skills, languages, interests, t
}:{
    photo: BasicInformation["photo"],
    skills: Skill[],
    languages: Language[],
    interests: Interest[],
    t: PreviewTranslations,
}){

    const hasSkills = skills.length > 0
    const hasLanguages = languages.length > 0
    const hasInterests = interests.length > 0

    return (
        <div className="text-gray-300">
            {photo && <div className="mx-auto mt-10 mb-5 size-50 self-center rounded-full overflow-hidden bg-gray-200">
                <img className="h-full w-full object-cover" src={photo}/>
            </div>}
            <div className="px-6">
                {hasSkills && <>
                    <SidebarSectionHeader label={t.sections.skills.name}/>
                    <div className="mt-4 flex flex-col gap-3">
                        {skills.map((s) => (
                        <div key={s.id} className="grid grid-cols-[120px_1fr] items-center gap-3">
                            <span className="min-w-0 break-words text-[12px] font-semibold">
                                {s.name}
                            </span>
                            <SkillBar level={s.level}/>
                        </div>
                        ))}
                    </div>
                </>}
                {hasLanguages && <>
                    <SidebarSectionHeader label={t.sections.languages.name}/>
                    <div className="mt-4 flex flex-col gap-3">
                        {languages.map((s) => (
                        <div key={s.id} className="grid grid-cols-[120px_1fr] items-center gap-3">
                            <span className="min-w-0 break-words text-[12px] font-semibold">
                                {s.name}
                            </span>
                            <LanguageBar level={s.level}/>
                        </div>
                        ))}
                    </div>
                </>}
                {hasInterests && <>
                    <SidebarSectionHeader label={t.sections.interests.name}/>
                    <p className="text-[12px] pt-3 break-words">
                        {Array(interests.map((i) => (
                            ` ${i.name}`
                        ))).join(" ,")}
                    </p>
                </>}
            </div>
        </div>
    )
}