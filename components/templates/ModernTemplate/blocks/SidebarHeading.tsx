export function SidebarHeading({ label }: { label: string }) {
        return (
            <div className="flex flex-col gap-2 mt-8">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em]">
                {label}
            </h2>
            <div className="h-[1px] w-full bg-white/20" />
            </div>
        );
};