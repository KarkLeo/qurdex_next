import { SpriteIconId } from 'src/components/Sprite/sprite.config'

export interface ContactItems {
  label: string
  href: string
  iconId: SpriteIconId
}

export const contacts: ContactItems[] = [
  {
    label: 'd.quardex',
    href: ' skype:d.quardex?call',
    iconId: 'skype',
  },
  {
    label: 'sales@quardex.com',
    href: 'mailto:sales@quardex.com',
    iconId: 'email',
  },
]
