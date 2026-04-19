import Label from "./Label";
import { twMerge } from "tailwind-merge";
import {styleButtonToggle, styleButtonToggleActive, styleButtonToggleDeactive,
    styleButtonTogglePointer, styleButtonTogglePointerActive, styleButtonTogglePointerDeactive} from "@/lib/styles"

type Props = {
    label: string;
    classNameWrapper?: string;
    condition: boolean;
    func: () => void;
}

export default function ButtonToggle({
    label, condition, func, classNameWrapper=""
}: Props){

    const styleWrapper = twMerge("flex flex-col gap-1", classNameWrapper)

    return <div className={styleWrapper}>
            <div className="flex justify-start gap-2">
                <Label label={label} />
                <button className={`${styleButtonToggle} ${condition ? styleButtonToggleActive : styleButtonToggleDeactive}`} onClick={func}>
                    <div className={`${styleButtonTogglePointer} ${condition ? styleButtonTogglePointerActive : styleButtonTogglePointerDeactive}`} />
                </button>
            </div>
        </div>

}