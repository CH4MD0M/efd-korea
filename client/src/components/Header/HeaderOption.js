import React from "react";
import classes from "./HeaderOption.module.css";

const HeaderOption = ({ Icon, title }) => {
    return (
        <div className={classes.headerOption}>
            {Icon && <Icon className={classes.headerOption__icon} />}
            <h3 className={classes.headerOption__title}>{title}</h3>
        </div>
    );
};

export default HeaderOption;
