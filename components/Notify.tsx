import React, { useEffect } from 'react'
import { useAppSelector } from '@hooks/useAppSelector'
import { useActions } from '@hooks/useActions'
import Loading from '@components/UI/Loading'
import Toast from '@components/UI/Toast'

const Notify = () => {
  const { notify } = useAppSelector((state) => state.notify)
  const { setNotify } = useActions()

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotify({})
    }, 3000)

    return () => clearTimeout(timer)
  })

  return (
    <>
      {notify.loading && <Loading />}
      {notify.error && (
        <Toast className="bg-red-500" onClick={() => setNotify({})}>
          {notify.error}
        </Toast>
      )}
      {notify.success && (
        <Toast className="bg-green-500" onClick={() => setNotify({})}>
          {notify.success}
        </Toast>
      )}
    </>
  )
}

export default Notify
