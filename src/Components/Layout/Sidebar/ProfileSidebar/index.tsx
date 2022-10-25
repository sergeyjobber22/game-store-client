import { Link } from "./Link"
import style from "./ProfileSidebar.module.scss"

import HistoryIcon from "@icons/history-svgrepo-com.svg"
import SettingsIcon from "@icons/settings.svg"

export const ProfileSidebar = () => {
  return (
    <div className={style.ProfileSidebar}>
      <Link title="settings">
        <SettingsIcon />
      </Link>
      <Link title="history">
        <HistoryIcon />
      </Link>
    </div>
  )
}
