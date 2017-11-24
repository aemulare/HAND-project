import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap';
import CalendarIcon from 'react-icons/lib/fa/calendar';

const DateOfBirthField = ({ dateOfBirth, changeCallback }) => (
  <FormGroup>
    <ControlLabel>Date Of Birth</ControlLabel>
    <InputGroup>
      <FormControl
        type="date"
        value={dateOfBirth}
        onChange={changeCallback}
      />
      <InputGroup.Addon>
        <CalendarIcon />
      </InputGroup.Addon>
    </InputGroup>
  </FormGroup>
);

DateOfBirthField.propTypes = {
  dateOfBirth: PropTypes.instanceOf(Date).isRequired,
  changeCallback: PropTypes.func.isRequired
};

export default DateOfBirthField;
