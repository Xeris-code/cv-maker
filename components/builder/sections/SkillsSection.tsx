import { CvState, CvAction } from "@/lib/reducer/cvReducer"
import { Skill } from "@/lib/types"
import TitleSection from "./components/TitleSection"
import InputAddSelectText from "./components/InputAddSelectText"
import Button from "@/components/builder/sections/components/Button"
import { TranslationSchema } from "@/lib/i18n/types"

type SkillsSectionProps = {
    state: CvState
    dispatch: React.Dispatch<CvAction>
    t: TranslationSchema
}


export default function SkillsSection({ state, dispatch, t}: SkillsSectionProps){

    const {skills} = state
    const skillOptions = [
        {value: 0, label: t.options.skills[0]},
        {value: 1, label: t.options.skills[1]},
        {value: 2, label: t.options.skills[2]},
        {value: 3, label: t.options.skills[3]},
        {value: 4, label: t.options.skills[4]},
        {value: 5, label: t.options.skills[5]},
    ]

    return <>
        <TitleSection label={t.sections.common.skills}/>
        <div className="flex flex-col gap-3">
            {skills.map((skill: Skill) => (
                <InputAddSelectText 
                key={`formSkillField_${skill.id}`}
                name={skill.name} level={skill.level} placeholderName={t.fields.skills.placeholder} options={skillOptions}
                onNameChange={e => dispatch({type: "UPDATE_SKILL", id: skill.id, field: "name", value: e.target.value})}
                onLevelChange={e => dispatch({type: "UPDATE_SKILL", id: skill.id, field: "level", value: Number(e.target.value)})}
                onClickDelete={() => dispatch({type: "DELETE_SKILL", id: skill.id})}/>
            ))}
            <Button label={t.actions.addSkill} onClick={() => dispatch({type: "ADD_SKILL"})}/>
        </div>
    </>
}