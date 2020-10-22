import React from "react";
import { Redirect } from "react-router-dom"
import { logout } from '../utils';

const LogoutPage = () => {
  logout();

  return <Redirect to='/' />
}

export default LogoutPage;
