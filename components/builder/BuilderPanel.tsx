import { CvState, CollectionKey, CollectionItem, TranslationSchema, BasicInformation, BirthDate, OnCollectionChange } from "@/lib/types"
import { PersonalSection, SkillsSection, LanguagesSection, InterestsSection, ProjectsSection, WorkSection, CourseSection, EducationSection} from "./sections"
import { getDayOptions, getMonthOptions, getYearOptions } from "@/lib/forms";

type BuilderPanelProps = {
    state: CvState;
    t: TranslationSchema;
    onAdd: (key: CollectionKey) => void;
    onDelete: (key: CollectionKey, id: number) => void;
    onBirthChange: (field: keyof BirthDate, value: BirthDate[keyof BirthDate]) => void;
    onPersonalChange: (field: keyof BasicInformation, value: BasicInformation[keyof BasicInformation]) => void;
    onCurrentPositionChange: (value: string) => void;
    onCollectionChange: OnCollectionChange;
}   

export function BuilderPanel({
    state,
    t,
    onAdd,
    onDelete,
    onBirthChange,
    onCurrentPositionChange,
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
                onPersonalChange("photo", reader.result as string);
            };

        reader.readAsDataURL(file);
        };
    };

    const bindPersonalChange = (field: keyof BasicInformation) => {
        return (value: BasicInformation[keyof BasicInformation]) => onPersonalChange(field, value);
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

    function renderContent() {
        switch (state.menu) {
            case "personal":
                return <PersonalSection
                    title={t.sections.common.personal}
                    birth={state.birth}
                    personal={state.basics}
                    translation={t.fields}
                    dayDateOptions={dayDateOptions}
                    monthDateOptions={monthDateOptions}
                    yearDateOptions={yearDateOptions}
                    addButtonPhotoLabel={t.actions.addPhoto}
                    onBirthChange={onBirthChange}
                    onPersonalChange={onPersonalChange}
                    onPhotoChange={bindPhotoChange}
                />
            case "work":
                return <WorkSection 
                    title={t.sections.common.work}
                    work={state.work}
                    currentPosition={state.currentPosition}
                    translationCurrentPosition={t.fields.position}
                    addButtonLabel={t.actions.addWork}
                    translationWork={t.fields.work}
                    monthDateOptions={monthDateOptions}
                    yearDateOptions={yearDateOptions}
                    onWorkChange={bindCollectionChange("work")}
                    onAddWork={bindAdd("work")}
                    onDeleteWork={bindDelete("work")}
                    onCurrentPositionChange={onCurrentPositionChange}
                />
            case "education":
                return <EducationSection
                    title={t.sections.common.education}
                    education={state.education}
                    addButtonLabel={t.actions.addEducation}
                    translationEducation={t.fields.education}
                    yearDateOptions={yearDateOptions}
                    onEducationChange={bindCollectionChange("education")}
                    onAddEducation={bindAdd("education")}
                    onDeleteEducation={bindDelete("education")}
                />
            case "courses":
                return <CourseSection
                    title={t.sections.common.courses}
                    courses={state.courses}
                    addButtonLabel={t.actions.addCourse}
                    translationCourse={t.fields.courses}
                    monthDateOptions={monthDateOptions}
                    yearDateOptions={yearDateOptions}
                    onCourseChange={bindCollectionChange("courses")}
                    onAddCourse={bindAdd("courses")}
                    onDeleteCourse={bindDelete("courses")}
                />
            case "skills":
                return <SkillsSection
                    title={t.sections.common.skills}
                    skills={state.skills}
                    translationsSkill={t.fields.skills}
                    translationsOption={t.options.skills}
                    addButtonLabel={t.actions.addSkill}
                    onSkillChange={bindCollectionChange("skills")}
                    onAddSkill={bindAdd("skills")}
                    onDeleteSkill={bindDelete("skills")}
                />
            case "languages":
                return <LanguagesSection 
                    title={t.sections.common.languages}
                    languages={state.languages}
                    translationsLanguage={t.fields.languages}
                    translationsOption={t.options.language}
                    addButtonLabel={t.actions.addLanguage}
                    onLanguageChange={bindCollectionChange("languages")}
                    onAddLanguage={bindAdd("languages")}
                    onDeleteLanguage={bindDelete("languages")}
                />
            case "interests":
                return <InterestsSection
                    title={t.sections.common.interests}
                    interests={state.basics.interest}
                    translationsInterests={t.fields.interests}
                    onInterestsChange={bindPersonalChange("interest")}
                />
            case "projects":
                return <ProjectsSection
                    title={t.sections.common.projects}
                    projects={state.projects}
                    addButtonLabel={t.actions.addProject}
                    translationsProjects={t.fields.project}
                    onProjectChange={bindCollectionChange("projects")}
                    onAddProject={bindAdd("projects")}
                    onDeleteProject={bindDelete("projects")}
                />
        }
    }

    return <div className="bg-[#ffffff] border-r-2 border-[#E2E8F0] p-6 print:hidden">
        {renderContent()}
    </div>
}
