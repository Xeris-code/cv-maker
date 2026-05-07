import { UiSectionHeader, UiInputField } from "@/components/ui";
import { CollectionState, Interest, UiInterestsTranslations } from "@/lib/types";
import { X } from "lucide-react";
import { useState } from "react";

type InterestsSectionProps = {
    interests: CollectionState<Interest>;
    translationsInterests: UiInterestsTranslations;
    onAddInterests: () => void;
    onInterestsChange: (id: number, field: keyof Interest, value: Interest[keyof Interest]) => void;
    onDeleteInterests: (id: number) => void;
};

export function InterestsSection({
    interests,
    translationsInterests,
    onAddInterests,
    onInterestsChange,
    onDeleteInterests,
}: InterestsSectionProps){

    const [newInterest, setNewInterest] = useState<string>("")

    return <>
            <UiSectionHeader
                title={translationsInterests.title}
                description={translationsInterests.description}
                counter={interests.items.length}
                itemLabel={translationsInterests.items}
            />
        <div className="overflow-y-auto noScroll h-full border-gray-200 p-2">
            <div className="flex flex-col p-5 gap-5">
                <UiInputField
                    value={newInterest}
                    placeholder={translationsInterests.fields.placeholder}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            if (!newInterest){
                                return;
                            }
                            onAddInterests();
                            onInterestsChange(interests.nextId, "name", newInterest);
                            setNewInterest("");
                        }
                    }}
                    onChange={e => {setNewInterest(e.target.value)}}
                />
                <div className={`flex flex-wrap gap-2`}>
                    {interests.items.map((i) => (
                        <div 
                            key={i.id}
                            className="flex items-center shrink-0 gap-2 bg-blue-100 rounded-lg pl-3 pr-2 py-2 text-blue-600"
                        >
                            <span className="text-[14px] break-all">{i.name}</span>
                            <button className="cursor-pointer" onClick={() => onDeleteInterests(i.id)}>
                                <X className="size-4"/>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="flex items-center px-5 py-5 border-t-1 border-gray-200">
        
        </div>
    </>
};