import React, { Component } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Content from './content';
import '../assets/styles/app.css';

class Home extends Component {
  render() {
    return (
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
  }
}

export default Home;
