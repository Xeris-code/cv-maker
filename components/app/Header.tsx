import { ChevronDown } from "lucide-react";
import { WebLanguage } from "@/lib/types";

type HeaderProps = {
    appTitle: string;
    appDescription: string;
    printButtonTitle: string;
    language: WebLanguage;
    templateSelector: boolean;
    onLanguageChange: (language: WebLanguage) => void;
    onToggleTemplateSelector: () => void;
    onPrint: () => void;
};

export function Header( { appTitle, appDescription, printButtonTitle, language, templateSelector, onLanguageChange, onToggleTemplateSelector, onPrint }: HeaderProps ){

    const styles = {
        title: "text-[32px] text-[#0F172A]",
        description: "text-[15px] text-[#475569]",
        buttonPrint: "cursor-pointer text-[#FFFFFF] h-fit bg-[#2563EB] hover:bg-[#1D4ED8] py-2 px-4 shadow-lg rounded-lg",
        buttonTemplates: "cursor-pointer text-[#FFFFFF] h-fit bg-[#2563EB] hover:bg-[#1D4ED8] p-1 shadow-lg rounded-lg absolute right-5 top-full -translate-y-1/2", 
        switchWrapper: "grid grid-cols-8 h-fit bg-[#F1F5F9] font-bold px-2 text-[#64748B] text-[14px] border-2 border-[#E2E8F0] rounded-md self-center",
        switchDivider: "text-center text-lg text-[#E2E8F0] pt-0.5",
    };

    function renderLanguageButton( switchTo: WebLanguage ){
        const style = `cursor-pointer col-span-2 text-center pt-2 pb-1 pl-3 pr-3 border-b-3 ${language === switchTo ? "border-[#2563EB] text-[#0F172A]" : "border-[#F1F5F9]"}`;
        return <button type="button" className={style} onClick={() => onLanguageChange(switchTo)}>{switchTo.toUpperCase()}</button>
    };

    return (<div className="relative">
        <div className="header">
            <div>
                <h1 className={styles.title}>{appTitle}</h1>
                <p className={styles.description}>{appDescription}</p>
            </div>
            <div className="flex self-center gap-3">
                <div className={styles.switchWrapper}>
                    {renderLanguageButton("sk")}
                    <div className={styles.switchDivider}>|</div>
                    {renderLanguageButton("en")}
                    <div className={styles.switchDivider}>|</div>
                    {renderLanguageButton("de")}
                </div>
                <button type="button" className={styles.buttonPrint} onClick={onPrint}>{printButtonTitle}</button>
            </div>
        </div>
        <button type="button" style={{ perspective: "600px" }} className={styles.buttonTemplates} onClick={onToggleTemplateSelector}>
            <ChevronDown className="transition-transform duration-300" style={{transform: `rotateX(${templateSelector ? 180 : 0}deg)`}}/>
        </button>
    </div>
    );
}