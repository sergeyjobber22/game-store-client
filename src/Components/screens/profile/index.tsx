import style from "./profile.module.scss"

import { UploadMedia } from "@ui/UploadMedia"

export const Profile = () => {
  return (
    <div className={style.profile}>
      <div>
        <div className={style.profile__info}>
          <h3>User information</h3>
          <p>
            Here you can edit public information about yourself. The changes
            will be displayed for other users within 5 minuts
          </p>
        </div>
        <div className={style.profile__fileds}>
          <h4>Email address</h4>
          <input type="text" placeholder="" />
        </div>
      </div>
      <div>
        <UploadMedia />
      </div>
    </div>
  )
}
