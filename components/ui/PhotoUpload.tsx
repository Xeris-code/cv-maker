import { ContactRoundIcon } from "lucide-react";
import { Label } from "@/components/ui";

type PhotoUploadProps = {
    photo: string | null;
    sectionLabel: string;
    photoLabel: string;
    placeholder: string;
    onPhotoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export function PhotoUpload({
    photo,
    sectionLabel,
    photoLabel,
    placeholder,
    onPhotoChange,
}: PhotoUploadProps) {
    console.log("photo prop", photo);
    return (
        
        <div className="flex flex-col gap-1">
            <Label label={sectionLabel}/>
            <div className="border-1 border-[#94A3B8] border-dashed rounded-xl bg-[#F1F5F9] py-5 flex flex-col gap-3">
                {photo &&
                    <div className="self-center">
                        <img className="w-[100px] h-[130px] object-cover rounded" src={photo} alt="CV photo"/>
                    </div>
                }
                <label className="self-center cursor-pointer bg-gradient-to-r from-[#CBD5F5] to-[#3B82F6] h-fit py-2 px-4 shadow-lg rounded-lg w-fit flex gap-2">
                    <ContactRoundIcon className="shrink-0 self-center"/>{photoLabel}
                    <input className="hidden" type="file" accept="image/*" onChange={onPhotoChange}></input>
                </label>
                <label className="text-[14px] text-[#94A3B8] self-center">
                    {placeholder}
                </label>
            </div>
        </div>
    )
}