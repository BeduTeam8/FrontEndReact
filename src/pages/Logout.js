import React from 'react';
//import PropTypes from 'prop-types';
//import './Logout.css';



export default function Loginout({setToken}) {
    sessionStorage.clear()

    return(
        <div className="login-wrapper">
        <h1>Thank You! See you Soon </h1>
            
        </div>
    )
}

// Login.propTypes={
//     setToken: PropTypes.func.isRequired
// }