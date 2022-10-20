import {memo, PropsWithChildren, useState} from "react"

import { Header } from "./Header/Index"
import style from "./Layout.module.scss"
import { Sidebar } from "./Sidebar/Sidebar"

export const Layout = memo(({ children }: PropsWithChildren) => {
  const [sidebarOpen,setSidebarOpen] = useState(true)
  return (
    <div className={style.layout}>
      <div>
          <Header setSidebarOpen={()=> {setSidebarOpen((prev)=>!prev)}}/>
        <div className={style.body}>
            <Sidebar sidebarOpen={sidebarOpen}/>
          <div className={style.content}>{children}</div>
        </div>
      </div>
    </div>
  )
})
