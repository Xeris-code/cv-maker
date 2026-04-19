import {styleInputTextArea} from "@/lib/styles"
import Label from "./Label";

type Props = {
    label: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function TextArea({
    label,
    placeholder,
    onChange
}: Props){

    const styleWrapper = `flex flex-col gap-1`

    return <div className={styleWrapper}>
            <Label label={label}/>
            <textarea className={styleInputTextArea} placeholder={placeholder} onChange={onChange}/>
        </div>
}