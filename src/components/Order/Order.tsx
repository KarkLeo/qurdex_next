import React, { useCallback, useEffect, useRef, useState } from 'react'
import s from './Order.module.css'
import FormField from './FormField'
import { order } from 'data/home'
import { parallaxBG } from 'src/tools/parallax'
import classNames from 'classnames'

const Order = () => {
  const [values, setValues] = useState<Record<string, string>>({})

  const bg = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bg.current) return parallaxBG(bg.current, 25)
  })

  const onChangeHandler = useCallback(
    (e) => {
      setValues((pre) => ({ ...pre, [e.target.name]: e.target.value }))
    },
    [setValues]
  )

  return (
    <section ref={bg} className={s.order} id='site-order'>
      <h4 className={classNames(s.order__title, 's-title')}>{order.title}</h4>
      <p className={s.order__subtitle}>{order.subtitle}</p>

      <div className={s.order__form}>
        {order.fields.map((i) => (
          <FormField
            key={i.name}
            {...i}
            value={values[i.name] || ''}
            onChange={onChangeHandler}
          />
        ))}
        <div className={s.form__buttonWrapper}>
          <button className='button'>{order.button}</button>
        </div>
      </div>
    </section>
  )
}

export default Order
