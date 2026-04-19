import { twMerge } from "tailwind-merge"

type Props = {
    label: string;
    className?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ onClick, label, className="" }: Props){
    const concut_className = twMerge("cursor-pointer rounded-xl bg-[#3b82f6] hover:bg-[#2563eb] text-[#ffffff] pt-1 pb-1 pl-3 pr-3",
        className
    )
    return <button className={concut_className} onClick={onClick}>{label}</button>
}