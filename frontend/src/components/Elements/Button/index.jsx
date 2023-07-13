import PropTypes from 'prop-types';
import { ButtonElement } from "./Styled"

export default function Button({ text, handleClick }) {
  return (
    <ButtonElement onClick={handleClick}>
      {text}
    </ButtonElement>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};