import React from "react";

import DetailHeader from "../../components/DetailHeader";
// Css
import classes from "./Customer.module.scss";

const Customer = () => {
    return (
        <section className={classes["customer-section"]}>
            <DetailHeader header="header-4" />
            <h1 className={classes["customer-title"]}>자주 묻는 질문</h1>
            <main className={classes["customer-main"]}></main>
        </section>
    );
};

export default Customer;
