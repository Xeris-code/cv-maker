import Label from "./Label";
import { twMerge } from "tailwind-merge";
import { styleInputTextField } from "@/lib/styles";

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

    const styleWrapper = twMerge("flex flex-col gap-1", classNameWrapper)
    
    return <div className={styleWrapper}>
            <Label label={label}/>
            <input className={styleInputTextField} value={value} placeholder={placeholder} onChange={onChange}/>
        </div>; 
}