import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import AuthContext from "../../store/auth-context";

// Css
import styles from "./NavMenu.module.scss";

// Icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const LogoutButton = () => {
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const logoutHandler = () => {
        authCtx.logout();
        history.replace("/sign-in");
    };

    return (
        <div className={styles["logout-Container"]}>
            <Link to="/profile" className={styles.navLink}>
                <div className={styles["navLink-icon"]}>
                    <AccountCircleIcon />
                </div>
                <span className={styles["navLink-title"]}>내 정보</span>
                <div></div>
            </Link>
            <div className={styles.navLink} onClick={logoutHandler}>
                <div className={styles["navLink-icon"]}>
                    <LockOpenIcon />
                </div>
                <span className={styles["navLink-title"]}>로그아웃</span>
                <div></div>
            </div>
        </div>
    );
};

export default LogoutButton;
