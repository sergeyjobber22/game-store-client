import style from "./Sidebar.module.scss"

import { Filter, modeEnum } from "./Filter/Index"

export const Sidebar = () => {
  return (
    <div className={style.wrapper}>
      <Filter title="Categories" items={["MMO","Indy","Strategy","Sports game", "Adventure","Casual game","Simulator","Action game"]}/>
      <Filter title="Platforms" items={["PC","PlayStation 5","PlayStation 4","XBox Serise", "Nintendo Switch"]}/>
      <Filter title="Price" mode={modeEnum.price}/>
    </div>
  )
}
