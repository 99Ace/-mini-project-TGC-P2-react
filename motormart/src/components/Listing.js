import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Listing(props) {
    return (
        <React.Fragment>
            <h2>Vehicle Listing</h2>
            <button onClick={ (e)=>{ 
                e.preventDefault();
                props.setActive("showcar", true);
            }} >View Car</button>
        </React.Fragment>
    )
}