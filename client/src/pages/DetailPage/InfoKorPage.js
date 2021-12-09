import React from "react";

import { introKor } from "../../components/Detail/InfoKorData";
import DetailHeader from "../../components/Detail/DetailHeader";
import InfoKorItem from "../../components/Detail/InfoKorItem";

// Css
import classes from "./DetailPage.module.scss";

const InfoKorPage = () => {
    const { title, content, subtitle, subcontent } = introKor;
    return (
        <section className={classes["detail-section"]}>
            <DetailHeader header="header-1" />
            <main className={classes["detail-container"]}>
                <InfoKorItem
                    title={title}
                    content={content}
                    subtitle={subtitle}
                    subcontent={subcontent}
                />
            </main>
        </section>
    );
};
export default InfoKorPage;
