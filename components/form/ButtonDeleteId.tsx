import { handleDeleteById } from "@/lib/handlers"

type Props<T extends { id: number }> = {
    id: number;
    setFunc: React.Dispatch<React.SetStateAction<T[]>>; 
}

export default function ButtonDelete<T extends { id: number }>({id, setFunc}: Props<T>){
    
    const style = "self-center hover:text-red-300 hover:border-red-300 border-1 border-[#E2E8F0] w-6 h-6 text-[#475569]"
    
    return <button className={style} onClick={e => handleDeleteById(id, setFunc)}>x</button>
}