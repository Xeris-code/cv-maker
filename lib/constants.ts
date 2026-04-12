import type { SkillOption, LanguageOption } from "./types"

export const skillOptions: SkillOption[] = [
  {value: 0, label: "Select skill level..."},
  {value: 1, label: "Beginner"},
  {value: 2, label: "Junior"},
  {value: 3, label: "Intermediate"},
  {value: 4, label: "Advanced"},
  {value: 5, label: "Expert"},
]

export const langOptions: LanguageOption[] = [
  {value: 0, label: "Select language level..."},
  {value: 1, label: "A1 - Beginner"},
  {value: 2, label: "A2 - Elementary"},
  {value: 3, label: "B1 - Intermediate"},
  {value: 4, label: "B2 - Upper Intermediate"},
  {value: 5, label: "C1 - Advanced"},
  {value: 6, label: "C2 - Proficient / Fluent"},
  {value: 7, label: "Native"},
]

export const dayDateOptions = Array.from({length: 32}, (_, i) => 
  i === 0
      ? { num: 0, label: "Day" }
      : { num: i, label: String(i) }
)

export const months = ["Month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
export const monthDateOptions = Array.from({length: 13}, (_, i) => 
  i === 0 
      ? {num: 0, label: String(0), name: "Month"}
      : {num: i, label: String(i), name: months[i]}
)

export const currentYear = new Date().getFullYear()
export const yearDateOptions = Array.from({length: 102}, (_, i) => 
  i === 0
      ? {num: 0, label: "Year"}
      : i === 1 
          ? {num: currentYear, label: String(currentYear)}
          : {num: currentYear - i + 1, label: String(currentYear - i + 1)}
)