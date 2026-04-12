type Props = {
    placeholder: string;
    classNameWrapper?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function TextArea({
    classNameWrapper="",
    placeholder,
    onChange
}: Props, key=""){

    const styleWrapper = `${classNameWrapper}`
    const styleTextArea = "resize-none text-[#9ca3af] overflow-hidden focus:outline-none focus:-[#3b82f6] rounded-lg w-full border-[#475569] border-l-2 p-2 ring-2 ring-[#475569] focus:-[#3b82f6]"

    return <div className={styleWrapper} key={key}>
            <textarea className={styleTextArea} placeholder={placeholder} onChange={onChange}/>
        </div>
}