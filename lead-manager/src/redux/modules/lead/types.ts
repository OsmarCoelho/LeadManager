export type LeadManagerState = {
  inviteLeads: Lead[]
  accepedLeads: Lead[]
}

export type Lead = {
  accepted: boolean
  category: string
  description: string
  email: string
  firstName: string
  id: number
  number: number
  phoneNumber: string
  price: number
  suburb: string
  surname: string
}
