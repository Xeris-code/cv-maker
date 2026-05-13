import { CvState, PreviewTranslations } from "@/lib/types";
import { TemplateBlock } from "@/lib/types";
import {
  MainHeader,
  ProfileBlock,
  MainSectionHeader,
  WorkItem,
  EducationItem,
  CourseItem,
  ProjectItem,
} from "@/components/templates/ModernTemplate";

export function getModernBlocks(
  state: CvState,
  t: PreviewTranslations
): TemplateBlock[] {
  const blocks: TemplateBlock[] = [];

  const { basics, work, education, courses, projects } = state;

  const hasHeader = basics.name || basics.surname || basics.position;
  const hasName = basics.name || basics.surname;
  const hasAddress = basics.adress_state || basics.adress_city;

  if (hasHeader) {
    blocks.push({
      id: "main-header",
      element: (
        <MainHeader
          basics={basics}
          currentPosition={basics.position}
          hasName={hasName}
          hasAdress={hasAddress}
        />
      ),
    });
  }

  if (basics.summary) {
    blocks.push({
      id: "profile",
      element: <ProfileBlock summary={basics.summary} t={t} />,
    });
  }

  if (work.items.length > 0) {
    blocks.push({
      id: "work-heading",
      element: <MainSectionHeader title={t.sections.work.name} />,
    });

    work.items.forEach((item) => {
      blocks.push({
        id: `work-${item.id}`,
        element: <WorkItem work={item} t={t} />,
      });
    });
  }

  if (education.items.length > 0) {
    blocks.push({
      id: "education-heading",
      element: <MainSectionHeader title={t.sections.education.name} />,
    });

    education.items.forEach((item) => {
      blocks.push({
        id: `education-${item.id}`,
        element: <EducationItem education={item}/>,
      });
    });
  }

  if (courses.items.length > 0) {
    blocks.push({
      id: "courses-heading",
      element: <MainSectionHeader title={t.sections.courses.name} />,
    });

    courses.items.forEach((item) => {
      blocks.push({
        id: `course-${item.id}`,
        element: <CourseItem course={item}/>,
      });
    });
  }

  if (projects.items.length > 0) {
    blocks.push({
      id: "projects-heading",
      element: <MainSectionHeader title={t.sections.projects.name} />,
    });

    projects.items.forEach((item) => {
      blocks.push({
        id: `project-${item.id}`,
        element: <ProjectItem project={item}/>,
      });
    });
  }

  return blocks;
}