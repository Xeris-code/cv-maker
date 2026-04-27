type SectionTitleProps = {
    label: string
}

export function SectionTitle({ label }: SectionTitleProps){
    return <h1 className="text-[25px] text-[#1E293B] mb-2">
        {label}
    </h1>
}