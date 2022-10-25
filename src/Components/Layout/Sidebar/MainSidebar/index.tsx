import { Filter, modeEnum } from "./Filter/Index"
import style from "./MainSidebar.module.scss"

export const MainSidebar = () => {
  return (
    <div className={style.sidebar}>
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
