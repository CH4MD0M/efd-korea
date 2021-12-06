import React, { useEffect, useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import Qna from "./Qna";
import Board from "./Board";

// Css
import classes from "./Customer.module.scss";

const Customer = () => {
    const [topBoxMsg, setTopBoxMsg] = useState(null);

    const topboxMsgHandler = (msg) => {
        setTopBoxMsg(msg);
    };

    return (
        <section className={classes["customer-section"]}>
            <div className={classes["customer-title"]}>
                <h1>{topBoxMsg}</h1>
            </div>
            <div className={classes["customer-links"]}>
                <NavLink
                    to="/customer/qna"
                    className={classes["customer-link"]}
                    activeClassName={classes.active}
                >
                    자주묻는질문
                </NavLink>
                <NavLink
                    to="/customer/board"
                    className={classes["customer-link"]}
                    activeClassName={classes.active}
                >
                    공지사항
                </NavLink>
            </div>

            <div className={["customer-tabs"]}>
                <Switch>
                    <Route path={"/customer/qna"}>
                        <Qna message={topboxMsgHandler} />
                    </Route>
                    <Route path={"/customer/board"}>
                        <Board message={topboxMsgHandler} />
                    </Route>
                </Switch>
            </div>
        </section>
    );
};

export default Customer;
