import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IAuth } from '../types'

export interface AuthState {
  auth: IAuth
}

const initialState: AuthState = {
  auth: {} as IAuth,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<IAuth>) => {
      state.auth = action.payload
    },
  },
})

export default authSlice.reducer
