import React, { useEffect, useRef } from 'react'
import s from './Services.module.css'
import ServicesItem from './ServicesItem/ServicesItem'
import { services } from 'data/home'
import { parallaxHorizontalBG } from 'src/tools/parallax'
import classNames from 'classnames'

const Services = () => {
  const bg = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bg.current)
      return parallaxHorizontalBG(
        bg.current,
        30,
        '(100vw - var(--view-average) * 32)'
      )
  }, [bg])

  return (
    <section className={s.services} id='services'>
      <h2 className={classNames(s.services__title, 's-title')}>
        {services.title}
      </h2>
      <div className={s.services__wrapper}>
        {services.items.map((i) => (
          <ServicesItem key={i.title} {...i} />
        ))}
      </div>
      <div ref={bg} className={s.services__cloud} />
    </section>
  )
}

export default Services
