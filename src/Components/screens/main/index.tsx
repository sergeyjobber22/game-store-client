import { Content } from "@Layout/Content/Content"
import { Header } from "@Layout/Header/Index"
import { Sidebar } from "@Layout/Sidebar/Sidebar"

import style from "./main.module.scss"

export const Main = () => {
  return (
    <div className={style.wrapper}>
      <Header></Header>
      <div className={style.content}>
        <Sidebar/>
        <Content/>
      </div>
    </div>
  )
}
