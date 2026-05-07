import { CvState, AllowedTemplateType, TemplateComponent, TranslationSchema } from "@/lib/types";
import { ModernTemplate, ClassicTemplate, GraphicTemplate, InitialTemplate, CentralizedTemplate } from "@/components/templates";
import { useRef, useEffect, useState } from "react";
import { Maximize2, Minus, Monitor, Plus, Smartphone } from "lucide-react";

type PreviewProps = {
    state: CvState;
    t: TranslationSchema;
    styleWrapper?: string;
    stylePage?: string;
};

const CV_WIDTH = 794;
const CV_HEIGHT = 1123;

const templateMap: Record<AllowedTemplateType, TemplateComponent> = {
    classic: ClassicTemplate,
    modern: ModernTemplate,
    graphic: GraphicTemplate,
    initial: InitialTemplate,
    centralized: CentralizedTemplate,
};

export function PreviewPanel({ state, t, styleWrapper="preview-panel border border-gray-200 shadow-sm rounded-xl", stylePage="cv-page" }: PreviewProps){

    const Template = templateMap[state.template];

   
    const canvasRef = useRef<HTMLDivElement | null>(null);
    const [scale, setScale] = useState(1);

    const [zoom, setZoom] = useState(1);

    useEffect(() => {
        const element = canvasRef.current;
        if (!element) return;

        const updateScale = () => {
        const rect = element.getBoundingClientRect();

        const availableWidth = rect.width - 80; // padding reserve
        const availableHeight = rect.height - 80;

        const nextScale = Math.min(
            availableWidth / CV_WIDTH,
            availableHeight / CV_HEIGHT,
            1
        );

        setScale(nextScale);
        };

        updateScale();

        const observer = new ResizeObserver(updateScale);
        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
    <div className={styleWrapper}>
        <div className="flex justify-between py-5 px-10 w-full bg-[#ffffff] border-b-1 border-gray-200 shadow-md text-gray-600">
            <div className="flex gap-2">
                <button className="cursor-pointer ring-1 ring-gray-200 rounded-xl py-3 px-8">
                    <Monitor className="size-5"/>
                </button>
                <button className="cursor-pointer ring-1 ring-gray-200 rounded-xl py-3 px-8">
                    <Smartphone className="size-5"/>
                </button>
            </div>
            <div className="ring-1 ring-gray-200 rounded-xl flex items-center gap-6 px-3">
                <button className="cursor-pointer" onClick={() => {zoom > 0.5 ? setZoom(zoom - 0.25) : null}}>
                    <Minus/>
                </button>
                <span>
                    {Math.round(zoom * 100)}%
                </span>
                <button className="cursor-pointer" onClick={() => {zoom < 2 ? setZoom(zoom + 0.25) : null}}>
                    <Plus/>
                </button>
            </div>
            <button className="cursor-pointer ring-1 ring-gray-200 rounded-xl p-3" onClick={() => setZoom(1)}>
                <Maximize2 className="size-5"/>
            </button>

        </div>
        <div ref={canvasRef} className={`flex min-h-0 flex-1 justify-center ${zoom > 1 ? "overflow-auto" : "overflow-hidden items-center"}`}>
            <div
                style={{
                width: `${CV_WIDTH * scale * zoom}px`,
                height: `${CV_HEIGHT * scale * zoom}px`,
                }}
            >
                <div
                className={stylePage}
                style={{
                    transform: `scale(${scale * zoom})`,
                    transformOrigin: "top left",
                }}
                >
                {/*<Template state={state} t={t} />*/}
                </div>
            </div>
        </div>
    </div>
  );
}