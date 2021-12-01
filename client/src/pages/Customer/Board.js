import React from "react";

import { BoardData } from "../../components/Board/BoardData";
import BoardItem from "../../components/Board/BoardItem";

// Css
import classes from "./Customer.module.scss";
const board = (props) => {
    props.message("efdkorea의 업데이트 소식을 전해드립니다.");
    return (
        <div className={classes["customer-container"]}>
            <ul className={classes["board-lists"]}>
                {BoardData.map(({ title, content }) => (
                    <BoardItem title={title} content={content} />
                ))}
            </ul>
        </div>
    );
};

export default board;
