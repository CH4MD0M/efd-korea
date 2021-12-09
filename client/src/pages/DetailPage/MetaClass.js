import React from "react";
import DetailHeader from "../../components/Detail/DetailHeader";
import InfoMetaClass from "../../components/Detail/InfoMetaClass";

// Css
import classes from "./DetailPage.module.scss";

const MetaClass = () => {
    return (
        <section className={classes["detail-section"]}>
            <DetailHeader header="header-1" />

            <main className={classes["detail-container"]}>
                <InfoMetaClass />
            </main>
        </section>
    );
};

export default MetaClass;
