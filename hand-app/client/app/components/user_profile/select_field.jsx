import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap';

const SelectField = (
  {
    label, selectedValue, placeholder, options, changeCallback
  }
) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <InputGroup>
      <FormControl
        componentClass="select"
        placeholder={placeholder}
        value={selectedValue}
        onChange={changeCallback}
      >
        {
          options.map(opt => (<option key={opt.id} value={opt.alpha2code}>{opt.name}</option>))
        }
      </FormControl>
    </InputGroup>
  </FormGroup>
);

SelectField.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  changeCallback: PropTypes.func.isRequired
};

export default SelectField;
