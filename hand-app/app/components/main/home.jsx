import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Content from './content';
import '../../assets/styles/app.css';

const Home = () => (
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

export default Home;
