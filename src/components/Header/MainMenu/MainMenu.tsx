import React from 'react'
import s from './MainMenu.module.css'
import Link from 'next/link'
import menuData from 'data/menu'

interface MainMenuProps {
  isOpenMenu: boolean
  closeMenu: () => void
}

const MainMenu: React.FC<MainMenuProps> = ({ isOpenMenu, closeMenu }) => {
  return isOpenMenu ? (
    <div className={s.mainMenu}>
      <div className={s.mainMenu__wrapper}>
        <ul className={s.mainMenu__list}>
          {menuData.map((i) => (
            <li key={i.href} className={s.mainMenu__item}>
              <Link href={i.href}>
                <a className={s.mainMenu__link}>{i.name}</a>
              </Link>
              {i.submenu && (
                <ul className={s.mainSubMenu}>
                  {i.submenu.map((i) => (
                    <li key={i.href} className={s.mainSubMenu__item}>
                      <Link href={i.href}>
                        <a className={s.mainSubMenu__link} onClick={closeMenu}>
                          {i.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null
}

export default MainMenu
