import React from "react";

import { QnaData } from "../../components/Customer/QnaData";
import Accordion from "../../components/Accordion/Accordion";
import { RenderParagraph } from "../../components/Layout/Render";

// Css
import classes from "./Customer.module.scss";

const qna = (props) => {
    props.message("efdkorea의 자주 묻는 질문입니다.");
    return (
        <div className={classes["customer-container"]}>
            <ul className={classes["qna-lists"]}>
                {QnaData.map(({ title, content }) => (
                    <Accordion title={title}>
                        <RenderParagraph data={content} />
                    </Accordion>
                ))}
            </ul>
        </div>
    );
};

export default qna;
