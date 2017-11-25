import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';


const Userpic = ({ src, width }) => (
  <Image src={src} width={width} circle responsive />
);

Userpic.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default Userpic;
