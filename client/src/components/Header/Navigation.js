import React, { useState } from "react";
import Dropdown from "./Dropdown";

// Css
import "./Navigation.css";

const Navigation = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    /* const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }; */
    return (
        <>
            <div className="navigation">
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        교육안내
                        {dropdown && <Dropdown navItemNum={0} />}
                    </li>
                    <li className="nav-item">
                        교육자료소개
                        {dropdown && <Dropdown navItemNum={1} />}
                    </li>
                    <li className="nav-item">
                        고객지원
                        {dropdown && <Dropdown navItemNum={2} />}
                    </li>
                    <li className="nav-item">My Class</li>
                </ul>
            </div>
        </>
    );
};

export default Navigation;
