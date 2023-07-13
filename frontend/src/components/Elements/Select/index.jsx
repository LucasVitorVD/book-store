import PropTypes from 'prop-types';
import { SelectElement } from "./Styled"

export default function Select({ options, selectedValue, setValue }) {
  return (
    <SelectElement value={selectedValue} onChange={(e) => setValue(e.target.value)}>
      {options && options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectElement>
  )
}


Select.propTypes = {
  options: PropTypes.array,
  selectedValue: PropTypes.string,
  setValue: PropTypes.func
};