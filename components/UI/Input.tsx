import React, { ChangeEvent, FC } from 'react'

interface InputProps {
  id: string
  name: string
  type: string
  placeholder: string
  label: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

const Input: FC<InputProps> = (props) => {
  const {
    id,
    name,
    type,
    placeholder,
    label,
    value = '',
    onChange,
    ...otherProps
  } = props

  return (
    <div className="mb-4">
      <label htmlFor={id} className="inline-block text-gray-800 text-sm mb-1">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-teal-300 rounded outline-none transition duration-100 px-3 py-2"
        onChange={onChange}
        {...otherProps}
      />
    </div>
  )
}

export default Input
