import React from "react";
import { infoEle, infoMid, infoHigh } from "../../components/Detail/DetailData";
import DetailHeader from "../../components/Detail/DetailHeader";
import DetailItem from "../../components/Detail/DetailItem";

// Css
import classes from "./DetailPage.module.scss";

export const InfoPageEle = () => {
    const { title, content, subtitle, subcontent } = infoEle;
    return (
        <section className={classes["detail-section"]}>
            <DetailHeader header="header-1" />
            <main className={classes["detail-container"]}>
                <DetailItem
                    title={title}
                    content={content}
                    subtitle={subtitle}
                    subcontent={subcontent}
                />
            </main>
        </section>
    );
};
export const InfoPageMid = () => {
    const { title, content, subtitle, subcontent } = infoMid;

    return (
        <section className={classes["detail-section"]}>
            <DetailHeader header="header-1" />
            <main className={classes["detail-container"]}>
                <DetailItem
                    title={title}
                    content={content}
                    subtitle={subtitle}
                    subcontent={subcontent}
                />
            </main>
        </section>
    );
};
export const InfoPageHigh = () => {
    const { title, content, subtitle, subcontent } = infoHigh;
    return (
        <section className={classes["detail-section"]}>
            <DetailHeader header="header-1" />
            <main className={classes["detail-container"]}>
                <DetailItem
                    title={title}
                    content={content}
                    subtitle={subtitle}
                    subcontent={subcontent}
                />
            </main>
        </section>
    );
};
