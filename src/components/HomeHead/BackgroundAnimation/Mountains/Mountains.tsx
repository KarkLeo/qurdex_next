import React, { useEffect, useRef } from 'react'
import s from './Mountains.module.css'
import MountainsAnimation from './MountainsAnimation'

const Mountains = () => {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (root.current) {
      return MountainsAnimation(root.current)
    }
  }, [root])

  return (
    <div className={s.mountains__wrap}>
      <div ref={root} className={s.mountains} />
    </div>
  )
}

export default Mountains
