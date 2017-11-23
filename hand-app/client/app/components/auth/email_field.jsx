import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import UserIcon from 'react-icons/lib/fa/user';

const EmailField = ({ email, changeCallback }) => (
  <FormGroup>
    <InputGroup>
      <InputGroup.Addon>
        <UserIcon />
      </InputGroup.Addon>
      <FormControl
        type="email"
        placeholder="email"
        value={email}
        onChange={changeCallback}
      />
    </InputGroup>
  </FormGroup>
);

EmailField.propTypes = {
  email: PropTypes.string.isRequired,
  changeCallback: PropTypes.func.isRequired
};

export default EmailField;
