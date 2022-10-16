import React, { FC, ReactNode } from 'react'

interface ToastProps {
  onClick: () => void
  children: ReactNode | JSX.Element
  className: string
}

const Toast: FC<ToastProps> = (props) => {
  const { onClick, children, className } = props

  return (
    <div
      className={`fixed bottom-4 right-4 z-10 flex items-center p-4 w-full max-w-xs text-white rounded shadow ${className}`}
      role="alert"
    >
      <div className="ml-3 text-sm font-normal">{children}</div>
      <button
        type="button"
        className="ml-auto text-white rounded"
        aria-label="Close"
        onClick={onClick}
      >
        <span className="sr-only">Close</span>
        <svg className="icon w-4 h-4">
          <use xlinkHref="#close"></use>
        </svg>
      </button>
    </div>
  )
}

export default Toast
