import { useEffect, useState } from "react"
import Button from "../../components/Button"
import "./Styles.css"
import InviteCard from "../../components/InviteCard"
import { useAppDispatch, useAppSelector } from "../../redux/store"
import AcceptedCard from "../../components/AcceptedCard"

export default function LeadManager() {
  const { leadInvites, accepedLeads } = useAppSelector(
    (state) => state.leadManager,
  )
  const { loading } = useAppSelector((state) => state.app)

  const [activeButton, setActiveButton] = useState(true)
  const [leadlist, setLeadList] = useState(leadInvites)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (activeButton) {
      setLeadList(leadInvites)
    } else {
      setLeadList(accepedLeads)
    }
  }, [activeButton, loading])

  return (
    <div className="screen">
      <div className="header">
        <Button
          onClick={() => {
            setActiveButton(true)
          }}
          label={"Invited"}
          isActive={activeButton}
          className={"fullButton basicButton"}
        />
        <Button
          onClick={() => {
            setActiveButton(false)
          }}
          label={"Accepted"}
          isActive={!activeButton}
          className={"fullButton basicButton"}
        />
      </div>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <div>
          {leadlist.map((item) =>
            activeButton ? (
              <InviteCard
                leadInvite={{
                  accepted: item.accepted,
                  category: item.category,
                  description: item.description,
                  email: item.email,
                  firstName: item.firstName,
                  id: item.id,
                  number: item.number,
                  phoneNumber: item.phoneNumber,
                  price: item.price,
                  suburb: item.suburb,
                  surname: item.surname,
                  createdDate: item.createdDate,
                }}
              />
            ) : (
              <AcceptedCard
                lead={{
                  accepted: item.accepted,
                  category: item.category,
                  description: item.description,
                  email: item.email,
                  firstName: item.firstName,
                  id: item.id,
                  number: item.number,
                  phoneNumber: item.phoneNumber,
                  price: item.price,
                  suburb: item.suburb,
                  surname: item.surname,
                  createdDate: item.createdDate,
                }}
              />
            ),
          )}
        </div>
      )}
    </div>
  )
}
