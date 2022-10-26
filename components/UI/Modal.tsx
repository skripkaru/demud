import React, { FC, ReactNode } from 'react'
import { useAppSelector } from '@hooks/useAppSelector'

interface ModalProps {
  children: ReactNode | JSX.Element
}

const Modal: FC<ModalProps> = (props) => {
  const { children } = props
  const { isOpen } = useAppSelector((state) => state.modal)

  const handleClickOutSide = (e: any) => {
    console.log('e.target', e.target)
    e.stopPropagation()
  }

  return (
    <>
      {isOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div
            className="fixed inset-0 z-10 overflow-y-auto"
            onClick={handleClickOutSide}
          >
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
