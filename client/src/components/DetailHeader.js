import React from "react";

// Css
import classes from "./DetailHeader.module.scss";

const DetailHeader = (props) => {
    return (
        <div className={classes["header-container"]}>
            <img
                className={classes["header-img"]}
                src={`/image/header/${props.header}.jpg`}
                alt="header"
            />
        </div>
    );
};

export default DetailHeader;
