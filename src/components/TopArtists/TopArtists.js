import React from 'react';
import { Link } from 'react-router-dom';
import './TopArtists.css';
import Artist from '../artist/Artist';
import TopArtistsCalls from '../../models/TopArtistsCalls';

class TopArtists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topArtists: [],
            tracks: [],
        };
    }

    render() {
        const topArtistsList = this.state.topArtists.map(topArtist => (
            <div>
                
            </div>
        ));

    }

    return (
        <div className="TopArtists">
            <h4>View Top Artists By:</h4>
                <Link to="/dailytop">Today</Link> | <Link to="/weeklytop">This Week</Link> | <Link to="/monthlytop">This Month</Link>
            <h1>Today's Top Artists</h1>
            <Artist />
        </div>
    )
};

export default TopArtists;