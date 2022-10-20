import { Filter, modeEnum } from "./Filter/Index"
import { ISidebar } from "./Sidebar.interface"
import style from "./Sidebar.module.scss"
import {MouseEvent} from "react"

export const Sidebar = ({sidebarOpen,setSidebarOpen}: ISidebar) => {
    const InnerClick = (e:MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }
    if (!sidebarOpen) {
        return <></>
    }
    return (
        <div className={style.wrapper} onClick={setSidebarOpen}>
            <div className={style.sidebar} onClick={InnerClick}>
                <Filter
                    title="Categories"
                    items={[
                        "MMO",
                        "Indy",
                        "Strategy",
                        "Sports game",
                        "Adventure",
                        "Casual game",
                        "Simulator",
                        "Action game",
                    ]}
                />
                <Filter
                    title="Platforms"
                    items={[
                        "PC",
                        "PlayStation 5",
                        "PlayStation 4",
                        "XBox Serise",
                        "Nintendo Switch",
                    ]}
                />
                <Filter title="Price" mode={modeEnum.price} />
            </div>
        </div>
    )
}
