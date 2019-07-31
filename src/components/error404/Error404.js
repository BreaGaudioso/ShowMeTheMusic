import React from 'react';
import { Link } from 'react-router-dom';

const error404 = (props) => {
    return (
        <div>
            <h2>Uh Oh...the page {props.location.pathname} does not exist</h2>
            <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
        </div>
    );
}

export default error404;