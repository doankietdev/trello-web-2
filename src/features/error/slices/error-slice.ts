import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { RootState } from '~/redux/store'

export type Error = 'not_found'

const initialState: { value: Error | null } = {
  value: null
}

const errorSlice = createSlice({
  name: 'errorSlice',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<Error>) => {
      state.value = action.payload
    },
    resetError: (state) => {
      state.value = null
    }
  }
})

const selectError = (state: RootState) => state.error

export const errorSelector = {
  getValue: createSelector(selectError, (error) => error.value)
}
export const errorActions = errorSlice.actions
export const errorReducer = errorSlice.reducer
