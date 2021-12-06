import React, { useState } from "react";

// Css
import classes from "./Acoordion.module.scss";

const QnaItem = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <li className={classes["accordion-list"]}>
            <p className={classes.title} onClick={() => setIsActive(!isActive)}>
                {title}
            </p>
            {Array.isArray(content)
                ? isActive && (
                      <div className={classes.detail}>
                          {content.map((item) => {
                              return (
                                  <p className={classes.content}>
                                      <div>
                                          <span>{item.idx}</span>
                                          <p>{item.title}</p>
                                      </div>
                                  </p>
                              );
                          })}
                      </div>
                  )
                : isActive && (
                      <div className={classes.detail}>
                          <p className={classes.content}>
                              {content.split("\n").map((line) => {
                                  return <span>{line}</span>;
                              })}
                          </p>
                      </div>
                  )}
        </li>
    );
};

export default QnaItem;
