import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

// Css
import classes from "./DetailItem.module.scss";

const InfoEngItem = ({ title, content, subtitle, subcontent, videoPath }) => {
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
                    {typeof subcontent[0] === "object"
                        ? subcontent.map((context) => {
                              return (
                                  <div className={classes.content}>
                                      <h3 className={classes["content-title"]}>
                                          {context.title}
                                      </h3>
                                      <div
                                          className={classes["content-context"]}
                                      >
                                          {Array.isArray(context.content)
                                              ? context.content.map((line) => {
                                                    return (
                                                        <span>- {line}</span>
                                                    );
                                                })
                                              : context.content
                                                    .split("\n")
                                                    .map((line) => {
                                                        return (
                                                            <span>{line}</span>
                                                        );
                                                    })}
                                      </div>
                                  </div>
                              );
                          })
                        : subcontent.map((ele) => {
                              return (
                                  <span className={classes.list}>{ele}</span>
                              );
                          })}
                </div>
            </div>
            <div className={classes["detail__main1"]}>
                <h1 className={classes["title"]}>?????? ????????????</h1>
                <VideoPlayer videoPath={videoPath} />
            </div>
        </>
    );
};

export default InfoEngItem;
