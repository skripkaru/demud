import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../types'

export interface CartState {
  cart: IProduct[]
}

const initialState: CartState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const item = state.cart.find((item) => item._id === action.payload._id)
      if (item) {
        item.quantity++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state, action: PayloadAction<IProduct>) => {
      const item = state.cart.find((item) => item._id === action.payload._id)
      item && item.quantity++
    },
    decrementQuantity: (state, action: PayloadAction<IProduct>) => {
      const item = state.cart.find((item) => item._id === action.payload._id)
      if (item && item.quantity === 1) {
        item.quantity = 1
      } else {
        item && item.quantity--
      }
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload._id)
    },
  },
})

export default cartSlice.reducer
