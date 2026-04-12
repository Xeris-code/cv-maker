import { dayDateOptions, monthDateOptions, yearDateOptions } from "@/lib/constants"


type Props = {
    day: number;
    month: number;
    year: number;
    onDayChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    onMonthChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    onYearChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}
type WrapperProps = {
    children: React.ReactNode,
    label: string
}

function DateSelectorWrapper({children, label}: WrapperProps){
    return <div className="bg-[#334155] flex gap-2 ring-[#475569] ring-2 rounded-lg">
            <label className="content-center pl-2" >
                {label}
            </label>
            {children}
        </div>
}

export default function DateSelect({
    day,
    month,
    year,
    onDayChange,
    onMonthChange,
    onYearChange
}: Props){

    const style = "w-full bg-[#1e293b] text-[#9ca3af] text-center placeholder:text-[#9ca3af] focus:outline-none focus:-[#3b82f6] rounded-lg border-[#475569] p-2 ring-2 ring-[#475569] focus:-[#3b82f6]";

    return  <div className="mt-2 w-full flex justify-center gap-3 p-1">
                <DateSelectorWrapper label="Day">
                    <select className={style} value={day} onChange={onDayChange}>
                        {dayDateOptions.map((s) => (<option key={`day_${s.num}`} value={s.num}>{s.label}</option>))}
                    </select>
                </DateSelectorWrapper>
                <div className="border-r-1 border-[#334155]"></div>
                <DateSelectorWrapper label="Month">
                    <select className={style} value={month} onChange={onMonthChange}>
                        {monthDateOptions.map((s) => (<option key={`month_${s.num}`} value={s.num}>{s.name}</option>))}
                    </select>
                </DateSelectorWrapper>
                <div className="border-r-1 border-[#334155]"></div>
                <DateSelectorWrapper label="Year">
                    <select className={style} value={year} onChange={onYearChange}>
                        {yearDateOptions.map((s) => (<option key={`year_${s.num}`} value={s.num}>{s.label}</option>))}
                    </select>
                </DateSelectorWrapper>
            </div>
}

