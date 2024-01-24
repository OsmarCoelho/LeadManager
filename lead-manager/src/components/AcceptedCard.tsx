import { Lead } from "../redux/modules/lead/types"
import { useAppDispatch } from "../redux/store"
import LeadHeader from "./LeadHeader"
import "./Styles.css"

type AcceptedCardProps = { lead: Lead }

export default function AcceptedCard({ lead }: AcceptedCardProps) {
  const dispatch = useAppDispatch()

  const {
    accepted,
    category,
    description,
    firstName,
    id,
    number,
    price,
    suburb,
    createdDate,
    email,
    phoneNumber,
    surname,
  } = lead

  const jobId = `${id}`.padStart(7, "0")

  return (
    <div className="leadCard">
      <LeadHeader
        firstName={`${firstName} ${surname}`}
        createDate={createdDate}
        suburb={suburb}
        number={number}
        category={category}
        jobId={jobId}
        price={price}
        accepted={accepted}
      />
      <div className="description">
        <div className="contactContainer">
          <div className="contactInfo">{phoneNumber}</div>
          <div className="contactInfo">{email}</div>
        </div>
        <div>{description}</div>
      </div>
    </div>
  )
}
