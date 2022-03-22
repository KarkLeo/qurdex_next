import React, { useCallback, useState } from 'react'
import s from './Header.module.css'
import MainMenu from './MainMenu/MainMenu'
import MenuButton from './MenuButton/MenuButton'
import Logotype from './Logotype/Logotype'
import { lockScroll, unlockScroll } from 'src/tools/scroll-lock'
import { Desktop } from '../Responsive/Responsive'
import Contacts from '../Contacts/Contacts'

const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false)

  // ===== Handlers =====
  const toggleMenuHandler = useCallback(() => {
    setOpenMenu((pre) => {
      if (pre) unlockScroll()
      else lockScroll()

      return !pre
    })
  }, [setOpenMenu])

  const closeMenuHandler = useCallback(() => {
    setOpenMenu(false)
  }, [setOpenMenu])

  return (
    <header className={s.header}>
      <Logotype />
      <Desktop>
        <Contacts />
      </Desktop>
      <MainMenu isOpenMenu={isOpenMenu} closeMenu={closeMenuHandler} />
      <MenuButton isOpenMenu={isOpenMenu} toggleMenu={toggleMenuHandler} />
    </header>
  )
}

export default Header
