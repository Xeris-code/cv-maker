import { Label } from "@/components/ui";

type CollectionHeaderProps = {
    label: string;
    children: React.ReactNode;
};

export function CollectionHeader({
    label,
    children
}: CollectionHeaderProps){
    return (
        <div className="flex justify-between">
            <Label label={label}/>
            {children}
        </div>
    );
};