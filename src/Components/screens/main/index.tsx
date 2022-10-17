import { Content } from "Components/Layout/Content/Content"
import { Header } from "Components/Layout/Header/Index"
import { Sidebar } from "Components/Layout/Sidebar/Sidebar"

export const Main = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
    </div>
  )
}
