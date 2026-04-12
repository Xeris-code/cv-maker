import { handleDeleteById } from "@/lib/handlers"

type Props<T extends { id: number }> = {
    id: number;
    setFunc: React.Dispatch<React.SetStateAction<T[]>>; 
}

export default function ButtonDelete<T extends { id: number }>({id, setFunc}: Props<T>){
    
    const style = "hover:text-red-300 hover:ring-red-300 w-6 h-6 ring-1 ring-[#475569] text-[#475569] rounded-lg"
    
    return <button className={style} onClick={e => handleDeleteById(id, setFunc)}>x</button>
}