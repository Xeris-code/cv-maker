import { LanguageLevel } from "@/lib/types"

export function LanguageBar ({level}: {level: LanguageLevel}){
        const width = `${level * 100/7}%`

        return (
            <div className="h-[6px] w-full rounded bg-[#334155]">
                <div
                    className="h-[6px] rounded bg-[#3B82F6]"
                    style={{width}}
                />
            </div>
        )
    };