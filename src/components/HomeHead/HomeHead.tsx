import React from 'react'
import s from './HomeHead.module.css'
import BackgroundAnimation from './BackgroundAnimation/BackgroundAnimation'
import { head } from 'data/home'
import { Mobile } from 'src/components/Responsive/Responsive'
import Contacts from '../Contacts/Contacts'

const HomeHead = () => {
  return (
    <div className={s.homeHead} id='header'>
      <BackgroundAnimation />

      <div className={s.homeHead__content}>
        <h1 className={s.homeHead__title}>{head.title}</h1>
        <p className={s.homeHead__text}>{head.text}</p>
        <Mobile>
          <Contacts />
        </Mobile>
      </div>
    </div>
  )
}

export default HomeHead
