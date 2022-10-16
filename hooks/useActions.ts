import { bindActionCreators } from '@reduxjs/toolkit'
import { useAppDispatch } from './useAppDispatch'
import {authSlice} from "../store/authSlice";
import {notifySlice} from '../store/notifySlice'
import {cartSlice} from "../store/cartSlice";

const actions = {
  ...authSlice.actions,
  ...notifySlice.actions,
  ...cartSlice.actions,
}

export const useActions = () => {
  const dispatch = useAppDispatch()

  return bindActionCreators(actions, dispatch)
}
