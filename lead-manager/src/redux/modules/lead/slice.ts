import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Lead, LeadManagerState } from "./types"

const initialState: LeadManagerState = {
  inviteLeads: [],
  accepedLeads: [],
}

const leadManagerSlice = createSlice({
  name: "leadManager",
  initialState,
  reducers: {
    receiveInviteLeads: (state, action: PayloadAction<Lead[]>) => {
      state.inviteLeads = action.payload
    },
    receiveAcceptedLeads: (state, action: PayloadAction<Lead[]>) => {
      state.accepedLeads = action.payload
    },
  },
})

export const leadManagerReducer = leadManagerSlice.reducer
export const leadManagerActions = leadManagerSlice.actions
