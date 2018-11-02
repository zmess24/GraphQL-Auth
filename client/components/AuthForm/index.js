import React, { useState } from 'react';
import './AuthForm.css';

function AuthForm({ handleAuth, errors }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAuth(email, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
                type="text"
                placeholder="Johnny@appleseed.com"
                onChange={e => setEmail(e.target.value)}
                value={email}/>
            <label>Password</label>
            <input 
                type="password"
                placeholder="Special Password 123..."
                onChange={e => setPassword(e.target.value)}
                value={password}/>
            {errors.map(error => <div className="errors" key={error}>{error}</div>)}
            <input style={{ width: "100%" }}type="submit"/>
        </form>
    )
};

export default AuthForm;