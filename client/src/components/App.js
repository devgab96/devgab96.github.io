import React, { memo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';

import Header from './Header';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';
import DashboardPage from './DashboardPage';
import LoginPage from './LoginRegister/LoginPage';
import RegisterPage from './LoginRegister/RegisterPage';
import HelloPage from './HelloPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LogoutPage from './LogoutPage';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: '100vh',
  },
  headerContainer: {
    minHeight: '8vh',
  },
  footerContainer: {
    minHeight: '4vh',
    alignItem: 'flex-end',
  },
  contentContainer: {
    // paddingTop: 8*5,
    flex: 1,
    minHeight: 'calc(100vh - 8vh - 4vh)', // TODO calculate dynamically
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      classes={{ container: classes.mainContainer }}
      direction='column'
      justify='center'
      alignItems='center'
      alignContent='center'
    >
      {/* <Grid container item classes={{ container: classes.headerContainer }}>
        <Header />
      </Grid> */}

      <Grid container item justify='center' classes={{ container: classes.contentContainer }}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/services' component={ServicesPage} />
          <Route exact path='/contact' component={ContactPage} />
          <PublicRoute exact path='/login' component={LoginPage} />
          <PublicRoute exact path='/register' component={RegisterPage} />
          <PrivateRoute exact path='/dashboard' component={DashboardPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/logout' component={LogoutPage} />
          <Route exact path='/hello' component={HelloPage} />
          <Redirect to='/' />
        </Switch>
      </Grid>
    </Grid>
  )
}

export default memo(App);
