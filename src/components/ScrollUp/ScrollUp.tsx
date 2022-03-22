import React, { useCallback, useEffect, useState } from 'react'
import s from './ScrollUp.module.css'

const ScrollUp = () => {
  const [isVisibleBtn, setVisibleBtn] = useState(false)

  useEffect(() => {
    const visibleHandle = () =>
      setVisibleBtn(window.pageYOffset > window.innerHeight)
    window.addEventListener('scroll', visibleHandle)
    return () => window.removeEventListener('scroll', visibleHandle)
  }, [])

  const scroll = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return isVisibleBtn ? <span className={s.scrollUp} onClick={scroll} /> : null
}

export default ScrollUp
