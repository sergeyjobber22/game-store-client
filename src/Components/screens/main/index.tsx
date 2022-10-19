import { Header } from "@Layout/Header/Index"
import { Sidebar } from "@Layout/Sidebar/Sidebar"

import style from "./main.module.scss"

import { Slider } from "@ui/Slider/Index"
import { Games } from "./Games/Index"

export const Main = () => {
  return (
    <div className={style.wrapper}>
      <Header></Header>
      <div className={style.content}>
        <Sidebar />
        <div>
          <Slider />
          {[""].map(()=><Games/>)}
        </div>
      </div>
    </div>
  )
}
