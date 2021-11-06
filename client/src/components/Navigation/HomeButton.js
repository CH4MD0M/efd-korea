import React from "react";
import { useHistory } from "react-router";

// Css
import classes from "./Homebutton.module.css";

const HomeButton = () => {
    const history = useHistory();
    const HomeButtonHandler = () => {
        history.push("/");
    };
    return (
        <button className={classes["home-button"]} onClick={HomeButtonHandler}>
            EFD Korea
        </button>
    );
};

export default HomeButton;
