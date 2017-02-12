import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isLoggedIn } from '../../utils/authentication';

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => {
    if (isLoggedIn())
      return React.createElement(component, props);
    return (
      <Redirect to={
        {
          pathname: '/',
          state: { from: props.location }
        }
      }
      />
    );
  }}
  />
);

export default PrivateRoute;