import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap';

const TextField = ({ label, value, changeCallback }) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <InputGroup>
      <FormControl
        type="text"
        value={value}
        onChange={changeCallback}
      />
    </InputGroup>
  </FormGroup>
);

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeCallback: PropTypes.func.isRequired
};

export default TextField;
