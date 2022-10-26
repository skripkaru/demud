import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { INotify } from '../types'

export interface NotifyState {
  notify: INotify
}

const initialState: NotifyState = {
  notify: {},
}

export const notifySlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    setNotify: (state, action: PayloadAction<INotify>) => {
      state.notify = action.payload
    },
  },
})

export default notifySlice.reducer
