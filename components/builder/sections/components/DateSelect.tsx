import Label from "./Label";
import { twMerge } from "tailwind-merge";
import { TranslationSchema } from "@/lib/i18n/types";

type Props = {
    label: string;
    classNameWrapper?: string;
    day: number | null;
    month: number | null;
    year: number | null;
    t: TranslationSchema
    onDayChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    onMonthChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    onYearChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}

export default function DateSelect({
    label, classNameWrapper="",
    day,
    month,
    year,
    t,
    onDayChange,
    onMonthChange,
    onYearChange
}: Props){

    const styleWrapper = twMerge("flex flex-col gap-1", classNameWrapper)
    
    const dayDateOptions = Array.from({length: 32}, (_, i) => 
        i === 0
            ? { num: 0, label: t.fields.birth.day }
            : { num: i, label: String(i) }
    )

    const month_list = t.date.months
    const monthDateOptions = Array.from({length: 13}, (_, i) => 
        i === 0 
            ? {num: 0, label: String(0), name: t.fields.birth.month}
            : {num: i, label: String(i), name: month_list[i]}
    )
    
    const currentYear = new Date().getFullYear()
    const yearDateOptions = Array.from({length: 102}, (_, i) => 
        i === 0
            ? {num: 0, label: t.fields.birth.year}
            : i === 1 
                ? {num: currentYear, label: String(currentYear)}
                : {num: currentYear - i + 1, label: String(currentYear - i + 1)}
    )

    const style = "border border-[#E2E8F0] focus:border-[#3B82F6] focus:outline-none p-2 pl-3 pr-3 rounded w-full text-[15px] text-[#94A3B8]"
    
    return  <div className={styleWrapper}>
        <Label label={label}/>
        <div className="w-full flex justify-center gap-3">
                <div className="w-full">
                    <select className={style} value={day ? day : 0} onChange={onDayChange}>
                        {dayDateOptions.map((s) => (<option key={`day_${s.num}`} value={s.num}>{s.label}</option>))}
                    </select>
                </div>
                <div className="border-r-1 border-[#E2E8F0]"></div>
                <div className="w-full">
                    <select className={style} value={month ? month : 0} onChange={onMonthChange}>
                        {monthDateOptions.map((s) => (<option key={`month_${s.num}`} value={s.num}>{s.name}</option>))}
                    </select>
                </div>
                <div className="border-r-1 border-[#E2E8F0]"></div>
                <div className="w-full">
                    <select className={style} value={year ? year : 0} onChange={onYearChange}>
                        {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                    </select>
                </div>
            </div></div>
}

