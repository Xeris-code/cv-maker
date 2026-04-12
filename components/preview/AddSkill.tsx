import { Skill, SkillOption } from "../../lib/types"
import { styleFullDot, styleEmptyDot } from "@/lib/styles"

type Props = {
    skillInstance: Skill;
    options: SkillOption[];
}

export default function AddSkill({
    skillInstance, options
}: Props){

    const styleWrapper = "flex justify-between pt-5 pb-2"
    const styleName = "content-center ml-2 max-w-1/2 break-words"
    const styleLevel = "text-center text-xs text-[#4b5563] pt-1"

    return <div className={styleWrapper} key={`previewField_${skillInstance.id}`}>
            <p className={styleName}>{skillInstance.name}</p>
            <div className="min-w-[90px] content-center mr-2 relative top-1">
                <div className="flex justify-center gap-1">{
                [...Array(5)].map((_, i) => { if(skillInstance.level!==0){
                    if(i<skillInstance.level){
                        return <div 
                                key={`${skillInstance.id}_${i}`} className={styleFullDot}>
                            </div>
                    } else {
                        return <div
                                key={`${skillInstance.id}_${i}`} className={styleEmptyDot}>
                            </div>
                }}
                })}
                </div>
                <p className={styleLevel}>{
                    options.map((s) => {
                        if (s.value === skillInstance.level) {
                            if (s.value === 0){""} else {return s.label}
                        }
                    })
                }</p>
            </div>
        </div>
}