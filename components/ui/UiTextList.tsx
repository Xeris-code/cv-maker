export function UiTextList({
    text,
    classList= "list-disc pl-4 text-[12px] leading-relaxed text-[#0F172A]"
}: { text: string, classList?: string }) {
    const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);

    return (
        <ul className={classList}>
        {lines.map((line, index) => (
            <li key={index}>
            {line.replace(/^[-*•]\s*/, "")}
            </li>
        ))}
        </ul>
    );
}