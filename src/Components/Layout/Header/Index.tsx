import style from "./Header.module.scss"
import Link from "next/link"
import Cart from 'assets/icons/cart.svg'

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
        <Cart/>
      </div>
    </div>
  )
}
