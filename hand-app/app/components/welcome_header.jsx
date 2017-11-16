import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import '../assets/styles/welcome_header.css';

export const WelcomeHeader = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">
          <img src="img/hand_logo_rectangle_white.svg" alt="HAND logo" height="65px" />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Text>
        Help After Natural Disasters
      </Navbar.Text>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">About</NavItem>
        <NavItem eventKey={2} href="#">News</NavItem>
        <NavItem eventKey={2} href="#">Contact</NavItem>
        <Button action="/signin" className="btn btn-default center-block btn-auth" id="signin">
                  Sign In
        </Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default WelcomeHeader;
