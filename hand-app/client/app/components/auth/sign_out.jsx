import React from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../../modules/auth';

const SignOut = () => {
  Auth.logout();
  return <Redirect to="/" />;
};

export default SignOut;
