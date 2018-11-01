import React from 'react';
import Navbar from '../Navbar';

function App({ children }) {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row" style={{ marginTop: 25 }}>
                    <div className="column">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App;