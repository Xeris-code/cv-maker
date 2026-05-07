import { Skill, SkillLevel, SkillOption, Language, LanguageLevel, LanguageOption } from "@/lib/types";
import { useState, useRef, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";

type SelectorProps = {
    item: Skill | Language;
    options: SkillOption[] | LanguageOption[];
    onChange: (id: number, value: number) => void;
    indicator: (value: number) => React.ReactNode;
};

export function Selector({
    item,
    options,
    onChange,
    indicator
}: SelectorProps){

    const [open, setOpen] = useState(false);

    
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (

        
        <div ref={ref} className="relative">
            <button onClick={() => setOpen(!open)} className=" cursor-pointer w-[200px] hover:border-blue-300 focus:border-blue-500 flex items-center justify-between px-3 py-2 border border-gray-200 rounded-lg">
                <span className="text-[12px]">{options[item.level].label}</span>
                <ChevronDown className="size-5 text-gray-400"/>
            </button>

            {open && <div className="absolute z-[500] w-[250px] ring-1 ring-[#E2E8F0] top-full left-[50%] translate-y-1 -translate-x-[50%] bg-white rounded-lg">
                <div className="flex flex-col gap-2 px-2 py-2">
                    {options.map((s, index) => (
                        <button key={index} onClick={() => { setOpen(false); onChange(item.id, s.value) }} className={`${item.level==s.value ? "text-[#0F172A] bg-[#DBEAFE]" : ""} grid grid-cols-[30px_1fr_max-content] gap-2 items-center cursor-pointer py-1 px-1 rounded hover:bg-[#EFF6FF] hover:scale-[1.02] active:scale-[0.98]`}>
                            <span className="flex justify-center">{item.level === s.value ? <Check className="size-[20px] text-[#3B82F6]"/> : ""}</span>
                            <span className="text-start text-gray-600 text-[12px]">{s.label}</span>
                            {indicator(s.value)}
                            
                        </button>
                        ))
                    }
                </div>
            </div>    
            }
        </div>
    );
};