import { PropsWithChildren } from "react"

import style from "./bgLayer.module.scss"

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>{children}</div>
    </div>
  )
}
