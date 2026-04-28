import { TranslationSchema, DayOption, MonthOption, YearOption } from "../types";

export function getDayOptions(t: TranslationSchema){
    return Array.from({length: 32}, (_, i) => 
        i === 0
            ? { num: 0, label: t.fields.birth.day }
            : { num: i, label: String(i) }
    ) as DayOption[];
}; 

export function getMonthOptions(t: TranslationSchema){

    const month_list = t.date.months

    return Array.from({length: 13}, (_, i) => 
        i === 0 
            ? {num: 0, label: String(0), name: t.fields.birth.month}
            : {num: i, label: String(i), name: month_list[i-1]}
    ) as MonthOption[];
};

export function getYearOptions(t: TranslationSchema){
    const currentYear = new Date().getFullYear()

    return Array.from({length: 102}, (_, i) => 
        i === 0
            ? {num: 0, label: t.fields.birth.year}
            : i === 1 
                ? {num: currentYear, label: String(currentYear)}
                : {num: currentYear - i + 1, label: String(currentYear - i + 1)}
    ) as YearOption[];
};