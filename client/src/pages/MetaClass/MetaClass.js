import React from "react";

// Css
import classes from "./MetaClass.module.scss";

const MetaClass = () => {
    return (
        <section className={classes["meta-section"]}>
            <h1 className={classes["meta-title"]}>Meta-Class</h1>
            <main className={classes["meta-main"]}></main>
        </section>
    );
};

export default MetaClass;
