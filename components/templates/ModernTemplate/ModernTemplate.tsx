import { CvState, PreviewTranslations } from "@/lib/types"

import { Inter } from "next/font/google";
import { SkillBar, LanguageBar, SidebarHeading, MainHeader, WorkTimeline, EducationTimeline, CoursesBlock, ProfileBlock } from "@/components/templates/ModernTemplate";
import { ProjectsBlock } from "./blocks/ProjectsBlock";

const inter = Inter({ subsets: ["latin"] });

type ModernTemplateProps = {
    state: CvState;
    t: PreviewTranslations
}

export function ModernTemplate({state, t}: ModernTemplateProps){

    const { basics, skills, interests, languages, work, education, courses, projects } = state

    const hasSummary = basics.summary
    const hasTitle = basics.titleFront || basics.titleBack
    const hasHeader = basics.name || basics.surname || basics.position
    const hasName = basics.name || basics.surname
    const hasAdress = basics.adress_state || basics.adress_city
    const hasSkills = skills.items.length > 0
    const hasLanguages = languages.items.length > 0
    const hasWork = work.items.length > 0
    const hasEducation = education.items.length > 0
    const hasCourses = courses.items.length > 0
    const hasProjects = projects.items.length > 0

    return (
        <div className={`flex h-full w-full template-root ${inter.className}`}>
            
            <div className="bg-white text-[#0F172A] flex flex-col h-full w-full">
                <div className="flex-1 pb-10">
                    {hasHeader &&
                    <MainHeader basics={basics} currentPosition={basics.position} hasName={hasName} hasAdress={hasAdress} hasTitle={hasTitle}/>}
                    <div className="flex flex-col gap-3 px-5">
                        {hasSummary && <ProfileBlock summary={basics.summary} t={t}/>}
                        {hasWork && <WorkTimeline work={work} t={t} />}
                        {hasEducation && <EducationTimeline education={education} t={t}/>}
                        {hasCourses && <CoursesBlock courses={courses} t={t}/>}
                        {hasProjects && <ProjectsBlock projects={projects} t={t}/>}
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-[34%] shrink-0 bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white/80">
                {basics.photo && <div className="mx-auto mt-10 mb-5 size-50 self-center rounded-full overflow-hidden bg-gray-200">
                    <img className="h-full w-full object-cover" src={basics.photo}/>
                </div>}
                <div className="px-6">
                    {hasSkills && <>
                        <SidebarHeading label={t.sections.skills.name}/>
                        <div className="mt-4 flex flex-col gap-3">
                            {skills.items.map((s) => (
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
                        <SidebarHeading label={t.sections.languages.name}/>
                        <div className="mt-4 flex flex-col gap-3">
                            {languages.items.map((s) => (
                            <div key={s.id} className="grid grid-cols-[120px_1fr] items-center gap-3">
                                <span className="min-w-0 break-words text-[12px] font-semibold">
                                    {s.name}
                                </span>
                                <LanguageBar level={s.level}/>
                            </div>
                            ))}
                        </div>
                    </>}
                    {interests.items.length > 0 && <>
                        <SidebarHeading label={t.sections.interests.name}/>
                        <p className="text-[12px] pt-3 break-words">
                            {Array(interests.items.map((i) => (
                                ` ${i.name}`
                            ))).join(" ,")}
                        </p>
                    </>}
                </div>
            </div>
        </div>
    );
};