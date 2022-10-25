import { UploadMedia } from '@ui/UploadMedia'
import style from './profile.module.scss'

export const Profile = () => {
    return (<div className={style.profile}>
        <UploadMedia/>
    </div>)
}