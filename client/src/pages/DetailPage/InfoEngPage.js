import React from "react";
import {
    infoEle,
    infoMid,
    infoHigh,
} from "../../components/Detail/InfoEngData";
import DetailHeader from "../../components/Detail/DetailHeader";
import InfoEngItem from "../../components/Detail/InfoEngItem";

// Css
import classes from "./DetailPage.module.scss";

export const InfoEngEle = () => {
    const { title, content, subtitle, subcontent, videoPath } = infoEle;
    return (
        <section className={classes["detail-section"]}>
            <DetailHeader header="header-1" />
            <main className={classes["detail-container"]}>
                <InfoEngItem
                    title={title}
                    content={content}
                    subtitle={subtitle}
                    subcontent={subcontent}
                    videoPath={videoPath}
                />
            </main>
        </section>
    );
};
export const InfoEngMid = () => {
    const { title, content, subtitle, subcontent, videoPath } = infoMid;

    return (
        <section className={classes["detail-section"]}>
            <DetailHeader header="header-1" />
            <main className={classes["detail-container"]}>
                <InfoEngItem
                    title={title}
                    content={content}
                    subtitle={subtitle}
                    subcontent={subcontent}
                    videoPath={videoPath}
                />
            </main>
        </section>
    );
};
export const InfoEngHigh = () => {
    const { title, content, subtitle, subcontent, videoPath } = infoHigh;
    return (
        <section className={classes["detail-section"]}>
            <DetailHeader header="header-1" />
            <main className={classes["detail-container"]}>
                <InfoEngItem
                    title={title}
                    content={content}
                    subtitle={subtitle}
                    subcontent={subcontent}
                    videoPath={videoPath}
                />
            </main>
        </section>
    );
};
