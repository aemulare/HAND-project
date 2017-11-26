import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from 'react-icons/lib/fa/th-large';
import Navbar from 'react-bootstrap/lib/Navbar';
import PropTypes from 'prop-types';
import Logo from '../../assets/images/hand_logo_rectangle.svg';
import './styles/header.scss';

const Header = ({ onSidebarToggle }) => (
  <Navbar className="no-margin">
    <Navbar.Header className="fixed-brand">
      <Navbar.Brand>
        <Link to="/root/home">
          <img src={Logo} alt="HAND logo" height="65px" />
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <ul className="nav navbar-nav">
        <li className="active">
          <button className="navbar-toggle collapse in" onClick={onSidebarToggle}>
            <MenuIcon size={18} />
          </button>
        </li>
      </ul>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  onSidebarToggle: PropTypes.func.isRequired
};

export default Header;
