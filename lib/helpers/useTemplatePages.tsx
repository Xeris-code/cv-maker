import { useMemo } from "react";

import {
  CvState,
  PreviewTranslations,
  TemplateComponent,
} from "../types";

import {
  ModernTemplatePage,
  SidebarContent,
  getModernBlocks,
} from "@/components/templates";

import { useMeasuredBlocks } from "@/lib/hooks";
import { splitBlocksIntoPages } from "./splitBlocksIntoPages";

const CV_WIDTH = 794;
const CV_HEIGHT = 1123;

const MODERN_SIDEBAR_RATIO = 0.34;
const MODERN_MAIN_HORIZONTAL_PADDING = 40;
const MODERN_MAIN_VERTICAL_PADDING = 64;
const MODERN_BLOCK_GAP = 12;

const MODERN_MAIN_CONTENT_WIDTH =
  CV_WIDTH * (1 - MODERN_SIDEBAR_RATIO) - MODERN_MAIN_HORIZONTAL_PADDING;

const MODERN_AVAILABLE_HEIGHT =
  CV_HEIGHT - MODERN_MAIN_VERTICAL_PADDING;

function ModernSidebar({
  state,
  t,
}: {
  state: CvState;
  t: PreviewTranslations;
}) {
  return (
    <SidebarContent
      photo={state.basics.photo}
      skills={state.skills.items}
      languages={state.languages.items}
      interests={state.interests.items}
      t={t}
    />
  );
}

function useModernPages(
  state: CvState,
  t: PreviewTranslations
) {
  const blocks = useMemo(() => {
    return getModernBlocks(state, t);
  }, [state, t]);

  const {
    measuredBlocks,
    measurer,
    ready,
  } = useMeasuredBlocks(blocks, MODERN_MAIN_CONTENT_WIDTH);

  const splitPages = useMemo(() => {
    if (!ready) {
      return [measuredBlocks];
    }

    return splitBlocksIntoPages(
      measuredBlocks,
      MODERN_AVAILABLE_HEIGHT,
      MODERN_BLOCK_GAP
    );
  }, [ready, measuredBlocks]);

  const pages = useMemo(() => {
    return splitPages.map((page, index) => (
      <ModernTemplatePage
        key={`modern-page-${index}`}
        mainBlocks={page.map((block) => block.element)}
        sidebar={<ModernSidebar state={state} t={t} />}
      />
    ));
  }, [splitPages, state, t]);

  return {
    pages,
    measurer,
    ready,
  };
}

export function useTemplatePages(
  Template: TemplateComponent,
  state: CvState,
  t: PreviewTranslations
) {
  if (state.template === "modern") {
    return useModernPages(state, t);
  }

  return {
    pages: [
      <Template
        key="fallback-page"
        state={state}
        t={t}
      />,
    ],
    measurer: null,
    ready: true,
  };
}