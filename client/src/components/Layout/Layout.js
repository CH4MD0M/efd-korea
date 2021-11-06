import React, { Fragment } from "react";
import Navbar from "../Navigation/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// Css
import classes from "./Layout.module.css";

const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            <Navbar />
            <main className={classes.main}>{props.children}</main>
            <Footer />
        </Fragment>
    );
};

export default Layout;
