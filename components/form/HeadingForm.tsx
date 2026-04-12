type Props = {
    children: React.ReactNode;
};

export default function HeadingForm({ children }: Props){
    return <h1 className="border-b-2 border-[#334155] pt-8">{children}</h1>
}