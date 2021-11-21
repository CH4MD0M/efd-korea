import React from "react";

// Css
import classes from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <ul className={classes["footer-items"]}>
                <li className={classes["footer-item"]}>교육안내</li>
                <li className={classes["footer-item"]}>교육자료소개</li>
                <li className={classes["footer-item"]}>고객지원</li>
                <li className={classes["footer-item"]}>My Class</li>
            </ul>

            <div className={classes["footer-context"]}>
                <h3 className={classes.copyright}>
                    &copy; Copyright 2020 by efdkorea.
                </h3>
                <h3 className={classes["company-address"]}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Voluptates, libero nobis.
                </h3>
            </div>
        </div>
    );
};

export default Footer;
