import { CvAction, CvState } from "@/lib/cvReducer"
import { TranslationKeys } from "@/lib/types"
import { styleLanguageSwitchWrapper, styleLanguageSwitchDivider, stylePrintButton, styleLanguageSwitchBase, styleLanguageSwitchBaseActive, styleLanguageSwitchBaseDeactive } from "@/lib/styles"
import { ChevronDown } from "lucide-react"

type MainHeaderProps = {
    state: CvState
    dispatch: React.Dispatch<CvAction>
    t: Record<TranslationKeys, { name: string, placeholder: string }>
}


export default function MainHeader({ state, dispatch, t }: MainHeaderProps){

    const handlePrint = () => {
        window.print()
    }

    return <div className="flex justify-between pl-30 pr-30 pt-5 pb-5 border-b-2 border-[#E2E8F0] print:hidden">
        <div>
            <h1 className="text-[32px] text-[#0F172A]">{t["appTitle"].name}</h1>
            <p className="text-[15px] text-[#475569]">{t["appDescription"].name}</p>
        </div>
        <div className="flex self-center gap-3">
            <div className={styleLanguageSwitchWrapper}>

                <button className={`${styleLanguageSwitchBase} ${state.webLang === "sk" ? styleLanguageSwitchBaseActive : styleLanguageSwitchBaseDeactive}`} 
                onClick={()=>dispatch({type: "SET_LANGUAGE", value: "sk"})}>SK</button>

                <div className={styleLanguageSwitchDivider}>|</div>

                <button className={`${styleLanguageSwitchBase} ${state.webLang === "en" ? styleLanguageSwitchBaseActive : styleLanguageSwitchBaseDeactive}`} 
                onClick={()=>dispatch({type: "SET_LANGUAGE", value: "en"})}>EN</button>

                <div className={styleLanguageSwitchDivider}>|</div>

                <button className={`${styleLanguageSwitchBase} ${state.webLang === "de" ? styleLanguageSwitchBaseActive : styleLanguageSwitchBaseDeactive}`} 
                onClick={()=>dispatch({type: "SET_LANGUAGE", value: "de"})}>DE</button>

            </div>
            <button  className={stylePrintButton} onClick={(e) => handlePrint()}>{t["exportPdf"].name}</button>
            <button className="relative top-19 left-15 cursor-pointer text-[#FFFFFF] h-fit bg-[#2563EB] hover:bg-[#1D4ED8] pt-2 pb-2 pl-4 pr-4 shadow-lg rounded-b-lg" 
            onClick={(e) => dispatch({type: "SET_TEMPLATE_WINDOW", value: !state.templateWindow})}><ChevronDown className={`transition-transform ${state.templateWindow ? "rotate-x-180" : ""}`}/></button>
        </div>
        
    </div>
}