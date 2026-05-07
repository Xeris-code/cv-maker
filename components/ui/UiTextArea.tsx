import { useRef, useEffect } from "react";

type UiTextAreaProps = {
    value: string;
    label?: string;
    placeholder: string;
    onValueChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function UiTextArea({
    value,
    label="",
    placeholder,
    onValueChange,
}: UiTextAreaProps){

    const styles = {
        wrapper: "flex flex-col gap-2",
        label: "text-[14px] text-gray-800",
        textArea: "min-h-[80px] w-full overflow-hidden py-2 px-3 border border-[#E2E8F0] rounded text-[12px] text-[#1e293b] placeholder:text-[#94A3B8] transition hover:bg-[#F8FAFC] hover:border-blue-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100",
    };

    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (ref.current) {
        ref.current.style.height = "auto";
        ref.current.style.height = `${ref.current.scrollHeight}px`;
        }
    }, [value]);

    return (
        <div className={styles.wrapper}>
            {label && <span className={styles.label}>
                {label}
            </span>}
            <textarea 
                ref={ref}
                value={value}
                placeholder={placeholder}
                onChange={onValueChange}
                className={styles.textArea}
            />
        </div>
    );
};