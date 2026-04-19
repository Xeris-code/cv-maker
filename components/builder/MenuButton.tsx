import { styleMenuButtonBase, styleMenuButtonActive, styleMenuButtonDeactive, styleMenuButtonIcon } from "@/lib/styles"
import { LucideIcon } from "lucide-react";

type Props = {
    Icon: LucideIcon;
    label: string;
    condition: boolean;
    setFunc: () => void;
}

export default function MenuButton({Icon, label, setFunc, condition}: Props){
    return <button className={`${styleMenuButtonBase} ${condition ? styleMenuButtonActive : styleMenuButtonDeactive}`}
    onClick={setFunc}
    >
    <Icon className={styleMenuButtonIcon}/>
    {label}
    </button>
}