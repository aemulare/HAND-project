import React, { Component } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import '../assets/styles/app.css';


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div id="wrapper">
          <Sidebar />
        </div>

      </div>
    );
  }
}

export default App;
