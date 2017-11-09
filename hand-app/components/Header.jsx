
import React from 'react';


export const Header = () =>
  (<nav className="navbar navbar-default no-margin">
    {}
    <div className="navbar-header fixed-brand">
      <button
        type="button"
        className="navbar-toggle collapsed"
        data-toggle="collapse"
        id="menu-toggle"
      >
        <span className="glyphicon glyphicon-th-large" aria-hidden="true" />
      </button>
      <a className="navbar-brand" href="#">
        {}
        <img
          src="img/hand_logo_rectangle.svg"
          alt="HAND logo"
          height="65px"
          width="auto"
        />
      </a>
    </div>
    {}
    <div
      className="collapse navbar-collapse"
      id="bs-example-navbar-collapse-1"
    >
      <ul className="nav navbar-nav">
        <li className="active">
          <button
            className="navbar-toggle collapse in"
            data-toggle="collapse"
            id="menu-toggle-2"
          >
            <span
              className="glyphicon glyphicon-th-large"
              aria-hidden="true"
            />
          </button>
        </li>
      </ul>
    </div>
    {}
   </nav>
  );


export default Header;
