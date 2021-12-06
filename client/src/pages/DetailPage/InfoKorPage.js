import React from "react";

import { introKor, sampleKor } from "../../components/Detail/InfoKorData";
import DetailHeader from "../../components/Detail/DetailHeader";
import DetailItem from "../../components/Detail/InfoItem";
import Accordion from "../../components/Accordion/Accordion";

// Css
import classes from "./DetailPage.module.scss";

export const InfoKorIntro = () => {
    const { title, content, subtitle, subcontent } = introKor;
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

export const InfoKorVideo = () => {
    return (
        <section className={classes["detail-section"]}>
            <DetailHeader header="header-1" />
            <main className={classes["sample-container"]}>
                {sampleKor.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </main>
        </section>
    );
};
