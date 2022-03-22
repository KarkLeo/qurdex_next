import React from 'react'
import s from './Contacts.module.css'
import Icon from '../Sprite/Icon'
import { SpriteIconId } from '../Sprite/sprite.config'

interface ContactsItemProps {
  label: string
  href: string
  iconId: SpriteIconId
}

const ContactsItem: React.FC<ContactsItemProps> = ({ label, href, iconId }) => {
  return (
    <a href={href} className={s.contacts__link}>
      <Icon className={s.contacts__icon} iconId={iconId} />
      <span className={s.contacts__text}>{label}</span>
    </a>
  )
}

export default ContactsItem
