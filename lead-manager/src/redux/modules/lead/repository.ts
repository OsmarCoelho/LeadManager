import axios from "axios"
import { URL_BASE } from "../../../constants"
import { Lead } from "./types"

export async function getAllLeads(): Promise<Lead[]> {
  try {
    const result = await axios.get(`${URL_BASE}GetAll`)
    return result.data.value
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function getLeadInvites(): Promise<Lead[]> {
  try {
    const result = await axios.get(`${URL_BASE}GetAllInvites`)
    return result.data.value
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function getAccepedLeads(): Promise<Lead[]> {
  try {
    const result = await axios.get(`${URL_BASE}GetAllAccepted`)
    return result.data.value
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function acceptLead(id: number) {
  try {
    await axios.patch(`${URL_BASE}AcceptLead?Id=${id}`)
  } catch (error) {
    console.log(error)
  }
}

export async function declineLead(id: number) {
  try {
    await axios.patch(`${URL_BASE}DeclineLead?Id=${id}`)
  } catch (error) {
    console.log(error)
  }
}
