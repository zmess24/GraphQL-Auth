/**
|--------------------------------------------------
| Note:
| Would like to refactor to a custom hook to remove
| the need for HOC's.
|--------------------------------------------------
*/


import React, { useEffect } from 'react';
import CurrentUser from '../../queries/CurrentUser';
import { graphql } from 'react-apollo';

export default(WrappedComponent) => {
    function RequireAuth({ data, history }) {
        useEffect(() => {
            console.log(data.loading, data.user)
            if (!data.loading && !data.user) {
                history.push('/login')
            }
        });

        return <WrappedComponent />
    };

    return graphql(CurrentUser)(RequireAuth);
};