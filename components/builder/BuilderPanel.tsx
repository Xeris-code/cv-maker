import { CvState, CollectionKey, CollectionItem, TranslationSchema, BasicInformation, BirthDate, OnCollectionChange } from "@/lib/types"
import { PersonalSection, SkillsSection, LanguagesSection, InterestsSection, ProjectsSection, WorkSection, CourseSection, EducationSection} from "./sections"
import { getDayOptions, getMonthOptions, getYearOptions } from "@/lib/forms";

type BuilderPanelProps = {
    state: CvState;
    t: TranslationSchema;
    onAdd: (key: CollectionKey) => void;
    onReorder: (target: CollectionKey, items: CvState[CollectionKey]["items"]) => void;
    onDelete: (key: CollectionKey, id: number) => void;
    onBirthChange: (field: keyof BirthDate, value: BirthDate[keyof BirthDate]) => void;
    onPersonalChange: (field: keyof BasicInformation, value: BasicInformation[keyof BasicInformation]) => void;
    onCollectionChange: OnCollectionChange;
}   

export function BuilderPanel({
    state,
    t,
    onAdd,
    onReorder,
    onDelete,
    onBirthChange,
    onPersonalChange,
    onCollectionChange,
}: BuilderPanelProps){

    const dayDateOptions = getDayOptions(t);
    const monthDateOptions = getMonthOptions(t);
    const yearDateOptions = getYearOptions(t);

    const bindAdd = (key: CollectionKey) => {
        return () => onAdd(key);
    };

    const bindDelete = (key: CollectionKey) => {
        return (id: number) => onDelete(key, id);
    };

    const bindPhotoChange = () => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = () => {
                console.log("reader result", reader.result);
                if (typeof reader.result !== "string") return;

                onPersonalChange("photo", reader.result as string);

                e.target.value = "";
            };

        reader.readAsDataURL(file);
        };
    };

    const bindCollectionChange = <T extends CollectionKey>(target: T) => {
        return <F extends Extract<keyof CollectionItem<T>, string>>(
            id: number,
            field: F,
            value: CollectionItem<T>[F]
        ) => {
            onCollectionChange(target, id, field, value)
        };
    };

    const bindReorder = (target: CollectionKey) => {
        return (items: CvState[CollectionKey]["items"]) => onReorder(target, items)
    }

    function renderContent() {
        switch (state.menu) {
            case "personal":
                return <PersonalSection
                    birth={state.birth}
                    personal={state.basics}
                    translation={t.ui.sections.personal}
                    dayDateOptions={dayDateOptions}
                    monthDateOptions={monthDateOptions}
                    yearDateOptions={yearDateOptions}
                    onBirthChange={onBirthChange}
                    onPersonalChange={onPersonalChange}
                    onPhotoChange={bindPhotoChange()}
                />
            case "work":
                return <WorkSection 
                    work={state.work}
                    translationWork={t.ui.sections.work}
                    translationTooltip={t.ui.tooltip}
                    monthDateOptions={monthDateOptions}
                    yearDateOptions={yearDateOptions}
                    onWorkChange={bindCollectionChange("work")}
                    onAddWork={bindAdd("work")}
                    onDeleteWork={bindDelete("work")}
                />
            case "education":
                return <EducationSection
                    education={state.education}
                    translationEducation={t.ui.sections.education}
                    translationTooltip={t.ui.tooltip}
                    monthDateOptions={monthDateOptions}
                    yearDateOptions={yearDateOptions}
                    onEducationChange={bindCollectionChange("education")}
                    onAddEducation={bindAdd("education")}
                    onDeleteEducation={bindDelete("education")}
                />
            case "courses":
                return <CourseSection
                    courses={state.courses}
                    translationCourse={t.ui.sections.courses}
                    translationTooltip={t.ui.tooltip}
                    monthDateOptions={monthDateOptions}
                    yearDateOptions={yearDateOptions}
                    onCourseChange={bindCollectionChange("courses")}
                    onAddCourse={bindAdd("courses")}
                    onDeleteCourse={bindDelete("courses")}
                />
            case "skills":
                return <SkillsSection
                    skills={state.skills}
                    translationsSkill={t.ui.sections.skills}
                    translationsOption={t.ui.options.skills}
                    translationTooltip={t.ui.tooltip}
                    onSkillChange={bindCollectionChange("skills")}
                    onAddSkill={bindAdd("skills")}
                    onReorderSkills={bindReorder("skills")}
                    onDeleteSkill={bindDelete("skills")}
                />
            case "languages":
                return <LanguagesSection 
                    languages={state.languages}
                    translationsLanguage={t.ui.sections.languages}
                    translationsOption={t.ui.options.language}
                    translationTooltip={t.ui.tooltip}
                    onLanguageChange={bindCollectionChange("languages")}
                    onAddLanguage={bindAdd("languages")}
                    onReorderLanguages={bindReorder("languages")}
                    onDeleteLanguage={bindDelete("languages")}
                />
            case "interests":
                return <InterestsSection
                    interests={state.interests}
                    translationsInterests={t.ui.sections.interests}
                    onInterestsChange={bindCollectionChange("interests")}
                    onAddInterests={bindAdd("interests")}
                    onDeleteInterests={bindDelete("interests")}
                />
            case "projects":
                return <ProjectsSection
                    projects={state.projects}
                    translationsProjects={t.ui.sections.projects}
                    translationTooltip={t.ui.tooltip}
                    onProjectChange={bindCollectionChange("projects")}
                    onAddProject={bindAdd("projects")}
                    onDeleteProject={bindDelete("projects")}
                />
        }
    }

    return <div className="card border border-gray-200 shadow-sm print:hidden">
            <div className="flex flex-col h-full">
                {renderContent()}
            </div>    
    </div>
}
