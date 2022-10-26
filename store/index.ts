import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authSlice'
import { notifySlice } from './notifySlice'
import { cartSlice } from './cartSlice'
import { userSlice } from './userSlice'

import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { modalSlice } from './modalSlice'

const cartPersistConfig = {
  key: 'cart',
  storage,
}

const authPersistConfig = {
  key: 'auth',
  storage: storage,
}

const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartSlice.reducer
)
const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
)

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    notify: notifySlice.reducer,
    cart: persistedCartReducer,
    modal: modalSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
