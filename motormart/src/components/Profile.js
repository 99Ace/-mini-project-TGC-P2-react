import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactSession } from 'react-client-session';

export default function Profile(props) {
    const username = ReactSession.get("username");

    return (
        <React.Fragment>
            <h2>User Profile</h2>
            <p>User Name is: {username}</p>
        </React.Fragment>
    )
}