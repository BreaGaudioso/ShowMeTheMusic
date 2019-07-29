import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div>
            <h1>Show Me The Music</h1>
            <h3>Discover your next favorite artist and where to see them live!</h3>
            <hr/>
            <Link to="/">Home</Link> | <Link to="/createaccount">Create Account</Link> | <Link to="/login">Login</Link>
            <hr/>
        </div>
    )
};

export default header;