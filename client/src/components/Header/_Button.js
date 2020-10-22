import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button as MUIButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { noop } from 'lodash';

const useStyles = makeStyles((theme) => ({
  text: {
    fontWeight: 'bold',
    textTransform: 'none',
  },
}));

const Button = ({ children, url, onClick, ...rest }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <MUIButton
      classes={{ text: classes.text }}
      onClick={() => {
        onClick();
        history.push(url);
      }}
      {...rest}
    >
      {children}
    </MUIButton>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  url: '/',
  onClick: noop,
}

export default memo(Button);
