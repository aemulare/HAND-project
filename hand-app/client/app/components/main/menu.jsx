import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import UserIcon from 'react-icons/lib/fa/user';
import HomeIcon from 'react-icons/lib/fa/home';
import AboutIcon from 'react-icons/lib/fa/info';
import PolicyIcon from 'react-icons/lib/fa/gavel';
import ContactIcon from 'react-icons/lib/fa/paper-plane-o';
import SignOutIcon from 'react-icons/lib/fa/sign-out';
import MenuItem from './menu_item';
import Auth from '../../modules/auth';
import css from './styles/sidebar.scss';


const Menu = () => (
  <div className={css.menu_container}>
    <Navbar fluid className={css.sidebar}>
      <Navbar.Header>
        <Navbar.Brand />
      </Navbar.Header>
      <Nav>
        <MenuItem label={Auth.currentUserName()} icon={UserIcon} path="/root/profile" />
        <MenuItem label="Home" icon={HomeIcon} path="/root/home" />
        <MenuItem label="About" icon={AboutIcon} path="/root/about" />
        <MenuItem label="Policy" icon={PolicyIcon} path="/root/policy" />
        <MenuItem label="Contact" icon={ContactIcon} path="/root/contact" />
        <MenuItem label="Sign out" icon={SignOutIcon} path="/signout" />
      </Nav>
    </Navbar>
  </div>
);


export default Menu;
