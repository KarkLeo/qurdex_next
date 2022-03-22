import React from 'react'
import s from './Logotype.module.css'
import Icon from '../../Sprite/Icon'

const Logotype = () => {
  return (
    <div className={s.logotype}>
      <Icon iconId={'logo'} className={s.logotype__img} />
    </div>
  )
}

export default Logotype
