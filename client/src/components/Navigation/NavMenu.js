import React, { useState } from "react";
import { Link } from "react-router-dom";

// Css
import classes from "./NavMenu.module.css";

const NavMenu = ({ item }) => {
    const [dropdown, setDropdown] = useState(false);
    const showDropdown = () => setDropdown(!dropdown);

    return (
        <>
            <Link
                to={item.path ? item.path : "#"}
                className={classes.navLink}
                onClick={item.dropdown && showDropdown}
            >
                <div className={classes["navLink-icon"]}>{item.icon}</div>
                <span className={classes["navLink-title"]}>{item.title}</span>
                <div>
                    {item.dropdown && dropdown
                        ? item.iconOpened
                        : item.dropdown
                        ? item.iconClosed
                        : null}
                </div>
            </Link>

            {dropdown &&
                item.dropdown.map((item, index) => {
                    // console.log(item);
                    return (
                        <Link
                            to={item.path}
                            key={index}
                            className={classes.dropdownLink}
                        >
                            <span className={classes["dropdownLink-title"]}>
                                {item.title}
                            </span>
                        </Link>
                    );
                })}
        </>
    );
};

export default NavMenu;
