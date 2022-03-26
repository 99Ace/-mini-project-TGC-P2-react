import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Profile(props) {
    // const username = ReactSession.get("username");

    return (
        <React.Fragment>
            <h2>User Profile</h2>
            <p>User Name is: {props.username}</p>
        </React.Fragment>
    )
}