
import { TranslationSchema } from "@/lib/types";

export function ProfileBlock(
    { summary, t }: { summary: string; t: TranslationSchema }
) {

    
    return (
        <section className="px-5">
        <div className="flex flex-col gap-4 text-[12px]">
            {summary}
        </div>
        <div className="mt-4 h-[1px] w-full bg-[#94A3B8]" />
        </section>
    );
};