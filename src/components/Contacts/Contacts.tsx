import React from 'react'
import s from './Contacts.module.css'
import ContactsItem from './ContactsItem'
import { contacts } from 'data/meta'

const Contacts = () => {
  return (
    <div className={s.contacts}>
      {contacts.map((i) => (
        <ContactsItem key={i.href} {...i} />
      ))}
    </div>
  )
}

export default Contacts
