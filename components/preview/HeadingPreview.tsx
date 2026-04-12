type Props = {
    children: React.ReactNode;
    className?: string;
};

export default function HeadingPreview({ children, className ="text-xl" }: Props){
    const style = `border-b-2 pl-2 border-[#0f172a] font-bold text-[#0f172a] ${className}`;
    return <h1 className={style}>{children}</h1>
}