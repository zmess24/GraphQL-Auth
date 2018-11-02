import React from 'react';
import AuthForm from '../AuthForm';
import Header from '../Header';
import Login from '../../mutations/Login';
import CurrentUser from '../../queries/CurrentUser';
import { graphql } from 'react-apollo';

function LoginForm({ mutate }) {

    const handleAuth = (email, password) => {
        mutate({ 
            variables: { email, password },
            refetchQueries: [{ query: CurrentUser }]
        });
    }

    return (
        <div className="column">
            <Header text="Login"/>
            <div className="row">
                <div className="column column-50 column-offset-25">
                    <AuthForm handleAuth={handleAuth}/>
                </div>
            </div>
        </div>
    )
};

export default graphql(Login)(LoginForm);