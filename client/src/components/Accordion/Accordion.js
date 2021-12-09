import React, { useState } from "react";

// Css
import classes from "./Acoordion.module.scss";

const Accordion = (props) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <li className={classes["accordion-list"]}>
            <p className={classes.title} onClick={() => setIsActive(!isActive)}>
                {props.title}
            </p>
            {isActive && <div className={classes.detail}>{props.children}</div>}
        </li>
    );
};

export default Accordion;
