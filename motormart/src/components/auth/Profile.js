import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Profile extends React.Component {
    state={

    }

    render() {
        return (
            <React.Fragment>
                <h2>User Profile</h2>
                <p>User Name is: {this.props.activeUser.username}</p>
    
                
            </React.Fragment>
        )
    }
    
}