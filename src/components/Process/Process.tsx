import React, { useEffect, useRef } from 'react'
import s from './Process.module.css'
import ProcessItem from './ProcessItem/ProcessItem'
import { parallaxHorizontalBG } from '../../tools/parallax'
import { process } from 'data/home'
import classNames from 'classnames'

const Process = () => {
  const bg = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bg.current) return parallaxHorizontalBG(bg.current, 10, '-115vw')
  }, [bg])

  return (
    <section className={s.process} id='process'>
      <h2 className={classNames(s.process__title, 's-title')}>
        {process.title}
      </h2>
      <div className={s.process__wrapper}>
        {process.items.map((i) => (
          <ProcessItem key={i.title} {...i} />
        ))}
      </div>
      <div ref={bg} className={s.process__cloud} />
    </section>
  )
}

export default Process
