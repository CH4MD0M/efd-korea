import React, { useState } from "react";

// Css
import classes from "./BoardItem.module.scss";

const BoardItem = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <li className={classes["board-list"]}>
            <p className={classes.title} onClick={() => setIsActive(!isActive)}>
                {title}
            </p>
            {isActive && (
                <div className={classes.detail}>
                    <p className={classes.content}>{content}</p>
                </div>
            )}
        </li>
    );
};

export default BoardItem;
