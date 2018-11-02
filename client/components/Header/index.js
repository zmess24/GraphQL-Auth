import React from 'react';

function Header({ text }) {
    return (
        <div className="row">
            <div className="column" style={{ textAlign: 'center' }}>
                <h1>{text}</h1>
            </div>
        </div>
    )
};

export default Header;