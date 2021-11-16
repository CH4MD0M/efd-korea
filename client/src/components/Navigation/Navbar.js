import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import { NavbarData } from "./NavbarData";
import NavMenu from "./NavMenu";
import HomeButton from "./HomeButton";
import LogoutButton from "./LogoutButton";

// Css
import classes from "./Navbar.module.scss";
import styles from "./NavMenu.module.scss";

// Icon
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LockIcon from "@mui/icons-material/Lock";

const Navigation = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

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
                    <>
                        {!isLoggedIn && (
                            <Link to="/sign-in" className={styles.navLink}>
                                <div className={styles["navLink-icon"]}>
                                    <LockIcon />
                                </div>
                                <span className={styles["navLink-title"]}>
                                    로그인
                                </span>
                                <div></div>
                            </Link>
                        )}
                        {isLoggedIn && <LogoutButton />}
                    </>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
