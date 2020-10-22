import React from "react";
import { Route, Redirect } from "react-router-dom"
import { getAuthToken } from '../utils';

const PublicRoute = props => {
  const token = getAuthToken();

  return token
    ? <Redirect to='/' />
    : <Route {...props} />
}

export default PublicRoute;
