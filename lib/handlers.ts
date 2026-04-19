export const handleDeleteById = < T extends {id: number} >(
    id: number,
    setFunc: React.Dispatch<React.SetStateAction<T[]>>
) => {
    setFunc(
        prev => prev.filter(s =>
            s.id !== id
        )
    )
};

export const handleChangeById = < T extends {id: number}, K extends keyof T >(
    id: number,
    key: K,
    newValue: T[K],
    setFunc: React.Dispatch<React.SetStateAction<T[]>>
) => {
    setFunc(
        prev => prev.map(item =>
            item.id === id ? {...item, [key]: newValue} : item    
        )
    )
};



export const extendTextArea = <T extends {}, K extends keyof T>(
    e: React.ChangeEvent<HTMLTextAreaElement>,
    key: K,
    setFunc: React.Dispatch<React.SetStateAction<T>>
) => {
    setFunc(prev => ({
        ...prev, [key]: e.target.value
    }))
    e.target.style.height = "auto"
    e.target.style.height = e.target.scrollHeight + "px"
}

export const extendTextAreaArray = <T extends { id: string | number }, K extends keyof T>(
  e: React.ChangeEvent<HTMLTextAreaElement>,
  id: T["id"],
  key: K,
  setFunc: React.Dispatch<React.SetStateAction<T[]>>
) => {
  setFunc(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, [key]: e.target.value }
        : item
    )
  )

  e.target.style.height = "auto"
  e.target.style.height = e.target.scrollHeight + "px"
}

import { BasicInformation } from "./types";
import { CvAction } from "./cvReducer";

export function extendTextAreaDispatch(
  e: React.ChangeEvent<HTMLTextAreaElement>,
  field: keyof BasicInformation,
  dispatch: React.Dispatch<CvAction>
) {
  dispatch({
    type: "SET_BASICS_FIELD",
    field,
    value: e.target.value,
  })

  e.target.style.height = "auto"
  e.target.style.height = e.target.scrollHeight + "px"
}

export function getPhoto(
    e: React.ChangeEvent<HTMLInputElement>,
    dispatch: React.Dispatch<CvAction>
) {
    const file = e.target.files?.[0]
    if (!file) return
    const imageUrl = URL.createObjectURL(file)
    dispatch({
        type: "SET_BASICS_FIELD",
        field: "photo",
        value: imageUrl,
    })
}