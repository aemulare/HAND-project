import React from 'react';
import '../assets/styles/header.css';

export const Header = () => (
  <nav className="navbar navbar-default no-margin">
    <div className="navbar-header fixed-brand">
      <a className="navbar-brand">
        <img src="img/hand_logo_rectangle.svg" alt="HAND logo" height="65px" width="auto" />
      </a>
    </div>

    <div className="collapse navbar-collapse">
      <ul className="nav navbar-nav">
        <li className="active">
          <button className="navbar-toggle collapse in" data-toggle="collapse">
            <span className="glyphicon glyphicon-th-large" />
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
