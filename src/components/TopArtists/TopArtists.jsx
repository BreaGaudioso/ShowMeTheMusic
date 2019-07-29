import React from 'react';
import { Link } from 'react-router-dom';

const topArtists = () => {
    return (
        <div>
            <h4>View Top Artists By:</h4>
                <Link to="/dailytop">Day</Link> | <Link to="/weeklytop">Week</Link> | <Link to="/monthlytop">Month</Link>
            <h1>Today's Top Artists</h1>
        </div>
    );
};

export default topArtists;