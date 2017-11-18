import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../assets/styles/welcome_header.css';

export const WelcomeHeader = () => (
  <Navbar collapseOnSelect className="nav-welcome">
    <Navbar.Header className="header-welcome">
      <Navbar.Brand>
        <a href="#">
          <img src="img/hand_logo_rectangle_white.svg" alt="HAND logo" height="65px" />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle className="toggle-welcome" />
    </Navbar.Header>
    <Navbar.Collapse className="collapse-welcome">
      <Navbar.Text>
        Help After Natural Disasters
      </Navbar.Text>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">About</NavItem>
        <NavItem eventKey={2} href="#">News</NavItem>
        <NavItem eventKey={3} href="#">Contact</NavItem>
        <LinkContainer to="/signin" >
          <NavItem eventKey={4} className="btn btn-default btn-sm signin">Sign In</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default WelcomeHeader;
