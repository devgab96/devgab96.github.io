import React, { memo } from 'react';
import { TextField } from 'formik-material-ui';
import { Field as FormikField } from 'formik';

const Field = ({ component, ...rest }) => {
  return (
    <FormikField
      component={component}
      variant='outlined'
      fullWidth
      {...rest}
    />
  )
}

Field.defaultProps = {
  component: TextField,
}

export default memo(Field);
