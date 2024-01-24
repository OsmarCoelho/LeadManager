import { AppThunk } from "../../store"
import { appActions } from "../app/slice"
import {
  acceptLead,
  declineLead,
  getAccepedLeads,
  getLeadInvites,
} from "./repository"
import { leadManagerActions } from "./slice"

export function receiveAcceptedLeads(): AppThunk {
  return async (dispatch) => {
    const leads = await getAccepedLeads()

    dispatch(leadManagerActions.receiveAcceptedLeads(leads))
  }
}

export function receiveLeadInvites(): AppThunk {
  return async (dispatch) => {
    const leads = await getLeadInvites()

    dispatch(leadManagerActions.receiveLeadInvites(leads))
  }
}

export function acceptInviteLead(id: number): AppThunk {
  return async (dispatch) => {
    dispatch(appActions.startLoading())

    await acceptLead(id)

    const invitedLeads = await getLeadInvites()
    const acceptedLeads = await getAccepedLeads()

    dispatch(leadManagerActions.receiveLeadInvites(invitedLeads))
    dispatch(leadManagerActions.receiveAcceptedLeads(acceptedLeads))

    dispatch(appActions.stopLoading())
  }
}

export function declineInviteLead(id: number): AppThunk {
  return async (dispatch) => {
    dispatch(appActions.startLoading())

    await declineLead(id)

    const invitedLeads = await getLeadInvites()
    const acceptedLeads = await getAccepedLeads()

    dispatch(leadManagerActions.receiveLeadInvites(invitedLeads))
    dispatch(leadManagerActions.receiveAcceptedLeads(acceptedLeads))

    dispatch(appActions.stopLoading())
  }
}
