import React from "react";

import DetailHeader from "../../components/DetailHeader";

// Css
import classes from "./Board.module.scss";

const Board = () => {
    return (
        <section className={classes["board-section"]}>
            <DetailHeader header="header-5" />
            <h1 className={classes["board-title"]}>공지사항</h1>
            <main className={classes["board-main"]}></main>
        </section>
    );
};

export default Board;
