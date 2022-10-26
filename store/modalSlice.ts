import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../types'

export interface ModalState {
  data?: IProduct | null
  isOpen: boolean
}

const initialState: ModalState = {
  data: null,
  isOpen: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true
    },
    closeModal: (state) => {
      state.isOpen = false
    },
    setModal: (state, action: PayloadAction<IProduct>) => {
      state.isOpen = true
      state.data = action.payload
    },
  },
})

export default modalSlice.reducer
