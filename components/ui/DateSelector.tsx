import { DayOption, MonthOption, YearOption } from "@/lib/types";

type DateSelectorProps = {
    value: string | number | null;
    options: DayOption[] | MonthOption[] | YearOption[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function DateSelector({value, options, onChange}: DateSelectorProps){

    const style = "border border-[#E2E8F0] focus:border-[#3B82F6] focus:outline-none p-2 pl-3 pr-3 rounded w-full text-[15px] text-[#94A3B8]";

    function isMonthOption(option: any): option is MonthOption {
        return "name" in option;
    }

    return <select className={style} value={value ?? 0} onChange={onChange}>
            {options.map((s) => (
                <option key={s.num} value={s.num}>
                    {isMonthOption(s) ? s.name : s.label}
                </option>))}
        </select>
};