type Props = {
    children: React.ReactNode;
};

export default function Title({
    children
}: Props){
    return <h1 className="text-center text-xl font-bold text-[#ffffff] print:hidden">{children}</h1>
}