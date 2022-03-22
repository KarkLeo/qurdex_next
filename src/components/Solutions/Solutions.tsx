import React from 'react'
import Icon from '../Sprite/Icon'
import s from './Solutions.module.css'
import { solutions } from 'data/home'
import classNames from 'classnames'

const Solutions = () => {
  return (
    <div className={s.solution}>
      {solutions.map((i) => (
        <div key={i.name} className={s.solution__group}>
          <h3 className={s.solution__title}>{i.name}</h3>
          <div className={s.solution__list}>
            {i.items.map((i) => (
              <Icon
                key={i}
                className={classNames(s.solution__icon, {
                  [s['solution__icon_' + i]]: s['solution__icon_' + i],
                })}
                iconId={i}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Solutions
