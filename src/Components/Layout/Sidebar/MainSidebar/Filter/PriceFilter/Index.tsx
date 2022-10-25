import { Button } from "@ui/button/Index"
import style from "./PriceFilter.module.scss"

export const PriceFilter = () => {
  const handleClick = () => {
    alert("Привет")
  }
  return (
    <div className={style.wrapper}>
      <div className={style.inputs}>
        <input type="text" className={style.input} value="$"/>
        <span>-</span>
        <input type="text" className={style.input} value="$"/>
      </div>
      <Button handleClick={handleClick}>Applay filters</Button>
    </div>
  )
}
