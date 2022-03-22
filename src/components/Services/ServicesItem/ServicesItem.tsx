import React from 'react'
import s from './ServicesItem.module.css'
import Icon from '../../Sprite/Icon'
import { ServicesItem } from 'data/home'

const ServicesItem: React.FC<ServicesItem> = (props) => {
  return (
    <div className={s.service}>
      <Icon className={s.service__icon} iconId={props.imgId} />
      <h3 className={s.service__title}>{props.title}</h3>
      <p className={s.service__description}>{props.text}</p>
    </div>
  )
}

export default ServicesItem
