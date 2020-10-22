import React, { memo } from 'react';
import { Query } from 'react-apollo';
import { HELLO_QUERY } from '../constants/queries';

const HelloPage = () => {
  return (
    <Query query={HELLO_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>
  
        console.log(data);
  
        return data.hello;
      }}
    </Query>
  )
}

export default memo(HelloPage);
