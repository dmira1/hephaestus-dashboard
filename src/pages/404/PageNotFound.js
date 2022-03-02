import React from 'react';
import {Link} from 'react-router-dom'

function PageNotFound(props) {
    return (
        <>
            <ul>
                <li><Link to="/"></Link>Login Page</li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/PageNotFound">404 Page</Link></li>
            </ul>
        </>
    );
}

export default PageNotFound;