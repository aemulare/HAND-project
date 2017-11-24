import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap';

// temporary
const options = [
  { code: 'alb', value: 'Albania' },
  { code: 'usa', value: 'United States' },
  { code: 'can', value: 'Canada' }];


const SelectField = (
  {
    label, value, placeholder, changeCallback
  }
) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <InputGroup>
      <FormControl
        componentClass="select"
        placeholder={placeholder}
        value={value}
        onChange={changeCallback}
      >
        {
        options.map(option => (<option key={options.code} value={options.value}>{option.value}</option>))
      }
      </FormControl>
    </InputGroup>
  </FormGroup>
);

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  changeCallback: PropTypes.func.isRequired
};

export default SelectField;
