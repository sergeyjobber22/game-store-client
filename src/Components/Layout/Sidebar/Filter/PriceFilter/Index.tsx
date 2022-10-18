import style from "./PriceFilter.module.scss"

export const PriceFilter = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.inputs}>
        <input type="text" className={style.input} />
        <span>-</span>
        <input type="text" className={style.input} />
      </div>
      <button>Applay filters</button>
    </div>
  )
}
