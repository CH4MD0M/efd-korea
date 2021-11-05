import React from "react";

// Css
import classes from "./MainOption.module.css";

const MainOption = ({ Icon, title }) => {
    return (
        <div className={classes.MainOption}>
            {Icon && <Icon className={classes.MainOption__icon} />}
            <h3 className={classes.MainOption__title}>{title}</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                ducimus hic numquam qui provident molestias quibusdam
                perferendis fugiat tempora doloremque!
            </p>
        </div>
    );
};

export default MainOption;
