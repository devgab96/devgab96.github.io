import React, { memo } from 'react';
import { Button, Grid, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Formik,
  Form as FormikForm,
} from 'formik';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: 16*2,
  },
  textRoot: {
    paddingBottom: 8*4,
  },
  buttonsContainer: {
    marginTop: 8*4,
  },
  button: {
    minHeight: 8*8,
    marginTop: 8,
  },
}));

const Form = ({
  mutate,
  containerImageClass,
  submitText = 'Submit',
  displayLogo = false,
  headerText,
  children,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Grid container item xs={12} justify='center'>
      <Grid container item sm={1} />
      <Hidden xsDown>
        <Grid container item sm={5} classes={{ container: containerImageClass }} justify="center" alignItems="center">
          { displayLogo && (
            <img src="/images/header-logo.png" alt='header-logo'/>
          )}
        </Grid>
      </Hidden>

      <Grid container item sm={5} xs={11} justify='center' classes={{ container: classes.formContainer }}>
        <Grid container item xs={12} justify='center' alignItems='center' direction='column'>
          <Grid item classes={{ root: classes.textRoot }}>
            <Typography variant='h3' color='textSecondary'>
              {headerText}
            </Typography>
          </Grid>

          <Formik {...rest}>
            {({ submitForm, isSubmitting, resetForm, errors }) => (
              <FormikForm>
                <Grid container item xs={12} justify='center'>
                  {children}

                  <Grid container item classes={{ container: classes.buttonsContainer }}>
                    <Button
                      variant='contained'
                      color='primary'
                      disabled={isSubmitting}
                      onClick={submitForm}
                      fullWidth
                      style={{backgroundColor:'#A2DEE4'}}
                      classes={{ root: classes.button }}
                    >
                      {submitText}
                    </Button>
                    
                    {/* Temporarily hid this Dan so that it reflects the UI in the mock up. Will re-add this after the presentation */}
                    {/* <Button
                      variant='contained'
                      color='secondary'
                      disabled={isSubmitting}
                      onClick={resetForm}
                      fullWidth
                      classes={{ root: classes.button }}
                    >
                      Reset
                    </Button> */}
                  </Grid>
                </Grid>
              </FormikForm>
            )}
          </Formik>
        </Grid>
      </Grid>
      <Grid container item sm={1} />
    </Grid>
  );
}

export default memo(Form);
