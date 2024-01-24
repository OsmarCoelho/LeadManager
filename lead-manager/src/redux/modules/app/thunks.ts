import { AppThunk } from "../../store"
import { getAccepedLeads, getLeadInvites } from "../lead/repository"
import { leadManagerActions } from "../lead/slice"
import { appActions } from "./slice"

export function initApp(): AppThunk {
  return async (dispatch) => {
    dispatch(appActions.startLoading())

    const invitedLeads = await getLeadInvites()
    const acceptedLeads = await getAccepedLeads()

    dispatch(leadManagerActions.receiveLeadInvites(invitedLeads))
    dispatch(leadManagerActions.receiveAcceptedLeads(acceptedLeads))

    dispatch(appActions.stopLoading())
  }
}
