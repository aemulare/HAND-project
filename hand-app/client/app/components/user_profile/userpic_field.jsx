import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap';

const UserpicField = ({ value, changeCallback }) => (
  <FormGroup>
    <ControlLabel>Userpic</ControlLabel>
    <InputGroup>
      <FormControl
        type="file"
        value={value}
        onChange={changeCallback}
      />
    </InputGroup>
  </FormGroup>
);

UserpicField.propTypes = {
  value: PropTypes.string.isRequired,
  changeCallback: PropTypes.func.isRequired
};

export default UserpicField;
