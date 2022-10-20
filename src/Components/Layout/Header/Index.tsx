import Bookmark from "assets/icons/bookmark.svg"
import Cart from "assets/icons/cart.svg"
import avatar from "assets/icons/man.png"
import Image from "next/image"
import Link from "next/link"

import style from "./Header.module.scss"

export const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.links}>
        <div className={style.burger}>
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
          <div className={style.avatar}>
            <Image src={avatar} />
          </div>
        </div>
      </div>
    </div>
  )
}
