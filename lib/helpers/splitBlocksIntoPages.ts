import { MeasuredBlock } from "@/lib/types";

const PAGE_HEIGHT = 1123;

export function splitBlocksIntoPages(
  blocks: MeasuredBlock[],
  availableHeight: number,
  gap = 0
) {
  const pages: MeasuredBlock[][] = [];

  let currentPage: MeasuredBlock[] = [];
  let currentHeight = 0;

  for (const block of blocks) {
    const blockHeight =
      currentPage.length === 0
        ? block.height
        : block.height + gap;

    if (
      currentPage.length > 0 &&
      currentHeight + blockHeight > availableHeight
    ) {
      pages.push(currentPage);
      currentPage = [block];
      currentHeight = block.height;
    } else {
      currentPage.push(block);
      currentHeight += blockHeight;
    }
  }

  if (currentPage.length > 0) pages.push(currentPage);

  return pages;
}