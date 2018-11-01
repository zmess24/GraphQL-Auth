import React from 'react';
import { graphql } from 'react-apollo';
import CurrentUser from '../../queries/CurrentUser';
import Logout from '../../mutations/Logout';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({data, mutate }) {
    let { user } = data;

    const handleLogoutClick = () => {
        mutate({ refetchQueries: [{ query: CurrentUser }] });
    }

    return (
        <nav className="nav clearfix">
            <div className="float-left">
                <span className="nav-link">GraphQL</span>
                <Link className="nav-link" to="/">Home</Link>
            </div>
            <div className="float-right">
                {user
                    ? (
                        <span>
                            <Link className="nav-link" to="/profile">Profile</Link>
                            <a className="nav-link" onClick={handleLogoutClick}>Logout</a>
                        </span>
                    )
                    : (
                        <span>
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </span>
                    )
                }
            </div>
        </nav>
    )
};

export default graphql(Logout)(
    graphql(CurrentUser)(Navbar)
);