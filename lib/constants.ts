import { translations } from "./translations"
import type { SkillOption, LanguageOption, AllowedLanguage } from "./types"

export function getSkillOptions(webLang: AllowedLanguage){
  return <SkillOption[]>([
    {value: 0, label: translations[webLang]["skillOption0"].name},
    {value: 1, label: translations[webLang]["skillOption1"].name},
    {value: 2, label: translations[webLang]["skillOption2"].name},
    {value: 3, label: translations[webLang]["skillOption3"].name},
    {value: 4, label: translations[webLang]["skillOption4"].name},
    {value: 5, label: translations[webLang]["skillOption5"].name},
  ])
}

export function getLangOptions(webLang: AllowedLanguage){
  return <LanguageOption[]>([
    {value: 0, label: translations[webLang]["langOption0"].name},
    {value: 1, label: translations[webLang]["langOption1"].name},
    {value: 2, label: translations[webLang]["langOption2"].name},
    {value: 3, label: translations[webLang]["langOption3"].name},
    {value: 4, label: translations[webLang]["langOption4"].name},
    {value: 5, label: translations[webLang]["langOption5"].name},
    {value: 6, label: translations[webLang]["langOption6"].name},
    {value: 7, label: translations[webLang]["langOption7"].name},
  ])
}

export function getDayOptions(placeholder: string){
  return Array.from({length: 32}, (_, i) => 
  i === 0
      ? { num: 0, label: placeholder }
      : { num: i, label: String(i) }
)}

export const months = ["Month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
export function getMonthOptions(placeholder: string){
  return Array.from({length: 13}, (_, i) => 
  i === 0 
      ? {num: 0, label: String(0), name: placeholder}
      : {num: i, label: String(i), name: months[i]}
)}

export const currentYear = new Date().getFullYear()
export function getYearOptions(placeholder: string){
  return Array.from({length: 102}, (_, i) => 
  i === 0
      ? {num: 0, label: placeholder}
      : i === 1 
          ? {num: currentYear, label: String(currentYear)}
          : {num: currentYear - i + 1, label: String(currentYear - i + 1)}
)}