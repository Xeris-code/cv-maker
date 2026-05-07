export function LanguageIndicator({ level }: { level: number }) {

    return (
        <div className="flex gap-1">
            {[
            {level: 0, label: ""},
            {level: 1, label: "A1"},
            {level: 2, label: "A2"},
            {level: 3, label: "B1"},
            {level: 4, label: "B2"},
            {level: 5, label: "C1"},
            {level: 6, label: "C2"},
            {level: 7, label: ""},].map(i => (
                (i.label && i.level === level)
                    && <div
                    key={i.level}
                    className={`flex rounded-full justify-center items-center text-white h-[24px] w-[24px] bg-blue-500`}
                    ><span className="text-[12px]">{i.label}</span></div>
            ))}
        </div>
    );
};