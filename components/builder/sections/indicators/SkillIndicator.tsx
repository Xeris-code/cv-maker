export function SkillIndicator({ level }: { level: number }) {

    return (
        <div className="flex gap-1">
            {[1,2,3,4,5].map(i => (
                <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                    i <= level ? "bg-blue-500" : "bg-gray-300"
                }`}
                />
            ))}
        </div>
    );
};