import Image from 'next/image'
import style from './slider.module.scss'

import preview from 'assets/OriDE_XBox_1920x1080title.webp'

export const Slider = () => {
    return (<div className={style.slider}>
        <Image className={style.slider__media} objectFit={'cover'} src={preview} height={500}/>
    </div>) 
}