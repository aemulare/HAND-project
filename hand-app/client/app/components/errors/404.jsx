import React from 'react';
import { Image } from 'react-bootstrap';
import Snowman from '../../assets/images/snowman-with-snowflakes.jpg';

const Error404 = () => (
  <div>
    <Image src={Snowman} width={850} responsive className="center-block" />
  </div>
);

export default Error404;
