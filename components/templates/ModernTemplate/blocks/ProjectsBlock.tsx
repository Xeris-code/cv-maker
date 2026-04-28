
import { CvState, TranslationSchema } from "@/lib/types";

export function ProjectsBlock(
    { projects, t }: { projects: CvState["projects"]; t: TranslationSchema }
) {

    
    return (
        <section className="px-5">
            <h1 className="font-semibold mb-2 mt-4">{t.sections.common.projects.toUpperCase()} </h1>

            <div className="mt-4 flex flex-col gap-4 px-1">
                {projects.items.map((p) => (
                    <div key={p.id} className="border-l-2 border-[#3B82F6] pl-4">
                        
                        <p className="text-[12px]">
                            <span className="font-bold">{p.name}</span><span className="text-[10px]">{p.url ? " | " : ""}</span><a className="text-[10px] text-[#3B82F6] underline">{p.url}</a>
                        </p>

                        <p className="text-[10px] text-[#64748B]">
                        {p.tech}
                        </p>

                        <p className="mt-1 text-[11px] text-[#0F172A]">
                        {p.description}
                        </p>

                    </div>
                ))}
            </div>
        </section>
    );
};