import React from "react";
import MainOption from "./MainOption";
// Css
import "./MainContents.css";
// Icon
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import PublicIcon from "@mui/icons-material/Public";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ComputerIcon from "@mui/icons-material/Computer";

const MainContents = () => {
    return (
        <div className="Main__contents">
            <div className="Main__contents--1">
                <h1>OM School 소개</h1>
                <div className="contents-items">
                    <MainOption
                        Icon={CastForEducationIcon}
                        title="새로운 교육 패러다임"
                    />
                    <MainOption Icon={PublicIcon} title="글로벌 인재 육성" />
                    <MainOption Icon={AccountBalanceIcon} title="교육 비전" />
                    <MainOption Icon={ComputerIcon} title="온라인 과정" />
                </div>
            </div>
            <div className="Main__contents--2"></div>
            <div className="Main__contents--3"></div>
        </div>
    );
};

export default MainContents;
