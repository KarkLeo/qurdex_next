import React, { useEffect, useRef } from 'react'
import s from './Portfolio.module.css'
import { portfolio } from 'data/home'
import { parallaxBG } from '../../tools/parallax'
import classNames from 'classnames'

const Portfolio = () => {
  const bg = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bg.current) return parallaxBG(bg.current, 25)
  }, [bg])

  return (
    <section ref={bg} className={s.portfolio} id='portfolio'>
      <div className={s.portfolio__wrapper}>
        <h2 className={classNames(s.portfolio__title, 's-title')}>
          {portfolio.title}
        </h2>
        <p className={s.portfolio__subtitle}>{portfolio.subtitle}</p>
        <button className='button'>{portfolio.button}</button>
      </div>
    </section>
  )
}

export default Portfolio
