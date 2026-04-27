import { SkillOption, LanguageOption } from "@/lib/types"
import { DeleteButton } from "./DeleteButton";

type Props = {
    name: string;
    level: number;
    options: SkillOption[] | LanguageOption[];
    placeholderName: string;
    onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onLevelChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onDelete: () => void;
};

export function InputSelector({
    name,
    level,
    options,
    placeholderName,
    onNameChange,
    onLevelChange,
    onDelete
}: Props){

    const styles = {
        input: "border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]",
        selector: "border-1 border-[#E2E8F0] border-t-0 p-2 bg-[#F1F5F9] text-[#475569] outline-none",
    };

    return (
        <div className="flex gap-2 ">
            <div className="flex flex-col w-full">
                <input className={styles.input} value={name} onChange={onNameChange} placeholder={placeholderName}/>
                <select className={styles.selector} value={level} onChange={onLevelChange}>
                    {options.map((s) => (<option key={s.value} value={s.value}>{s.label}</option>))}
                </select>
            </div>
            <div className="self-top">
                <DeleteButton onClick={onDelete} />
            </div>
        </div>
    );
};
