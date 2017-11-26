import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import css from './styles/auth.scss';

const AuthLogo = () => (
  <div>
    <Link to="/">
      <Image src="img/hand-logo.png" className={`center-block ${css.hand_logo}`} responsive alt="hand-logo" />
    </Link>
  </div>
);

export default AuthLogo;
