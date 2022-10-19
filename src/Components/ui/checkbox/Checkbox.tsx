import style from './checkbox.module.scss'

import cn from 'classnames'

interface TProps{
    text: string,
    className?: string
}

export const Checkbox = ({text,className}:TProps) => {
  return (
    <div className={cn(style.wrapper,className)}>
      <label>
        <input className={style.input} type={"checkbox"} />
        <span className={style.checkbox}></span>
        {text}
      </label>
    </div>
  )
}
