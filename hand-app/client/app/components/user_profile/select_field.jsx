import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap';

const TextField = (
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
        <option value="select">select</option>
        <option value="United States">United States</option>
      </FormControl>
    </InputGroup>
  </FormGroup>
);

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  changeCallback: PropTypes.func.isRequired
};

export default TextField;
