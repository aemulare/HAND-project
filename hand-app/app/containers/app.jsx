import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './welcome';
import SignUp from './sign_up';
import SignIn from './sign_in';
import '../assets/styles/app.css';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
