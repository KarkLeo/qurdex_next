import React from 'react'
import s from './MenuButton.module.css'
import classNames from 'classnames'

interface MenuButtonProps {
  isOpenMenu: boolean
  toggleMenu: () => void
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpenMenu, toggleMenu }) => {
  return (
    <button
      className={classNames(s.menuButton, {
        [s.menuButton_active]: isOpenMenu,
      })}
      onClick={toggleMenu}
    />
  )
}

export default MenuButton
