import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Notify} from "../types";

export interface NotifyState {
  notify: Notify
}

const initialState: NotifyState = {
  notify: {},
}

export const notifySlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    setNotify: (state, action: PayloadAction<Notify>) => {
      state.notify = action.payload
    },
  },
})

export default notifySlice.reducer
