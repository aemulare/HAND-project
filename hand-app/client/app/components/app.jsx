import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './auth/private_route';
import Welcome from './welcome/welcome';
import SignUp from './auth/sign_up';
import SignIn from './auth/sign_in';
import SignOut from './auth/sign_out';
import Root from './main/root';
import '../assets/styles/app.css';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signout" component={SignOut} />
      <PrivateRoute path="/root" component={Root} />
      <Route path="/" component={Welcome} />
    </Switch>
  </div>
);

export default App;
