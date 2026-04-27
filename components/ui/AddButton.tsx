type AddButtonProps = {
    label: string;
    onClick: () => void;
}

export function AddButton({ onClick, label}: AddButtonProps){
    const style = "cursor-pointer rounded-xl bg-[#3b82f6] hover:bg-[#2563eb] text-[#ffffff] py-1 px-3"

    return <button className={style} onClick={onClick}>{label}</button>
}