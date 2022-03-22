import React, { useEffect, useRef } from 'react'
import CloudAnimation from './CloudAnimation'
import s from './Clouds.module.css'

const Cloud = () => {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (root.current) {
      return CloudAnimation(root.current)
    }
  }, [root])

  return <div ref={root} className={s.cloud__wrap} />
}

export default Cloud
