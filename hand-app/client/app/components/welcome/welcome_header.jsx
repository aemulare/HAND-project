import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../../assets/styles/welcome_header.scss';

const WelcomeHeader = () => (
  <Navbar collapseOnSelect className="nav-welcome">
    <Navbar.Header className="header-welcome">
      <Navbar.Brand>
        <p>Help After Natural Disasters</p>
        <img src="img/hand_logo_rectangle_white.svg" alt="HAND logo" height="65px" />
      </Navbar.Brand>
      <Navbar.Toggle className="toggle-welcome" />
    </Navbar.Header>
    <Navbar.Collapse className="collapse-welcome">
      <Nav pullRight>
        <LinkContainer to="/map" >
          <NavItem eventKey={1}>Welcome</NavItem>
        </LinkContainer>
        <LinkContainer to="/about" >
          <NavItem eventKey={2}>About</NavItem>
        </LinkContainer>
        <LinkContainer to="/contact" >
          <NavItem eventKey={3}>Contact</NavItem>
        </LinkContainer>
        <LinkContainer to="/signin" >
          <NavItem eventKey={4} className="btn btn-default btn-sm signin">Sign In</NavItem>
        </LinkContainer>
        <LinkContainer to="/signup" >
          <NavItem eventKey={5} className="btn btn-default btn-sm signup">Sign Up</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default WelcomeHeader;
