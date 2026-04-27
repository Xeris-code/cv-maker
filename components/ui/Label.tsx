type LabelProps = {
    label: string;
};

export function Label({
    label
}: LabelProps){

    const style = "text-[16px] text-[#475569]"

    return (
        <label className={style}>
            {label}
        </label>
    );
};