import { Label } from "@/components/ui";

type LabeledInputProps = {
    label: string;
    value: string | number;
    placeholder: string;
    onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


export function LabeledInput({
    label,
    value,
    placeholder,
    onValueChange
}: LabeledInputProps){

    const styleInput = "border border-[#E2E8F0] focus:border-[#3B82F6] focus:outline-none p-2 pl-3 pr-3 rounded w-full text-[15px] text-[#1e293b] placeholder:text-[#94A3B8]";

    return (
        <div className="flex flex-col gap-1">
            <Label label={label}/>
            <input className={styleInput} value={value} placeholder={placeholder} onChange={onValueChange}/>
        </div>
    );
};