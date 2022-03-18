import { configureStore } from '@reduxjs/toolkit'
import bandsReducer from './bands/bandsSlice'

export const store = configureStore({
  reducer: {
    bands: bandsReducer,
  },
})
