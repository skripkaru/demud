import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Auth} from "../types";

export interface AuthState {
  auth: Auth
}

const initialState: AuthState = {
  auth: {}
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<Auth>) => {
      state.auth = action.payload
    },
  },
})

export default authSlice.reducer