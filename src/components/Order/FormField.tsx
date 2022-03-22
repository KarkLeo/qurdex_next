import React, { memo } from 'react'
import s from './Order.module.css'
import { OrderField } from 'data/home'
import classNames from 'classnames'

interface FormFieldProps extends OrderField {
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  type,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <label
      className={classNames(s.form__label, {
        [s.form__label_textarea]: type === 'textarea',
      })}
    >
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={onChange}
          className={classNames(s.form__field, s.form__field_textarea)}
          name={name}
        />
      ) : (
        <input
          value={value}
          onChange={onChange}
          type={type}
          className={s.form__field}
          name={name}
        />
      )}
      <span
        className={classNames(s.form__placeholder, {
          [s.form__placeholder_changed]: value,
        })}
      >
        {placeholder}
      </span>
    </label>
  )
}

export default memo(FormField)
