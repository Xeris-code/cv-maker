import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { MeasuredBlock, TemplateBlock } from "@/lib/types";

function areHeightsEqual(
  a: Record<string, number>,
  b: Record<string, number>
) {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) return false;

  return aKeys.every((key) => a[key] === b[key]);
}

export function useMeasuredBlocks(blocks: TemplateBlock[], width: number) {
  const refs = useRef<Record<string, HTMLDivElement | null>>({});
  const [heights, setHeights] = useState<Record<string, number>>({});

  useLayoutEffect(() => {
  const nextHeights: Record<string, number> = {};

  blocks.forEach((block) => {
    const el = refs.current[block.id];
    if (!el) return;

    nextHeights[block.id] = el.getBoundingClientRect().height;
  });

  setHeights((prev) => {
    if (areHeightsEqual(prev, nextHeights)) {
      return prev;
    }

    return nextHeights;
  });
}, [blocks]);

  const measuredBlocks: MeasuredBlock[] = useMemo(() => {
    return blocks.map((block) => ({
      ...block,
      height: heights[block.id] ?? 0,
    }));
  }, [blocks, heights]);

  const measurer = (
  <div
    className="fixed left-[-99999px] top-0 opacity-0 pointer-events-none"
    style={{ width: `${width}px` }}
  >
    <div className="flex flex-col gap-3">
      {blocks.map((block) => (
        <div
          key={block.id}
          ref={(el) => {
            refs.current[block.id] = el;
          }}
        >
          {block.element}
        </div>
      ))}
    </div>
  </div>
);

  return {
    measuredBlocks,
    measurer,
    ready: blocks.every((block) => heights[block.id] !== undefined),
  };
}