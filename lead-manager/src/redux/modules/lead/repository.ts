import axios from "axios"
import { URL_BASE } from "../../../constants"

export async function getAllLeads(): Promise<any[]> {
  try {
    const result = await axios.get(`${URL_BASE}GetAll`)
    console.log(result.data.value)
    return result.data.value
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function getInvites(): Promise<any[]> {
  try {
    const result = await axios.get(`${URL_BASE}GetAll`)
    console.log(result.data.value)
    return result.data.value
  } catch (error) {
    console.log(error)
    return []
  }
}
