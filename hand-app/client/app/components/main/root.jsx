import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Content from './content';
import '../../assets/styles/app.scss';

const Root = () => (
  <div>
    <header>
      <Header />
    </header>
    <div id="wrapper">
      <Sidebar />
      <Content />
    </div>
  </div>
);

export default Root;
