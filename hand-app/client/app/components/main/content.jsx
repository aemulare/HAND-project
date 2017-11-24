import React from 'react';
import { Route } from 'react-router-dom';
import Breadcrumbs from './breadcrumbs';
import UserProfile from '../user_profile/user_profile';
import PublicUserProfile from '../user_profile/user_public_profile';
import PostsCollection from '../posts/posts_collection';
import '../../assets/styles/app.css';

const Content = () => (
  <div id="page-content-wrapper">
    <div className="container-fluid xyz">
      <div className="row">
        <div className="col-lg-12">
          <Breadcrumbs />
          <Route exact path="/root/profile" component={UserProfile} />
          <Route exact path="/root/member" component={PublicUserProfile} />
          <Route exact path="/root" component={PostsCollection} />
        </div>
      </div>
    </div>
  </div>
);

export default Content;
