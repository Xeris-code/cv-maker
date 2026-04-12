import { twMerge } from "tailwind-merge";

type Props = {
    label: string;
    value: string | number;
    classNameWrapper?: string
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputText({
    label, value, placeholder, classNameWrapper="", onChange
}: Props){

    const styleWrapper = twMerge("mt-2 flex justify-between border-2 border-[#475569] rounded-lg", 
        classNameWrapper)
    const styleLabel = "w-2/6 p-2 bg-[#334155] -mr-0.75"
    const styleInput = "text-[#9ca3af] focus:outline-none focus:-[#3b82f6] rounded-lg w-full border-[#475569] border-l-2 p-2 ring-1 ring-[#475569] focus:-[#3b82f6]"

    return <div className={styleWrapper}>
            <div className={styleLabel}>{label}</div>
            <input className={styleInput} value={value} onChange={onChange} placeholder={placeholder}/>
        </div>; 
}