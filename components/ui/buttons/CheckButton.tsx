import { Check } from "lucide-react";

type CheckButtonProps = {
    onClick: () => void;
};

export function CheckButton ({onClick}: CheckButtonProps) {

    const styles = {
        icon: "size-4",
        button: "hover hover:scale-[1.08] active:scale-[0.98] cursor-pointer my-auto p-1 text-white bg-[#3b82f6] rounded hover:bg-[#2563eb]",
    };

    return (
        <button type="button" className={styles.button} onClick={onClick}>
            <Check className={styles.icon}/>
        </button>
    );
};