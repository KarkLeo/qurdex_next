import React from 'react'
import s from './ProcessItem.module.css'
import Icon from '../../Sprite/Icon'
import { ProcessItem } from 'data/home'

const ProcessItem: React.FC<ProcessItem> = ({ title, imgId }) => {
  return (
    <div className={s.processItem}>
      <div className={s.processItem__iconWrapper}>
        <div>
          <Icon className={s.processItem__icon} iconId={imgId} />
        </div>
      </div>

      <div className={s.processItem__description}>
        <h3 className={s.processItem__title}>{title}</h3>
      </div>
    </div>
  )
}
export default ProcessItem
