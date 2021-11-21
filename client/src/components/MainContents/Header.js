import React from "react";

// Css
import classes from "./Header.module.scss";
const Header = () => {
    return (
        <div className={classes["header-container"]}>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>efdkorea에 오신 것을 환영합니다.</h1>
            <p>What are you waiting for?</p>
        </div>
    );
};

export default Header;
