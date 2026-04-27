import { SectionTitle, TextArea } from "@/components/ui";
import { InterestsTranslations } from "@/lib/types";

type InterestsSectionProps = {
    title: string;
    interests: string;
    translationsInterests: InterestsTranslations;
    onInterestsChange: (value: string) => void;
};

export function InterestsSection({
    title,
    interests,
    translationsInterests,
    onInterestsChange,
}: InterestsSectionProps){

    return <>
        <SectionTitle label={title}/>
        <TextArea
            value = {interests}
            placeholder={translationsInterests.placeholder}
            onValueChange={e => onInterestsChange(e.target.value)}
        />
    </>
};