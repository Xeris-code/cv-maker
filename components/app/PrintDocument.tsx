import { templateMap } from "@/components/templates";
import {
  CvState,
  PreviewTranslations,
} from "@/lib/types";

import { useTemplatePages } from "@/lib/helpers";

type Props = {
  state: CvState;
  t: PreviewTranslations;
};

export function PrintDocument({
  state,
  t,
}: Props) {

  const Template = templateMap[state.template];

  const { pages, measurer } =
    useTemplatePages(Template, state, t);

  return (
    <>
      {measurer}

      <div className="print-root hidden print:block">
        {pages.map((page, index) => (
          <div
            key={index}
            className="print-page"
          >
            {page}
          </div>
        ))}
      </div>
    </>
  );
}