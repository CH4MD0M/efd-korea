import React from "react";

// Css
import classes from "./MainOption.module.scss";

const MainOption = ({ Icon, title }) => {
    return (
        <div className={classes.MainOption}>
            {Icon && <Icon className={classes["MainOption-icon"]} />}
            <h3 className={classes["MainOption-title"]}>{title}</h3>
            <p className={classes["MainOption-detail"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                ducimus hic numquam qui provident molestias quibusdam
                perferendis fugiat tempora doloremque! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Veniam ducimus hic numquam
                qui provident molestias quibusdam perferendis fugiat tempora
                doloremque!
            </p>
        </div>
    );
};

export default MainOption;
