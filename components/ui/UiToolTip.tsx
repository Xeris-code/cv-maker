type UiTooltipProps = {
  label: string;
  children: React.ReactNode;
};

export function UiTooltip({ label, children }: UiTooltipProps) {
  return (
    <div className="group relative inline-flex">
      {children}

      <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-[11px] text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100">
        {label}
      </div>
    </div>
  );
}