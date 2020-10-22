import React from 'react';
import './Error.css';

function Error() {
    return (
        <div className="item card mainBlockError">
            <div className="image">
                <img src='img/error.png' alt='error' />
            </div>
            <div className="content">
                <h1>There is no such city...</h1>
            </div>
        </div>
    )
}

export default Error
