import React, { useState, useEffect } from 'react';
import AuthForm from '../AuthForm';
import Header from '../Header';
import Signup from '../../mutations/Signup';
import CurrentUser from '../../queries/CurrentUser';
import { graphql } from 'react-apollo';

function SignupForm({ mutate, history, data }) {
    const [errors, setErrors] = useState([]);

    // React hook replacement for `ComponentWillUpdate`
    // Second argument tells 'useEffect' to only run if data.user has changed;
    useEffect(() => { if (data.user) history.push('/dashboard') }, [data.user]);

    const handleAuth = async (email, password) => {
        try {
            await mutate({
                variables: { email, password },
                refetchQueries: [{ query: CurrentUser }]
            });
        } catch (res) {
            const errors = res.graphQLErrors.map(err => err.message);
            setErrors(errors);
        }; 
    };

    return (
        <div className="column">
            <Header text="Signup"/>
            <div className="row">
                <div className="column column-50 column-offset-25">
                    <AuthForm errors={errors} handleAuth={handleAuth}/>
                </div>
            </div>
        </div>
    )
};

export default graphql(CurrentUser)(
    graphql(Signup)(SignupForm)
);