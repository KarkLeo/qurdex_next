import React, { useEffect, useRef } from 'react'
import s from './Counter.module.css'
import Count from './Count/Count'
import classNames from 'classnames'
import { counter } from 'data/home'
import { parallaxHorizontalBG } from 'src/tools/parallax'
import countAnim from './counter-meth'

const Counter = () => {
  const bg1 = useRef<HTMLDivElement>(null)
  const bg2 = useRef<HTMLDivElement>(null)
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bg1.current) return parallaxHorizontalBG(bg1.current, 30)
  }, [bg1])

  useEffect(() => {
    if (bg2.current) return parallaxHorizontalBG(bg2.current, 20)
  }, [bg2])

  useEffect(() => {
    if (root.current) return countAnim(root.current)
  }, [root])

  return (
    <section ref={root} className={s.counter}>
      <div
        ref={bg1}
        className={classNames(s.counter__background, s.counter__background_1)}
      />
      <div
        ref={bg2}
        className={classNames(s.counter__background, s.counter__background_2)}
      />
      <div className={s.counter__wrapper}>
        {counter.map((i) => (
          <Count key={i.text} {...i} />
        ))}
      </div>
    </section>
  )
}

export default Counter
