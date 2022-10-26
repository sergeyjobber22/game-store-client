import style from "./UploadMedia.module.scss"

export const UploadMedia = () => {
  return (
    <div className={style.uploadMedia}>
      <label htmlFor="upload"/>
      <input type="file" id="upload" />
    </div>
  )
}
