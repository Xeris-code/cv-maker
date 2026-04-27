type InputProps = {
    value: string | number;
    placeholder: string;
    onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
    value,
    placeholder,
    onValueChange
}: InputProps){

    const styleInput = "border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]"

    return (
        <input className={styleInput} value={value} placeholder={placeholder} onChange={onValueChange}/>
    );
};