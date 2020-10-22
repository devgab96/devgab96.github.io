import React, { memo } from 'react';
import { useMutation } from 'react-apollo';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { LOGIN_MUTATION } from '../../constants/mutations';
import { USER_VALIDATION } from '../../constants/validation';
import { login } from '../../utils';
import Field from './_Field';
import Form from './_Form';

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: "url('/images/main_background.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    minHeight: '100vh',
    // maxHeight: 800,
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [mutate] = useMutation(LOGIN_MUTATION);

  return (
    <Form
      mutate={mutate}
      containerImageClass={classes.image}
      headerText='Welcome!'
      submitText='Login'
      displayLogo={true}
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        username: USER_VALIDATION.username,
        password: USER_VALIDATION.password,
      })}
      onSubmit={async (variables, { setSubmitting, setFieldValue }) => {
        try {
          const x = await mutate({ variables });
          login(x.data.login.token);
          history.push('/dashboard');
        }
        catch (e) {
          // TODO Show a modal on error or something.
          setFieldValue('password', '');
          setSubmitting(false);
        }
      }}
    >
      <Grid container item spacing={2}>
        <Grid container item>
          <Field
            name='username'
            label='Username'
            fullWidth
          />
        </Grid>

        <Grid container item>
          <Field
            label='Password'
            name='password'
            type='password'
            fullWidth
          />
        </Grid>
      </Grid>
    </Form>
  )
}

export default memo(LoginPage);
