import React from 'react';
import Menu from './menu';
import css from './styles/sidebar.scss';

const Sidebar = () => (
  <div className={css.wrapper}>
    <Menu />
  </div>
);

export default Sidebar;
