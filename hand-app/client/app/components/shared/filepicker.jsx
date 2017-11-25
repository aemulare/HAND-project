import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap';

const FilePicker = ({ file, changeCallback }) => (
  <FormGroup>
    <ControlLabel>Userpic</ControlLabel>
    <InputGroup>
      <FormControl
        type="file"
        value={file}
        onChange={changeCallback}
      />
    </InputGroup>
  </FormGroup>
);

FilePicker.propTypes = {
  file: PropTypes.string.isRequired,
  changeCallback: PropTypes.func.isRequired
};

export default FilePicker;
