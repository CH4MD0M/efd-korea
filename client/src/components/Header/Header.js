import React from "react";
import HeaderOption from "./HeaderOption";

// Css
import classes from "./Header.module.css";

// Icon
import LockIcon from "@mui/icons-material/Lock";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
    return (
        <div className={classes.header}>
            <HeaderOption Icon={AdminPanelSettingsIcon} title="관리 페이지" />
            <HeaderOption Icon={LockIcon} title="내 정보" />
            <HeaderOption Icon={LogoutIcon} title="로그아웃" />
        </div>
    );
};

export default Header;
