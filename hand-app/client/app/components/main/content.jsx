import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Breadcrumbs from './breadcrumbs';
import UserProfile from '../user_profile/user_profile';
import PublicUserProfile from '../user_profile/user_public_profile';
import PostsCollection from '../posts/posts_collection';
import PrivateRoute from '../auth/private_route';
import Error404 from '../errors/404';
import '../../assets/styles/app.css';

const Content = () => (
  <div id="page-content-wrapper">
    <div className="container-fluid xyz">
      <div className="row">
        <div className="col-lg-12">
          <Breadcrumbs />
          <Switch>
            <PrivateRoute exact path="/root/profile" component={UserProfile} />
            <PrivateRoute exact path="/root/member" component={PublicUserProfile} />
            <PrivateRoute exact path="/root" component={PostsCollection} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    </div>
  </div>
);

export default Content;
