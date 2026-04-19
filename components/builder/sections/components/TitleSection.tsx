type TitleSectionProps = {
    label: string
}

export default function TitleSection({ label }: TitleSectionProps){
    return <h1 className="text-[25px] text-[#1E293B] mb-2">
        {label}
    </h1>
}