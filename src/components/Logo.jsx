import React from "react";
import props from "prop-types";

import Logo500 from "../assets/Logo-LibraryVerse-500.png"
import LogoDesat from "../assets/Logo-LibraryVerse-Desat.png"

const Logo = ({ mode }) => {
    return (
        <div className="logo">
            <img src={mode === "light" ? Logo500 : LogoDesat} alt="logo" />
        </div>
    );
};


Logo.propTypes = {
    mode: props.string.isRequired
}


export default Logo;
