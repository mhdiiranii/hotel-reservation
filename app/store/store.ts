
import { configureStore } from '@reduxjs/toolkit'
import { searchSlice } from './feature/searchSlice'


export const store = configureStore({
  reducer: {
    search:searchSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store