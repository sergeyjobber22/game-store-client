import { useRouter } from "next/router"
import { MouseEvent } from "react"

import { MainSidebar } from "./MainSidebar"
import { ProfileSidebar } from "./ProfileSidebar"
import { ISidebar } from "./Sidebar.interface"
import style from "./Sidebar.module.scss"

export const Sidebar = ({ sidebarOpen, setSidebarOpen }: ISidebar) => {
  const {asPath} = useRouter()
  const InnerClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }
  if (!sidebarOpen) {
    return <></>
  }
  return (
    <div className={style.wrapper} onClick={setSidebarOpen}>
      <div className={style.sidebar} onClick={InnerClick}>
        {!(asPath==="/admin")?<MainSidebar />:<ProfileSidebar/>}
      </div>
    </div>
  )
}
