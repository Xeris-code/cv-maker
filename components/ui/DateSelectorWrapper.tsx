type DateSelectorWrapperProps = {
    label?: string;
    wrapperClass: string;
    children: React.ReactNode;
};

export function DateSelectorWrapper({label="", children, wrapperClass}: DateSelectorWrapperProps){
    return <div className={wrapperClass}>
        {label &&
        <div className="w-full content-center border-r-1 text-center">
            <label className="text-[16px] text-[#475569] w-fit ">{label}</label>
        </div>}
        {children}
    </div>
}