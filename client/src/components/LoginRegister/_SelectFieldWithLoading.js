import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { Field } from 'formik';
import { MenuItem } from '@material-ui/core';
import { Select } from 'formik-material-ui';
import { get } from 'lodash';

// TODO Have "id" and "name" be keys we can customize
const renderOption = ({ id, name }) => (
  <MenuItem key={id} value={id}>{name}</MenuItem>
)

const SelectFieldWithLoading = ({ query, responseDataPath, ...rest }) => {
  return (
    <Query query={query}>
      {({ loading, error, data }) => {
        if (error) return <div>Error</div>
  
        const options = loading ? [] : (
          responseDataPath ? get(data, responseDataPath, []) : data
        )

        return (
          <Field
            component={Select}
            variant='outlined'
            fullWidth
            disabled={loading}
            {...rest}
          >
            {options.map(renderOption)}
          </Field>
        )
      }}
    </Query>
  )
}

SelectFieldWithLoading.propTypes = {
  query: PropTypes.object.isRequired,
  responseDataPath: PropTypes.string,
}

export default memo(SelectFieldWithLoading);
