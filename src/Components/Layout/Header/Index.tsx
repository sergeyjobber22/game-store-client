import Bookmark from "assets/icons/bookmark.svg"
import Cart from "assets/icons/cart.svg"
import avatar from "assets/icons/man.png"
import Image from "next/image"
import Link from "next/link"

import style from "./Header.module.scss"
import {IHeader} from "@Layout/Header/sidebar.interface";

export const Header = ({setSidebarOpen}:IHeader) => {
  return (
    <div className={style.wrapper}>
      <div className={style.links}>
        <div className={style.burger} onClick={setSidebarOpen}>
          <span></span>
        </div>
        <Link href={"/"}>
          <a className={style.link}>Home</a>
        </Link>
        <Link href={"/"}>
          <a className={style.link}>Streams</a>
        </Link>
        <Link href={"/"}>
          <a className={style.link}>Game store</a>
        </Link>
        <Link href={"/"}>
          <a className={style.link}>News</a>
        </Link>
      </div>
      <div className={style.icons}>
        <Cart className={style.icon} />
        <Bookmark className={style.icon} />
        <div>
          <Link href={'/admin'}>
          <div className={style.avatar}>
            <Image src={avatar} />
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
