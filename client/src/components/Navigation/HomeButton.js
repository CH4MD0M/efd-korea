import React from "react";
import { useHistory } from "react-router";

// Css
import classes from "./Homebutton.module.scss";

const HomeButton = (props) => {
    const history = useHistory();
    const HomeButtonHandler = () => {
        history.push("/");
    };
    const navBg = props.active ? classes.active : "";
    return (
        <button
            className={`${classes["home-button"]} ${navBg}`}
            onClick={HomeButtonHandler}
        >
            EFD Korea
        </button>
    );
};

export default HomeButton;
