import React from 'react';
import UserIcon from 'react-icons/lib/fa/user';
import HomeIcon from 'react-icons/lib/fa/home';
import NewsIcon from 'react-icons/lib/fa/newspaper-o';
import AboutIcon from 'react-icons/lib/fa/info';
import PolicyIcon from 'react-icons/lib/fa/gavel';
import ContactIcon from 'react-icons/lib/fa/paper-plane-o';
import SignOutIcon from 'react-icons/lib/fa/sign-out';
import MenuItem from './menu_item';
import '../../assets/styles/app.css';

const Menu = () => (
  <ul id="menu" className="sidebar-nav nav-pills nav-stacked">
    <MenuItem label="Jane Smith" icon={UserIcon} active="true" />
    <MenuItem label="Home" icon={HomeIcon} />
    <MenuItem label="News" icon={NewsIcon} />
    <MenuItem label="About" icon={AboutIcon} />
    <MenuItem label="Policy" icon={PolicyIcon} />
    <MenuItem label="Contact" icon={ContactIcon} />
    <MenuItem label="Sign out" icon={SignOutIcon} />
  </ul>
);


export default Menu;
