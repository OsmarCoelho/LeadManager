import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Lead, LeadManagerState } from "./types"

const initialState: LeadManagerState = {
  leadInvites: [],
  accepedLeads: [],
}

const leadManagerSlice = createSlice({
  name: "leadManager",
  initialState,
  reducers: {
    receiveLeadInvites: (state, action: PayloadAction<Lead[]>) => {
      state.leadInvites = action.payload
    },
    receiveAcceptedLeads: (state, action: PayloadAction<Lead[]>) => {
      state.accepedLeads = action.payload
    },
  },
})

export const leadManagerReducer = leadManagerSlice.reducer
export const leadManagerActions = leadManagerSlice.actions
