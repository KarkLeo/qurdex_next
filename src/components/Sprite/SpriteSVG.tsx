import React from 'react'
import s from './Sprite.module.css'
import { spriteConfig } from 'src/components/Sprite/sprite.config'

const SpriteSVG = () => {
  return (
    <div
      className={s.svgSprite}
      dangerouslySetInnerHTML={{
        __html: spriteConfig,
      }}
    />
  )
}

export default SpriteSVG
