import { bindActionCreators } from '@reduxjs/toolkit'
import { useAppDispatch } from './useAppDispatch'
import { authSlice } from '../store/authSlice'
import { notifySlice } from '../store/notifySlice'
import { cartSlice } from '../store/cartSlice'
import { modalSlice } from '../store/modalSlice'
import { userSlice } from '../store/userSlice'

const actions = {
  ...authSlice.actions,
  ...notifySlice.actions,
  ...cartSlice.actions,
  ...modalSlice.actions,
  ...userSlice.actions,
}

export const useActions = () => {
  const dispatch = useAppDispatch()

  return bindActionCreators(actions, dispatch)
}
