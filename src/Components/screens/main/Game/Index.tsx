import style from './Game.module.scss'
import Image from "next/image";
import {IGame} from "@screens/main/Game/Game.interface";
import {Button} from "@ui/button/Index";

export const Game = ({price, platform, media, title}: IGame) => {
    const handleClick = () => {

    }
    return (<div className={style.game}>
        <div className={style.game__mediaWrapper}>
            <Image src={media}/>
        </div>
        <h5 className={style.game__title}>{title}</h5>
        <h6 className={style.game__platform}>{platform}</h6>
        <div className={style.game__footer}>
            <div className={style.game__price}>{price}</div>
            <Button handleClick={handleClick}>Buy</Button>
        </div>
    </div>)
}
