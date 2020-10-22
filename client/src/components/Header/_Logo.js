import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  logo: {
    backgroundImage: "url('/images/header-logo.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    width: '100%',
    cursor: 'pointer',
    marginBottom: 15
  },
}));

const Logo = () => {
  const classes = useStyles();
  const history = useHistory();

  return <div className={classes.logo} onClick={() => history.push('/')} />;
}

export default memo(Logo);
