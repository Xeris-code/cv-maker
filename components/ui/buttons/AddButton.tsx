type AddButtonProps = {
    label: string;
    onClick: () => void;
}

export function AddButton({ onClick, label}: AddButtonProps){
    const style = "hover:scale-[1.02] active:scale-[0.98] cursor-pointer rounded-lg ring-1 ring-[#3b82f6] text-[14px] text-[#3b82f6] font-medium hover:text-[#2563eb] hover:ring-[#2563eb] py-1 px-3"

    return <button className={style} onClick={onClick}>{label}</button>
}