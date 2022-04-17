import React from 'react';
import {Link} from 'react-router-dom';
export default function logout() {
    return (
        <>
            <div>Logged Out...</div>
            CLick <Link to="/" >here</Link> to go back to login page
        </>
    )
}
