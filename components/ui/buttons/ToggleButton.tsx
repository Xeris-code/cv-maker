import { twMerge } from "tailwind-merge";

type ToggleButtonProps = {
    label: string;
    classNameWrapper?: string;
    condition: boolean;
    onChange: () => void;
};

export function ToggleButton({
    label,
    condition,
    classNameWrapper="",
    onChange, 
}: ToggleButtonProps){

    const styles = {
        wrapper: twMerge("flex flex-col gap-1", classNameWrapper),
        button: "cursor-pointer transition-all relative h-5 w-10 rounded-xl self-center ring-1 ring-gray-200 focus:outline-none",
        buttonActive: "bg-[#3B82F6]",
        buttonNotActive: "bg-[#E2E8F0]",
        pointer: "transition-all absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-[#FFFFFF] transition-transform duration-300",
        pointerActive: "translate-x-4.5",
        pointerNotActive: "",
    };

    return <div className={styles.wrapper}>
            <div className="flex justify-start gap-2">
                <label className="text-[14px] text-[#475569]">{label}</label>
                <button className={`${styles.button} ${condition ? styles.buttonActive : styles.buttonNotActive}`} onClick={onChange}>
                    <div className={`${styles.pointer} ${condition ? styles.pointerActive : styles.pointerNotActive}`} />
                </button>
            </div>
        </div>
};