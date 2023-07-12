import { ButtonElement } from "./Styled"

export default function Button({ text, handleClick }) {
  return (
    <ButtonElement onClick={handleClick}>
      {text}
    </ButtonElement>
  )
}