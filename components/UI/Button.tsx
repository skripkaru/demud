import React, { FC, MouseEventHandler, ReactNode } from 'react'

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  variant: 'fill' | 'outline'
  children: ReactNode | JSX.Element
  className?: string
  disabled?: boolean
}

const Button: FC<ButtonProps> = (props) => {
  const { onClick, variant, children, className, disabled } = props

  const classes = [className, '']

  switch (variant) {
    case 'fill':
      classes.push(
        'block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-3'
      )
      break
    case 'outline':
      classes.push(
        'font-medium text-gray-700 border rounded border-gray-100 hover:bg-gray-100'
      )
      break
  }

  if (disabled) {
    classes.push('opacity-75 bg-gray-100 pointer-events-none')
  }

  return (
    <button className={classes.join(' ')} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
