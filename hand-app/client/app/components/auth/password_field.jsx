import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import LockIcon from 'react-icons/lib/fa/lock';

const PasswordField = ({ password, changeCallback }) => (
  <FormGroup>
    <InputGroup>
      <InputGroup.Addon>
        <LockIcon />
      </InputGroup.Addon>
      <FormControl
        type="password"
        placeholder="password"
        minLength="6"
        maxLength="12"
        value={password}
        onChange={changeCallback}
      />
    </InputGroup>
  </FormGroup>
);

PasswordField.propTypes = {
  password: PropTypes.string.isRequired,
  changeCallback: PropTypes.func.isRequired
};

export default PasswordField;

