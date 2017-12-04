import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap';

const FieldGroup = ({ type, label, value, placeholder, disabled, changeCallback }) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <InputGroup>
      <FormControl
        placeholder={placeholder}
        type={type}
        value={value}
        disabled={disabled}
        onChange={changeCallback}
      />
    </InputGroup>
  </FormGroup>
);

FieldGroup.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  changeCallback: PropTypes.func.isRequired
};

FieldGroup.defaultProps = {
  disabled: false
};

export default FieldGroup;
