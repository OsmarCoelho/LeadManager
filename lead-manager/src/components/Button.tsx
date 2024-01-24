import { getInvites } from "../redux/modules/lead/repository"
import "./Styles.css"

type ButtonProps = {
  onClick: () => void
  label: string
  isActive: boolean
}

export default function Button() {
  return (
    <div
      className={"BasicButton"}
      onClick={async () => {
        await getInvites()
      }}
    >
      <p>pudim</p>
    </div>
  )
}
