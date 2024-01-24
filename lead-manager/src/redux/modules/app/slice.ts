import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppState } from "./types"

const initialState: AppState = {
  loading: false,
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true
    },
    stopLoading: (state) => {
      state.loading = false
    },
  },
})

export const appReducer = appSlice.reducer
export const appActions = appSlice.actions
