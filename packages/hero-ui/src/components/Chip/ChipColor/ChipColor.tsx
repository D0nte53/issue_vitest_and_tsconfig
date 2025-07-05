import { Chip, ChipProps, cn } from "@heroui/react"
import { EColor, jsonEColorTailwindColor } from "@utils/color/Color";


export type ChipColorProps<C extends EColor=EColor> = {
    color: C;
    text?: string;
    } & Omit<ChipProps, "children" | "color" | "variant">;

const ChipColor = <C extends EColor>({color,text:_text ,...restProps}:{color:C,text?:string} & Omit<ChipProps,"children"|"color"|"variant">)=>{
    const text = _text ?? ""
    const textColor = jsonEColorTailwindColor[color]
    const className = cn("!border-0",restProps.className ?? "",`text-${textColor}-500`)
    const props = {...restProps,color:`${color}` as const ,variant:"dot" as const}
    return <Chip {...props} className={className} >{text}</Chip> // A FAIRE type
}

export default ChipColor