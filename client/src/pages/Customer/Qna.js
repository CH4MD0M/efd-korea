import React from "react";

import { QnaData } from "../../components/Customer/QnaData";
import QnaItem from "../../components/Customer/QnaItem";

// Css
import classes from "./Customer.module.scss";

const qna = (props) => {
    props.message("efdkorea의 자주 묻는 질문입니다.");

    return (
        <div className={classes["customer-container"]}>
            <ul className={classes["qna-lists"]}>
                {QnaData.map(({ title, content }) => (
                    <QnaItem title={title} content={content} />
                ))}
            </ul>
        </div>
    );
};

export default qna;
