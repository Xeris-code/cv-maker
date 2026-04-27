import { Label } from "./Label";
import { useRef, useEffect } from "react";

type AreaProps = {
    value: string;
    label?: string;
    placeholder: string;
    onValueChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function TextArea({
    value,
    label="",
    placeholder,
    onValueChange
}:AreaProps){

    const styleTextArea = "resize-none h-[100px] border-[#E2E8F0] overflow-hidden border focus:border-[#3B82F6] focus:outline-none p-2 px-3 rounded w-full text-[15px] text-[#1e293b] placeholder:text-[#94A3B8]";

    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (ref.current) {
        ref.current.style.height = "auto";
        ref.current.style.height = `${ref.current.scrollHeight}px`;
        }
    }, [value]);

    return (
        <div className="flex flex-col gap-1">
            <Label label={label}/>
            <textarea 
                ref={ref}
                value={value}
                placeholder={placeholder}
                onChange={onValueChange}
                className={styleTextArea}
            />
        </div>
    );
};