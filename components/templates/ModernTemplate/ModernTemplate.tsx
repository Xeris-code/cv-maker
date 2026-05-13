
import { CvState, PreviewTranslations } from "@/lib/types";
import { getModernBlocks } from "./helpers";
import { ModernTemplatePage } from "./ModernTemplatePage";

import { SidebarContent } from "./items";

type ModernTemplateProps = {
  state: CvState;
  t: PreviewTranslations;
};

export function ModernTemplate({
  state,
  t,
}: ModernTemplateProps) {
    const blocks = getModernBlocks(state, t);

  return (
    <>
        <ModernTemplatePage
          mainBlocks={blocks.map((block) => block.element)}
          sidebar={<SidebarContent
                        photo={state.basics.photo}
                        skills={state.skills.items}
                        languages={state.languages.items}
                        interests={state.interests.items}
                        t={t} 
                    />}
        />
    </>
  );
}