import { CategoryMenuItem, MenuCategory, MenuTranslations } from "@/lib/types";
import { User, BriefcaseBusiness, GraduationCap, ScrollText, Layers, LanguagesIcon, BikeIcon, FileUserIcon, LucideIcon} from "lucide-react";

type SidebarProps = {
    activeMenu: MenuCategory;
    translations: MenuTranslations;
    onMenuChange: (menuName: MenuCategory) => void;
}

export function Sidebar({
    activeMenu,
    translations,
    onMenuChange, 
}: SidebarProps){

    const styles = {
        icon: "shrink-0 self-center",
        button: "text-left cursor-pointer min-w-full  pl-3 pt-2 pb-2 flex justify-start rounded-lg flex gap-3",
        buttonActive: "border-l-4 border-[#2563EB] bg-[#3B82F6] -ml-2",
        buttonNotActive: "hover:-ml-0.5 text-[#64748B]",
        sidebar: "print:hidden bg-[#F1F5F9] border-r-2 border-[#E2E8F0] pt-5 pl-10 pr-3",
        wrapper: "border-l-4 border-[#E2E8F0] flex flex-col gap-2",
    }

    const categoryMenuList: CategoryMenuItem[] = [
        {name: "personal", icon: User},
        {name: "work", icon: BriefcaseBusiness},
        {name: "education", icon: GraduationCap},
        {name: "courses", icon:  ScrollText},
        {name: "skills", icon: Layers},
        {name: "languages", icon: LanguagesIcon},
        {name: "interests", icon: BikeIcon},
        {name: "projects", icon: FileUserIcon},
    ];

    function renderMenuButton(id: number, menu: CategoryMenuItem, label: string, Icon: LucideIcon){
        return (
            <button key={id} type="button" className={`${styles.button} ${activeMenu === menu.name ? styles.buttonActive : styles.buttonNotActive}`} onClick={() => onMenuChange(menu.name)}>
                <Icon className={styles.icon}/>
                {label}
            </button>
        );
    };

    return <div className={styles.sidebar}>
        <div className={styles.wrapper}>
            {categoryMenuList.map((menu, index) => (
                renderMenuButton(index, menu, translations[menu.name], menu.icon)
            ))}
        </div>
    </div>
}