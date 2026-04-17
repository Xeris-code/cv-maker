import { SkillOption, LanguageOption } from "../../lib/types"

type Props = {
    name: string;
    level: number;
    onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onLevelChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onClickDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
    placeholderName: string;
    options: SkillOption[] | LanguageOption[];
};

export default function InputAddSelectText({
    name,
    level= 0,
    options,
    placeholderName,
    onNameChange,
    onLevelChange,
    onClickDelete

}: Props){

    return <div className="flex gap-2 ">
            <div className="flex flex-col w-full">
                <input className="border-1 border-[#E2E8F0] p-2 pl-3 focus:border-[#3B82F6] focus:outline-none border-[#475569] text-[#475569] placeholder-[#94A3B8]" value={name} onChange={onNameChange} placeholder={placeholderName}/>
                <select className="border-1 border-[#E2E8F0] border-t-0 p-2 bg-[#F1F5F9] text-[#475569] outline-none" value={level} onChange={onLevelChange}>
                    {options.map((s) => (<option key={s.value} value={s.value}>{s.label}</option>))}
                </select>
            </div>
            <div className="self-top">
                <button className="self-center hover:text-red-300 hover:border-red-300 border-1 border-[#E2E8F0] w-6 h-6 text-[#475569]" onClick={onClickDelete}>x</button>
            </div>
        </div>
}
