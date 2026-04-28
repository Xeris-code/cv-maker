import { CvState, TranslationSchema } from "@/lib/types"
import { Mail, MapPin, Phone } from "lucide-react";
import { Montserrat, Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

type CentralizedTemplateProps = {
    state: CvState;
    t: TranslationSchema;
}

export function CentralizedTemplate({state, t}: CentralizedTemplateProps){

    const {basics} = state

    const popisyDatumy = "#9CA3AF"
    const accent = "#3B82F6"
    const dividerLines = "#444444"
    const accentLight = "#60A5FA"
    const skillBar = "#3F3F46"

    return (
        <div className={`flex flex-col min-h-[1123px] bg-[#2B2B2B] text-[#E5E7EB] ${inter.className}`}>
            <div className="relative h-[230px] pt-35">
                <div className="absolute left-1/2 ring-5 ring-[#444444] top-16 z-10 size-50 -translate-x-1/2 overflow-hidden rounded-full bg-gray-200">
                    {basics.photo && (
                    <img
                        className="h-full w-full object-cover"
                        src={basics.photo}
                    />
                    )}
                </div>

                <div className="grid grid-cols-[220px_220px_220px] justify-center items-center">
                    <span className={`${montserrat.className} break-words leading-tight text-right text-[36px] uppercase tracking-widest text-[#60A5FA]`}>
                    {basics.name}
                    </span>

                    <div/>

                    <span className={`${montserrat.className} break-words leading-tight text-left text-[36px] uppercase tracking-widest text-[#60A5FA]`}>
                    {basics.surname}
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-2 min-h-[700px] mt-10">
                <div className="border-r-4 border-[#444444] pt-10 px-6 text-end">UNDER DEVELOPMENT</div>
                <div className="pt-10 px-6">UNDER DEVELOPMENT</div>
            </div>
            <div className="grid grid-cols-3 justify-center items-center text-center py-10 px-10">
                <div className="flex gap-2 justify-center">
                    <MapPin className="size-[30px] text-[#3B82F6]"/>
                    <span className="text-[12px] text-[#9CA3AF] self-center">{[basics.adress_city, basics.adress_state].filter(Boolean).join(", ")}</span>
                </div>
                <div className="flex gap-2 justify-center">
                    <Mail className="size-[30px] text-[#3B82F6]"/>
                    <span className="text-[12px] text-[#9CA3AF] self-center">{basics.mail}</span>
                </div>
                <div className="flex gap-2 justify-center">
                    <Phone className="size-[30px] text-[#3B82F6]"/>
                    <span className="text-[12px] text-[#9CA3AF] self-center">{basics.phone}</span>
                </div>
            </div>
        </div>
    )
};