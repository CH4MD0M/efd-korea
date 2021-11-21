import React from "react";

import MainOption from "./MainOption";
// Css
import classes from "./Intro.module.scss";
// Icon
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import PublicIcon from "@mui/icons-material/Public";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ComputerIcon from "@mui/icons-material/Computer";

const Intro = () => {
    return (
        <>
            <div className={classes["intro-container"]}>
                <h1 className={["intro-title"]}>OM School 소개</h1>
                <div className={classes["intro-items"]}>
                    <MainOption
                        Icon={CastForEducationIcon}
                        title="새로운 교육 패러다임"
                    />
                    <MainOption Icon={PublicIcon} title="글로벌 인재 육성" />
                    <MainOption Icon={AccountBalanceIcon} title="교육 비전" />
                    <MainOption Icon={ComputerIcon} title="온라인 과정" />
                </div>
            </div>
        </>
    );
};

export default Intro;
