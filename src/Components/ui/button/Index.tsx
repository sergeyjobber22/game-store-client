import { PropsWithChildren } from "react"

import { IButton } from "./button.interface"
import style from "./button.module.scss"

export const Button = ({
  children,
  handleClick,
}: PropsWithChildren<IButton>) => {
  return (
    <button className={style.button} onClick={handleClick}>
      {children}
    </button>
  )
}
