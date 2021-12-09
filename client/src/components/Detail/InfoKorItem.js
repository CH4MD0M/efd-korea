import React from "react";
import Accordion from "../Accordion/Accordion.js";

// Css
import classes from "./DetailItem.module.scss";

function InfoKorItem({ title, content, subtitle, subcontent }) {
    return (
        <>
            <div className={classes["detail__main1"]}>
                <h1 className={classes["title"]}>{title}</h1>
                <div className={classes["contents-container"]}>
                    {content.split("\n").map((line) => {
                        return <span>{line}</span>;
                    })}
                </div>
            </div>
            <div className={classes["detail__main2"]}>
                <h1 className={classes["subtitle"]}>{subtitle}</h1>
                <div className={classes["contents-container"]}>
                    {subcontent.map((context) => {
                        return (
                            <div className={classes.content}>
                                <h3 className={classes["content-title"]}>
                                    {context.title}
                                </h3>
                                <div className={classes["content-context"]}>
                                    {context.content.map((line) => {
                                        return <span>- {line}</span>;
                                    })}
                                </div>
                                <Accordion
                                    title="강의 목록"
                                    content={context.imgPath}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default InfoKorItem;
