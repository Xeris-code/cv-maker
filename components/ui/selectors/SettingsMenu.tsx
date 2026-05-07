import { useState, useRef, useEffect } from "react";
import { Settings, ArrowDownWideNarrow, RotateCcw, Code } from "lucide-react";

type SettingsMenuProps = {
    demoTitle: string;
    resetTitle: string;
    exportTitle: string;
    onDemo: () => void;
    onReset: () => void;
};

export function SettingsMenu({
    demoTitle, resetTitle, exportTitle,
    onDemo, onReset
}: SettingsMenuProps){
        
    const [clicked, setClicked] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setClicked(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return(
        <div ref={ref} className="relative z-50">
            <button type="button" onClick={() => setClicked(!clicked)} className="hover:scale-[1.05] active:scale-[0.98] cursor-pointer h-fit items-center px-3 py-2 ring-1 shadow-md ring-[#E2E8F0] rounded-lg">
                <Settings/>
            </button>

            {clicked && 
                <div className="absolute w-[200px] ring-1 ring-[#E2E8F0] top-full right-[5%] translate-y-3 bg-white rounded-lg">
                    <div className="flex flex-col gap-2 px-2 py-2">
                        <button
                            type="button"
                            onClick={onDemo}
                            className="hover:scale-[1.02] active:scale-[0.98] text-[15px] cursor-pointer grid grid-cols-[30px_1fr] h-fit items-center gap-1 px-5 py-3 ring-1 shadow-md ring-[#E2E8F0] hover:ring-[#2563EB] hover:text-[#2563EB] rounded-lg"
                        >
                            <ArrowDownWideNarrow className="size-5"/>
                            <span className="text-start">
                                {demoTitle}
                            </span> 
                        </button>
                        <button
                            type="button"
                            onClick={onReset}
                            className="hover:scale-[1.02] active:scale-[0.98] text-[15px] cursor-pointer grid grid-cols-[30px_1fr] h-fit items-center gap-1 px-5 py-3 ring-1 shadow-md ring-[#E2E8F0] hover:ring-[#2563EB] hover:text-[#2563EB] rounded-lg"
                        >
                            <RotateCcw className="size-5"/>
                            <span className="text-start">
                                {resetTitle}
                            </span> 
                        </button>
                        <button 
                            type="button"
                            onClick={onReset}
                            className="hover:scale-[1.02] active:scale-[0.98] text-[15px] cursor-pointer grid grid-cols-[30px_1fr] h-fit items-center gap-1 px-5 py-3 ring-1 shadow-md ring-[#E2E8F0] hover:ring-[#2563EB] hover:text-[#2563EB] rounded-lg"
                        >
                            <Code className="size-5"/>
                            <span className="text-start">
                                {exportTitle}
                            </span> 
                        </button>
                    </div>
                </div>
            }
        </div>
    );
};