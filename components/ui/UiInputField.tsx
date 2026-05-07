type UiInputFieldProps = {
    value: any;
    label?: string;
    placeholder: string;
    buttonChildren?: React.ReactNode;
    warning?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export function UiInputField({
    value, label, placeholder, buttonChildren, warning=false,
    onChange, onKeyDown
}: UiInputFieldProps){
    
    function StyleWrapper( children: React.ReactNode ){
        if (!children) {
            return "flex flex-col gap-1"
        } 
        return "flex justify-between gap-3"
    };

    function StyleInput( children: React.ReactNode ){
        if (!children) {
            return `${warning ? "focus:border-red-300 focus:ring-red-100" : ""} border-1 border-gray-200 rounded-lg px-3 py-2 text-[12px] transition hover:bg-[#F8FAFC] hover:border-blue-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100`
        } 
        return "w-full border-1 border-gray-200 text-[14px] rounded-lg px-3 py-2 transition hover:bg-[#F8FAFC] hover:border-blue-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
    };
    
    return (
        <div className={StyleWrapper(buttonChildren)}>
            {label
                ? <span className="text-[14px] text-gray-800">{label}</span>
                : <></>
            }
            <input
                value={value}
                placeholder={placeholder}
                onKeyDown={onKeyDown}
                onChange={onChange}
                className={StyleInput(buttonChildren)}
            />
            {buttonChildren}
        </div>
    );
};

