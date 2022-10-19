import {Header} from "@Layout/Header/Index"
import {Sidebar} from "@Layout/Sidebar/Sidebar"

import style from "./main.module.scss"

import {Slider} from "@ui/Slider/Index"
import {Game} from "@screens/main/Game/Index";

import Tetris from "assets/Tetris.png"
import {games} from "@screens/main/games";

export const Main = () => {
    return (
        <div className={style.wrapper}>
            <Header></Header>
            <div className={style.content}>
                <Sidebar/>
                <div>
                    <Slider/>
                    <div className={style.games}>
                        {games.map(() => <Game media={Tetris}
                                               platform={"Nintendo switch"}
                                               price={1400}
                                               title={"Tetris"}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
