import { CvAction, CvState } from "@/lib/reducer/cvReducer"
import PersonalSection from "./sections/PersonalSection";
import SkillsSection from "./sections/SkillsSection";
import LanguagesSection from "./sections/LanguagesSection";
import InterestsSection from "./sections/InterestsSection";
import ProjectsSection from "./sections/ProjectsSection";
import WorkSection from "./sections/WorkSection";
import CourseSection from "./sections/CoursesSection";
import EducationSection from "./sections/EducationSection";
import { TranslationSchema } from "@/lib/i18n/types";

type FormProps = {
    state: CvState;
    dispatch: React.Dispatch<CvAction>;
    t: TranslationSchema
}

export default function BuilderForms({ state, dispatch, t}: FormProps){

    function renderContent() {
        switch (state.menuCategory) {
            case "personal":
                return <PersonalSection state={state} dispatch={dispatch} t={t}/>
            case "work":
                return <WorkSection state={state} dispatch={dispatch} t={t}/>
            case "education":
                return <EducationSection state={state} dispatch={dispatch} t={t}/>
            case "courses":
                return <CourseSection state={state} dispatch={dispatch} t={t}/>
            case "skills":
                return <SkillsSection state={state} dispatch={dispatch} t={t}/>
            case "languages":
                return <LanguagesSection state={state} dispatch={dispatch} t={t}/>
            case "interests":
                return <InterestsSection state={state} dispatch={dispatch} t={t}/>
            case "projects":
                return <ProjectsSection state={state} dispatch={dispatch} t={t}/>
        }
    }

    return <div className="bg-[#ffffff] border-r-2 border-[#E2E8F0] p-6 print:hidden">
        {renderContent()}
    </div>
}