import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const AuthLogo = () => (
  <div>
    <Link to="/">
      <Image src="img/hand-logo.png" className="center-block" responsive alt="hand-logo" id="hand-logo" />
    </Link>
  </div>
);

export default AuthLogo;
