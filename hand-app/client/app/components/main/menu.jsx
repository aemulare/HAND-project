import React from 'react';
import UserIcon from 'react-icons/lib/fa/user';
import HomeIcon from 'react-icons/lib/fa/home';
import AboutIcon from 'react-icons/lib/fa/info';
import PolicyIcon from 'react-icons/lib/fa/gavel';
import ContactIcon from 'react-icons/lib/fa/paper-plane-o';
import SignOutIcon from 'react-icons/lib/fa/sign-out';
import MenuItem from './menu_item';
import '../../assets/styles/app.css';

const Menu = () => (
  <ul id="menu" className="sidebar-nav nav-pills nav-stacked">
    <MenuItem label="FirstName LastName" icon={UserIcon} active />
    <MenuItem label="Home" icon={HomeIcon} />
    <MenuItem label="About" icon={AboutIcon} />
    <MenuItem label="Policy" icon={PolicyIcon} />
    <MenuItem label="Contact" icon={ContactIcon} />
    <MenuItem label="Sign out" icon={SignOutIcon} path="/signout" />
  </ul>
);


export default Menu;
