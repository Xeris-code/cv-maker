import { CvState, LanguageLevel, SkillLevel, TranslationSchema } from "@/lib/types"
import { Earth, Mail, MapPin, Phone } from "lucide-react";
import { Montserrat, Inter } from "next/font/google"
import { TextList } from "../ModernTemplate";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

type CentralizedTemplateProps = {
    state: CvState;
    t: TranslationSchema;
}

export function CentralizedTemplate({state, t}: CentralizedTemplateProps){

    const { basics, education, work, skills, languages, projects, courses } = state

    const hasWork = work.items.length > 0;
    const hasPojects = projects.items.length > 0;
    const hasCourses = courses.items.length > 0;
    const hasEducation = education.items.length > 0;
    const hasSkills = skills.items.length > 0;
    const hasLanguages = languages.items.length > 0;
    const hasAdress = basics.adress_city || basics.adress_state

    const popisyDatumy = "#9CA3AF"
    const accent = "#3B82F6"
    const dividerLines = "#444444"
    const accentLight = "#60A5FA"
    const skillBar = "#3F3F46"

    type ContactItem = {
        icon: React.ReactNode;
        text: string;
    };

    const rawContactItems: (ContactItem | null)[] = [
        hasAdress
            ? {
                icon: <MapPin className="size-[30px] text-[#3B82F6]" />,
                text: [basics.adress_city, basics.adress_state].filter(Boolean).join(", "),
            }
            : null,

        basics.mail
            ? {
                icon: <Mail className="size-[30px] text-[#3B82F6]" />,
                text: basics.mail,
            }
            : null,

        basics.portfolio
            ? {
                icon: <Earth className="size-[30px] text-[#3B82F6]" />,
                text: basics.portfolio,
            }
            : null,

        basics.phone
            ? {
                icon: <Phone className="size-[30px] text-[#3B82F6]" />,
                text: basics.phone,
            }
            : null,
    ];
    
    const contactItems = rawContactItems.filter((item): item is ContactItem => item !== null);

    function SkillBar ({level}: {level: SkillLevel}){

        const width = `${level * 20}%`

        return (
            <div className="h-[4px] w-3/5 rounded bg-[#3F3F46] self-end rotate-180">
                <div
                    className="h-[4px] rounded bg-[#3B82F6]"
                    style={{width}}
                />
            </div>
        );
    };

    function LanguageBar ({level}: {level: LanguageLevel}){

        const width = `${level * 100/7}%`

        return (
            <div className="h-[4px] w-3/5 rounded bg-[#3F3F46] self-end rotate-180">
                <div
                    className="h-[4px] rounded bg-[#3B82F6]"
                    style={{width}}
                />
            </div>
        );
    };

    return (
        <div className={`flex flex-col min-h-[1123px] bg-[#2B2B2B] text-[#E5E7EB] ${inter.className}`}>
            <div className="relative h-[230px] pt-35">
                <div className="absolute left-1/2 ring-5 ring-[#444444] top-16 z-10 size-50 -translate-x-1/2 overflow-hidden rounded-full bg-gray-200">
                    {basics.photo && (
                    <img
                        className="h-full w-full object-cover"
                        src={basics.photo}
                    />
                    )}
                </div>

                <div className="grid grid-cols-[1fr_220px_1fr] justify-center items-center">

                    <span className={`${montserrat.className} break-words leading-tight text-right text-[36px] uppercase tracking-widest text-[#60A5FA]`}>
                        <div className="flex flex-col">
                            {basics.titleActive && basics.titleFront && <span>{basics.titleFront}</span>}
                            <span>{basics.name}</span>
                        </div>
                    </span>

                    <div/>

                    <span className={`${montserrat.className} break-words leading-tight text-left text-[36px] uppercase tracking-widest text-[#60A5FA]`}>
                        <div className="flex flex-col">
                            <span>{basics.surname}{basics.titleActive && basics.titleBack ? "," : ""}</span>
                            {basics.titleActive && basics.titleBack && <span>{basics.titleBack}</span>}
                        </div>
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-2 min-h-[700px] mt-10">
                <div className="border-r-4 border-[#444444] pt-10 px-6 text-end">
                    {basics.summary &&
                        <div className="flex flex-col justify-end">
                            <h1 className="text-[14px] tracking-wider">{t.fields.summary.title.toUpperCase()}</h1>
                            <span className="mt-1 text-[11px] text-[#9CA3AF] break-words">{basics.summary}</span>
                        </div>
                    }
                    {hasSkills && 
                        <div className="mt-5 flex flex-col">
                            <h1 className="text-[14px] tracking-wider">{t.sections.common.skills.title.toUpperCase()}</h1>
                            <div className="flex flex-col gap-2 mt-1">
                            {skills.items.map((s) => (
                                <div key={s.id} className="flex flex-col gap-1">
                                    <span className="text-[12px] text-[#9CA3AF]">{s.name}</span>
                                    <SkillBar level={s.level}/>
                                </div>
                            ))}
                            </div>
                        </div>
                    }
                    {hasLanguages &&
                        <div className="mt-5">
                            <h1 className="text-[14px] tracking-wider">{t.sections.common.languages.title.toUpperCase()}</h1>
                            <div className="flex flex-col gap-2 mt-1">
                            {languages.items.map((l) => (
                                <div key={l.id} className="flex flex-col gap-1">
                                    <span className="text-[12px] text-[#9CA3AF]">{l.name}</span>
                                    <LanguageBar level={l.level}/>
                                </div>
                            ))}
                            </div>
                        </div>
                    }
                    {hasPojects && 
                        <div className="mt-5">
                            <h1 className="text-[14px] tracking-wider">{t.sections.common.projects.title.toUpperCase()}</h1>
                            <div className="flex flex-col gap-2 w-full items-end text-right mt-1">
                                {projects.items.map((p) => (
                                    <div key={p.id}>
                                        <div className="flex flex-col items-end text-right">
                                            <div className="flex gap-2 items-center">
                                                <span className="text-[10px]">{p.tech}</span>
                                                <span className="text-[10px] text-[#9CA3AF]">|</span>
                                                <span className="text-[13px] text-[#60A5FA] font-semibold break-all">
                                                {p.name}
                                                </span>
                                                
                                            </div>
                                            
                                            {p.url && (
                                                <span className="text-[10px] text-[#9CA3AF]">
                                                {p.url}
                                                </span>
                                            )}

                                            <span className="text-[12px] text-[#9CA3AF] max-w-[90%] pt-1">
                                                {p.description}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                </div>
                <div className="pt-10 px-6">
                    {hasWork && 
                        <div>
                            <h1 className="text-[14px] tracking-wider">{t.sections.common.work.title.toUpperCase()}</h1>
                            <div className="flex flex-col gap-2">
                                {work.items.map((w) => (
                                    <div key={w.id}>
                                        <div className="grid grid-cols-[max-content_1fr] gap-2 mt-1 items-center">
                                            <span className="text-[10px]">
                                                {[w.start.year, w.end.year].filter(Boolean).join(" - ")}
                                            </span>
                                            <span className="text-[13px] text-[#60A5FA] font-semibold break-all">
                                                {w.position}
                                            </span>
                                        </div>
                                        <div className="text-[10px] text-[#9CA3AF] flex gap-2 pb-1">
                                            <span>{w.company}</span>
                                            <span>|</span>
                                            <span>{[w.city, w.state].filter(Boolean).join(", ")}</span>
                                        </div>
                                        <TextList
                                            text={w.description}
                                            classList="list-disc pl-5 text-[11px] text-[#9CA3AF]"
                                            />
                                    </div>
                                ))}
                            </div>
                        </div>}
                            {hasEducation && <div className="mt-5">
                                <h1 className="text-[14px] tracking-wider">{t.sections.common.education.title.toUpperCase()}</h1>
                                <div className="flex flex-col gap-2">
                                    {education.items.map((e) => (
                                        <div key={e.id}>
                                            <div className="grid grid-cols-[max-content_1fr] gap-2 mt-1 items-center">
                                                <span className="text-[10px]">
                                                    {[e.start.year, e.end.year].filter(Boolean).join(" - ")}
                                                </span>
                                                <span className="text-[13px] text-[#60A5FA] font-semibold break-all">
                                                    {e.university}
                                                </span>
                                            </div>
                                            <div className="text-[10px] text-[#9CA3AF] flex gap-2 pb-1">
                                                <span>{e.field}</span>
                                                <span>{(e.city || e.state ? "|" : null)}</span>
                                                <span>{[e.city, e.state].filter(Boolean).join(", ")}</span>
                                            </div>
                                            <TextList
                                                text={e.description}
                                                classList="list-disc pl-5 text-[12px] text-[#9CA3AF]"
                                                />
                                        </div>
                                    ))}
                                </div>
                            </div>}
                            {hasCourses && <div className="mt-5">
                                <h1 className="text-[14px] tracking-wider">{t.sections.common.courses.title.toUpperCase()}</h1>
                                <div className="flex flex-col gap-2">
                                    {courses.items.map((c) => (
                                        <div key={c.id}>
                                            <div className="grid grid-cols-[max-content_1fr] gap-2 mt-1 items-center">
                                                {c.date.year !== 0 && <span className="text-[10px]">
                                                    {[c.date.year].filter(Boolean).join(" - ")}
                                                </span>}
                                                <span className="text-[13px] text-[#60A5FA] font-semibold break-all">
                                                    {c.name}
                                                </span>
                                            </div>
                                            <div className="text-[10px] text-[#9CA3AF] flex gap-2 pb-1">
                                                <span>{c.org}</span>
                                                {c.url ? <span>|</span> : null}
                                                <span>{c.url}</span>
                                            </div>
                                            <TextList
                                                text={c.description}
                                                classList="list-disc pl-5 text-[12px] text-[#9CA3AF]"
                                                />
                                        </div>
                                    ))}
                                </div>
                            </div>}
                            {basics.interest && <div className="mt-5">
                                <h1 className="text-[14px] tracking-wider">{t.sections.common.interests.title.toUpperCase()}</h1>
                                <TextList
                                    text={basics.interest}
                                    classList="list-disc pl-5 text-[12px] text-[#9CA3AF]"
                                />
                            </div>}
                        
                    
                </div>
            </div>
            <div className="flex justify-center gap-10 px-10 pt-5">
                {contactItems.map((item, index) => (
                    <div
                    key={index}
                    className="flex w-[140px] flex-col items-center gap-2 text-center"
                    >
                    {item.icon}
                    <span className="line-clamp-2 break-all text-[12px] text-[#9CA3AF]">
                        {item.text}
                    </span>
                    </div>
                ))}
            </div>
        </div>
    )
};