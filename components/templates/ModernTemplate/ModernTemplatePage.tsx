import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type ModernTemplatePageProps = {
    mainBlocks: React.ReactNode[];
    sidebar: React.ReactNode;
};

export function ModernTemplatePage({
    mainBlocks,
    sidebar,
}: ModernTemplatePageProps){
    return (
            <div className={`flex min-h-full h-full w-full template-root ${inter.className}`}>

                <main className="flex flex-col flex-1 h-full bg-white">
                    <div className="flex flex-col gap-3 px-5 py-8">
                        {mainBlocks.map((block, index) => (
                            <div key={index} className="break-inside-avoid">
                                {block}
                            </div>
                        ))}
                    </div>
                </main>

                <aside className="flex flex-col w-[34%] h-full min-h-full shrink-0 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
                    {sidebar}
                </aside>

            </div>
    )
}