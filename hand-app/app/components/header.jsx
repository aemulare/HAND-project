import React from 'react';
import MenuIcon from 'react-icons/lib/fa/th-large';
import Navbar from 'react-bootstrap/lib/Navbar';
import '../assets/styles/header.css';

const Header = () => (
  <Navbar className="no-margin">
    <Navbar.Header className="fixed-brand">
      <Navbar.Brand>
        <a href="#">
          <img src="img/hand_logo_rectangle.svg" alt="HAND logo" height="65px" />
        </a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <ul className="nav navbar-nav">
        <li className="active">
          <button className="navbar-toggle collapse in" data-toggle="collapse">
            <MenuIcon size={18} />
          </button>
        </li>
      </ul>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
