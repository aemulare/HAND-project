import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap';
import CalendarIcon from 'react-icons/lib/fa/calendar';

const DateOfBirthField = ({ dateOfBirth, name, disabled, changeCallback }) => (
  <FormGroup>
    <ControlLabel>Date Of Birth</ControlLabel>
    <InputGroup>
      <FormControl
        type="date"
        name={name}
        value={dateOfBirth}
        disabled={disabled}
        onChange={changeCallback}
      />
      <InputGroup.Addon>
        <CalendarIcon />
      </InputGroup.Addon>
    </InputGroup>
  </FormGroup>
);

DateOfBirthField.propTypes = {
  name: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.instanceOf(Date).isRequired,
  changeCallback: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

DateOfBirthField.defaultProps = {
  disabled: false
};

export default DateOfBirthField;
