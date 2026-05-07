import { DayOption, MonthOption, YearOption } from "@/lib/types";
import { Check, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type DateSelectorProps = {
    value: number;
    widthLabel?: string;
    widthDropDown?: string;
    options: DayOption[] | MonthOption[] | YearOption[];
    onChange: (value: number) => void;
}

export function DateSelector({
    value, widthLabel="w-full", widthDropDown="w-2/3", options,
    onChange,
}: DateSelectorProps){

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

    function isMonthOption(option: any): option is MonthOption {
        return option != null && typeof option === "object" && "name" in option;
    };

    return (
        <div ref={ref} className="relative">
            <button onClick={() => setOpen(!open)} className={`cursor-pointer ${widthLabel} hover:border-blue-300 focus:border-blue-500 flex items-center justify-between px-3 py-2 border border-gray-200 rounded-lg`}>
                <span className="text-[12px]">
                        {isMonthOption(options[value])
                            ? options[value].name
                            : value === 0
                                ? options[0].label
                                : value
                        }
                </span>
                <ChevronDown className="size-5 text-gray-400"/>
            </button>

            {open && <div className={`absolute z-[500] ${widthDropDown} h-[200px] overflow-y-auto noScroll overflow-x-hidden ring-1 ring-[#E2E8F0] top-full left-[50%] translate-y-1 -translate-x-[50%] bg-white rounded-lg`}>
                    <div className="flex flex-col gap-2 py-2">
                        {options.map((item, index) => (
                            <button key={index} onClick={() => {setOpen(false); onChange(item.num)}} className={`${item.num==value ? "text-[#0F172A] bg-[#DBEAFE]" : ""} grid grid-cols-[30px_1fr] gap-2 items-center cursor-pointer py-1 px-1 rounded hover:bg-[#EFF6FF] hover:scale-[1.02] active:scale-[0.98]`}>
                                <span className="flex justify-center">{item.num === value ? <Check className="size-[20px] text-[#3B82F6]"/> : ""}</span>
                                <span className="text-center text-gray-600 text-[12px]">{isMonthOption(item) ? item.name : item.label}</span>
                            </button>
                            ))}
                    </div>
                </div>}
        </div>
    );
};