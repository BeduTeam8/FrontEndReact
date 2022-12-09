import React from "react";
import props from "prop-types";
import "../css/Logo.css"

import Logo500 from "../assets/Logo-LibraryVerse-500.png"
import LogoDesat from "../assets/Logo-LibraryVerse-Desat.png"

const Logo = ({ mode }) => {
    return (
        <a href="/" className="logo-wrapper">
            <img src={mode === "light" ? Logo500 : LogoDesat} alt="logo" />
        </a>
    );
};  


Logo.propTypes = {
    mode: props.string.isRequired
}


export default Logo;
