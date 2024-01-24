import { Lead } from "../redux/modules/lead/types"
import moment from "moment"
import "./Styles.css"
import { USDollar } from "../constants"

type LeadHeaderProps = {
  firstName: string
  createDate: string
  suburb: string
  number: number
  category: string
  jobId: string
  price: number
  accepted: boolean
}

export default function LeadHeader({
  category,
  createDate,
  firstName,
  jobId,
  number,
  suburb,
  price,
  accepted,
}: LeadHeaderProps) {
  const firstLetter = firstName[0].toUpperCase()
  const date = moment(createDate)

  return (
    <div className="headerLeadContainer">
      <div className="headerInfo">
        <div className="headerImage">{`${firstLetter}`}</div>
        <div className="nameContainer">
          <div>{`${firstName}`}</div>
          <div>{`${date.format("MMMM")} ${date.day()} @ ${date.format(
            "LT",
          )}`}</div>
        </div>
      </div>
      <div className="leadInfo">
        <div className="infoTag">{`${suburb} ${number}`}</div>
        <div className="infoTag">{`${category}`}</div>
        <div className="infoTag">{`${jobId}`}</div>
        {accepted && <div>{`${USDollar.format(price)} Lead Invitation`}</div>}
      </div>
    </div>
  )
}
