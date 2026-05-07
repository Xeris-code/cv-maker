import { AppTranslations, CompletionRecord, CategoryMenuItem, MenuCategory, MenuTranslations } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";
import {  User, BriefcaseBusiness, GraduationCap, ScrollText, Layers, LanguagesIcon, BikeIcon, FileUserIcon, LucideIcon, Sparkles, ChevronRight, ChevronLeft, ArrowBigRight, ArrowBigLeftDash, ArrowBigRightDash, ArrowBigLeft, Check, X} from "lucide-react";
import { useEffect, useState } from "react";

type SidebarProps = {
    activeMenu: MenuCategory;
    appTranslations: AppTranslations;
    translations: MenuTranslations;
    completion: CompletionRecord;
    onMenuChange: (menuName: MenuCategory) => void;
}

export function Sidebar({
    activeMenu,
    appTranslations,
    translations,
    completion,
    onMenuChange, 
}: SidebarProps){
    
    const tips = appTranslations.tips.items
    const categoryMenuList: CategoryMenuItem[] = [
        {name: "personal", completion: completion["personal"], icon: User},
        {name: "work", completion: completion["work"], icon: BriefcaseBusiness},
        {name: "education", completion: completion["education"], icon: GraduationCap},
        {name: "courses", completion: completion["courses"], icon:  ScrollText},
        {name: "skills", completion: completion["skills"], icon: Layers},
        {name: "languages", completion: completion["languages"], icon: LanguagesIcon},
        {name: "interests", completion: completion["interests"], icon: BikeIcon},
        {name: "projects", completion: completion["projects"], icon: FileUserIcon},
    ];

    const [[tip, direction], setTipState] = useState([0, 1]);

    const nextTip = () => {
        setTipState(([prev]) => [
            prev === tips.length - 1 ? 0 : prev + 1,
            1,
        ]);
    };

    const prevTip = () => {
        setTipState(([prev]) => [
            prev === 0 ? tips.length - 1 : prev - 1,
            -1,
        ]);
    };

    const variants = {
        ente: (direction: number) => ({
            x: direction < 0 ? 30 : -30,
            opacity: 0
        }),

        center: {
            x: 0,
            opacity: 1,
        },

        exit: (direction: number) => ({
            x: direction < 0 ? -30 : 30,
            opacity: 0,
        }),
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextTip()
        }, 15000);

        return () => clearInterval(interval);

    }, [tips.length]);

    function renderMenuButton(id: number, menu: CategoryMenuItem, label: string, filled: CategoryMenuItem["completion"], Icon: LucideIcon){
        
        function styleIndicator (type: CategoryMenuItem["completion"]) {
            return (
                type === "empty"
                    ? "ring-gray-300"
                    : type === "partial"
                        ? "ring-orange-300 text-orange-300"
                        : "ring-green-600 text-green-600"
            )
        }
        
        return (
            <button 
                key={id}
                type="button"
                className={`cursor-pointer grid grid-cols-[max-content_1fr_10px] gap-3 rounded-xl items-center py-2 pl-3 pr-5 text-[14px] hover:bg-[#EFF6FF] ${menu.name===activeMenu ? "text-[#2563EB] bg-[#DBEAFE]" : "text-gray-500"}`}
                onClick={() => onMenuChange(menu.name)}
            >
                <div className={`ring-1 rounded-full p-2 ${menu.name===activeMenu ? "bg-[#2563EB]" : "ring-gray-300"}`}>
                    <Icon className={`size-6 self-center ${menu.name===activeMenu ? "text-white" : ""}`}/>
                </div>
                <span className="text-start">{label}</span>
                <div className={`h-4 w-4 ring-1 rounded-full flex justify-center ${styleIndicator(filled)}`}>
                    {filled === "complete"
                        ? <Check className="size-3 m-auto"/>
                        : filled === "partial"
                            ? <span className="text-[12px]">?</span>
                            : <></>}
                </div>
            </button>
        );
    };

    return <div className="card flex flex-col justify-between border border-gray-200 shadow-sm">
        <div className="overflow-y-auto noScroll h-fit">
            <div className="flex flex-col gap-2 px-2 py-2 overflow-y">
                {categoryMenuList.map((menu, index) => (
                    renderMenuButton(index, menu, translations[menu.name].title, menu.completion, menu.icon)
                ))}
            </div>
        </div>
        <div className="min-h-fit border-t-1 border-gray-200 p-3 overflow-hidden flex flex-col gap-3 justify-between">
            <div className="ring-1 ring-gray-200 rounded flex flex-col gap-2 justify-between p-2 h-[180px]">
                <div className="flex gap-1 items-center text-[#3b82f6] text-[14px] font-semibold">
                    <Sparkles className="size-5"/>
                    <span>{appTranslations.tips.title}</span>
                </div>
                <div className="text-[14px] text-gray-600 overflow-hidden">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={tip}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.25 }}
                        >
                            {tips[tip]}
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="flex justify-between">
                    <button type="button" onClick={prevTip} className="hover:scale-[1.08] active:scale-[0.98] text-[#3b82f6] hover:text-[#2563eb] cursor-pointer mb-2 ml-2">
                        <ArrowBigLeft className="size-5"/>
                    </button>
                    <button type="button" onClick={nextTip} className="hover:scale-[1.08] active:scale-[0.98] text-[#3b82f6] hover:text-[#2563eb] cursor-pointer mb-2 mr-2">
                        <ArrowBigRight className="size-5"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
}