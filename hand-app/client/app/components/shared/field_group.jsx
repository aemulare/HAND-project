import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap';

const FieldGroup = ({ type, label, value, changeCallback }) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <InputGroup>
      <FormControl
        type={type}
        value={value}
        onChange={changeCallback}
      />
    </InputGroup>
  </FormGroup>
);

FieldGroup.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeCallback: PropTypes.func.isRequired
};

export default FieldGroup;
