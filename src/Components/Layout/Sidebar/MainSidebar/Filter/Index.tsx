import { Checkbox } from "@ui/checkbox/Checkbox"

import style from "./CheckBoxFilter.module.scss"
import { PriceFilter } from "./PriceFilter/Index"

export enum modeEnum {
  "checkbox"="checkbox",
  "price"="price"
}

interface TProps{
  title:string
  items?:Array<string>
  mode?: modeEnum
}

export const Filter = ({items,title,mode}:TProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>{title}</div>
      {mode===modeEnum.price
      ?<PriceFilter/>
      :items?.map(item => <Checkbox text={item} className={style.checkbox}/>)}
    </div>
  )
}
