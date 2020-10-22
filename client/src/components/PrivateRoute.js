import React from "react";
import { Route, Redirect } from "react-router-dom"
import { getAuthToken } from '../utils';

const PrivateRoute = props => {
  const token = getAuthToken();

  return token
    ? <Route {...props} />
    : <Redirect to='/login' />
}

export default PrivateRoute;
