import { SkillOption, LanguageOption } from "../../lib/types"

type Props = {
    id: number;
    name: string;
    level: number;
    onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onLevelChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onClickDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
    placeholderName: string;
    options: SkillOption[] | LanguageOption[];
};

export default function InputAddSelectText({
    id,
    name,
    level= 0,
    options,
    placeholderName,
    onNameChange,
    onLevelChange,
    onClickDelete

}: Props){

    const style = "focus:outline-none focus:-[#3b82f6] rounded-lg w-2/5 border-[#475569] p-2 ring-2 ring-[#475569] focus:-[#3b82f6]";

    return <div className="flex justify-between" key={`formField_${id}`}>
        <div className="mt-2 w-full gap-2 flex justify-between">
            <input className={`${style} text-[#9ca3af]`} value={name} onChange={onNameChange} placeholder={placeholderName}/>

            <select className={`${style} w-3/5 bg-[#1e293b] text-[#9ca3af]`} value={level} onChange={onLevelChange}>
                {options.map((s) => (<option key={s.value} value={s.value}>{s.label}</option>))}
            </select>

            <div className="self-center">
                <button className="hover:text-red-300 hover:ring-red-300 w-6 h-6 ring-1 ring-[#475569] text-[#475569] rounded-lg" onClick={onClickDelete}>x</button>
            </div>
        </div>
    </div>;
}
