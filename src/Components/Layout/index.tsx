import {memo, PropsWithChildren, useState} from "react"

import { Header } from "./Header/Index"
import style from "./Layout.module.scss"
import { Sidebar } from "./Sidebar"

export const Layout = memo(({ children }: PropsWithChildren) => {
    const [sidebarOpen,setSidebarOpen] = useState(true)
    const SidebarChange = () => {
        setSidebarOpen((prev)=>!prev)
    }
    return (
        <div className={style.layout}>
            <div>
                <Header setSidebarOpen={SidebarChange}/>
                <div className={style.body}>
                    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={SidebarChange}/>
                    <div className={style.content}>{children}</div>
                </div>
            </div>
        </div>
    )
})
