import React from 'react'
import {
  SpriteIconId,
  spriteViewBox,
} from 'src/components/Sprite/sprite.config'

interface IconProps {
  iconId: SpriteIconId
  className?: string
}

const Icon: React.FC<IconProps> = ({ iconId, className = '' }) => {
  return (
    <svg
      className={className}
      viewBox={spriteViewBox ? spriteViewBox[iconId] : '0 0 0 0'}
    >
      <use xlinkHref={'#' + iconId} />
    </svg>
  )
}

export default Icon
