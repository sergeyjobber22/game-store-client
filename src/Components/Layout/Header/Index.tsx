import style from "./Header.module.scss"
import Bookmark from "assets/icons/bookmark.svg"
import Cart from "assets/icons/cart.svg"
import avatar from "assets/icons/man.png"
import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.links}>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <Link href={"/"}>
          <a>Streams</a>
        </Link>
        <Link href={"/"}>
          <a>Game store</a>
        </Link>
        <Link href={"/"}>
          <a>News</a>
        </Link>
      </div>
      <div className={style.icons}>
        <Cart className={style.cart} />
        <Bookmark className={style.cart} />
        <div>
          <Image width={75} height={75} src={avatar} />
        </div>
      </div>
    </div>
  )
}
