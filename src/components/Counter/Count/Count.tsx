import React from 'react'
import s from './Count.module.css'
import classNames from 'classnames'

export const COUNT_VALUE_CLASS = 'count__value'

interface CountProps {
  count: number
  text: string
  percent: boolean
}

const Count: React.FC<CountProps> = ({ count, text, percent }) => {
  return (
    <div className={s.count}>
      <span className={s.count__border} />
      <div className={s.count__content}>
        <div
          className={classNames(s.count__number, {
            [s.count__number_percent]: percent,
          })}
        >
          <span className={COUNT_VALUE_CLASS} data-count={count}>
            0
          </span>
          {percent ? '%' : null}
        </div>
        <div className={s.count__text}>{text}</div>
      </div>
    </div>
  )
}

export default Count
