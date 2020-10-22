import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';

import Button from './_Button';
import Logo from './_Logo';
import { getAuthToken } from '../../utils';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 8,
    paddingBottom: 8,
    height: 100
  },
}));

const Header = () => {
  const classes = useStyles();
  const token = getAuthToken();

  return (
    <Grid container item xs={12} classes={{ container: classes.container }}>
      <Grid container item xs={1} />

      <Grid container item xs={3} justify='center'>
        <Logo />
      </Grid>

      <Grid container item xs={3} justify='center'>
        <Button url='/about'>About</Button>
        <Button url='/services'>Services Offered</Button>
        <Button url='/contact'>Contact</Button>
      </Grid>

      <Grid container item xs={2} />

      <Grid container item xs={2} justify='center'>
        {
          token
            ? <Button url='/logout'>Logout</Button>
            : (<>
              <Button url='/register'>Sign Up</Button>
              <Button url='/login'>Login</Button>
            </>)
        }
      </Grid>

      <Grid container item xs={1} />
    </Grid>
  )
}

export default memo(withRouter(Header))
