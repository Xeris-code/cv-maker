import { useRef, useState, useEffect } from "react";
import { WebLanguage, WebLanguageOptions } from "@/lib/types";
import { Globe, Check, ChevronDown } from "lucide-react";

type LanguageSelectorProps = {
    language: WebLanguage;
    languageOptions: WebLanguageOptions;
    onClick: (language: WebLanguage) => void;
}

export function LanguageSelector({
    language, languageOptions,
    onClick,
}: LanguageSelectorProps){
    
    const [clicked, setClicked] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setClicked(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return(
        <div ref={ref} className="relative z-50">
            <button
                onClick={() => setClicked(!clicked)}
                className="hover:scale-[1.02] active:scale-[0.98] flex justify-between items-center cursor-pointer w-[110px] ring-1 ring-[#E2E8F0] py-3 px-4 rounded-lg shadow-md text-gray-700"
            >
                <Globe className="size-5"/>
                <span className="text-[15px]">
                    {language.toUpperCase()}
                </span>
                <ChevronDown 
                    className="size-5 transition-transform duration-300"
                    style={{transform: `rotateX(${clicked ? 180 : 0}deg)`}}
                />
            </button>

            {clicked && 
                <div className="absolute w-[250px] ring-1 ring-[#E2E8F0] top-full left-[50%] translate-y-3 -translate-x-[50%] bg-white rounded-lg">
                    <div className="flex flex-col gap-2 px-2 py-2">
                        {languageOptions.map((l, index) => (
                            <button 
                                key={index}
                                onClick={() => { setClicked(!clicked); onClick(l.language) }}
                                className={`${language==l.language 
                                    ? "text-[#0F172A] bg-[#DBEAFE]"
                                    : ""} 
                                    grid grid-cols-[30px_max-content_3fr_1fr] gap-2 text-center items-center cursor-pointer py-1 px-1 rounded hover:bg-[#EFF6FF] hover:scale-[1.02] active:scale-[0.98]`}
                            >
                                <span>
                                    {language === l.language
                                        ? <Check className="size-[20px] text-[#3B82F6]"/>
                                        : ""
                                    }
                                </span>
                                <img 
                                    src={`/flags/${l.language}.svg`}
                                    alt="Slovenčina"
                                    className="h-6 w-6 ring-1 ring-[#94A3B8] rounded-full object-cover"
                                />
                                <span className="px-2 text-start text-[14px]">
                                    {l.name}
                                </span>
                                <span className="text-[#94A3B8]">
                                    {l.language}
                                </span>
                            </button>
                            ))
                        }
                    </div>
                </div>
            }
        </div>
    );
};