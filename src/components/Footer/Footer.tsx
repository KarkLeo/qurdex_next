import React from 'react'
import s from './Footer.module.css'
import ScrollUp from '../ScrollUp/ScrollUp'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <p className={s.footer__copyright}>
        Copyright {new Date().getFullYear()} © Quardex. All rights reserved
      </p>
      <ScrollUp />
    </footer>
  )
}

export default Footer
