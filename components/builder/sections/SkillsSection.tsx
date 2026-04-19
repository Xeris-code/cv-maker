import { CvState, CvAction } from "@/lib/cvReducer"
import { Skill, TranslationKeys } from "@/lib/types"
import TitleSection from "./components/TitleSection"
import InputAddSelectText from "./components/InputAddSelectText"
import Button from "@/components/builder/sections/components/Button"

type SkillsSectionProps = {
    state: CvState
    dispatch: React.Dispatch<CvAction>
    t: Record<TranslationKeys, {name: string, placeholder: string}>
}


export default function SkillsSection({ state, dispatch, t}: SkillsSectionProps){

    const {skills} = state
    const skillOptions = [
        {value: 0, label: t["skillOption0"].name},
        {value: 1, label: t["skillOption1"].name},
        {value: 2, label: t["skillOption2"].name},
        {value: 3, label: t["skillOption3"].name},
        {value: 4, label: t["skillOption4"].name},
        {value: 5, label: t["skillOption5"].name},
    ]

    return <>
        <TitleSection label={t["skillsTitle"].name}/>
        <div className="flex flex-col gap-3">
            {skills.map((skill: Skill) => (
                <InputAddSelectText 
                key={`formSkillField_${skill.id}`}
                name={skill.name} level={skill.level} placeholderName={t["skillButton"].placeholder} options={skillOptions}
                onNameChange={e => dispatch({type: "UPDATE_SKILL", id: skill.id, field: "name", value: e.target.value})}
                onLevelChange={e => dispatch({type: "UPDATE_SKILL", id: skill.id, field: "level", value: Number(e.target.value)})}
                onClickDelete={() => dispatch({type: "DELETE_SKILL", id: skill.id})}/>
            ))}
            <Button label={t["skillButton"].name} onClick={() => dispatch({type: "ADD_SKILL"})}/>
        </div>
    </>
}