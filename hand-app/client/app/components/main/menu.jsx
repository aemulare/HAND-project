import React from 'react';
import UserIcon from 'react-icons/lib/fa/user';
import HomeIcon from 'react-icons/lib/fa/home';
import AboutIcon from 'react-icons/lib/fa/info';
import PolicyIcon from 'react-icons/lib/fa/gavel';
import ContactIcon from 'react-icons/lib/fa/paper-plane-o';
import SignOutIcon from 'react-icons/lib/fa/sign-out';
import MenuItem from './menu_item';
import css from './styles/sidebar.scss';

const Menu = () => (
  <ul id="menu" className={`nav-pills nav-stacked ${css.sidebar_nav}`}>
    <MenuItem label="FirstName LastName" icon={UserIcon} path="/root/profile" active />
    <MenuItem label="Home" icon={HomeIcon} />
    <MenuItem label="About" icon={AboutIcon} path="/root/about" />
    <MenuItem label="Policy" icon={PolicyIcon} path="/root/policy" />
    <MenuItem label="Contact" icon={ContactIcon} path="/root/contact" />
    <MenuItem label="Sign out" icon={SignOutIcon} path="/signout" />
  </ul>
);


export default Menu;
