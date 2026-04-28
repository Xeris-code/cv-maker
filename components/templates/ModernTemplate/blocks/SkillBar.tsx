import { SkillLevel } from "@/lib/types"

export function SkillBar ({level}: {level: SkillLevel}){
        const width = `${level * 20}%`

        return (
            <div className="h-[6px] w-full rounded bg-[#334155]">
                <div
                    className="h-[6px] rounded bg-[#3B82F6]"
                    style={{width}}
                />
            </div>
        )
    };