import React, { Fragment } from "react";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// Css
import classes from "./Layout.module.css";

const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            <Navigation />
            <main className={classes.main}>{props.children}</main>
            <Footer />
        </Fragment>
    );
};

export default Layout;
