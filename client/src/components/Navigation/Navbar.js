import React, { useState } from "react";
import { Link } from "react-router-dom";

import { NavbarData } from "./NavbarData";
import NavMenu from "./NavMenu";
import HomeButton from "./HomeButton";

// Css
import classes from "./Navbar.module.css";

// Icon
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navigation = () => {
    const [navbar, setNavbar] = useState(false);

    const showNavbar = () => setNavbar(!navbar);

    const navRight = navbar ? classes["navigation-right"] : "";

    return (
        <>
            <div className={classes.menu}>
                <HomeButton />
                <Link to="#" className={classes["menu-icon"]}>
                    <MenuIcon onClick={showNavbar} />
                </Link>
            </div>

            <nav className={`${classes.navigation} ${navRight}`}>
                <div className={classes.navbarWrap}>
                    <Link to="#" className={classes["menu-icon"]}>
                        <CloseIcon onClick={showNavbar} />
                    </Link>
                    {NavbarData.map((item, index) => {
                        return <NavMenu item={item} key={index} />;
                    })}
                </div>
            </nav>
        </>
    );
};

export default Navigation;
