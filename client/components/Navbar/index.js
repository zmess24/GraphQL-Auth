import React from 'react';
import { graphql } from 'react-apollo';
import CurrentUser from '../../queries/CurrentUser';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ data }) {
    let { user } = data;
    console.log(user)
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
                            <Link className="nav-link" to="/logout">Logout</Link>
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

export default graphql(CurrentUser)(Navbar);