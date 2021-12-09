import React from "react";
import Accordion from "../../components/Accordion/Accordion";

import { BoardData } from "../../components/Board/BoardData";
import { RenderParagraph } from "../../components/Layout/Render";

// Css
import classes from "./Customer.module.scss";

const board = (props) => {
    props.message("efdkorea의 공지 소식을 알려드립니다.");
    return (
        <div className={classes["customer-container"]}>
            <ul className={classes["board-lists"]}>
                {BoardData.map(({ title, content }) => (
                    <Accordion title={title}>
                        <RenderParagraph data={content} />
                    </Accordion>
                ))}
            </ul>
        </div>
    );
};

export default board;
