import React, { Component } from 'react';
import Header from '../components/header';
// import Sidebar from '../components/sidebar';
// import Content from './content';
import SignIn from './sign_in';
import '../assets/styles/app.css';


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div id="wrapper">
          {/* <Sidebar />
          <Content /> */}
        </div>
        <SignIn />
      </div>
    );
  }
}

export default App;
