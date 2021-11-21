import React, { Fragment } from "react";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";

const Layout = (props) => {
    return (
        <Fragment>
            <Navbar />
            <main>{props.children}</main>
            <Footer />
        </Fragment>
    );
};

export default Layout;
