import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './welcome/welcome';
import SignUp from './auth/sign_up';
import SignIn from './auth/sign_in';
import Home from './main/home';
import '../assets/styles/app.css';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/home" component={Home} />
      <Route path="/" component={Welcome} />
    </Switch>
  </div>
);

export default App;
