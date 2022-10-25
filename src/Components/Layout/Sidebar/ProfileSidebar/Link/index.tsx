import { PropsWithChildren } from "react"

import { ILink } from "./Link.interface"
import style from "./Link.module.scss"

export const Link = ({ children,title }: PropsWithChildren<ILink>) => {
  return (
    <div className={style.link}>
      <div className={style.link__current}>
        <div>{title}</div>
        {children}
      </div>
      <div className={style.link__burger}>
        <div></div>
      </div>
    </div>
  )
}
