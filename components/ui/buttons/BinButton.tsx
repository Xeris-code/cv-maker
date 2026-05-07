import { Trash2 } from "lucide-react";

type BinButtonProps = {
    onClick: () => void;
};

export function BinButton ({onClick}: BinButtonProps) {

    const styles = {
        icon: "size-4",
        button: "hover:scale-[1.08] active:scale-[0.98] cursor-pointer p-1 text-red-500 ring-1 ring-gray-200 rounded",
    };

    return (
        <button type="button" className={styles.button} onClick={onClick}>
            <Trash2 className={styles.icon}/>
        </button>
    );
};