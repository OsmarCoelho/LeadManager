import { USDollar } from "../constants"
import {
  acceptInviteLead,
  declineInviteLead,
} from "../redux/modules/lead/thunks"
import { Lead } from "../redux/modules/lead/types"
import { useAppDispatch } from "../redux/store"
import Button from "./Button"
import LeadHeader from "./LeadHeader"
import "./Styles.css"

type InviteCardProps = { leadInvite: Lead }

export default function InviteCard({ leadInvite }: InviteCardProps) {
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
  } = leadInvite

  const jobId = `${id}`.padStart(7, "0")

  return (
    <div className="leadCard">
      <LeadHeader
        firstName={firstName}
        createDate={createdDate}
        suburb={suburb}
        number={number}
        category={category}
        jobId={jobId}
        price={price}
        accepted={accepted}
      />
      <div className="description">{description}</div>
      <div className="inviteButtons">
        <Button
          onClick={() => {
            dispatch(acceptInviteLead(id))
          }}
          label={"Accept"}
          isActive={false}
          className={"acceptButton baseSmallButton"}
        />
        <Button
          onClick={() => {
            dispatch(declineInviteLead(id))
          }}
          label={"Decline"}
          isActive={false}
          className={"declineButton baseSmallButton"}
        />
        <div>{`${USDollar.format(price)} Lead Invitation`}</div>
      </div>
    </div>
  )
}
