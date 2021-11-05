import React, { useState } from "react";
import { NavItem1, NavItem2, NavItem3 } from "./NavItem";

// Icon
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Dropdown = (props) => {
    const [click, setClick] = useState(false);
    const NavItems = [NavItem1, NavItem2, NavItem3];
    const ItemNumber = props.navItemNum;

    return (
        <>
            <ul
                onClick={() => setClick(!click)}
                className={click ? "dropdown-menu clicked" : "dropdown-menu"}
            >
                {NavItems[ItemNumber].map((item, index) => {
                    return (
                        <li
                            key={index}
                            className={item.className}
                            onClick={() => setClick(false)}
                        >
                            {item.title}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Dropdown;
