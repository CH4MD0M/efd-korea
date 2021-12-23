import React, { useState, useContext, useEffect, useRef } from "react";
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

    const [isScroll, setIsScroll] = useState(false);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const showNavbar = () => setIsNavbarOpen(!isNavbarOpen);
    const navRight = isNavbarOpen ? classes["navigation-right"] : "";
    const navBg = isScroll ? classes["menu-active"] : "";

    let navRef = useRef();
    useEffect(() => {
        let handler = (event) => {
            if (!navRef.current.contains(event.target)) {
                setIsNavbarOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    // Scroll - Navigation Background
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };
    window.addEventListener("scroll", changeBackground);

    return (
        <>
            <div className={`${classes.menu} ${navBg}`}>
                <HomeButton active={isScroll} />
                <div className={classes["menu-icon"]}>
                    <MenuIcon onClick={showNavbar} />
                </div>
            </div>

            <nav className={`${classes.navigation} ${navRight}`} ref={navRef}>
                <div className={classes.navbarWrap}>
                    <div className={classes["menu-icon"]}>
                        <CloseIcon onClick={showNavbar} />
                    </div>
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
                                <div className={classes.blank}></div>
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
