import { getDayOptions, getMonthOptions, getYearOptions } from "@/lib/constants";
import { twMerge } from "tailwind-merge";
import Label from "./Label";

type Props = {
    label: string;
    classNameWrapper?: string;
    day: number;
    month: number;
    year: number;
    webLang: {day: string, month: string, year: string};
    onDayChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    onMonthChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    onYearChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}

export default function DateSelect({
    label, classNameWrapper="",
    day,
    month,
    year,
    webLang,
    onDayChange,
    onMonthChange,
    onYearChange
}: Props){

    const styleWrapper = twMerge("flex flex-col gap-1", classNameWrapper)

    const dayDateOptions = getDayOptions(webLang.day)
    const monthDateOptions = getMonthOptions(webLang.month)
    const yearDateOptions = getYearOptions(webLang.year)

    const style = "border border-[#E2E8F0] focus:border-[#3B82F6] focus:outline-none p-2 pl-3 pr-3 rounded w-full text-[15px] text-[#94A3B8]"
    
    return  <div className={styleWrapper}>
        <Label label={label}/>
        <div className="w-full flex justify-center gap-3">
                <div className="w-full">
                    <select className={style} value={day} onChange={onDayChange}>
                        {dayDateOptions.map((s) => (<option key={`day_${s.num}`} value={s.num}>{s.label}</option>))}
                    </select>
                </div>
                <div className="border-r-1 border-[#E2E8F0]"></div>
                <div className="w-full">
                    <select className={style} value={month} onChange={onMonthChange}>
                        {monthDateOptions.map((s) => (<option key={`month_${s.num}`} value={s.num}>{s.name}</option>))}
                    </select>
                </div>
                <div className="border-r-1 border-[#E2E8F0]"></div>
                <div className="w-full">
                    <select className={style} value={year} onChange={onYearChange}>
                        {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                    </select>
                </div>
            </div></div>
}

