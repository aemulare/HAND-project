import React, { Component } from 'react';
import MenuItem from './menu_item';
import '../assets/styles/app.css';

class Menu extends Component {
  render() {
    return (
      <ul id="menu" className="sidebar-nav nav-pills nav-stacked">
        <MenuItem label="Jane Smith" icon="fa-user" active="true" />
        <MenuItem label="Home" icon="fa-home" />
        <MenuItem label="News" icon="fa-newspaper-o" />
        <MenuItem label="About" icon="fa-info" />
        <MenuItem label="Policy" icon="fa-gavel" />
        <MenuItem label="Contact" icon="fa-paper-plane-o" />
        <MenuItem label="Sign out" icon="fa-sign-out" />
      </ul>
    );
  }
}

export default Menu;
