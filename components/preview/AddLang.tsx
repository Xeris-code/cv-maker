import { Language, LanguageOption } from "../../lib/types"
import { styleFullDot, styleEmptyDot } from "@/lib/styles"

type Props = {
    langInstance: Language;
    options: LanguageOption[];
}

export default function AddLang({
    langInstance,
    options
}: Props){

    return <div className="flex justify-between pt-5 pb-2" key={`previewField_${langInstance.id}`}>
        <div className="ml-2">
            <p className="text-center break-words">{langInstance.name}</p>
            
        </div>
        
        
        <div className="min-w-[90px] content-center mr-2">
            <div className="flex justify-center gap-1">{
                [...Array(6)].map((_, i) => { if(langInstance.level!==0 && langInstance.level!==7){
                    if(i<langInstance.level){
                        return <div 
                                key={`${langInstance.id}_${i}`} className={styleFullDot}>
                            </div>
                    } else {
                        return <div
                                key={`${langInstance.id}_${i}`} className={styleEmptyDot}>
                            </div>
                }}
            })}
            </div>
            <p className="pt-2 text-center text-xs text-[#4b5563]">{
                options.map((s)=>{
                    if (s.value === langInstance.level) {
                        if(s.value === 0){""}
                        else{
                            const fixedLabel = s.label.split(" - ")[0]
                            return `Level - ${fixedLabel}`
                        }
                    }
                })
            }</p>
            
            
        </div>
    </div>
}