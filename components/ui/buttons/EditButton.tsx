import { Pencil } from "lucide-react";

type EditButtonProps = {
    onClick: () => void;
};

export function EditButton ({onClick}: EditButtonProps) {

    const styles = {
        icon: "size-4",
        button: "hover:scale-[1.08] active:scale-[0.98] cursor-pointer p-1 ring-1 ring-gray-200 rounded",
    };

    return (
        <button type="button" className={styles.button} onClick={onClick}>
            <Pencil className={styles.icon}/>
        </button>
    );
};