export function TextList({ text }: { text: string }) {
    const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);

    return (
        <ul className="list-disc pl-4 text-[10px] leading-relaxed text-[#0F172A]">
        {lines.map((line, index) => (
            <li key={index}>
            {line.replace(/^[-*•]\s*/, "")}
            </li>
        ))}
        </ul>
    );
}