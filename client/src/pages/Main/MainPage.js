import React from "react";

import MainOption from "./MainOption";

// Css
import classes from "./MainPage.module.scss";
// Icon
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import PublicIcon from "@mui/icons-material/Public";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ComputerIcon from "@mui/icons-material/Computer";

const MainPage = () => {
    return (
        <div className={classes["main-page"]}>
            <div className={classes.main__contents}>
                <div className={classes["main__contents--1"]}></div>
                <div className={classes["main__contents--2"]}>
                    <h1>OM School 소개</h1>
                    <div className={classes["contents-items"]}>
                        <MainOption
                            Icon={CastForEducationIcon}
                            title="새로운 교육 패러다임"
                        />
                        <MainOption
                            Icon={PublicIcon}
                            title="글로벌 인재 육성"
                        />
                        <MainOption
                            Icon={AccountBalanceIcon}
                            title="교육 비전"
                        />
                        <MainOption Icon={ComputerIcon} title="온라인 과정" />
                    </div>
                </div>
                <div className={classes["main__contents--3"]}></div>
            </div>
        </div>
    );
};

export default MainPage;
