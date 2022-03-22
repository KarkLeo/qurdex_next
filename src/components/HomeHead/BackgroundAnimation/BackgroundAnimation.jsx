import React from 'react'
import s from './BackgroundAnimation.module.css'
import Mountains from './Mountains/Mountains'
import Clouds from './Clouds/Clouds'

const BackgroundAnimation = () => {
  return (
    <div className={s.backgroundAnimation}>
      <Mountains />
      <Clouds />
    </div>
  )
}

export default BackgroundAnimation
