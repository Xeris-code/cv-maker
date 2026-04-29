import { ChevronDown } from "lucide-react";
import { WebLanguage } from "@/lib/types";

type MobileHeaderProps = {
    appTitle: string;
    printButtonTitle: string;
    demoTitle: string;
    resetTitle: string;
    language: WebLanguage;
    templateSelector: boolean;
    onLanguageChange: (language: WebLanguage) => void;
    onToggleTemplateSelector: () => void;
    onPrint: () => void;
    onDemo: () => void;
    onReset: () => void;
};

export function MobileHeader( { appTitle, printButtonTitle, demoTitle, resetTitle, language, templateSelector, onLanguageChange, onToggleTemplateSelector, onPrint, onDemo, onReset }: MobileHeaderProps ){

    const styles = {
        title: "",
        button: "text-[#FFFFFF] text-[10px] h-fit bg-[#2563EB] hover:bg-[#1D4ED8] py-2 px-4 shadow-lg rounded-lg",

    };

    return (<div className="flex py-1 px-2 justify-between items-center border-b-1 text-black no-print">
        <div className="flex flex-col">
            <span className={styles.title}>{appTitle}</span>
            <span className="text-[10px]">For best results use desktop</span>
        </div>
        
        <div className="flex gap-1">
            <button type="button" className={styles.button} onClick={onPrint}>{printButtonTitle}</button>
            <button type="button" className={styles.button} onClick={onDemo}>{demoTitle}</button>
            <button type="button" className={styles.button} onClick={onReset}>{resetTitle}</button>
            <button type="button" className={styles.button} onClick={onToggleTemplateSelector}>
            <ChevronDown className="size-[15px] transition-transform duration-300" style={{transform: `rotateX(${templateSelector ? 180 : 0}deg)`}}/>
        </button>
        </div>
    </div>
    );
}