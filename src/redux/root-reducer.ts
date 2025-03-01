import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { errorReducer } from '~/features/error/slices/error-slice'

export const rootReducer = persistReducer(
  {
    key: 'root',
    storage,
    whitelist: []
  },
  combineReducers({
    error: errorReducer
  })
)
