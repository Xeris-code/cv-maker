import { CvAction, CvState } from "@/lib/cvReducer"
import { styleMenuWindow, styleMenuWrapper } from "@/lib/styles";
import { TranslationKeys, categoryMenuItem } from "@/lib/types";
import { User, BriefcaseBusiness, GraduationCap,
    ScrollText, Layers, LanguagesIcon, BikeIcon, FileUserIcon } from "lucide-react";
import MenuButton from "./MenuButton";

type SidebarProps = {
    state: CvState;
    dispatch: React.Dispatch<CvAction>;
    t: Record<TranslationKeys, { name: string, placeholder: string }>
}

const categoryMenuList: categoryMenuItem[] = [
        {name: "personal", icon: User},
        {name: "work", icon: BriefcaseBusiness},
        {name: "education", icon: GraduationCap},
        {name: "courses", icon:  ScrollText},
        {name: "skills", icon: Layers},
        {name: "languages", icon: LanguagesIcon},
        {name: "interests", icon: BikeIcon},
        {name: "projects", icon: FileUserIcon}
    ]

export default function BuilderSidebar({ state, dispatch, t }: SidebarProps){

    

    return <div className={styleMenuWindow}>
        <div className={styleMenuWrapper}>
            {categoryMenuList.map((menu) => (
                <MenuButton
                key = {menu.name}
                label={t[`${menu.name}Title`].name}
                setFunc={() => dispatch({type: "SET_ACTIVE_MENU", value: menu.name})}
                condition={state.menuCategory===menu.name}
                Icon={menu.icon}/>
            ))}
        </div>
    </div>
}