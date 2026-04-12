type Props = {
    label: string;
    condition: boolean;
    func: () => void;

    classNameWrapper?: string;
}

export default function ButtonToggle({
    label, condition, func, classNameWrapper = ""
}: Props, key=""){

    const styleWrapper = `flex gap-2 items-center ${classNameWrapper}`
    const styleLabel = ""
    const styleButton = `cursor-pointer transition-all relative h-4 w-8 rounded-xl self-center ${condition ? "bg-[#3b82f6] " : "bg-[#6b7280]"}`
    const stylePointer = `transition-all absolute top-0 left-0 h-4 w-4 rounded-full bg-[#ffffff] transition-transform duration-300 ${condition ? "translate-x-4" : ""}`

    return <div className={styleWrapper} key={key}>
        <p className={styleLabel}>{label}</p>
        <button className={styleButton} onClick={func}>
            <div className={stylePointer} />
        </button>
    </div>
}