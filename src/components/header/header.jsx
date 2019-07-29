import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div>
            <h1>Show Me The Music</h1>
            <h3>Discover your next favorite artist and where to see them live!</h3>
            <Link to="/">Home</Link> | <Link to="/createaccount">Create Account</Link> | <Link to="/login">Login</Link>
            <hr/>
            <h4>View Top Artists By:</h4>
            <Link to="/dailytop">Day</Link> | <Link to="/weeklytop">Week</Link> | <Link to="/monthlytop">Month</Link>
        </div>
    )
};

export default header;