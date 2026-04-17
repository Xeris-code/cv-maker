import { styleFormLabel } from "@/lib/styles"

type Props = {
    label: string
}

export default function Label({label}: Props){
    return <label className={styleFormLabel}>{label}</label>
}