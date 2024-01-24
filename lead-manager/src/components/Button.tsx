import "./Styles.css"

type ButtonProps = {
  onClick: () => void
  label: string
  isActive: boolean
  className: string
}

export default function Button({
  onClick,
  label,
  className,
  isActive,
}: ButtonProps) {
  return (
    <div
      className={`${className} ${isActive ? " activeButton" : ""}`}
      onClick={onClick}
    >
      <p className="label">{label}</p>
    </div>
  )
}
