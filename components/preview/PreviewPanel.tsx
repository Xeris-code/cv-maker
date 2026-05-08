import { CvState, PreviewTranslations, AppTranslations } from "@/lib/types";
import { useRef, useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Maximize2, Minus, Plus } from "lucide-react";
import { templateMap } from "@/components/templates";

type PreviewProps = {
    state: CvState;
    appTranslations: AppTranslations;
    t: PreviewTranslations;
    styleWrapper?: string;
    stylePage?: string;
};

const CV_WIDTH = 794;
const CV_HEIGHT = 1123;

export function PreviewPanel({ state, appTranslations, t, styleWrapper="preview-panel border border-gray-200 shadow-sm rounded-xl", stylePage="cv-page" }: PreviewProps){

    const Template = templateMap[state.template];

    const totalPages = 4
    const [currentPage, setPageState] = useState<number>(1)
    
    const canvasRef = useRef<HTMLDivElement | null>(null);
    const [scale, setScale] = useState(1);
    const [zoom, setZoom] = useState(1);

    const finalScale = scale * zoom;

    const nextPage = () => {
        setPageState((prev) => Math.min(prev + 1, totalPages))
    };

    const previousPage = () => {
        setPageState((prev) => Math.max(prev - 1, 1))
    };

    const zoomIn = () => {
        setZoom((prev) => Math.min(Math.max(prev + 0.25, 0.5), 2))
    };

    const zoomOut = () => {
        setZoom((prev) => Math.min(Math.max(prev - 0.25, 0.5), 2))
    };

    const resetZoom = () => {
        setZoom(1)
    };

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
            <div className="flex gap-2 items-center border-1 border-gray-200 px-1 rounded-xl">
                <button
                    type="button"
                    className="cursor-pointer p-1 disabled:cursor-not-allowed disabled:opacity-40"
                    onClick={previousPage}
                    disabled={currentPage === 1}
                >
                    <ArrowBigLeft className="size-4 hover:scale-[1.05] active:scale-[0.98]"/>
                </button>
                <span className="text-[14px]">
                    {`${appTranslations.page} ${currentPage} / ${totalPages}`}
                </span>
                <button
                    type="button"
                    className="cursor-pointer p-1 disabled:cursor-not-allowed disabled:opacity-40"
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                >
                    <ArrowBigRight className="size-4 hover:scale-[1.05] active:scale-[0.98]"/>
                </button>
            </div>
            <div className="ring-1 ring-gray-200 rounded-xl flex items-center gap-6 px-3">
                <button
                    type="button"
                    className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                    onClick={zoomOut}
                    disabled={zoom <= 0.5}
                >
                    <Minus className="size-4 hover:scale-[1.05] active:scale-[0.98]"/>
                </button>
                <span className="text-[14px]">
                    {Math.round(zoom * 100)}%
                </span>
                <button
                    type="button"
                    className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                    onClick={zoomIn}
                    disabled={zoom >= 2}
                >
                    <Plus className="size-4 hover:scale-[1.05] active:scale-[0.98]"/>
                </button>
            </div>
            <button
                type="button"
                className="cursor-pointer ring-1 ring-gray-200 rounded-xl p-3 hover:scale-[1.05] active:scale-[0.98]"
                onClick={resetZoom}
            >
                <Maximize2 className="size-4"/>
            </button>

        </div>
        <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden">
            <div
                ref={canvasRef}
                className="absolute inset-0 overflow-auto"
            >
                <div className={`flex min-h-full min-w-full p-10 ${
                    zoom > 1
                        ? "items-start justify-start"
                        : "items-center justify-center"
                }`}>
                    <div className={`${zoom > 1 ? "pr-10" : ""}`}>
                    <div
                        className="shrink-0"
                        style={{
                        width: `${CV_WIDTH * finalScale}px`,
                        height: `${CV_HEIGHT * finalScale}px`,
                        }}
                    >    
                        <div
                        className="cv-document"
                        style={{
                            width: `${CV_WIDTH}px`,
                            height: `${CV_HEIGHT}px`,
                            transform: `scale(${finalScale})`,
                            transformOrigin: "top left",
                        }}
                        >
                            <div className={stylePage}>
                                <Template state={state} t={t} />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}