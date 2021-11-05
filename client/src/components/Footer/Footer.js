import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <ul class={classes["footer-items"]}>
                <li class={classes["footer-item"]}>교육안내</li>
                <li class={classes["footer-item"]}>교육자료소개</li>
                <li class={classes["footer-item"]}>고객지원</li>
                <li class={classes["footer-item"]}>My Class</li>
            </ul>

            <div class={classes["footer-context"]}>
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
