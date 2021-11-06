import React from "react";

import ContentsData from "./ContentsData";
// Css
import classes from "./Contents.module.css";

const Contents = () => {
    console.log(ContentsData);
    // const detail = ContentsData.find((detail) => detail.id === params.detail);
    return <div className={classes.contents}></div>;
};

export default Contents;
