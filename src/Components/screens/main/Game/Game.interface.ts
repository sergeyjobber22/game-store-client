import {StaticImageData} from "next/image";

export interface IGame{
    title: string
    media: string|StaticImageData
    price: number
    platform: string
}
