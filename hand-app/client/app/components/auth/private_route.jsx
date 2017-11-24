import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from '../../modules/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      Auth.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/signin',
          state: { from: props.location } }}
        />
      )
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object
};

PrivateRoute.defaultProps = {
  location: null
};

export default PrivateRoute;
