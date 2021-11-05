import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>EFD Korea</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to="/info" activeClassName={classes.active}>
                            교육안내
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/intro" activeClassName={classes.active}>
                            교육자료 소개
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/customer"
                            activeClassName={classes.active}
                        >
                            고객지원
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/meta-class"
                            activeClassName={classes.active}
                        >
                            Meta-Class
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
