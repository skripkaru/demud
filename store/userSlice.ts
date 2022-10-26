import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface User {
  user: {
    name?: string
    avatar?: string
    password?: string
    cf_password?: string
  }
}

export interface UserState {
  user: User | any
}

const initialState: UserState = {
  user: {
    name: '',
    avatar: '',
    password: '',
    cf_password: '',
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
  },
})

export default userSlice.reducer
