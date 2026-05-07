import { Download, Eye,  Sun } from "lucide-react";
import { AppTranslations, UiActionTranslations, WebLanguage, WebLanguageOptions } from "@/lib/types";
import { LanguageSelector, SettingsMenu } from "@/components/ui";

type HeaderProps = {
    appTranslations: AppTranslations;
    uiActions: UiActionTranslations;
    uiLanguage: WebLanguage;
    languageOptions: WebLanguageOptions;
    completion: number;
    onLanguageChange: (language: WebLanguage) => void;
    onPrint: () => void;
    onDemo: () => void;
    onReset: () => void;
};

export function Header({
    appTranslations, uiActions, uiLanguage, languageOptions, completion,
    onLanguageChange, onPrint, onDemo, onReset
}: HeaderProps ){

    return (
        <div className="header">
            <div className="flex items-center gap-2">
                <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="grad" x1="" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563EB"/>
                        <stop offset="100%" stopColor="#60A5FA"/>
                        </linearGradient>
                    </defs>

                    <path d="M16 6h20l12 12v34a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4z" fill="url(#grad)" />

                    <path d="M36 6v12h12" fill="#93C5FD"/>

                    <rect x="20" y="26" width="24" height="3" rx="1.5" fill="white"/>
                    <rect x="20" y="32" width="20" height="3" rx="1.5" fill="white"/>
                    <rect x="20" y="38" width="16" height="3" rx="1.5" fill="white"/>
                </svg>
                <div className="flex flex-col">
                    <span className="text-[24px] font-semibold text-shadow-2xs">{appTranslations.name}</span>
                    <span className="text-[12px] text-gray-500 text-shadow-2xs">{appTranslations.description}</span>
                </div>
            </div>
            <div className="flex flex-col self-center gap-1 w-1/5">
                <p className="text-[12px]">{completion}% {appTranslations.progressBar}</p>
                <div className="w-full h-2 bg-gray-100 rounded-full ring-1 ring-[#E2E8F0]">
                    <div style={{ width: `${completion}%`}} className="h-2 bg-linear-to-r from-[#2563EB] to-[#60A5FA] rounded-full"/>
                </div>
            </div>
            <div className="flex gap-5 items-center text-gray-700">
                <div className="flex items-center gap-4">
                    <LanguageSelector language={uiLanguage} languageOptions={languageOptions} onClick={(language: WebLanguage) => onLanguageChange(language)}/>
                    <button type="button" className="text-[15px] cursor-pointer flex h-fit items-center gap-2 px-5 py-3 ring-1 shadow-md ring-[#E2E8F0] hover:scale-[1.02] active:scale-[0.98]  rounded-lg">
                        <Eye className="size-5"/>{uiActions.preview}
                    </button>
                    <button type="button" onClick={onPrint} className="text-[15px] cursor-pointer flex h-fit items-center gap-2 px-5 py-3 ring-1 shadow-md ring-[#E2E8F0] hover:scale-[1.02] active:scale-[0.98]  rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-[#FFFFFF]">
                        <Download className="size-5"/>{uiActions.printPDF}
                        </button>
                </div>
                <div className="flex items-center gap-4">
                    <button type="button" className="cursor-pointer h-fit items-center px-3 py-2 ring-1 shadow-md ring-[#E2E8F0] hover:scale-[1.05] active:scale-[0.98] rounded-lg"><Sun/></button>
                    <SettingsMenu demoTitle={uiActions.demo} resetTitle={uiActions.reset} exportTitle={uiActions.exportJSON} onDemo={() => onDemo()} onReset={() => onReset()}/>
                </div>
            </div>
        </div>
    );
};