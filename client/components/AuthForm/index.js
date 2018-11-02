import React, { useState } from 'react';

function AuthForm({ handleAuth }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAuth(email, password);
        setEmail('');
        setPassword('');
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
            <input type="submit"/>
        </form>
    )
};

export default AuthForm;