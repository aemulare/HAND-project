import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './welcome';
import SignUp from './sign_up';
import SignIn from './sign_in';
import Home from './home';
import '../assets/styles/app.css';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Welcome.map} />
          <Route exact path="/map" component={Welcome} />
          <Route exact path="/about" component={Welcome} />
          <Route exact path="/contact" component={Welcome} />
          <Route exact path="/news" component={Welcome} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
