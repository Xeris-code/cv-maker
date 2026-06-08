import { Poppins } from "next/font/google";
import { BirthDate, CvState } from "@/lib/types";
import { Phone, Mail, MapPin, Earth, Cake } from "lucide-react";

const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

export function MainHeader({ basics, birth, currentPosition, hasName, hasAdress }: {
        basics: CvState["basics"];
        birth: BirthDate;
        currentPosition: string;
        hasName: string;
        hasAdress: string;
    }) {
        const address = [basics.adress_city, basics.adress_state]
            .filter(Boolean)
            .join(", ");

        return (
            <div className="px-4">
            
            {hasName && <h1 className={`${poppins.className} text-[36px] font-bold leading-none tracking-wider text-[#0F172A]`}>
                {basics.titleActive && basics.titleFront} {basics.name} {basics.surname}{basics.titleBack && basics.titleActive ? "," : ""} {basics.titleActive && basics.titleBack}
            </h1>}

            {currentPosition && (
                <p className={`${poppins.className} mt-2 text-[18px] font-semibold uppercase tracking-wide text-[#0284C7]`}>
                {currentPosition}
                </p>
            )}

            <div className="mt-5 grid grid-cols-[1fr_1fr] gap-3 text-[12px] text-[#0F172A]">
                
                {basics.mail && (
                <div className="flex items-center gap-4">
                    <Mail size={20} className="shrink-0" />
                    <span>{basics.mail}</span>
                </div>
                )}
                
                {basics.phone && (
                <div className="flex items-center gap-4">
                    <Phone size={20} className="shrink-0" />
                    <span>{basics.phone}</span>
                </div>
                )}

                

                {hasAdress && (
                <div className="flex items-center gap-4">
                    <MapPin size={20} className="shrink-0" />
                    <span>{address}</span>
                </div>
                )}

                {birth.year && (
                <div className="flex items-center gap-4">
                    <Cake size={20} className="shrink-0" />
                    <span>{[birth.day, birth.month, birth.year].join(".")}</span>
                </div>
                )}

            </div>
            {basics.portfolio && (
                <div className="flex mt-3 items-center gap-4 text-[12px] text-[#0F172A]">
                    <Earth size={20} className="shrink-0" />
                    <span>{basics.portfolio}</span>
                </div>
                )}

                <div className="mt-4 h-[1px] w-full bg-[#94A3B8]" />
            </div>
        );
    }