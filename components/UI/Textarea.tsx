import React, { FC } from 'react'

interface TextareaProps {
  id: string
  name: string
  placeholder: string
  label: string
}

const Textarea: FC<TextareaProps> = (props) => {
  const { id, name, placeholder, label } = props

  return (
    <div className="relative mb-4">
      <label htmlFor={id} className="inline-block text-gray-800 text-sm mb-1">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full bg-gray-50 text-gray-800 border focus:ring ring-teal-300 rounded outline-none transition duration-100 px-3 py-2"
      />
    </div>
  )
}

export default Textarea
