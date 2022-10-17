import style from "./layout.module.scss"
import { PropsWithChildren } from "react"

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>{children}</div>
    </div>
  )
}
