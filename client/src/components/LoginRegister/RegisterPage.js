import React, { memo } from 'react';
import { useMutation } from 'react-apollo';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { RANKS_QUERY } from '../../constants/queries';
import { REGISTER_MUTATION } from '../../constants/mutations';
import { USER_VALIDATION } from '../../constants/validation';
import { login } from '../../utils';
import Field from './_Field';
import Form from './_Form';
import SelectField from './_SelectFieldWithLoading';

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: "url('/images/reg_bg.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  },
}));

const RegisterPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [mutate] = useMutation(REGISTER_MUTATION);

  return (
    <Form
      mutate={mutate}
      containerImageClass={classes.image}
      headerText='Register'
      initialValues={{
        username: '',
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        rank: '',
        graduatedFrom: '',
        birthday: null,
        address: '',
        phoneNumber: '',
        company: '',
        referredBy: '',
      }}
      validationSchema={Yup.object().shape({
        username: USER_VALIDATION.username,
        firstName: USER_VALIDATION.firstName,
        middleName: USER_VALIDATION.middleName,
        lastName: USER_VALIDATION.lastName,
        email: USER_VALIDATION.email,
        password: USER_VALIDATION.password,
        password2: USER_VALIDATION.password2,
        rank: USER_VALIDATION.rank,
        graduatedFrom: USER_VALIDATION.graduatedFrom,
        birthday: USER_VALIDATION.birthday,
        address: USER_VALIDATION.address,
        phoneNumber: USER_VALIDATION.phoneNumber,
        company: USER_VALIDATION.company,
        referredBy: USER_VALIDATION.referredBy,
      })}
      onSubmit={async (variables, { setSubmitting }) => {
        try {
          const x = await mutate({ variables: {
            ...variables,
            rank: Number(variables.rank),
          }});
          login(x.data.signup.token);
          history.push('/dashboard');
        }
        catch (e) {
          // TODO Show a modal on error or something.
          setSubmitting(false);
        }
      }}
    >
      <Grid container spacing={2}>
        {/* TODO Make this part DRYer */}
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <Field name='username' label='Username*' />
          </Grid>

          <Grid item xs={6}>
            <Field name='firstName' label='First Name*' />
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <Field name='email' label='Email*' />
          </Grid>

          <Grid item xs={6}>
            <Field name='middleName' label='Middle Name*' />
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <Field name='phoneNumber' label='Phone Number*' />
          </Grid>

          <Grid item xs={6}>
            <Field name='lastName' label='Last Name*' />
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <Field name='password' type='password' label='Password*' />
          </Grid>

          <Grid item xs={6}>
            <Field
              name='birthday'
              label='Birthday*'
              type='date'
            />
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <Field label='Confirm Password*' name='password2' type='password' />
          </Grid>

          <Grid item xs={6}>
            <SelectField
              query={RANKS_QUERY}
              responseDataPath='ranks'
              label='Rank*'
              name='rank'
            />
          </Grid>
        </Grid>
        
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <Field name='address' label='Address*' />
          </Grid>

          <Grid item xs={6}>
            <Field name='graduatedFrom' label='Graduated from*' />
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <Field name='company' label='Company' />
          </Grid>

          <Grid item xs={6}>
            <Field name='referredBy' label='Referred by' />
          </Grid>
        </Grid>
      </Grid>
    </Form>
  )
}

export default memo(RegisterPage);
