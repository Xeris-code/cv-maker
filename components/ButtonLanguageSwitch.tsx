import { styleLanguageSwitchBase, styleLanguageSwitchBaseActive, styleLanguageSwitchBaseDeactive } from "@/lib/styles";

type Props = {
    label: string;
    condition: boolean;
    onClick: () => void
}

export default function ButtonLanguageSwitch({label, condition, onClick}: Props){
    return <button className={`${styleLanguageSwitchBase} ${condition ? styleLanguageSwitchBaseActive : styleLanguageSwitchBaseDeactive}`} onClick={onClick}>
        {label}
    </button>
}