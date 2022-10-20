import classNames from "classnames"

import { Filter, modeEnum } from "./Filter/Index"
import { ISidebar } from "./Sidebar.interface"
import style from "./Sidebar.module.scss"

export const Sidebar = ({sidebarOpen}: ISidebar) => {
  if (!sidebarOpen) {
    return <></>
  }
  return (
    <div className={classNames(style.wrapper, sidebarOpen && style.visible)}>
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
  )
}
